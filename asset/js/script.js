
//task day 1
const btn =document.getElementById("btn");
const inp1 =document.getElementById("input1");
const inp2 =document.getElementById("input2");
const h =document.getElementById("h1");
const day_1_hedder =document.getElementById("day");
/*day2*/
const day_2_hedder =document.getElementById("day-2-hedder");
const day_2_inp =document.getElementById("inp_day_2");
const day_2_btn2 =document.getElementById("btn2");
const day_2_con =document.getElementById("day-2-con");
const day_2_hidden =document.getElementById("err");
const greeting =document.getElementById("para");
/*day3*/
const btn3 =document.getElementById("btn3");
const bulb =document.getElementById("bulb");
const h6 =document.getElementById("3conbtn");
const h1 =document.getElementById("h1-h1");


function myfunc(){
    if (inp1.value==""||inp2.value=="") {
        
        inp1.style.borderBottom="2px solid red";
        inp2.style.borderBottom="2px solid red";
        h.style.textDecoration="none";
        h.style.color="red";

        h.innerHTML="Pls Fill The Input Box"

    }
    else{
        h.style.textDecoration="underline";
        inp1.style.borderBottom="1px solid rgba(110, 106, 106, 0.726)";
        inp2.style.borderBottom="1px solid rgba(110, 106, 106, 0.726)";
        h.style.color="rgb(6, 112, 173)";
        h.style.transition="none";
let result =Number(inp1.value)+Number(inp2.value);
day_1_hedder.innerHTML="Your Result Is :"+result;
console.log(result);
let tasks=setInterval(() => {
    h.innerHTML="Your Task Is Complited ";
    clearInterval(tasks);
    let debu= setInterval(() => {
       h.innerHTML="Debug Media Tasks";
        clearInterval(debu);
    }, 2000);

}, 3000);
let taskss=setInterval(() => {
    day_1_hedder.innerHTML="By Anin Arafath";
    clearInterval(taskss);
    let next_mess= setInterval(() => {
        day_1_hedder.innerHTML="come to next task";
        clearInterval(next_mess);
    }, 1000);
}, 5000);
let deb=setInterval(() => {
    day_1_hedder.innerHTML="Day 1 Task";
    inp1.value="";
    inp2.value="";
  
  
    let debb= setInterval(() => {
        window.scrollBy(0,720);
        clearInterval(debb);
    }, 2000);
    let day= setInterval(() => {
        day_2_hedder.innerHTML="Welcome To Task-2"
        clearInterval(day);
    }, 2000);
     let dayy= setInterval(() => {
        day_2_hedder.innerHTML="Day 2 Task"
        clearInterval(dayy);
    }, 4000);
    
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
}
//end task day 2
//day 2 task
function day_2_func(){
    if (day_2_inp.value==="") {
        day_2_inp.style.borderBottom="2px solid red";
        day_2_hidden.style.visibility="visible";
        day_2_hidden.innerHTML="Pls Enter Your Name";
        day_2_con.style.height="145px";
        day_2_con.style.transition="2s ease-in-out";
        day_2_btn2.style.transition="1s ease-in-out";
        day_2_inp.style.transition="1s ease-in-out";
        day_2_con.style.top=" -10px;";
        day_2_inp.style.marginTop="39px"
        
      

    }
    else{
        day_2_hidden.style.visibility="hidden";
        day_2_inp.style.marginTop="40px"
        day_2_inp.style.borderBottom="1.5px solid rgb(255, 0, 119)"
        day_2_con.style.height="145px";
        
    day_2_inp.style.visibility="hidden";
    day_2_btn2.style.visibility="hidden";
    day_2_con.style.transform = "rotateY(180deg)";
    let name=day_2_inp.value;
    greeting.style.top="3px";
    greeting.style.left=" -5px";
    greeting.style.fontSize=" 15px";
   let ss= setInterval(() => {
        greeting.style.visibility="visible";
        greeting.innerHTML="hai ,"+name+"  Wishing you a bright and colorful future in which all your dreams come true.May God shower his blessings on you today. All the best.";
        
   clearInterval(ss)
    }, 2000);
    let ab=setInterval(() => {
        greeting.style.visibility="hidden";
        clearInterval(ab);
    }, 5000);
    let abc=setInterval(() => {
        day_2_con.style.transform = "rotateY(0deg)";
        clearInterval(abc);
    }, 7000);
    let abd=setInterval(() => { 
    day_2_inp.style.visibility="visible";
    
    day_2_btn2.style.visibility="visible"; 
    day_2_hedder.style.width="250px";
    day_2_hedder.innerHTML="Your Task Is Complited";

    day_2_inp.value="";
    clearInterval(abd);
    }, 9000);
    setInterval(() => {
        day_2_hedder.style.width="185px";
        day_2_hedder.innerHTML="Day 2 Task";
    }, 11000);
    setInterval(() => {
        day_2_hedder.style.width="185px";
        day_2_hedder.innerHTML="Come To Next Task";
    }, 12000);

    let debbf= setInterval(() => {
        window.scrollBy(0,1020);
        clearInterval(debbf);
    }, 14000);
}
}

/*day3*/
var flag=0;
function btn_3(){

switch (flag) {
    case 0:
        bulb.style.visibility="visible";
        console.log("switch is on");
        h6.innerHTML="OFF"
        flag=1;
        
        break;
    case 1:
        bulb.style.visibility="hidden";
        console.log("switch is off");
        h6.innerHTML="ON"
        flag=0;
       let bbb= setInterval(() => {
            h1.innerHTML="Your Task Is complited";
            clearInterval(bbb);
        }, 1000);
        let bbbc=setInterval(() => {
            h1.innerHTML="By Anin Arafath";
            clearInterval(bbbc);
        }, 3000);
        let bbbcc=setInterval(() => {
            h1.innerHTML="Debug Media Tasks";
            clearInterval(bbbcc);
        }, 5000);
       
        
        break;
}

}
