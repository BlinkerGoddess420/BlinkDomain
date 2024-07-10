document.addEventListener("DOMContentLoaded", () => {
const rerollbutton = document.getElementById("rerollbutton");
const modifierElement = document.getElementById("mods");
const inhaleElement = document.getElementById("inhale");
const holdElement = document.getElementById("hold");
const scoreElement = document.getElementById("score");
const halfScoreElement = document.getElementById("halfscore");

x = Math.floor(Math.random() * 6)
console.log(x)


rerollbutton.addEventListener("click", () => { 
    const modifiers = ['Ghost it | 1.5 multiplier', 'double inhale time | 1.5 multiplier', 'double hold time | 1.3x multiplier', 'BLINKER | 3x multiplier', ' Hit 2 pens at once | 2x multiplier', 'plus 10 inhale secs | 1.2', 'plus 5 inhale secs | 1.1', 'no modifier', ' 2 Ghost Blinkers x10']
    const x = Math.floor(Math.random() * modifiers.length);
    
    const selectedModifier = modifiers[x];
    modifierElement.textContent = selectedModifier;
    
    const y = Math.floor(Math.random() * 15);
    const v = Math.floor(Math.random() * 25);
    
    const selectedTime = y;
    inhaleElement.textcontent = selectedTime;

    const selectedHold = v;
    holdElement.textcontent = selectedHold;

    let w = 0
    if ( x === 0 ) {
        w = (25 * 1.5) + y 
    } else if (x === 1 ) {
        w = (y * 1.5) + v 
    } else if (x === 2) {
        w = (v * 1.3) + y
    } else if (x === 3) {
        w = (25 * 3) + v
    } else if (x === 4) {
        w = (v * 2) + y
    } else if (x=== 5) {
        w = (y * 1.2) + v
    } else if (x === 6) {
        w = (y * 1.1) + v
    } else if (x === 8) {
        w = 50 * 10
    } else {
        w =  y + v
    }

    
    const selectedScore = Math.floor(w) 
    scoreElement.textContent = selectedScore

    const selectedHalfScore = w/2
    halfScoreElement.textContent = selectedHalfScore

    alert("REROLLING <3");
    modifierElement.textContent = `Modifier: ${selectedModifier}`
    inhaleElement.textContent = `Inhale for: ${selectedTime}`
    holdElement.textContent = `Hold it for: ${selectedHold}`
    scoreElement.textContent = `Your Score is: ${selectedScore}`
    halfScoreElement.textContent = `Your Failed Score is: ${selectedHalfScore}` ;
});


});



