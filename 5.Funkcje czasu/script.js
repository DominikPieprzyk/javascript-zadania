//Zadanie 1

let d = 1;
const timer = setInterval(function(){
    if(d <= 15){
        console.log(`Cześć po raz ${d}`);
        d++;
    }
    else clearInterval(timer);
}, 3000);

//Zadanie 2 

const array = ['rower', 'anything','container','item'];
let p = 0;
setTimeout(() => {
    console.log(array);
    const timer = setInterval(function(){
        if(p < array.length){
            console.log(array[p])
            p++;
        }
        else clearInterval(timer);
    }, 3000)
}, 2000);
