const form = document.querySelector('form');
form.addEventListener('submit' , function(e){
    e.preventDefault();
    height = parseInt(document.querySelector('#height').value)
    weight = parseInt(document.querySelector('#weight').value)
    results = document.querySelector('#results')

    if(height === ' ' || height <= 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
    } 
    else if (weight === ' ' || weight <= 0 || isNaN(weight)){
        results.innerHTML = `Please give valid weight ${weight}`
    } 
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)

        results.innerHTML =  `<span>${bmi}</span>`

    }

   
});

