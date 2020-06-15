const btn =document.getElementById("btn");
const inp1 =document.getElementById("input1");
const inp2 =document.getElementById("input2");
const h =document.getElementById("h1");


function myfunc(){
    if (inp1.value==" "||inp2.value==" ") {
        
        h.innerHTML="Pls Fill";
    }
let result =Number(inp1.value)+Number(inp2.value);
h.innerHTML="Your Result Is :"+result;
console.log(result);
let tasks=setInterval(() => {
    h.innerHTML="Your Task Is Complited ";
    clearInterval(tasks);

}, 3000);
let taskss=setInterval(() => {
    h.innerHTML="By Anin Arafath";
    clearInterval(taskss);

}, 5000);
let deb=setInterval(() => {
    h.innerHTML="Debug Media Tasks";
    inp1.value="";
    inp2.value="";
    clearInterval(deb);

}, 8000);
let com=setInterval(() => {
    if (result<100) {
        alert("Result is Less than 100");
        
    }
    else{
        alert("Result is Graeter than 100");
    }
    clearInterval(com);
}, 2000);


}