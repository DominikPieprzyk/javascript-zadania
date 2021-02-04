//Zadanie 1

const el = document.createElement("div");
el.innerText = "To jest nowy element";
document.body.appendChild(el);

//Zadanie 2

document.addEventListener('domEvents', () => {
    const myTab = ["Cherry", "Orange", "Peach", "Apple", "Watermelon", "Sea Buckthorn"];
    const myList = document.createElement('ol');
    myList.id = 'myList';

    
myTab.forEach((a) => {
    var myFruit = document.createElement('li');
    myFruit.innerText = a;

    myList.append(myFruit);
});

newElem.append(myList);
document.body.insertBefore(newElem, document.getElementById('root'));  
});

//Zadanie 3

document.body.addEventListener('click', () => {
    const lis = document.querySelectorAll('ul li');
    lis.forEach((child, i) => {
        if (i % 2 === 0) child.remove();
    });
});


//Zadanie 4

const button = document.createElement('button');
button.innerText = 'Click to remove';
button.addEventListener('click', (e) => {
    e.target.remove();
});

document.body.appendChild(button);

//Zadanie 5

const rand = Math.floor(Math.random() * 20);
for (let i = 0; i < rand; i++) {
    const randDiv = document.createElement('div');
    randDiv.innerText = `to jest div numer ${i}`;
    document.body.appendChild(randDiv);
}

//Zadanie 6

const object = { div1: 'to jest div', span1: 'to jest span', div2: { div3: 'to jest div', }, span2: 'to jest span' };
function htmlFromObj(obj, parent = document.body) {
    Object.getOwnPropertyNames(obj).forEach(id => {
        if (typeof (obj[id]) !== 'string') {
            const innerParentTag = id.replace(/[0-9]/g, '');
            const innerParent = document.createElement(innerParentTag);
            innerParent.id = id;
            parent.appendChild(innerParent);
            htmlFromObj(obj[id], innerParent);
            return;
        }
        const elTag = id.replace(/[0-9]/g, '');
        const newEl = document.createElement(elTag);
        newEl.innerText = obj[id];
        newEl.id = id;
        parent.appendChild(newEl);
    })
}

htmlFromObj(object);

//Zadanie 7

const dataTable = ['abc', 'efg', 'hij', 'klm','nop','rst'];
const firstOlList = document.createElement('ol');

const firstBtn = document.createElement('button');
firstBtn.innerText = 'First list';

dataTable.forEach((e) => {
    let liElement = document.createElement('li');
    liElement.innerText = e;

    firstOlList.appendChild(liElement);
});

const secondOlList = document.createElement('ol');

const secondBtn = document.createElement('button');
secondBtn.innerText = 'Second list';
secondBtn.disabled = true;

root.appendChild(firstOlList);
root.appendChild(firstBtn);
root.appendChild(secondOlList);
root.appendChild(secondBtn);
let li = document.createElement('li');

//Zadanie 8

const fieldset = document.createElement('fieldset');
const input = [{
    label: 'Element',
    id: 'el',
    type: 'text'
}, {
    label: 'Tekst',
    id: 'text',
    type: 'text'
}, {
    label: 'Kolor',
    id: 'color',
    type: 'color'
}, {
    label: 'Ile razy',
    id: 'count',
    type: 'number'
}, {
    label: 'Utwórz',
    type: 'submit'
}];

input.forEach(v => {
    const paramInput = document.createElement('input');
    let label = document.createElement('hr');
    paramInput.style.display = 'block';
    paramInput.type = v.type;
    paramInput.id = v.id || null;

    if (v.type === 'submit') {
        paramInput.value = v.label;
        paramInput.addEventListener('click', (p) => {
            createElement(p);
        });
    } else {
        label = document.createElement('label');
        label.innerText = v.label;
        label.for = v.id;
    }
    fieldset.appendChild(label);

    fieldset.appendChild(paramInput);
});

function createElement(p) {
    p.preventDefault();
    let param = null;

    input.forEach((v) => {
        const value = document.getElementById(v.id)?.value;

        switch (v.id) {
            case 'el': param = document.createElement(value); break;
            case 'text': param.innerText = value; break;
            case 'color': param.style.color = value; break;
            case 'count': for (let i = 1; i <= Number(value); i++) {
                document.body.appendChild(param.cloneNode(true));
            } break;
        }
    });
}

document.body.appendChild(fieldset);

//Zadanie 9 

const fieldset = document.createElement('fieldset');
const table = document.createElement('table');

const inputs = [{
    label: 'Imię',
    id: 'fName',
    type: 'text'
}, {
    label: 'Nazwisko',
    id: 'name',
    type: 'text'
}, {
    label: 'Wiek',
    id: 'age',
    type: 'number'
}, {
    label: 'Ilość dzieci',
    id: 'kids',
    type: 'number'
}, {
    label: 'Płeć',
    id: 'gender',
    type: 'text'
}, {
    label: 'Więcej',
    type: 'submit',
    id: 'more'
}, {
    label: 'Utwórz',
    type: 'submit',
    id: 'print'
}];

let data = [];

inputs.forEach(v => {
    const elInput = document.createElement('input');
    let label = document.createElement('hr');
    elInput.style.display = 'block';
    elInput.type = v.type;
    elInput.id = v.id || null;

    if (v.type === 'submit') {
        elInput.value = v.label;
        elInput.addEventListener('click', (d) => {
            if (v.id === 'print') {
                renderTable(d);
            } else {
                addRow();
            }
        });
    } else {
        label = document.createElement('label');
        label.innerText = v.label;
        label.for = v.id;
    }
    fieldset.appendChild(label);

    fieldset.appendChild(elInput);
});

function addRow() {
    const row = [];
    inputs.forEach((v) => {
        if (v.type !== 'submit') {
            const value = document.getElementById(v.id)?.value;
            row.push(value);
        }
    });
    data.push(row);
    if (table.children.length > 0) {
        renderTable();
    }
}

function renderTable(d) {
    d?.preventDefault();
    table.innerHTML = '';
    if (data.length > 0) {
        const dataCells = inputs.filter(v => v.type !== 'submit');
        const thead = document.createElement('thead');
        dataCells.forEach(v => {
            const th = document.createElement('th');
            th.innerText = v.label;
            thead.appendChild(th);
        });
        table.appendChild(thead);
        const tbody = document.createElement('tbody');
        capitalize();
        data.forEach((v, i) => {
            const tr = document.createElement('tr');
            v.forEach(val => {
                const td = document.createElement('td');
                td.innerText = val;
                tr.appendChild(td);
            })
            const removeButton = document.createElement('button');
            removeButton.innerText = 'Usuń';
            removeButton.addEventListener('click', (d) => {
                data.splice(i, 1);
                renderTable();
            });
            tr.appendChild(removeButton);
            tbody.appendChild(tr);
        });
        table.appendChild(tbody);
    }
}

document.body.appendChild(fieldset);
document.body.appendChild(table);

//Zadanie 10

function capitalize() {
    data = data.map(dat =>
        dat.map(v => v.charAt(0).toUpperCase() + v.slice(1))
    );
}

//Zadanie 11

  
document.addEventListener('domEvent', () => {

var numInTxtBtn = document.createElement('button');
numInTxtBtn.innerText = 'Check';
var numInTxt = document.createElement('input');
numInTxt.type = 'text';

const r = document.getElementById('root');

function numbers(d) {
    if (!/\d/.test(d)) {
        return 'No numbers found.';
    }

    var xxx = d.replace(/[^0-9]/g, ' ').split(' ');

    var sum = 0;
    var notSum = 1;

    xxx.forEach((i) => {
        if (!i.length) {
            return;
        }

        i = parseInt(i);

        sum += i;
        notSum *= i;
      
      console.log(sum);
    });

    for (var i = 0; i < notSum; ++i) {
        var div = document.createElement('div');
        div.innerText = d;

        document.body.append(div, r);
    }

    return sum;
}

numInTxtBtn.addEventListener('click', () => {
    console.log(numbers(numInTxt.value));
});

document.body.append(numInTxt, rut);
document.body.append(numInTxtBtn, rut);

});

//Zadanie 12

function createObj(str) {
    return {
        string: str
    }
}

const stringAla = createObj('Ala ma kota');
stringAla.nameChange = function () {
    if (this.string.includes('Ala')) {
        this.string = this.string.replaceAll('Ala', 'Ola');
        console.log(this.string);
    } else {
        const div = document.createElement('div');
        div.innerText = 'Słowo Ala nie występuje w tekście.';
        document.body.appendChild(div);
    }
}

stringAla.nameChange();

//Zadanie 13

const dataArray = ['Lorem', 'Ipsum', 'dolor', '21exam'];
function returnHowManyLetters(arr) {
    let numberCounter = 0;
    arr.forEach(v => {
        const str = v.replace(/[^a-z]/gi, '');
        numberCounter += str.length;
    });
    return numberCounter;
}

function sumNumbers(arr) {
    const numbers = arr.map(v => v.match(/[0-9]+/g));
    const allNumbers = numbers.flat();
    return allNumbers.reduce((a, b) => Number(a) + Number(b));
}

function avgNumbers(arr) {
    const numbers = arr.map(v => v.match(/[0-9]+/g));
    const allNumbers = numbers.flat().filter(v => v);
    const sum = allNumbers.reduce((a, b) => Number(a) + Number(b));
    return sum / allNumbers.length;
}

console.log(returnHowManyLetters(dataArray));
console.log(sumNumbers(dataArray));
console.log(avgNumbers(dataArray));


//Zadanie 14

const obj = {
    name: '',
    surname: '',
    age: ''
  }
  console.log(obj);
  const modifyObj = (obj, newName, newSurname, newAge) => {
    obj.name = newName,
    obj.surname = newSurname,
    obj.age = newAge
    console.log(obj);
    if(obj.name.length > 5 || obj.surname.length > 5){
      const btn = document.createElement('button');
      btn.innerText = "Restore props";
      btn.addEventListener('click', () => {
        obj.name =  '';
        obj.surname = '';
        obj.age =  '';
        console.log(obj);
      })
      root.appendChild(btn);
      
      
    }
  }
  modifyObj(obj, 'Dominik', 'Pieprzyk', 21);
