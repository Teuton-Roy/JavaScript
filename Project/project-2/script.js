//select form
const form = document.querySelector('form')

//add event Listener in form
form.addEventListener('submit', (e)=>{
    e.preventDefault() //stop default actions

    const height = parseInt(document.querySelector('#height').value) //get height value in string form and Using parseInt it convert into integer//
    const weight = parseInt(document.querySelector('#weight').value)
})