//Zadanie 1

const buz =  document.querySelector("#buz");
const baz =  document.querySelector("#baz");
const foo =  document.querySelector("#foo");

//1
console.log(buz.parentElement);
//2
console.log(baz.previousElementSibling);
//3
console.log(foo.children);
//4
console.log(foo.parentNode);
//5
console.log(foo.firstElementChild);
//6
console.log(foo.children[Math.floor(foo.children.length/2)]);

//Zadanie 2

let txtDownload = function(elementId) {
    let elid = document.querySelector(`#${elementId}`);
    elid.addEventListener('click', function(event) {
        console.log(event.target.textContent.trim());
    });
}
txtDownload('ex2');
            
//Zadanie 3

document.querySelector('#ex3').querySelectorAll('button').forEach((element) => {
    element.addEventListener('click', (event) => {
        event.target.nextElementSibling.style.display = event.target.nextElementSibling.style.display == 'none' ? 'block' : 'none';
    });
});


//Zadanie 4

document.querySelector('#ex3').querySelectorAll('button').forEach((element) => {
    element.addEventListener('click', (event) => {
        var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        event.target.parentElement.style.backgroundColor = randomColor;
    });
});

//Zadanie 5

let ex5 = document.querySelector('#ex5');
    let divs = ex5.querySelectorAll('div');
    let list = ex5.querySelectorAll('ul>li');

    // .1
    function firstElement(e) {
    list[0].style.backgroundColor = e.srcElement.style.backgroundColor;
    }
    // .2
    function secondElement(e) {
    list[list.length-1].style.backgroundColor = e.srcElement.style.backgroundColor;
    }
    // .3
    function thirdElement(e) {
    Array.from(list)
        .filter((value) => value.innerHTML % 2 === 0)
        .forEach((li) => li.style.backgroundColor = e.srcElement.style.backgroundColor)
    }
    // .4
    function fourthElement(e) {
    list.forEach((li) => li.style.backgroundColor = e.srcElement.style.backgroundColor)
    }
    // .5
    function fifthElement(e) {
    ex5.querySelector('ul').style.backgroundColor = e.srcElement.style.backgroundColor;
    }

    divs.forEach((div) => {
    div.addEventListener('mouseover', thirdElement)});

    //Zadanie 6
    
    //1
    let a  = document.querySelector('#ex6').firstElementChild.firstElementChild.firstElementChild;
    // .2
    let b = document.querySelector('#ex6').firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement;
    // .3
    let c = document.querySelector('#ex6').parentElement.firstElementChild.parentElement.children[1].firstElementChild.firstElementChild.firstElementChild;
