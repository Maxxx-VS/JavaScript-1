let len = "";
let len_1 = "";
let len_2 = "";
let oper = "";

function acc(){
    len = "";
    len_1 = "";
    len_2 = "";
    oper = "";
    textInput.value = "";
}
function num1(){
    len += 1;
    let textInput = document.getElementById("textInput");
    textInput.value = len;
    console.log(len);
}
function num2(){
    len += 2;
    let textInput = document.getElementById("textInput");
    textInput.value = len;
    console.log(len);
}
function num3(){
    len += 3;
    let textInput = document.getElementById("textInput");
    textInput.value = len;
    console.log(len);
}
function num4(){
    len += 4;
    let textInput = document.getElementById("textInput");
    textInput.value = len;
    console.log(len);
}
function num5(){
    len += 5;
    let textInput = document.getElementById("textInput");
    textInput.value = len;
    console.log(len);
}
function num6(){
    len += 6;
    let textInput = document.getElementById("textInput");
    textInput.value = len;
    console.log(len);
}
function num7(){
    len += 7;
    let textInput = document.getElementById("textInput");
    textInput.value = len;
    console.log(len);
}
function num8(){
    len += 8;
    let textInput = document.getElementById("textInput");
    textInput.value = len;
    console.log(len);
}
function num9(){
    len += 9;
    let textInput = document.getElementById("textInput");
    textInput.value = len;
    console.log(len);
}
function num0(){
    len += 0;
    let textInput = document.getElementById("textInput");
    textInput.value = len;
    console.log(len);
}
function oper1(){
    len_1 = len;
    len = "";
    oper = "+";
}
function oper2(){
    len_1 = len;
    len = "";
    oper = "-";
}
function oper3(){
    len_1 = len;
    len = "";
    oper = "%";
}
function oper4(){
    len_1 = len;
    len = "";
    oper = "/";
}
function oper5(){
    len_1 = len;
    len = "";
    oper = "*";
}
function oper6(){
    let count = 0;
    if (oper === "+") {
        count = Number(len_1) + Number(len)
        console.log(count)
    } else if (oper === "-") {
        count = len_1 - len
        console.log(count)
    }  else if (oper === "*") {
        count = len_1 * len
        console.log(count)
    } else if (oper === "/") {
        count = len_1 / len
        console.log(count)
    } else if (oper === "%") {
        count = len_1 / 100 * len
        console.log(count)
    }
    len = count;
    textInput.value = count;
}