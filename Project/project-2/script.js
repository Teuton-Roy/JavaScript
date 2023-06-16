//select form
const form = document.querySelector('form')

//add event Listener in form
form.addEventListener('submit', (e)=>{
    e.preventDefault() //stop default actions

    const height = parseInt(document.querySelector('#height').value) //get height value in string form and Using parseInt it convert into integer//
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height ==='' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`
    }
    else if (weight ==='' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`
    }
    
    else{
        const BMI = (weight / ((height*height)/10000)).toFixed(2)
        //show the result
        results.innerHTML = `<span>${BMI}</span>`
    }
})