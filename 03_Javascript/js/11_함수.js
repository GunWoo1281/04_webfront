const input1 = document.querySelector("#input1");
const btn1 = document.querySelector("#btn1");

function print1(a, b){
    console.log(`${a}는 ${b}이다.`);
}


btn1.addEventListener("click",function(){
    const value = input1.value;
    
    if (value.length == 0){
        console.log("값을 입력하세요");
        return;
    }

    let result;

    if(parseInt(value) === 0) result = "0";
    else if(parseInt(value) > 0) result = "양수";
    else result = "음수";

    print1(value,result);
});

function arrayTest(arr,num){
    for(var i = 0; i<arr.length; i++){

        if(arr[i]=="딸기"){
            arr[i]="멜론";
            num=100;
        }

        console.log(`${i}번째 인덱스 값 : ${arr[i]}`);
    }
}


document.querySelector("#btn2a").addEventListener("click", function() {
    const arr = ["사과","바나나","딸기"];
    let x = 0; 

    arrayTest(arr, x);
    console.log(x);
});


function btn2bFn(el){
    el.style.background="yellow";
}


function print2(fn){
    console.log(`a + b =  ${fn(3,4)}`);
}


document.querySelector("#btn2c").addEventListener("click", function() {
    const sumFn = function(a, b){
        return a + b;
    }

    print2(sumFn);
});


const arr = document.getElementsByClassName("arrow");

arr[0].addEventListener("click", () => { 
    alert("화살표 함수 기본 형태");
});

arr[1].addEventListener("click", e => { 
    e.target.style.background="pink";
    console.log(this);
});

arr[2].addEventListener("click", () => { 
    twoNumverPlus( (a, b) => a + b );
});

const twoNumverPlus = (otherfn) => {
    alert(otherfn(1,2));
};


arr[3].addEventListener("click", () => {
    printObject( (name, age) => {
        return { "name" : name, "age" : age}
    });
});

function printObject(otherfn){
    const obj = otherfn("홍길동",20);
    console.log(obj);
}


(()=>{
   console.log("11_함수.js 파일 로드됨") 
})();


