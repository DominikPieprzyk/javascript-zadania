// Zadanie 1 

const array = ['Item','confing','display'];
console.log(array[0] + " "+ array[1] +" "+ array[2]);

//Zadanie 2

const array1 = ['', 21, 123, '', null, -12, 344,'Yes'];
//1.

console.log(array1[0], array1[1]);

//2.

console.log(array1[array1.length-1]);

//3.

array1.forEach((p)=>{
    console.log(p);
});

//4.

array1.filter((p, d) => d % 2 === 0).forEach(()=> {
    console.log(p);
})

//5.

array1.filter((p) => typeof (p) === 'string').forEach((p) => {
    console.log(p);
})

//6.

array1.filter((p, d) => typeof (p) === 'number').forEach((p) =>{
    console.log(p);
})



//Zadanie 3

const array2 = [12, 32, 24, 64, 2, 7, 789];

//1.

console.log(array2.reduce((a, b) => a + b));

//2.

console.log(array2.reduce((a, b) => a - b));

//3.

console.log(array2.reduce((a, b) => a + b) /array2.length);

//4.

array2.filter((p, d) => p%2 === 0).forEach((p)=>{
    console.log(p);
});

//5.

array2.filter((p, d) => p%2 !== 0).forEach((p)=>{
    console.log(p);
});

//6.

let biggest = 0;
array2.forEach(p => {
    if(p > biggest){
        biggest = p;
    }
});

//7. 

console.log(biggest);
let smallest = 0;
array2.forEach(p => {
    if(p < smallest){
        smallest = p;
    }
});

//8.

console.log(smallest);
const array2Length = array2.length -1;
array2.forEach((p, d) => {
    console.log(array2[array2.length - p]);
});


//Zadanie 4

function sumAndPrint(array2){
    console.log(array2.reduce((a, b) => a + b));
}

sumAndPrint([1, 2, 3, 4]);

//Zadanie 5

function printElementsXAvg(array2){
    const avg = array2.reduce((a, b) => a + b) / array2.length;
    array2.forEach((p) => {
        console.log(p * avg);
    });
}

printElementsXAvg([1, 2, 3, 4]);

//Zadanie 6

function evenAvg(array2){
    const evenNums = array2.filter((p, d) => p % 2===0);
    return evenNums.reduce((a, b) => a + b) / evenNums.length;
}

console.log(evenAvg([1, 2, 3, 4]));

//Zadanie 7

let array3 = [2, 52, 21, -4, 24, 5]
function sort(array3){
    return array3.sort((a, b) => a -b)
}

console.log(sort(array3));

//Zadanie 8

function sumIndexesOfTwoArrays(array1, array2){
    let arraySum = 0;
    array1.forEach((p, d) => arraySum += d);
    array2.forEach((p, d) => arraySum += d);
    return arraySum;
}

// 0 + 1 + 0 + 1 + 2

console.log(sumIndexesOfTwoArrays(['el', 'el'],['el', 'el', 'el']));

//Zadanie 9

let array4 = [1, 4, 5, 12, -2];
function dropFromArray(array, el){
    return array.filter((item) => item != el);
}

console.log(dropFromArray(array4, 4));

//Zadanie 10


function reserveSing(paramTable)
{
  return  paramTable.map(el => {
    return el * (-1);
  })
}
console.log(reserveSing([1,2,3,4,6,-6]));
