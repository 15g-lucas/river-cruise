import {percentageAnimation, percentageInfo} from '../utils/fnct.js'

export class MeetingWater {
    constructor() {
        this.startX = 500
        this.endX = 2300

        this.startInfo = 500
        this.endInfo = 1200

        this.progress = 0
        this.progressInfo = 0
        this.informationElement = document.querySelector('.water-info')
        this.animationElement = document.querySelector('.animation-water')
        this.animationStatement = 0
        this.indienElement = document.querySelector('.indiens')
        this.cruise = document.querySelector('#cruise')
    }

    handleAnimation(currentX) {
        this.progress = percentageAnimation(currentX, this.startX, this.endX)
        this.progressInfo = percentageInfo(currentX, this.startInfo, this.endInfo)


        this.indienElement.style.transform = ``
        if (this.progress > 20 && this.progress < 100) {
            this.cruise.style.transform = 'translateY(100px)'
        }
        else{
            this.cruise.style.transform = ``
        }

        this.informationElement.style.opacity = (this.progressInfo / 100)
        this.informationElement.style.transform = `translateY(${this.progressInfo * 4.6 - 375}px)`
        this.informationElement.style.transform = `translateY(${this.progressInfo * 4.6 - 375}px)`

        if (this.animationStatement > 30) {
            this.animationStatement -= 50
        } else {
            this.animationStatement += 50
        }
        this.animationElement.style.transform = `translateX(${this.animationStatement}px)`
    }

    percentageAnimation(currentX) {

        this.progress = ((currentX - this.startX) / (this.endX - this.startX)) * 100
        this.progressInfo = Math.min((((currentX - this.startInfo) / (this.endInfo - this.startInfo)) * 100), 100)
    }
}