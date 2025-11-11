var num1;
var num2;

function getnum(){
    num1 = parseInt(document.getElementById("input1").value);
    num2 = parseInt(document.getElementById("input2").value);
}

function plusFn(){
    getnum();
    document.getElementById("calcResult").innerText=num1 + num2;

    document.body.style.background="orange";
}

function minusFn(){
    getnum();
    document.getElementById("calcResult").innerText=num1 - num2;
    
    document.body.style.background="blue";
}

function multiFn(){
    getnum();
    document.getElementById("calcResult").innerText=num1 * num2;
    
    document.body.style.background="yellow";
}

function divFn(){
    getnum();
    document.getElementById("calcResult").innerText=num1 / num2;

    document.body.style.background="green";
}

function modFn(){
    getnum();
    document.getElementById("calcResult").innerText=num1 % num2;
    
    document.body.style.background="white";
}