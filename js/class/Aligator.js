import {percentageAnimation, percentageInfo} from '../utils/fnct.js'

export class Aligator{
    constructor() {
        this.startX = 4300
        this.endX = 5900

        this.startInfo = 4300
        this.endInfo = 4900
        
        
        this.progress = 0
        this.progressInfo = 0
        this.informationElement = document.querySelector('.info-aligator')
        this.songElement = document.querySelector('#aligator')

        this.aligator1 = document.querySelector('.aligator_1')
        this.aligator2 = document.querySelector('.aligator_2')
        this.aligator3 = document.querySelector('.aligator_3')
        this.aligator4 = document.querySelector('.aligator_4')
        this.aligator5 = document.querySelector('.aligator_5')
        this.aligator6 = document.querySelector('.aligator_6')

        this.aligator1.style.transform = `translateY(40px)`
        this.aligator2.style.transform = `translateY(-40px)`
        this.aligator3.style.transform = `translateY(40px)`
        this.aligator4.style.transform = `translateY(-40px)`
        this.aligator5.style.transform = `translateY(40px)`
        this.aligator6.style.transform = `translateY(-40px)`
    }


    song(){
        this.songElement.play()
    }

    handleAnimation(currentX) {
        if (this.progress > 20)  this.song()
        this.progress = percentageAnimation(currentX, this.startX, this.endX)
        this.progressInfo = percentageInfo(currentX, this.startInfo, this.endInfo)
        this.informationElement.style.opacity = (this.progressInfo / 100)
        this.informationElement.style.transform = `translateY(${this.progressInfo * 4.2 - 375}px)`
        this.aligator1.style.transform = `translateY(40px)`
        this.aligator1.style.transform = `translateY(50px)`



        if (this.progress > 30){
            this.aligator1.style.transform = `translateY(0px)`
            this.aligator2.style.transform = `translateY(0px)`
        }
        else{
            this.aligator1.style.transform = `translateY(40px)`
            this.aligator2.style.transform = `translateY(-40px)`
        }

        if (this.progress > 40){
            this.aligator3.style.transform = `translateY(0px)`
            this.aligator4.style.transform = `translateY(0px)`
        }
        else{
            this.aligator3.style.transform = `translateY(40px)`
            this.aligator4.style.transform = `translateY(-40px)`
        }

        if (this.progress > 50){
            this.aligator5.style.transform = `translateY(0px)`
            this.aligator6.style.transform = `translateY(0px)`
        }
        else{
            this.aligator5.style.transform = `translateY(40px)`
            this.aligator6.style.transform = `translateY(-40px)`
        }
    }
}