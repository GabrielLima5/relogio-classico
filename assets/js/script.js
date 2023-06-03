function setRotation(element, rotationPercent){
    element.style.setProperty('--rotation', rotationPercent * 360)
}

function setClock(){
    const currentDate = new Date()

    const secondsPercent = currentDate.getSeconds() / 60
    const minutesPercent = currentDate.getMinutes() / 60
    const hoursPercent = currentDate.getHours() / 12
    
    setRotation(document.querySelector('.pont-segundos'), secondsPercent)
    setRotation(document.querySelector('.pont-minutos'), minutesPercent)
    setRotation(document.querySelector('.pont-horas'), hoursPercent)
}

function fadeInClock(){
    $('.relogio').hide().fadeIn(1000)
    
    setTimeout(() => {
        $('.pont').each((i, pont) => {
            pont.style.display = 'block'
        })
    }, 1000)
}

fadeInClock()

setInterval(() => {
    setClock()
}, 1000)