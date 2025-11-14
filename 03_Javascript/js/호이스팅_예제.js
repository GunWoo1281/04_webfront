// ==========================================
// JavaScript 호이스팅(Hoisting) 예제 파일
// ==========================================

console.log("========== 1. var의 호이스팅 ==========");

// 호이스팅이란? 
// - JavaScript에서 변수 선언과 함수 선언이 스코프의 최상단으로 "끌어올려지는" 현상
// - 실제 코드가 이동하는 것은 아니고, 실행 전 JavaScript 엔진이 메모리 공간을 먼저 확보하는 것

console.log("현재 x의 값:", x); // undefined (에러가 발생하지 않음!)
// 선언 전에 변수를 사용했는데도 에러가 발생하지 않는 이유: 호이스팅 때문

var x = 10; // 변수 선언과 초기화

console.log("초기화 후 x의 값:", x); // 10

/*
위 코드는 실제로는 다음과 같이 동작합니다:

var x;              // 선언이 스코프 최상단으로 끌어올려짐 (메모리 공간만 확보, 값은 undefined)
console.log(x);     // undefined 출력
x = 10;             // 실제 할당이 이 위치에서 이루어짐
console.log(x);     // 10 출력
*/

console.log("\n========== 2. let과 const의 호이스팅 ==========");

// let과 const도 호이스팅이 됩니다! (하지만 var와 다르게 동작)
// TDZ(Temporal Dead Zone): 선언은 호이스팅되지만, 초기화 전까지 접근할 수 없는 구간

// console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization
// let y = 20;     // TDZ 구간 - 선언 전에 접근하면 에러 발생

let y;             // 선언만 함 (undefined로 초기화됨)
console.log("y의 값:", y); // undefined (이제 접근 가능)

y = 20;            // 할당
console.log("할당 후 y의 값:", y); // 20

// const는 반드시 선언과 동시에 초기화해야 함
// const z; // ❌ SyntaxError: Missing initializer in const declaration

const z = 30;
console.log("const z의 값:", z);

console.log("\n========== 3. 함수 호이스팅 ==========");

// 함수 선언문(function declaration) - 완전히 호이스팅됨
sayHello(); // ✅ 정상 동작! (선언 전에 호출 가능)

function sayHello() {
    console.log("안녕하세요! 함수 선언문입니다.");
}

// 함수 표현식(function expression) - 변수 호이스팅만 적용됨
// sayGoodbye(); // ❌ TypeError: sayGoodbye is not a function

var sayGoodbye = function() {
    console.log("안녕히 가세요! 함수 표현식입니다.");
};

sayGoodbye(); // ✅ 정상 동작 (선언 후에 호출)

// let/const로 선언한 함수 표현식 - TDZ 적용
// sayHi(); // ❌ ReferenceError: Cannot access 'sayHi' before initialization

const sayHi = function() {
    console.log("안녕! const 함수 표현식입니다.");
};

sayHi(); // ✅ 정상 동작

console.log("\n========== 4. var vs let vs const 호이스팅 비교 ==========");

console.log("--- var의 경우 ---");
console.log("varA:", varA); // undefined (에러 없음)
var varA = "var 변수";
console.log("varA:", varA); // "var 변수"

console.log("\n--- let의 경우 ---");
// console.log("letB:", letB); // 주석 해제 시 ReferenceError 발생
let letB;
console.log("letB:", letB); // undefined
letB = "let 변수";
console.log("letB:", letB); // "let 변수"

console.log("\n--- const의 경우 ---");
// console.log("constC:", constC); // 주석 해제 시 ReferenceError 발생
const constC = "const 변수";
console.log("constC:", constC); // "const 변수"

console.log("\n========== 5. 스코프와 호이스팅 ==========");

var outer = "외부 변수";

function testScope() {
    console.log("함수 내부에서 outer:", outer); // undefined (var는 함수 스코프)
    
    // 함수 내부에서 outer 변수가 선언되면, 
    // 전체 함수 스코프에서 그 변수가 우선순위를 가짐 (호이스팅)
    var outer = "내부 변수";
    console.log("할당 후 outer:", outer); // "내부 변수"
}

testScope();
console.log("함수 외부에서 outer:", outer); // "외부 변수"

console.log("\n========== 6. 실제 개발 시 주의사항 ==========");

// ❌ 나쁜 예: var를 사용한 잘못된 코드
function badExample() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function() {
            console.log("badExample - i:", i); // 모두 3이 출력됨
        }, 100);
    }
}
badExample();

// ✅ 좋은 예: let을 사용한 올바른 코드
function goodExample() {
    for (let j = 0; j < 3; j++) {
        setTimeout(function() {
            console.log("goodExample - j:", j); // 0, 1, 2가 출력됨
        }, 200);
    }
}
setTimeout(goodExample, 500);

console.log("\n========== 7. 호이스팅 동작 순서 정리 ==========");
console.log(`
호이스팅 우선순위 (위에서 아래로):
1. 함수 선언문 (function declaration) - 가장 먼저 호이스팅
2. var 변수 선언 - undefined로 초기화되어 호이스팅
3. let/const 변수 선언 - TDZ에 있음 (선언은 호이스팅되지만 접근 불가)
4. 함수 표현식 - 변수 호이스팅 규칙 따름
`);

// 예제로 확인
console.log("함수 선언문:", hoistedFunction); // ✅ 함수 전체가 출력됨
console.log("var 변수:", hoistedVar); // undefined

var hoistedVar = "var 변수";
function hoistedFunction() {
    return "함수 선언문";
}

