import {percentageAnimation, percentageInfo} from '../utils/fnct.js'

export class ArrivalPort{
    constructor() {
        this.startX = 5500
        this.finaPoint = 6308
        this.songElement = document.querySelector('#song_arrival')

        this.macaw1 = document.querySelectorAll('.macaw_1_f')
        this.macaw2 = document.querySelectorAll('.macaw_2_f')
        this.macaw3 = document.querySelectorAll('.macaw_3_f')
        this.macaw4 = document.querySelectorAll('.macaw_4_f')

        this.offsetM1 = 1
        this.offsetM2 = 2
        this.offsetM3 = 3
        this.offsetM4 = 4
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

    song(){
        this.songElement.play()
    }

    handleAnimation(currentX) {
        this.macaw()
        this.progress = percentageAnimation(currentX, this.startX, this.finaPoint)
    }
}