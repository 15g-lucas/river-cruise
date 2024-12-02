import {percentageAnimation, percentageInfo} from '../utils/fnct.js'

export class Modal{
    constructor() {
        this.element = document.getElementById('modal')
        this.dateContainer = document.querySelector('.dates-el')
    }
    async activate(){
        this.element.setAttribute('class','active');
        let data = await this.fetchData()
        let html = ''
        let percentage = 0
        data.dates.map(el=>{
            percentage = el.booked / 250 * 100
            html += `<div class="col">
                    \t\t\t\t\t\t<h4>${el.date}</h4>
                    \t\t\t\t\t\t<div class="progress">
                    \t\t\t\t\t\t\t<span class="complete" style="width: ${percentage}%;"></span>
                    \t\t\t\t\t\t</div>
                    \t\t\t\t\t\t<span class="percent"> ${percentage}% Booked</span>
                    \t\t\t\t\t\t<a href="#" title="Book now" class="btn">Book now</a>
                    \t\t\t\t\t</div>`
        })
        this.dateContainer.innerHTML = html
    }

    async fetchData(){
        const data  = fetch('js/dates.json')
        return (await data).json()
    }
}