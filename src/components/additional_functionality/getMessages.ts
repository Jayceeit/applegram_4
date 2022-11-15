import { Chat, ChatFull, Dialog as MTDialog, DialogPeer, DocumentAttribute, InputMedia, InputMessage, InputPeerNotifySettings, InputSingleMedia, Message, MessageAction, MessageEntity, MessageFwdHeader, MessageMedia, MessageReplies, MessageReplyHeader, MessagesDialogs, MessagesFilter, MessagesMessages, MethodDeclMap, NotifyPeer, PeerNotifySettings, PhotoSize, SendMessageAction, Update, Photo, Updates, ReplyMarkup, InputPeer, InputPhoto, InputDocument, InputGeoPoint, WebPage, GeoPoint, ReportReason, MessagesGetDialogs, InputChannel, InputDialogPeer, ChannelsChannelParticipant, User } from "../../layer";
import appChatsManager from "../../lib/appManagers/appChatsManager";
import appMessagesIdsManager from "../../lib/appManagers/appMessagesIdsManager";
import appPeersManager from "../../lib/appManagers/appPeersManager";
import apiManager from "../../lib/mtproto/apiManager";



class AppGetMessage{
    historiesStorage: {};
    constructor(){

    }
    public getMessages(peerId: PeerId, maxId: number, limit = 0, offset = 0, offsetDate = 0, threadId = 0){



    
    

    

        // const buttonTestingEl = document.querySelector('#submitdate')
        // const testingdate = (document.querySelector('#grabdate') as HTMLInputElement)
        // buttonTestingEl.addEventListener('click', () => {
        
        //   console.log(peerId)
        //   return null
        //   // let dateObj = new Date(testingdate.value + 'GMT-0500')
        //   // let unixTime = dateObj.getTime() / 1000
        //   // tester123(unixTime)
        // })
        console.log(this.historiesStorage, 'testing')
        const val2 = (document.querySelector('#contentOfHTML') as HTMLTextAreaElement)
        const testingdate = (document.querySelector('#grabdate') as HTMLInputElement)
        const buttonTestingEl = document.querySelector('#submitdate')
        buttonTestingEl.addEventListener('click', async () => {
          this.historiesStorage = {}
          console.log(this.historiesStorage,' STORAGE')
          let dateObj = new Date(testingdate.value + 'GMT-0500')
          let unixTime = dateObj.getTime() / 1000
          tester123(unixTime)
          return
        })
        
    
        async function tester123(uptoDate:number){
          
          let messages: any[] = []
          let filteredMessages: any = {}
          let dateofmessage: number = 0
            let num = appMessagesIdsManager.getServerMessageId(maxId) + 1
            let peerData = appPeersManager.getInputPeerById(peerId)
            while(num > 0){
              const options: any = {peer: peerData, offset_id: num, offset_date: offsetDate, add_offset: offset, limit: 100, max_id: 0, min_id: 0, hash: 0};
              let test = apiManager.invokeApiSingle('messages.getHistory', options)
              let convertTest = (test as unknown as MessagesMessages.messagesChannelMessages).messages
              convertTest.forEach(x => {
                messages.push(x)
              })
              messages.forEach(async x => {  
                dateofmessage = x.date
                if(x.date < uptoDate){
                  return
                } 
              })
              if(dateofmessage < uptoDate){
                break
              }
              num -= 100
            }
            messages.forEach(async mes => {
              let tempHold:any[] = []
              if(mes.date > uptoDate){
                filteredMessages[mes.date] = mes
              } 
            })
            console.log(filteredMessages)
            
            let keysOfMessages = Object.keys(filteredMessages)
            displayMessagesToDom(keysOfMessages, filteredMessages)
          }
    
      
          async function userName(channelId:number, participantId:number){
            let options = {
              channel:appChatsManager.getChannelInput(channelId),
              participant: appPeersManager.getInputPeerById(participantId) ,
            }
            try {
              let user:any = apiManager.invokeApiSingle('channels.getParticipant', options)
              let setUpTypeOfUser = (user as ChannelsChannelParticipant.channelsChannelParticipant)
              return setUpTypeOfUser
            } catch (error) {
              console.log(error)
            }
            
          }
          
    
          function displayMessagesToDom(keys:any, obj:any){
            const titleOfChannel = document.querySelector('#TITLE').textContent
    
            const createHtmlEl = document.createElement('html')
    
            const createHeadEl = document.createElement('head')
    
            const createMetaEl = document.createElement('meta').setAttribute('charset', 'utf-8')
    
            const secondMetaEl = document.createElement('meta')
            secondMetaEl.setAttribute('content', 'width=device-width')
            secondMetaEl.setAttribute('inital-scale','1.0')
            secondMetaEl.setAttribute('name', 'viewport')
    
            val2.textContent = 
            `<html>
              <head>
                  <meta charset="utf-8">
                  <title>Exported Data</title>
                  <meta content="width=device-width, initial-scale=1.0" name="viewport">
                  <link href="./style.css" rel="stylesheet">
                  <script src="js/script.js" type="text/javascript"></script>
              </head>
            
                <body onload="CheckLocation();">
                
                  <div class="page_wrap">
                
                  <div class="page_header">
                
                    <div class="content">
                
                    <div class="text bold">${titleOfChannel}</div>
                
                    </div>
                
                  </div>
                
                  <div class="page_body chat_page">
                
                          <div class="history">
                      
                              <div class="message service" id="message-1">
                          
                                      <div class="body details">18 October 2022</div>
                          
                              </div>`;
                let tempt: any[] = []
                keys.forEach(async (keyVal:any) => {
                  let user = (await userName(obj[keyVal].peer_id.channel_id, obj[keyVal].from_id.user_id))
                  let convert = (user.users[0] as User.user)
                  tempt.push(convert)
    
                  val2.textContent += `<div class="message default clearfix" id="message36552">
      
                                        <div class="pull_left userpic_wrap">
      
                                        <div class="userpic userpic8" style="width: 42px; height: 42px">
      
                                        <div class="initials" style="line-height: 42px">N</div>
      
                                        </div>
      
                                        </div>
      
                                        <div class="body">
      
                                        <div class="pull_right date details" title="19.10.2022 11:09:26 UTC-05:00">${new Date(obj[keyVal].date)}</div>
                                        
                                        
                                        
                                        <div class="text">${obj[keyVal].message}</div>
      
                                        </div>
      
                                      </div>`
      
                })
                
        
                              
                console.log(tempt)
                      
               val2.textContent +=  `</div>
                
                                    </div>
                              
                                    </div>
                              
                                  </div>
                              
                                  </div>
                              
                                </div>
                              
                                </div>
    
                              </body>
    
                            </html>`;
    
              
          
              
          }
          console.log('done')
          
          
      }
}





  let appGetMessage = new AppGetMessage()

  export default appGetMessage
