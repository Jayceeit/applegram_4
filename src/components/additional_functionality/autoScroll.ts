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
            let names_filter = x.textContent.replace(/\n/g, ' ').replace('Forwarded from', '').replace('-', '')
            return names_filter.split(' ')
        })
        let name_map = names.reduce((accum:any, name:any) => {
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
            const create_list_el = document.createElement('li')
            create_list_el.className = 'scraped-user'
            create_list_el.textContent = obj[id]
            scrapeListEl.appendChild(create_list_el)
        })

        
    }
}

export const scrollClass = new Scroll([])
