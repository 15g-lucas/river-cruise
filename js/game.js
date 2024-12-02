import {Cruise} from "./class/Cruise.js";
import {ArrivalPort} from "./class/ArrivalPort.js";
import {DeparturePort} from "./class/DeparturePort.js";
import {MeetingWater} from "./class/MeetingWater.js";
import {Aligator} from "./class/Aligator.js";
import {Piranha} from "./class/Piranha.js";
import {ClassicMusic} from "./class/ClassicMusic.js";
import {Modal} from "./class/Modal.js";

const cruise = new Cruise(document.querySelector('#cruise'))
const arrivalPort = new ArrivalPort()
const departurePort = new DeparturePort()
const meetingWater = new MeetingWater()
const aligator = new Aligator()
const piranha = new Piranha()
const classicMusic = new ClassicMusic()
const modal = new Modal()


const REFRESH_DELAY = 1000


// Buttons for simple navigate
document.querySelector('#departure_button').addEventListener('click', (evt) => {
    setPositionTo(0)
    appComponent(evt)
})

document.querySelector('#water_button').addEventListener('click', (evt) => {
    setPositionTo(800)
    appComponent(evt)
})

document.querySelector('#classic_button').addEventListener('click', (evt) => {
    setPositionTo(2400)
    appComponent(evt)
})

document.querySelector('#piranah_button').addEventListener('click', (evt) => {
    setPositionTo(3500)
    appComponent(evt)
})

document.querySelector('#alligator_button').addEventListener('click', (evt) => {
    setPositionTo(5000)
    appComponent(evt)
})

document.querySelector('#arrival_button').addEventListener('click', (evt) => {
    setPositionTo(6314)
    appComponent(evt)
})

document.addEventListener('wheel', (evt) => {
    setPositionBy(evt.deltaY)
    appComponent(evt)
})


//  2 Custom functions for move screen
const setPositionBy = (position) => {
    const scrollStep = 15;
    if (window.scrollX < arrivalPort.finaPoint || position < 0) {
        window.scrollBy({
            left: position > 0 ? scrollStep : -scrollStep,
            behavior: "instant"
        })
    }
    cruise.changeY(window.scrollX)
    appComponent(window.scrollX)
}

const setPositionTo = (position) => {
    let STEPS = 200
    let actualPosition = window.scrollX

    let array = Array(STEPS + 1).fill()
    let interval = (position - actualPosition) / STEPS + 1

    array = array.map((el, index)=>{
        return actualPosition + (interval * index)
    })

    array.map((pos, index)=>{
        setTimeout(()=>{
            window.scrollTo({
                left: pos,
                behavior: "instant"
            })

            cruise.changeY(pos)
            appComponent(pos)
        }, 40 * index)
    })
}


const appComponent = (position) => {
    // Play background song
    document.querySelector('#background').play()

    // Handle cruise arrival
    if (position >= arrivalPort.finaPoint) {
        arrivalPort.song()
        modal.activate()
        actualSection('arrival_button')
    }

    // Handle cruise departure
    if (position >= departurePort.startPoint
        && position < departurePort.startPoint + 50
    ) {
        departurePort.song()
    }


    // Handle sections
    if (position > departurePort.startX) {
        actualSection('departure_button')
        departurePort.handleAnimation(position)
    }

    if (position > meetingWater.startX) {
        actualSection('water_button')
        meetingWater.handleAnimation(position)
    }

    if (position > classicMusic.startX) {
        actualSection('classic_button')
        classicMusic.handleAnimation(position)
    }
    if (position > piranha.startX) {
        actualSection('piranah_button')
        piranha.handleAnimation(position)
    }
    if (position > aligator.startX) {
        actualSection('alligator_button')
        aligator.handleAnimation(position)
    }
    if (position > arrivalPort.startX) {
        actualSection('arrival_button')
        arrivalPort.handleAnimation(position)
    }
}

// Handle change actual section for simple navigate
const actualSection = (section) => {
    document.querySelectorAll('.bullets>li').forEach(button => {
        button.classList.remove('active')
        if (button.id === section) {
            button.classList.add('active')
        }
    })
}

// Change class modal
document.getElementById('modal').onclick = function () {
    document.getElementById('modal').setAttribute('class', '');
    return false;
}
