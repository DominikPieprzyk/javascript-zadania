//Zadanie 1 
function printMadeIt(){
    console.log('Udało się!');
}

printMadeIt();

//Zadanie 2
function print(param){
    console.log(param);
}

print('test param');

//Zadanie 3

function getArray(someArray){
    return someArray;
}

console.log(['dog','dogs','doggo']);

//Zadanie 4

function printString(str){
    let p  = 0;
    const timer = setInterval(()=>{
        if(p < 5){
            console.log(str);
            p++;
        }
        else{
            console.log("Koniec");
            clearInterval(timer);
        }
    }, 3000)
}

printString("Please, wait.");
