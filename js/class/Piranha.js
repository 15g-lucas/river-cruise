import {percentageAnimation, percentageInfo} from '../utils/fnct.js'

export class Piranha{
    constructor() {
        this.startX = 3000
        this.endX = 4700
        this.startInfo = 3000
        this.endInfo = 3800
        this.progress = 0
        this.progressInfo = 0
        this.animationStatement = 0

        this.informationElement = document.querySelector('.piranhas-info')
        this.cruise = document.querySelector('#cruise')
        this.piranahOdd = document.querySelectorAll('.piranah_layer > g:nth-child(odd)')
        this.piranahEven = document.querySelectorAll('.piranah_layer > g:nth-child(even)')
    }

    handleAnimation(currentX) {
        this.progress = percentageAnimation(currentX, this.startX, this.endX)
        this.progressInfo = percentageInfo(currentX, this.startInfo, this.endInfo)

        this.informationElement.style.opacity = (this.progressInfo / 100)
        this.informationElement.style.transform = `translateY(${this.progressInfo * 4.2 - 375}px)`



        if (this.progress > 40){
            this.animationStatement = 0
            this.piranahOdd.forEach(el=>{
                el.style.transform = `translateY(${this.animationStatement}px)`
            })
            setTimeout(()=>{
                this.piranahEven.forEach(el=>{
                    el.style.transform = `translateY(${this.animationStatement}px)`
                })
            }, 500)

        }
        else{
            this.animationStatement = 400
            this.piranahOdd.forEach(el=>{
                el.style.transform = `translateY(${this.animationStatement}px)`
            })
            this.piranahEven.forEach(el=>{
                el.style.transform = `translateY(${this.animationStatement}px)`
            })
        }

    }
}