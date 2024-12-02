import {percentageAnimation, percentageInfo} from '../utils/fnct.js'

export class ClassicMusic{
    constructor() {
        this.startX = 1000
        this.endX = 3600
        this.progress = 0

        this.animationStatement = 0

        this.indienElement = document.querySelector('.indiens')
        this.sun = document.querySelector('.sun')
        this.cruise = document.querySelector('#cruise')
        this.cruise = document.createElement('a')

        this.songElement = document.querySelector('#classic_music')

        this.violonElements = document.querySelectorAll('.violont-element')
    }

    songVolume(volume){
        volume = volume * 2
        if (volume > 1 && volume < 1.33) volume = 1
        if (volume > 1.33) volume = 1 - (volume - 1)
        this.songElement.volume = volume
    }

    songPlay(){
        this.songElement.play()
    }

    songStop(){
        this.songElement.pause()
    }

    sunAnimate(value){
        value = (value * 150) - 75
        console.log(value)
        this.sun.style.transform = `rotate(180deg) translate(-100px, ${value}px)`
    }

    upLow(value){
        value = (value / 100) * 2
        if (value > 1 && value < 1.33) value = 1
        if (value > 1.33) value = 1 - (value - 1)

        return value
    }

    handleAnimation(currentX){
        this.progress = percentageAnimation(currentX, this.startX, this.endX)
        if (this.animationStatement > 0) {
            this.animationStatement -= 10
        } else {
            this.animationStatement += 10
        }


        this.violonElements.forEach(el=>{
            el.style.transform = `translate(${this.animationStatement}px, ${this.animationStatement}px)`
        })

        if (this.progress > 25 && this.progress < 100) {
            this.songPlay()
            this.songVolume(this.upLow(this.progress))
            this.sunAnimate(this.upLow(this.progress))
        }

        if (this.progress > 35 && this.progress < 100) {
            this.indienElement.style.transform = `translate(90px, 80px)`
            this.cruise.style.transform = `translateY(60px)`
        }
        else{
            this.indienElement.style.transform = ``
        }


        if (this.progress >= 90 ||this.progress < 20){
            this.songStop()
        }
    }
}