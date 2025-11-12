var amount = 0;
let balance = 10000; 
const password = '1234';

window.onload = function(){
    document.getElementById("output").innerText=balance;
}

function deposit(){
    if(getmoney()){
        document.getElementById("output").innerText= balance + amount;
    }
}

function withdrawal(){
    if(getmoney()){
        var input_password = prompt("비밀번호 입력");

        if(input_password == password){
            if(balance<amount){
                alert("출금 금액이 잔액보다 클 수 없습니다")
            }
            else{
                document.getElementById("output").innerText=balance-amount;
            }
        }
        else{
            alert("비밀번호가 일치하지 않습니다");
        } 
    }
}

function getmoney(){
    balance=parseInt(document.getElementById("output").innerText);
    amount=parseInt(document.getElementById("amount").value);

    if(isNaN(parseInt(document.getElementById("amount").value))){
        alert("금액부터 입력하세요");
        return false;
    }
    else{
        return true;
    }
}