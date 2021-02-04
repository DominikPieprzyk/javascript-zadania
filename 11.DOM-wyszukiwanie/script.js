//Zadanie 1

let links = document.getElementById('list');

console.log(links);

//Zadanie 2

let showTags = function(tagName){
    return document.querySelectorAll(tagName);
}

let show = showTags('ul');

//Zadanie 3 

const listElement = document.getElementById('list');

console.log(listElement);

//Zadanie 4

function PrintEl(element){
    element.forEach((el) => console.log(document.querySelectorAll(el)));
}

PrintEl(['li', 'ul', 'span', 'div.list span', 'div#spans span']);
