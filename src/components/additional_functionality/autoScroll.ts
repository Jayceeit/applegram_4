import appUsersManager from "../../lib/appManagers/appUsersManager"

export class Scroll{
    messageArr:any[]

    constructor(messageArr:[]){
        this.messageArr = messageArr
    }

    public scrollChannel(container:any){
        let intervalId = setInterval(() => {
            const stoppingPoint = document.querySelectorAll('.bubbles')[0]
            container.scrollTop = container.scrollHeight
            stoppingPoint.classList.forEach((val:any) => {
                if (val === 'scrolled-down')endFunction()
            })
            this.net()
        }, 200)

        let endFunction = () =>{
            clearInterval(intervalId)
            this.appendToHtml(this.cleanData())
        }
    }
    
    private net(){
        this.messageArr = []
        let arrayOfMessages = document.querySelectorAll('.bubble-content-wrapper > .bubble-content > .name')
        arrayOfMessages.forEach(msg => {
            this.messageArr.push(msg)
        })
    }

    private cleanData(){
        let names = this.messageArr.map(x => {
            let names_filter = x.textContent.replace(/\n/g, ' ').replace('-', '').replace('.', '').replace(':','').replace('ID','')
            return names_filter.split(' ')
        })
        let filtered_names = names.filter(user => {
            if(!user.join(' ').includes('Forwarded from')){
                return user
            }
        })
        let name_map = filtered_names.reduce((accum:any, name:any) => {
            accum[name[name.length - 1]] = name.join(' ')
            return accum;            
          }, {});
        return name_map
    }

    private appendToHtml(obj:any){
        const scrapeListEl = document.querySelector('#member-scrape') as HTMLElement
        scrapeListEl.innerHTML = ''
        const keys_of_array = Object.keys(obj)
        keys_of_array.forEach(id => {
            let split_data:any[] = obj[id].split(' ')
            const split_data_length = split_data.length - 1
            let user_id 
            if (!!appUsersManager.users[split_data[split_data.length - 1]]){
                if('username' in appUsersManager.users[split_data[split_data_length]]){
                    user_id = `@${appUsersManager.users[split_data[split_data_length]].username}`
                } else {
                    user_id = ''
                }
            }
            const create_list_el = document.createElement('li')
            create_list_el.className = 'scraped-user'
            create_list_el.textContent = `${split_data.join(' ').replace(/([0-9])/g,'')} ${user_id} ( ${split_data[split_data.length - 1]} )`
            scrapeListEl.appendChild(create_list_el)
        })
    }
}
export const scrollClass = new Scroll([])
