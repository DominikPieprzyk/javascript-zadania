//Zadanie 1

const divs = document.querySelectorAll('.more-divs');

function listOfDivs(paramArr) {
    let newArray = [];
    
    for (let i = 0; i < paramArr.length; i++) {
        newArray.push(paramArr[i].tagName);
    }
    return newArray;
}

console.log(listOfDivs(divs));

//Zadanie 2


function task2(param){
    //1
    console.log(param.innerHTML);
    //2
    console.log(param.outerHTML);
    //3
    console.log(param.className);
    //4
    console.log([param.classList]);
    //5
    console.log(param.dataset);

}

task2(document.querySelector(".short-list"))

//Zadanie 3

const numbersDataset = document.getElementById('datasetCheck');
const thirdTask = takeNumbers => {
    const firstNumber = parseInt(takeNumbers.dataset.numberone)
    const secondNumber = parseInt(takeNumbers.dataset.numbertwo)
    const thirdNumber = parseInt(takeNumbers.dataset.numberThree)
    let adding = firstNumber + secondNumber + thirdNumber
    let substraction = firstNumber - secondNumber - thirdNumber;
    return [adding, substraction];
}
console.log(thirdTask(numbersDataset));

//Zadanie 4

document.getElementById("spanText").innerText =  "dowolny";

//Zadanie 5

document.getElementById("spanText").className =  "newClassName";

//Zadanie 6

function printClassesAndRemove(classes) {
    classes.forEach(v => console.log(v));
    console.log([...lasses].join('+'));
      document.getElementsByClassName(classes.value)[0].classList = [];

    console.log('Usunięto wszytskie klasy');
}

printClassesAndRemove(document.getElementById('classes').classList);

//Zadanie 7

var allLi = document.querySelector('#longList').querySelectorAll('li');
allLi.forEach((c) => {
  if(c.dataset.text == null) c.setAttribute("data-text", "text");
});

//Zadanie 8

function ex8(className) {
    let obj = {newClass: className};
    ex8_1(obj);
}

function ex8_1(obj) {
    let variable = obj.newClass;
    document.getElementById('myDiv').className = variable;
}

ex8('string_z_parametru');

//Zadanie 9

function addClass(param){
    
    param = parseInt(param);
    const numbers = document.querySelector("#numbers");
    
    if(param %2===0){
        numbers.className = "even";
    }
    else{
        numbers.className = "odd";
    }
    
}

var randomNum = Math.floor(Math.random() * 11);
addClass(randomNum);

//Zadanie 10

function getValues(param) {
    return [...param.children].map(v => v.innerText);
  }
  
  console.log(getValues(document.getElementById('longList')));

//Zadanie 11

  function changeValues(param) {
    [...param.children].forEach(v => {
      v.setAttribute('old-value', v.innerText);
      v.innerText = Math.floor(Math.random() * 11);
    });
  }
  
  changeValues(document.getElementById('longList'));
