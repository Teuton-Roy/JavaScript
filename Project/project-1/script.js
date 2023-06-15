//Now adding functionality for color switcher so that it change the background color

//select buttons
const buttons = document.querySelectorAll('.button')
// console.log(buttons);

//Select Body
const body = document.querySelector('body')

//apply for-each loop on buttons cause it's nodelist.
buttons.forEach((button) =>{
    // console.log(button);
    //now add event-listener on every button

    button.addEventListener('click', (e)=>{
        console.log(e);
        console.log(e.target);
    })
})