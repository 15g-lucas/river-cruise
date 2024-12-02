import {percentageAnimation, percentageInfo} from '../utils/fnct.js'

export class DeparturePort {
    constructor() {
        this.informationElement = document.querySelector('.departure-info')
        this.songElement = document.querySelector('#song_departure')


        this.startPoint = 210

        this.startX = 0
        this.endX = 1700
        this.startInfo = 0
        this.endInfo = 500
        this.progress = 0
        this.progressInfo = 0

        this.macaw1 = document.querySelectorAll('.macaw_1')
        this.macaw2 = document.querySelectorAll('.macaw_2')
        this.macaw3 = document.querySelectorAll('.macaw_3')
        this.macaw4 = document.querySelectorAll('.macaw_4')

        this.offsetM1 = 15
        this.offsetM2 = 20
        this.offsetM3 = 25
        this.offsetM4 = 30
    }

    song() {
        this.songElement.play()
    }

    macaw(){
        this.macaw1.forEach(el=>{
            el.style.transform = `translateX(${this.progress * this.offsetM1}px)`
        })

        this.macaw2.forEach(el=>{
            el.style.transform = `translateX(${this.progress * this.offsetM2}px)`
        })

        this.macaw3.forEach(el=>{
            el.style.transform = `translateX(${this.progress * this.offsetM3}px)`
        })

        this.macaw4.forEach(el=>{
            el.style.transform = `translateX(${this.progress * this.offsetM4}px)`
        })
    }

    handleAnimation(currentX) {
        this.macaw()
        this.informationElement.style.opacity = (this.progressInfo / 100)
        this.informationElement.style.transform = `translateY(${this.progressInfo * 4.6 - 375}px)`
        this.progress = percentageAnimation(currentX, this.startX, this.endX)
        this.progressInfo = percentageInfo(currentX, this.startInfo, this.endInfo)
    }
}