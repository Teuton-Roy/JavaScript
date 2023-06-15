//Now adding functionality for color switcher so that it change the background color

//select buttons
const buttons = document.querySelectorAll('.button')
// console.log(buttons);

//select tags for when I selct white then it change the tag color
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')

//Select Body
const body = document.querySelector('body')

//apply for-each loop on buttons cause it's nodelist.
buttons.forEach((button) =>{
    // console.log(button);
    //now add event-listener on every button

    button.addEventListener('click', (e)=>{
        console.log(e);
        console.log(e.target);
        //select the id and changeing the color using DOM
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
            h1.style.color = 'black'
            h2.style.color = 'black'
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'maroon') {
            body.style.backgroundColor = e.target.id;
        }
    })
})