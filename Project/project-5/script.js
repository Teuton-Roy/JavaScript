//generate random color

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
let interId
const startChangingColor =()=>{
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor()
    }
    
    if (!interId) {
        interId = setInterval(changeBgColor, 1)
    }
}
const stopChangingColor =() =>{
    clearInterval(interId)
    interId = null
}

document.querySelector('#start').addEventListener(`click`, startChangingColor)
document.querySelector('#stop').addEventListener(`click`, stopChangingColor)