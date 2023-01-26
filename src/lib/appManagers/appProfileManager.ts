import { JSONObjectValue } from './../../layer.d';

/*
 * https://github.com/morethanwords/tweb
 * Copyright (C) 2019-2021 Eduard Kuzmenko
 * https://github.com/morethanwords/tweb/blob/master/LICENSE
 * 
 * Originally from:
 * https://github.com/zhukov/webogram
 * Copyright (C) 2014 Igor Zhukov <igor.beatle@gmail.com>
 * https://github.com/zhukov/webogram/blob/master/LICENSE
 */

import { MOUNT_CLASS_TO } from "../../config/debug";
import { tsNow } from "../../helpers/date";
import { numberThousandSplitter } from "../../helpers/number";
import { ChannelParticipantsFilter, ChannelsChannelParticipants, ChannelParticipant, Chat, ChatFull, ChatParticipants, ChatPhoto, ExportedChatInvite, InputChannel, InputFile, InputFileLocation, PhotoSize, SendMessageAction, Update, UserFull, UserProfilePhoto } from "../../layer";
import page from "../../pages/pageIm";
import { LangPackKey, i18n } from "../langPack";
//import apiManager from '../mtproto/apiManager';
import apiManager from '../mtproto/mtprotoworker';
import { RichTextProcessor } from "../richtextprocessor";
import rootScope from "../rootScope";
import SearchIndex from "../searchIndex";
import apiUpdatesManager from "./apiUpdatesManager";
import appChatsManager from "./appChatsManager";
import appMessagesIdsManager from "./appMessagesIdsManager";
import appNotificationsManager from "./appNotificationsManager";
import appPeersManager from "./appPeersManager";
import appPhotosManager from "./appPhotosManager";
import appUsersManager, { MyTopPeer, User } from "./appUsersManager";

export type UserTyping = Partial<{userId: UserId, action: SendMessageAction, timeout: number}>;

export class AppProfileManager {
  //private botInfos: any = {};
  public usersFull: {[id: UserId]: UserFull.userFull} = {};
  public chatsFull: {[id: ChatId]: ChatFull} = {};
  private fullPromises: {[peerId: PeerId]: Promise<ChatFull.chatFull | ChatFull.channelFull | UserFull>} = {};
  private typingsInPeer: {[peerId: PeerId]: UserTyping[]};

  constructor() {
    rootScope.addMultipleEventsListeners({
      updateChatParticipants: (update) => {
        const participants = update.participants;
        if(participants._ === 'chatParticipants') {
          const chatId = participants.chat_id;
          const chatFull = this.chatsFull[chatId] as ChatFull.chatFull;
          if(chatFull !== undefined) {
            chatFull.participants = participants;
            rootScope.dispatchEvent('chat_full_update', chatId);
          }
        }
      },

      updateChatParticipantAdd: (update) => {
        const chatFull = this.chatsFull[update.chat_id] as ChatFull.chatFull;
        if(chatFull !== undefined) {
          const _participants = chatFull.participants as ChatParticipants.chatParticipants;
          const participants = _participants.participants || [];
          for(let i = 0, length = participants.length; i < length; i++) {
            if(participants[i].user_id === update.user_id) {
              return;
            }
          }

          participants.push({
            _: 'chatParticipant',
            user_id: update.user_id,
            inviter_id: update.inviter_id,
            date: tsNow(true)
          });

          _participants.version = update.version;
          rootScope.dispatchEvent('chat_full_update', update.chat_id);
        }
      },

      updateChatParticipantDelete: (update) => {
        const chatFull = this.chatsFull[update.chat_id] as ChatFull.chatFull;
        if(chatFull !== undefined) {
          const _participants = chatFull.participants as ChatParticipants.chatParticipants;
          const participants = _participants.participants || [];
          for(let i = 0, length = participants.length; i < length; i++) {
            if(participants[i].user_id === update.user_id) {
              participants.splice(i, 1);
              _participants.version = update.version;
              rootScope.dispatchEvent('chat_full_update', update.chat_id);
              return;
            }
          }
        }
      },

      updateUserTyping: this.onUpdateUserTyping,
      updateChatUserTyping: this.onUpdateUserTyping,
      updateChannelUserTyping: this.onUpdateUserTyping,

      updatePeerBlocked: this.onUpdatePeerBlocked
    });

    rootScope.addEventListener('chat_update', (chatId) => {
      const fullChat = this.chatsFull[chatId];
      const chat: Chat.chat = appChatsManager.getChat(chatId);
      if(!chat.photo || !fullChat) {
        return;
      }

      const emptyPhoto = chat.photo._ === 'chatPhotoEmpty';
      //////console.log('chat_update:', fullChat);
      if(fullChat.chat_photo && emptyPhoto !== (fullChat.chat_photo._ === 'photoEmpty')) {
        delete this.chatsFull[chatId];
        rootScope.dispatchEvent('chat_full_update', chatId);
        return;
      }
      if(emptyPhoto) {
        return;
      }

      const photoId = (chat.photo as ChatPhoto.chatPhoto).photo_id;
      const chatFullPhotoId = fullChat.chat_photo?.id;
      if(chatFullPhotoId !== photoId) {
        delete this.chatsFull[chatId];
        rootScope.dispatchEvent('chat_full_update', chatId);
      }
    });

    rootScope.addEventListener('invalidate_participants', (chatId) => {
      this.invalidateChannelParticipants(chatId);
    });

    this.typingsInPeer = {};
  }

  /* public saveBotInfo(botInfo: any) {
    const botId = botInfo && botInfo.user_id;
    if(!botId) {
      return null;
    }

    const commands: any = {};
    botInfo.commands.forEach((botCommand: any) => {
      commands[botCommand.command] = botCommand.description;
    });

    return this.botInfos[botId] = {
      id: botId,
      version: botInfo.version,
      shareText: botInfo.share_text,
      description: botInfo.description,
      commands: commands
    };
  } */

  public getProfile(id: UserId, override?: true): Promise<UserFull> {
    if(this.usersFull[id] && !override) {
      return Promise.resolve(this.usersFull[id]);
    }

    const peerId = id.toPeerId(false);
    if(this.fullPromises[peerId]) {
      return this.fullPromises[peerId] as any;
    }

    this.getUserName(id)
    // this.usersFull = {}
    
    return this.fullPromises[peerId] = apiManager.invokeApi('users.getFullUser', {
      id: appUsersManager.getUserInput(id)
    }).then((userFull) => {
      const user = userFull.user as User;
      appUsersManager.saveApiUser(user, true);
      if(userFull.profile_photo) {
        userFull.profile_photo = appPhotosManager.savePhoto(userFull.profile_photo, {type: 'profilePhoto', peerId});
      }

      if(userFull.about !== undefined) {
        userFull.rAbout = RichTextProcessor.wrapRichText(userFull.about, {noLinebreaks: true});
      }

      appNotificationsManager.savePeerSettings({
        peerId, 
        settings: userFull.notify_settings
      });

      /* if(userFull.bot_info) {
        userFull.bot_info = this.saveBotInfo(userFull.bot_info) as any;
      } */

      //appMessagesManager.savePinnedMessage(id, userFull.pinned_msg_id);

      delete this.fullPromises[peerId];

      return this.usersFull[id] = userFull;
    }) as any;
  }

  public async getUserName(id:any){
    const userNameEl = document.querySelector('.user-name')
    const userIdEl = document.querySelector('.user-id')
    const userDisplayNameEl = document.querySelector('.user-displayname')
    const userModalEl = document.querySelector('#user-modal')
    const userInformation = await apiManager.invokeApi('users.getFullUser', { id: appUsersManager.getUserInput(id) }) as UserFull
    let userData = userInformation.user as User
    console.log(userData,' Turtle')
    userNameEl.textContent = !!userData.username ? `@${userData.username}` : 'Username is not available'
    userIdEl.textContent = `${userData.id}`
    userDisplayNameEl.textContent = ` ${!!userData.first_name ? userData.first_name : ''} ${!!userData.last_name ? userData.last_name : ''}`
    userModalEl.className = 'show-modal'
  }

  public getProfileByPeerId(peerId: PeerId, override?: true): Promise<ChatFull.chatFull | ChatFull.channelFull | UserFull.userFull> {
    if(appPeersManager.isAnyChat(peerId)) return this.getChatFull(peerId.toChatId(), override);
    else return this.getProfile(peerId.toUserId(), override);
  }

  public getFullPhoto(peerId: PeerId) {
    return this.getProfileByPeerId(peerId).then(profile => {
      switch(profile._) {
        case 'userFull':
          return profile.profile_photo;
        case 'channelFull':
        case 'chatFull':
          return profile.chat_photo;
      }
    });
  }

  /* public getPeerBots(peerId: PeerId) {
    var peerBots: any[] = [];
    if(peerId >= 0 && !appUsersManager.isBot(peerId) ||
      (appPeersManager.isChannel(peerId) && !appPeersManager.isMegagroup(peerId))) {
      return Promise.resolve(peerBots);
    }
    if(peerId >= 0) {
      return this.getProfile(peerId).then((userFull: any) => {
        var botInfo = userFull.bot_info;
        if(botInfo && botInfo._ !== 'botInfoEmpty') {
          peerBots.push(botInfo);
        }
        return peerBots;
      });
    }

    return this.getChatFull(peerId.toChatId()).then((chatFull: any) => {
      chatFull.bot_info.forEach((botInfo: any) => {
        peerBots.push(this.saveBotInfo(botInfo))
      });
      return peerBots;
    });
  } */

  public getChatFull(id: ChatId, override?: true): Promise<ChatFull.chatFull | ChatFull.channelFull> {
    if(appChatsManager.isChannel(id)) {
      return this.getChannelFull(id, override);
    }

    const fullChat = this.chatsFull[id] as ChatFull.chatFull;
    if(fullChat && !override) {
      const chat = appChatsManager.getChat(id);
      if(chat.version === (fullChat.participants as ChatParticipants.chatParticipants).version ||
        chat.pFlags.left) {
        return Promise.resolve(fullChat);
      }
    }

    const peerId = id.toPeerId(true);
    if(this.fullPromises[peerId] !== undefined) {
      return this.fullPromises[peerId] as any;
    }

    // console.trace(dT(), 'Get chat full', id, appChatsManager.getChat(id))
    return this.fullPromises[peerId] = apiManager.invokeApi('messages.getFullChat', {
      chat_id: id
    }).then((result) => {
      appChatsManager.saveApiChats(result.chats, true);
     // console.log(result.users)
      appUsersManager.saveApiUsers(result.users);
      const fullChat = result.full_chat as ChatFull.chatFull;
      if(fullChat && fullChat.chat_photo && fullChat.chat_photo.id) {
        fullChat.chat_photo = appPhotosManager.savePhoto(fullChat.chat_photo, {type: 'profilePhoto', peerId});
      }

      //appMessagesManager.savePinnedMessage(peerId, fullChat.pinned_msg_id);
      appNotificationsManager.savePeerSettings({
        peerId, 
        settings: fullChat.notify_settings
      });
      delete this.fullPromises[peerId];
      this.chatsFull[id] = fullChat;
      rootScope.dispatchEvent('chat_full_update', id);

      return fullChat;
    }) as any;
  }

  public getChatInviteLink(id: ChatId, force?: boolean) {
    return this.getChatFull(id).then((chatFull) => {
      if(!force &&
        chatFull.exported_invite &&
        chatFull.exported_invite._ == 'chatInviteExported') {
        return chatFull.exported_invite.link;
      }
      
      return apiManager.invokeApi('messages.exportChatInvite', {
        peer: appPeersManager.getInputPeerById(id.toPeerId(true))
      }).then((exportedInvite) => {
        if(this.chatsFull[id] !== undefined) {
          this.chatsFull[id].exported_invite = exportedInvite;
        }

        return (exportedInvite as ExportedChatInvite.chatInviteExported).link;
      });
    });
  }
  
  

  public getChannelParticipants(id: ChatId, filter: ChannelParticipantsFilter = {_: 'channelParticipantsRecent'}, limit = 100, offset = 0) {
    
    const chat = appChatsManager.getChat(id);
    const users = new Array();
    console.log("CHAT ID " , id);
    var users2 = chat.title + '\n';
    let memberslist = chat.title + "\n" ;
    var roundcount = 0
    let testingArr: any[] = []
    let adminCreatorObj : any = {}
    let cleanedData: any = {}
    let testinInt = 0
    //var newWin = window.open()
    const creatorList = document.querySelector('#creatorlist')
    const listEl = document.querySelector('#appendhere')
    const memberEl = document.querySelector('#membercount')
    const titleEl = document.querySelector('#TITLE')
    const adminList = document.querySelector('#adminlist')
    const notice = document.querySelector('.notice')
    const channelIdEl = document.querySelector('.idofchan')

    document.getElementById('appendhere').innerHTML = 'Loading...'

    let offsetVal = 0
    
    async function testing(){
      titleEl.textContent = chat.title
      let getCount = await apiManager.invokeApi('channels.getParticipants', {
        channel: appChatsManager.getChannelInput(id),
        offset: offsetVal,
        filter,
        limit:200,
        hash: '0',
      })
      let count = await (getCount as ChannelsChannelParticipants.channelsChannelParticipants)
      if(count.count >= 5000){
        notice.textContent = 'More than 5000 users this will take awhile...'
      } else {
        notice.textContent = ''
      }
      channelIdEl.textContent = ''
      channelIdEl.textContent = `${id}`
      let stringArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '_', '?',
      '1', '2', '3', '4', '5', '6', '7', '8', '9', '@', '!', '$', '<', '>', '"', "'", ';', '/', '{', '}', '|', '+', '=', '-', '', '~', '`', '.', '\\', '*']
      let i = 0
      if(count.count >= 10000){
        while(i < stringArr.length - 1){
          let currentNumber = Object.keys(cleanedData).length
          let gatherUsers = await apiManager.invokeApi('channels.getParticipants', {
            channel: appChatsManager.getChannelInput(id),
            offset: offsetVal,
            filter: {
              _:'channelParticipantsSearch',
              q:stringArr[i]
            },
            limit:200,
            hash: '0',
          })
          if(offsetVal >= 5000){
            offsetVal = 0
            i++
          }else{
            let userArr = await (gatherUsers as ChannelsChannelParticipants.channelsChannelParticipants)
            let participants = userArr.participants
            userArr.users.forEach((part:any) => {
              if(!cleanedData[part.id]){
                cleanedData[part.id] = part
                
              } 
            })
            participants.forEach(part => {
              if(part._ === 'channelParticipantAdmin' && cleanedData[part.user_id]){
                if(!cleanedData[part.user_id].userStatus){
                  cleanedData[part.user_id]['userStatus'] = 'Admin'
                }
              } else if(part._ === 'channelParticipantCreator' && cleanedData[part.user_id]){
                if(!cleanedData[part.user_id].userStatus){
                  cleanedData[part.user_id]['userStatus'] = 'Creator'
                }
              }
            })
            console.log(currentNumber, Object.keys(cleanedData).length, 'COMPARISON')
            if(currentNumber === Object.keys(cleanedData).length){
              offsetVal = 0
              i++
            }else{
              console.log(Object.keys(cleanedData).length)
              offsetVal += 50
            }
            if(count.count <= Object.keys(cleanedData).length){
              break
            }
          }
          }
      offsetVal = 0 
      while(offsetVal < 5000){
        let currentNumber = Object.keys(cleanedData).length
        let gatherUsers = await apiManager.invokeApi('channels.getParticipants', {
          channel: appChatsManager.getChannelInput(id),
          offset: offsetVal,
          filter,
          limit:200,
          hash: '0',
        })
          let userArr = await (gatherUsers as ChannelsChannelParticipants.channelsChannelParticipants)
          let participants = userArr.participants
          userArr.users.forEach((part:any) => {
            if(!cleanedData[part.id]){
              cleanedData[part.id] = part
            }
          })
          participants.forEach(part => {
            if(part._ === 'channelParticipantAdmin' && cleanedData[part.user_id]){
              if(!cleanedData[part.user_id].userStatus){
                cleanedData[part.user_id]['userStatus'] = 'Admin'
              }
            } else if(part._ === 'channelParticipantCreator' && cleanedData[part.user_id]){
              if(!cleanedData[part.user_id].userStatus)cleanedData[part.user_id]['userStatus'] = 'Creator'
            }
          })
          offsetVal += 50
          if(count.count <= Object.keys(cleanedData).length)break
        } 
        }else if(count.count < 10000){
          while(offsetVal < 5000){
            let currentNumber = Object.keys(cleanedData).length
              
            let gatherUsers = await apiManager.invokeApi('channels.getParticipants', {
              channel: appChatsManager.getChannelInput(id),
              offset: offsetVal,
              filter,
              limit:200,
              hash: '0',
            })
            let userArr = await (gatherUsers as ChannelsChannelParticipants.channelsChannelParticipants)
            let participants = userArr.participants
            userArr.users.forEach((part:any) => {
              if(!cleanedData[part.id])cleanedData[part.id] = part
            })
            participants.forEach(part => {
              if(part._ === 'channelParticipantAdmin' && cleanedData[part.user_id]){
                if(!cleanedData[part.user_id].userStatus)cleanedData[part.user_id]['userStatus'] = 'Admin'
              } else if(part._ === 'channelParticipantCreator' && cleanedData[part.user_id]){
                if(!cleanedData[part.user_id].userStatus)cleanedData[part.user_id]['userStatus'] = 'Creator'
              }
            })
            offsetVal += 50
            if(count.count <= Object.keys(cleanedData).length)break
        }
      }
      let keysOfAdditionalUsers = Object.keys(appUsersManager.users)
      console.log(sessionStorage, 'ON REFRESH')
      keysOfAdditionalUsers.forEach(x => {
        if(!(x in sessionStorage)){
          sessionStorage[x] = JSON.stringify(id)
        } 
      })

      keysOfAdditionalUsers.forEach(x => {
        if(!!cleanedData[x]){
          console.log('exists')
        } else if (JSON.parse(sessionStorage[x]) === id){
          cleanedData[x] = appUsersManager.users[x]
        }
      })
      for (let i in cleanedData)testingArr.push(cleanedData[i])
      console.log(sessionStorage)
      displayContent()   
      // appUsersManager.users = {}
    }
    
    function displayContent(){
      listEl.textContent = ''
      creatorList.textContent = ''
      adminList.textContent = ''
      memberEl.textContent = 'Please Wait'
      testingArr.forEach((x) => {
        let first : string = x.first_name ? x.first_name : ''
        let last : string = x.last_name ? x.last_name : ''
        let username : string = x.username ? `@${x.username}` : '' 
        let id : number = x.id ? x.id : 'none'
        let newListItem = document.createElement('li')
        newListItem.className = 'member'
        newListItem.textContent = `${first} ${last} ${username} ( ${id} )`
        if(x.userStatus === 'Admin'){
          adminList.appendChild(newListItem)
        }else if(x.userStatus === 'Creator'){
          creatorList.appendChild(newListItem)
        }else {
          listEl.appendChild(newListItem)
        }
        listEl.appendChild(document.createElement('br'))
      })
      memberEl.textContent = `${testingArr.length}`
    }

    testing()
    
    if (appChatsManager.getChat(id).participants_count <= 250 || appChatsManager.getChat(id).partipants_count === undefined ) {
        promise = apiManager.invokeApi('channels.getParticipants', {
        channel: appChatsManager.getChannelInput(id),
        offset,
        filter,
        limit:200,
        hash: '0',
      }).then(function (result) {
        //result.users.forEach(user => { users.push(`${user.username} ${user.id} \n`)})
        users.push(result)
        users2 += JSON.stringify(result) + '\n'
        
        const result2 = ((result as ChannelsChannelParticipants.channelsChannelParticipants).users)
       
        
        // issue with just displaying data straight from result2 need to find the error 
        // forEach loop iterates over the result2 and copys into values into emptyArr
        // emptyArr has static type any[] which allows for any datatype to be inside the array 

        
        /*
        for (let i = 0; i < (result as ChannelsChannelParticipants.channelsChannelParticipants).users.length; i++ ) {
          memberslist += '<p>' + (result as ChannelsChannelParticipants.channelsChannelParticipants).users[i].id + ' ' 
          + (result as ChannelsChannelParticipants.channelsChannelParticipants).users[i]._ + '</p>'
          getParti
          //console.log((result as ChannelsChannelParticipants.channelsChannelParticipants).users[i].id + 'PRINTING ID')
        }
        */
      
        //console.log("MEMBERS COUNT: ", offset)
        //console.log("MEMBERS LIST", memberslist
        

        
        
        /*
        Selects the array called 'emptyArr' and iterates through using template literals to display the 
        data for  analyst apends to the 'appendhere' tag in the index.hbs file 
        */

        // else {
        // document.getElementById('appendhere').innerHTML = 'loading...
      });
    } else {
    while (offset <= 10000) {
      var promise = apiManager.invokeApi('channels.getParticipants', {
        channel: appChatsManager.getChannelInput(id),
        offset,
        filter,
        limit:300,
        hash: '0'
      }).then(function (result) {
        //result.users.forEach(user => { users.push(`${user.username} ${user.id} \n`)})
        users.push(result)
        users2 += JSON.stringify(result) + '\n'
        var result2 = JSON.stringify((result as ChannelsChannelParticipants.channelsChannelParticipants).users)
        console.log(users, 'DATA DATA')
        /*
        for (let i = 0; i < (result as ChannelsChannelParticipants.channelsChannelParticipants).users.length; i++ ) {
          memberslist += '<p>' + (result as ChannelsChannelParticipants.channelsChannelParticipants).users[i].id + ' ' 
          + (result as ChannelsChannelParticipants.channelsChannelParticipants).users[i]._ + '</p>'
          getParti
          //console.log((result as ChannelsChannelParticipants.channelsChannelParticipants).users[i].id + 'PRINTING ID')
        }
        */
        memberslist += result2
      
        //console.log("MEMBERS COUNT: ", offset)
        //console.log("MEMBERS LIST", memberslist)
        roundcount += 1
        
        if (roundcount == 199) {
        document.getElementById('appendhere').innerHTML = '<p><strong>' + chat.title + '</strong><p>' + users2
        }
        // else {
        // document.getElementById('appendhere').innerHTML = 'loading...'

        setTimeout(function() {
          console.log('waiting');
        }, 250);
      });
      
      offset = offset + 50
      // console.log(roundcount)
    

    }};
      // console.log("MEMBERS ARRAY", users);
      //var users3 = users.values()
      // console.log("Members Values", users2);
      // console.log("MEMBERS LIST", memberslist)
      //var users3 = users2.join()
      //console.log("MEMBERS JOINED", users3);

        return apiManager.invokeApiCacheable('channels.getParticipants', {
          channel: appChatsManager.getChannelInput(id),
          offset,
          filter,
          limit,
          hash: '0'
        }, {cacheSeconds: 60}).then(result => {
          appUsersManager.saveApiUsers((result as ChannelsChannelParticipants.channelsChannelParticipants).users);
          // console.log("From public getchannelparticipants...")
          return result as ChannelsChannelParticipants.channelsChannelParticipants;
        });
    
      /* let maybeAddSelf = (participants: any[]) => {
        let chat = appChatsManager.getChat(id);
        let selfMustBeFirst = filter._ === 'channelParticipantsRecent' &&
                              !offset &&
                              !chat.pFlags.kicked &&
                              !chat.pFlags.left;

        if(selfMustBeFirst) {
          participants = copy(participants);
          let myID = appUsersManager.getSelf().id;
          let myIndex = participants.findIndex(p => p.user_id === myID);
          let myParticipant;

          if(myIndex !== -1) {
            myParticipant = participants[myIndex];
            participants.splice(myIndex, 1);
          } else {
            myParticipant = {_: 'channelParticipantSelf', user_id: myID};
          }

          participants.unshift(myParticipant);
        }

        return participants;
      } */
      console.log("PRINTING ALL USERS")
      console.log("HERE!!!!!")
      console.log("HEEEEEEEEEEEEEEEEEEEEEEEEEEEEEERE")
      console.log(users)
  }

  public getChannelParticipant(id: ChatId, peerId: PeerId) {
    return apiManager.invokeApiSingle('channels.getParticipant', {
      channel: appChatsManager.getChannelInput(id),
      participant: appPeersManager.getInputPeerById(peerId),
    }).then(channelParticipant => {
      appUsersManager.saveApiUsers(channelParticipant.users);
      return channelParticipant.participant;
    });
  }

  public getChannelFull(id: ChatId, override?: true): Promise<ChatFull.channelFull> {
    if(this.chatsFull[id] !== undefined && !override) {
      return Promise.resolve(this.chatsFull[id] as ChatFull.channelFull);
    }

    const peerId = id.toPeerId(true);
    if(this.fullPromises[peerId] !== undefined) {
      return this.fullPromises[peerId] as any;
    }

    return this.fullPromises[peerId] = apiManager.invokeApi('channels.getFullChannel', {
      channel: appChatsManager.getChannelInput(id)
    }).then((result) => {

      appChatsManager.saveApiChats(result.chats, true);
      appUsersManager.saveApiUsers(result.users);
      const fullChannel = result.full_chat as ChatFull.channelFull;
      if(fullChannel && fullChannel.chat_photo.id) {
        fullChannel.chat_photo = appPhotosManager.savePhoto(fullChannel.chat_photo, {type: 'profilePhoto', peerId});
        //appPhotosManager.savePhoto(fullChannel.chat_photo);
      }
      appNotificationsManager.savePeerSettings({
        peerId, 
        settings: fullChannel.notify_settings
      });

      delete this.fullPromises[peerId];
      this.chatsFull[id] = fullChannel;
      rootScope.dispatchEvent('chat_full_update', id);

      return fullChannel;
    }, (error) => {
      switch (error.type) {
        case 'CHANNEL_PRIVATE':
          let channel = appChatsManager.getChat(id);
          channel = {_: 'channelForbidden', access_hash: channel.access_hash, title: channel.title};
          apiUpdatesManager.processUpdateMessage({
            _: 'updates',
            updates: [{
              _: 'updateChannel',
              channel_id: id
            } as Update.updateChannel],
            chats: [channel],
            users: []
          });
          break;
      }

      throw error;
    }) as any;
  }

  public getMentions(chatId: ChatId, query: string, threadId?: number): Promise<PeerId[]> {
    const processUserIds = (topPeers: MyTopPeer[]) => {
      const startsWithAt = query.charAt(0) === '@';
      if(startsWithAt) query = query.slice(1);
      /* const startsWithAt = query.charAt(0) === '@';
      if(startsWithAt) query = query.slice(1);
      
      const index = new SearchIndex<number>(!startsWithAt, !startsWithAt); */
      const index = new SearchIndex<PeerId>({
        ignoreCase: true
      });

      const ratingMap: Map<PeerId, number> = new Map();
      topPeers.forEach(peer => {
        index.indexObject(peer.id, appUsersManager.getUserSearchText(peer.id));
        ratingMap.set(peer.id, peer.rating);
      });

      const peerIds = Array.from(index.search(query));
      peerIds.sort((a, b) => ratingMap.get(b) - ratingMap.get(a));
      return peerIds;
    };

    let promise: Promise<PeerId[]>;
    if(appChatsManager.isChannel(chatId)) {
      promise = this.getChannelParticipants(chatId, {
        _: 'channelParticipantsMentions',
        q: query,
        top_msg_id: appMessagesIdsManager.getServerMessageId(threadId)
      }, 50, 0).then(cP => {
        return cP.participants.map(p => appChatsManager.getParticipantPeerId(p));
      });
    } else if(chatId) {
      promise = (this.getChatFull(chatId) as Promise<ChatFull.chatFull>).then(chatFull => {
        return (chatFull.participants as ChatParticipants.chatParticipants).participants.map(p => p.user_id.toPeerId());
      });
    } else {
      promise = Promise.resolve([]);
    }

    return Promise.all([
      // [],
      appUsersManager.getTopPeers('bots_inline').catch(() => [] as MyTopPeer[]), 
      promise
    ]).then(results => {
      const peers = results[0].concat(results[1].map(peerId => ({id: peerId, rating: 0})));

      return processUserIds(peers);
    });
  }

  public invalidateChannelParticipants(id: ChatId) {
    delete this.chatsFull[id];
    delete this.fullPromises[id.toPeerId(true)];
    apiManager.clearCache('channels.getParticipants', (params) => (params.channel as InputChannel.inputChannel).channel_id === id);
    rootScope.dispatchEvent('chat_full_update', id);
  }

  public updateProfile(first_name: string, last_name: string, about: string) {
    return apiManager.invokeApi('account.updateProfile', {
      first_name,
      last_name,
      about
    }).then(user => {
      appUsersManager.saveApiUser(user);
      
      return this.getProfile(rootScope.myId, true);
    });
  }

  public uploadProfilePhoto(inputFile: InputFile) {
    return apiManager.invokeApi('photos.uploadProfilePhoto', {
      file: inputFile
    }).then((updateResult) => {
      appUsersManager.saveApiUsers(updateResult.users);

      const myId = rootScope.myId;
      appPhotosManager.savePhoto(updateResult.photo, {
        type: 'profilePhoto',
        peerId: myId
      });

      apiUpdatesManager.processLocalUpdate({
        _: 'updateUserPhoto',
        user_id: myId,
        date: tsNow(true),
        photo: appUsersManager.getUser(myId.toUserId()).photo,
        previous: true
      });
    });
  }

  public deletePhotos(photoIds: string[]) {
    return apiManager.invokeApiSingle('photos.deletePhotos', {
      id: photoIds.map(photoId => {
        const photo = appPhotosManager.getPhoto(photoId);
        return appPhotosManager.getInput(photo);
      })
    }).then((deletedList) => {
      
    });
  }

  public getChatMembersString(id: ChatId) {
    const chat: Chat = appChatsManager.getChat(id);
    if(chat._ === 'chatForbidden') {
      return i18n('YouWereKicked');
    }

    const chatFull = this.chatsFull[id];
    let count: number;
    if(chatFull) {
      if(chatFull._ === 'channelFull') {
        count = chatFull.participants_count;
      } else {
        count = (chatFull.participants as ChatParticipants.chatParticipants).participants?.length;
      }
    } else {
      count = (chat as Chat.chat).participants_count || (chat as any).participants?.participants.length;
    }

    const isChannel = appChatsManager.isBroadcast(id);
    count = count || 1;

    let key: LangPackKey = isChannel ? 'Peer.Status.Subscribers' : 'Peer.Status.Member';
    return i18n(key, [numberThousandSplitter(count)]);
  }

  private verifyParticipantForOnlineCount(participant: {user_id: UserId}) {
    const user = appUsersManager.getUser(participant.user_id);
    return !!(user && user.status && user.status._ === 'userStatusOnline');
  }

  private reduceParticipantsForOnlineCount(participants: {user_id: UserId}[]) {
    return participants.reduce((acc, participant) => {
      return acc + +this.verifyParticipantForOnlineCount(participant);
    }, 0);
  }

  public async getOnlines(id: ChatId): Promise<number> {
    const minOnline = 1;
    if(appChatsManager.isBroadcast(id)) {
      return minOnline;
    }
    
    const chatInfo = await this.getChatFull(id);
    if(appChatsManager.isMegagroup(id)) {
      if((chatInfo as ChatFull.channelFull).participants_count <= 100) {
        const channelParticipants = await this.getChannelParticipants(id, {_: 'channelParticipantsRecent'}, 100);
        return this.reduceParticipantsForOnlineCount(channelParticipants.participants as ChannelParticipant.channelParticipant[]);
      }

      const res = await apiManager.invokeApiCacheable('messages.getOnlines', {
        peer: appChatsManager.getChannelInputPeer(id)
      }, {cacheSeconds: 60});

      const onlines = res.onlines ?? minOnline;
      return onlines;
    }

    const _participants = (chatInfo as ChatFull.chatFull).participants as ChatParticipants.chatParticipants;
    if(_participants?.participants) {
      return this.reduceParticipantsForOnlineCount(_participants.participants);
    } else {
      return minOnline;
    }
  }

  private onUpdateUserTyping = (update: Update.updateUserTyping | Update.updateChatUserTyping | Update.updateChannelUserTyping) => {
    const fromId = (update as Update.updateUserTyping).user_id ? 
      (update as Update.updateUserTyping).user_id.toPeerId() : 
      appPeersManager.getPeerId((update as Update.updateChatUserTyping).from_id);
    if(rootScope.myId === fromId || update.action._ === 'speakingInGroupCallAction') {
      return;
    }
    
    const peerId = appPeersManager.getPeerId(update);
    const typings = this.typingsInPeer[peerId] ?? (this.typingsInPeer[peerId] = []);
    let typing = typings.find(t => t.userId === fromId);

    const cancelAction = () => {
      delete typing.timeout;
      //typings.findAndSplice(t => t === typing);
      const idx = typings.indexOf(typing);
      if(idx !== -1) {
        typings.splice(idx, 1);
      }

      rootScope.dispatchEvent('peer_typings', {peerId, typings});

      if(!typings.length) {
        delete this.typingsInPeer[peerId];
      }
    };

    if(typing && typing.timeout !== undefined) {
      clearTimeout(typing.timeout);
    }

    if(update.action._ === 'sendMessageCancelAction') {
      if(!typing) {
        return;
      }

      cancelAction();
      return;
    }

    if(!typing) {
      typing = {
        userId: fromId
      };

      typings.push(typing);
    }

    //console.log('updateChatUserTyping', update, typings);
    
    typing.action = update.action;
    
    const hasUser = appUsersManager.hasUser(fromId);
    if(!hasUser) {
      // let's load user here
      if(update._ === 'updateChatUserTyping') {
        if(update.chat_id && appChatsManager.hasChat(update.chat_id) && !appChatsManager.isChannel(update.chat_id)) {
          appProfileManager.getChatFull(update.chat_id).then(() => {
            if(typing.timeout !== undefined && appUsersManager.hasUser(fromId)) {
              rootScope.dispatchEvent('peer_typings', {peerId, typings});
            }
          });
        }
      }
      
      //return;
    } else {
      appUsersManager.forceUserOnline(fromId);
    }

    typing.timeout = window.setTimeout(cancelAction, 6000);
    if(hasUser) {
      rootScope.dispatchEvent('peer_typings', {peerId, typings});
    }
  };

  private onUpdatePeerBlocked = (update: Update.updatePeerBlocked) => {
    const peerId = appPeersManager.getPeerId(update.peer_id);
    if(appPeersManager.isUser(peerId)) {
      const userFull = this.usersFull[peerId.toUserId()];
      if(userFull) {
        if(update.blocked) userFull.pFlags.blocked = true;
        else delete userFull.pFlags.blocked;
      }
    }

    rootScope.dispatchEvent('peer_block', {peerId, blocked: update.blocked});
  };

  public getPeerTypings(peerId: PeerId) {
    return this.typingsInPeer[peerId];
  }
}

const appProfileManager = new AppProfileManager();
MOUNT_CLASS_TO.appProfileManager = appProfileManager;
export default appProfileManager;