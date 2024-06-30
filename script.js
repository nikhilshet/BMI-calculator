const w = document.getElementById('weight');
const h = document.getElementById('height');
let result = document.getElementById('result');
const submit = document.querySelector('button');
let categ = document.getElementsByClassName('Category')[0];
const refresh = document.getElementsByClassName('refresh')[0];
categ.classList.add('hide');
refresh.classList.add('hide');
submit.addEventListener('click' , () => {
    const weight = parseFloat(w.value);
    const height = parseFloat(h.value) / 100;
    const calc = weight / (Math.pow(height, 2));

    if(isNaN(weight) || isNaN(height) || weight<=0 || height<=0){
        result.textContent = "Enter a valid entry"
    }else {
        result.textContent = `${calc.toFixed(2)}`
    }

    if (calc < 16.00) {
        categ.textContent = `Your BMI is ${calc.toFixed(2)} so you are Severely Underweight`;
    } else if (calc >= 16.0 && calc < 18.4) {
        categ.textContent = `Your BMI is ${calc.toFixed(2)} so you are Underweight`;
    } else if (calc >= 18.5 && calc < 24.9) {
        categ.textContent = `Your BMI is ${calc.toFixed(2)} so you are Normal weight`;
    } else if (calc >= 25.0 && calc < 29.9) {
        categ.textContent = `Your BMI is ${calc.toFixed(2)} so you are Overweight`;
    } else if (calc >= 30.0 && calc < 34.9) {
        categ.textContent = `Your BMI is ${calc.toFixed(2)} so you are Obese (Class 1)`;
    } else if (calc >= 35.0 && calc < 39.9) {
        categ.textContent = `Your BMI is ${calc.toFixed(2)} so you are Obese (Class 2)`;
    } else if (calc >= 40.0) {
        categ.textContent = `Your BMI is ${calc.toFixed(2)} so you are Obese (Class 3)`;
    }

    const inpBox = document.getElementsByClassName('inp')[0];

    inpBox.classList.add('hide');
    submit.classList.add('hide');
    result.classList.remove('hide');
    categ.classList.remove('hide');
    refresh.classList.remove('hide');
});

refresh.addEventListener('click' , ()=>{
    location.reload();
})