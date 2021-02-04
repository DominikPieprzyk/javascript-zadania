//Zadanie 1 

let num1 = 7;
let num2= 14;

if(num1 > num2){
    console.log("num1 jest większa");
}else{
    console.log("num2 jest większa");
}

//Zadanie 2

let num3 = 10;
let num4 = 132;
let num5 = 45;

if(num3>num4 && num3 > num5){
    console.log(`num3 (${num3}) największą liczbą`);
}else if(num4 > num3 && num4 > num5){
    console.log(`num4 (${num4}) największą liczbą`);
}else{
    console.log(`num5 (${num5}) największą liczbą`);
}

//Zadanie 3

for(var n=0; n > 10; n++){
    console.log("Lubię JavaScript!");
}

//Zadanie 4

let result = 0;
for(let j = 1; j < 11; j++){
    result += j;
}

//Zdanie 5

var n = 5; 
for(let k = 0; k <= n; k++){
    console.log(`${k} - ${k % 2 === 0 ? 'parzysta' : 'nieparzysta'}`);
}

//Zadanie 6

for (let d = 0; d < 3; d++) {
    for (let p = 0; p < 3; p++) {
        console.log("i= " + d + ", j= " + p);
    }
}

//Zadanie 7

for(let d = 0; d <= 100; d++){
    isMod3 = d % 3 === 0 ? 'Fizz' : '';
    isMod5 = d % 5 === 0 ? 'Buzz' : '';

    const result = isMod3 + isMod5;
    console.log(result || d);
}

//Zadanie 8
    
//a
    
let stars ='*';
let spacer = ' ';
for(var a = 0; a < 5; a++){
  var result ='';
  for(var b = 0; b <= a; b++){
    result += stars;
  }
  console.log(result);
}

//b
        
let stars ='*';
let spacer = ' ';
for(var c = 0; c < 5; c++){
  var result = '';
  for(var d = 5 - 1; d > c; d--){
    result += spacer;
  }
  for(var e = 0; e <= c; e++){
    result += stars + spacer; 
  }
  console.log(result);
}
        
//c

let stars ='*';
let spacer = ' ';
for(var c = 0; c < 5; c++){
  var result = '';
  for(var d = 5 - 1; d > c; d--){
    result += spacer;
  }
  for(var e = 0; e <= c; e++){
    result += stars;
    result += (e < c) ? stars : ''; 
  }
console.log(result);
}

//d

let stars = '*';
let spacer = ' ';
for(var f = 0; f < 11; f++){
  var result = '';
  for(var g = 0; g < 5; g++){
    if(f < 5){
      result += g <= f ? stars : g;
    }else if(f > 5){
      result = (g < f-6 ? (g - 4)*-1 : stars) + result;
    }else{
      result = "-----"
    }
}

console.log(result);

}

//e

let stars ='*';
let spacer = ' ';
for(var c = 0; c < 8; c++){
  var result = '';
  for(var d = 4; d > c; d--){
    result += spacer;
  }
  for(var e = 0; e <= c; e++){
    result += stars + spacer;
  }
  if(c >= 5){
    result = '';
    for(var f = 0; f < 4; f++){
      result += spacer;
    }
    result += stars;
  }
console.log(result);

}
