//1번 문제
function hello(name){
    console.log("Hello, [" + name + "]!");
};

//2번 문제
function sum(num1,num2){
    console.log("두 숫자의 합 : "+ (num1+num2));
};

//3번 문제
const multiple = (num1, num2) => {
    console.log("두 숫자의 곱 : " + (num1*num2));
};

//4번 문제
function compare(num1,num2){
    if(num1>num2) alert("첫 번째 숫자가 더 큽니다");
    else if(num1<=num2) alert("두 번째 숫자가 더크거나 같습니다.");
    else alert("숫자를 입력한게 맞나요?")
};

//5번 문제
function stringLenth(string){
    console.log("입력한 문자열의 길이 : " + string.length);
};

//6번 문제
function loop(string,cnt){
    for(var i=0; i<cnt; i++){
        console.log(`${i}번째 출력 : ` + string);
    }
};

//7번 문제
function jjak(num1){
    console.log("짝수 여부 :", num1%2==0);
};

//8번 문제
function compareNum(num1, num2, num3){
    var max = num1;
    if (num2 > max) max = num2;
    if (num3 > max) max = num3;
    console.log("가장 큰 수 :", max);
};

//9번 문제
const returnFirst = (arr) => {
    console.log(arr[0]);
};

//10번 문제
function returnSumAvg(arr){
    let sum = 0;
    let avg = 0;

    for(let i=0; i<arr.length; i++){
        sum += arr[i]
    }
    avg = sum/arr.length;
    console.log("합 : " + sum + ", 평균 : " + avg);
};

//11번 문제
function circulate(num1, num2){
    var result= "숫자1 + 숫자2 = " + (num1+num2)+ "\n" +
                "숫자1 - 숫자2 = " + (num1-num2)+ "\n" +
                "숫자1 * 숫자2 = " + (num1*num2)+ "\n" +
                "숫자1 / 숫자2 = " + (num1/num2);
    return result;
};

function resultReturn(num1, num2, circulate){
    console.log(circulate(num1,num2));
};

//12번 문제
function printHello(name,insamal){
    console.log(name + "님, " + insamal);
}
