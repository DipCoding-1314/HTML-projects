// simple calculator by Jay Khetalpar
// getting elemnts by DOM
let zero = document.querySelector("#zero");
let one =   document.querySelector("#one");
let two =   document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");
let mlpn = document.querySelector("#multiply");
let divison = document.querySelector("#division");
let equal = document.querySelector("#equal");
let text = document.querySelector("#text");
let answer = document.querySelector("#answer");
let clean = document.querySelector("#clear");

//add event listner

zero.addEventListener("click", e=>{
    text.textContent += 0;
});
one.addEventListener("click", e=>{
    text.textContent += 1;
});
two.addEventListener("click", e=>{
    text.textContent += 2;
});
three.addEventListener("click", e=>{
    text.textContent += 3;
});
four.addEventListener("click", e=>{
    text.textContent += 4;
});
five.addEventListener("click", e=>{
    text.textContent += 5;
});
six.addEventListener("click", e=>{
    text.textContent += 6;
});
seven.addEventListener("click", e=>{
    text.textContent += 7;
});
eight.addEventListener("click", e=>{
    text.textContent += 8;
});
nine.addEventListener("click", e=>{
    text.textContent += 9;
});
add.addEventListener("click", e=>{
    text.textContent += '+'
});
subtract.addEventListener("click", e=>{
    text.textContent += '-'
});
mlpn.addEventListener("click", e=>{
    text.textContent += '*';
});
divison.addEventListener("click", e=>{
    text.textContent += '/';
});
clean.addEventListener ("click", e=>{
    text.textContent = '';
})
equal.addEventListener("click", e=>{
    answer.textContent=`Answer: ${eval(text.textContent)}`;
    text.textContent= '';
});