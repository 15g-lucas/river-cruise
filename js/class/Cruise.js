import {percentageAnimation, percentageInfo} from '../utils/fnct.js'

export class Cruise {
    constructor(Element) {
        this.Element = Element;
        this.miniCruise = document.querySelector('.mini-cruise')
        this.minY = 525
        this.maxY = 6622
        this.offsetY = 300
    }

    changeY(currentY){
        currentY = Math.max((currentY +  this.offsetY), this.minY)
        currentY = Math.min(currentY, this.maxY)
        this.Element.style.left = currentY
        this.miniCruise.style.left = currentY / 25
    }
}
