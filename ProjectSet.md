# Projects related to DOM

## 1. Color Changer

## Solution Code

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelectorAll('body');

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
      console.log(e);
      console.log(e.target);
      if (e.target.id === 'grey') {
        document.body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'blue') {
        document.body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'white') {
        document.body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'yellow') {
        document.body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'red') {
        document.body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'purple') {
        document.body.style.backgroundColor = e.target.id;
      }
    });
});

```

## 2. BMI Calculator

```javaScript

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


```