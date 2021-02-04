//Zadanie 1 

//1
var button = document.querySelector('#test-event');
button.addEventListener("click", function (event) {
 
  console.log(event.type);
});

//2
button.addEventListener("mouseover", function (event) {
  
  console.log(event.type);
});

//3
addEventListener("mousemove", function (event){
  
  console.log(event.type);
});

//4
addEventListener("keypress", function (event){

  console.log(event.type);
});

//5
addEventListener("scroll", function (event){

  console.log(event.type);
});

//6
document.querySelector('#input-test').addEventListener("change", function (event){

  console.log(event.type);
});


//Zadanie 2

document.querySelector('#ex2').addEventListener("click", function(){
    var d = document.querySelector('#ex2');
    var attrib = d.dataset.text;
    var txt = document.querySelector('#span-ex2')
    txt.innerHTML = attrib;
});


//Zadanie 3 

function switchColor() {
    const myElement = document.getElementById('ex3');

    myElement.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'blue';
    });

    myElement.addEventListener('mouseout', (event) => {
        event.target.style.backgroundColor = 'red';
    });
}
switchColor();

//Zadanie 4

const illegalChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const errorSpan = document.getElementById('ex3-err');
document.getElementById('input-test').addEventListener('input', (e) => {
    errorSpan.innerText = illegalChars.some(char => e.target.value.includes(char))
        ? 'To pole nie może zawierać cyfr'
        : null;
});


//Zadanie 5

const divEx5 = document.getElementById('ex5');
const buttonEx5 = document.getElementById('ex5-button');
let numberOfClick = 0
buttonEx5.addEventListener('click', function counting() {
    numberOfClick++
    if(numberOfClick ==  10) {
        buttonEx5.removeEventListener('click', counting)
    }
    else {
        divEx5.innerHTML = numberOfClick
    }
})

//Zadanie 6

function redOrWhiteColor() {
    document.addEventListener('scroll', (event) => {
        var whereAmI = window.scrollY;
        var body = document.querySelector('body');

        if (whereAmI > 200) {
            body.style.backgroundColor = 'red';
        } else {
            body.style.backgroundColor = 'white';
        }
    }); 
}
redOrWhiteColor()

//Zadanie 7

const calcButtons = document.querySelectorAll('#calculator button');
const calcOutput = document.querySelector('#calculator input');
const numericButtons = [];
const funcButtons = [];
let currentCalc = [];
let calcFinish = false;

calcButtons.forEach((el) => {
    if (parseInt(el.innerText) || el.innerText === '0') {
        numericButtons.push(parseInt(el.innerText));
    } else {
        funcButtons.push(el.innerText);
    }

    el.addEventListener('click', () => {
        if(calcFinish) {
          calcOutput.value = '';
          calcFinish = false;
        }
        if (funcButtons.includes(el.innerText)) {
            currentCalc.push(calcOutput.value, el.innerText);
            console.log(currentCalc);
            calcOutput.value = calcOutput.value + el.innerText;

            return;
        }
        if (currentCalc.length > 1) {
            doCalc([...currentCalc, el.innerText]);
            return;
        }
        calcOutput.value = calcOutput.value + el.innerText;
    });
});

function doCalc(x) {
    currentCalc = [];
  calcFinish = true;
    let result;
    numbers = [
        Number(x[0]),
        Number(x[2])
    ];
    switch (x[1]) {
        case '+': result = numbers[0] + numbers[1]; break;
        case '-': result = numbers[0] - numbers[1]; break;
        case '/': result = numbers[0] / numbers[1]; break;
        case '*': result = numbers[0] * numbers[1]; break;
    }
    calcOutput.value = result;
}
