document.getElementById("btn1").addEventListener("click", () => {
    const regExp1 = new RegExp("script");

    const regExp2 = /java/;

    const str1 = "저희는 지금 javascript를 공부하고 있습니다.";
    const str2 = "jsp(java server page)도 곧 할겁니다";
    const str3 = "java, java, java";

    console.log(regExp1.test(str1));
    console.log(regExp1.test(str2));
    console.log(regExp1.test(str3));
    

    console.log(regExp2.test(str1));
    console.log(regExp2.test(str2));
    console.log(regExp2.test(str3));


    console.log(regExp1.exec(str1));
    console.log(regExp1.exec(str2));
    console.log(regExp1.exec(str3));


    console.log(regExp2.exec(str1));
    console.log(regExp2.exec(str2));
    console.log(regExp2.exec(str3));

});

document.getElementById("btn2").addEventListener("click", () => {
    const regExp1 = /[abcd]/;
    console.log(regExp1.test("apple"));
    console.log(regExp1.test("ssbss"));
    console.log(regExp1.test("qwerty"));
    console.log(" ");
    const regExp2 = /^group/;
    console.log(regExp2.test("group100"));
    console.log(regExp2.test("100group"));
    console.log(" ");
    const regExp3 = /group$/;
    console.log(regExp3.test("group100"));
    console.log(regExp3.test("100group"));
    
});

document.getElementById("inputName").addEventListener("keyup", () => {
    const regExp1 = /^[ㄱ-힣]{2,5}$/;
    
    if(document.getElementById("inputName").value==""){
        document.getElementById("inputNameResult").innerText=""
    }
    else{
        if(regExp1.test(document.getElementById("inputName").value)){
            document.getElementById("inputNameResult").innerText="유효한 형식 이름입니다."
            document.getElementById("inputNameResult").style.color="green";
            document.getElementById("inputNameResult").style.fontWeight="bold";
        }
        else{
            document.getElementById("inputNameResult").innerText="이름 형식이 유효하지 않습니다."
            document.getElementById("inputNameResult").style.color="red";
            document.getElementById("inputNameResult").style.fontWeight="bold";
        }
    }
});


document.getElementById("inputPno").addEventListener("keyup", () => {
    const regExp1 = /^[0-9]{6}-[1-4][0-9]{6}$/;
    
    if(document.getElementById("inputPno").value==""){
        document.getElementById("inputPnoResult").innerText=""
    }
    else{
        if(regExp1.test(document.getElementById("inputPno").value)){
            document.getElementById("inputPnoResult").innerText="정상입니다."
            document.getElementById("inputPnoResult").style.color="green";
            document.getElementById("inputPnoResult").style.fontWeight="bold";
        }
        else{
            document.getElementById("inputPnoResult").innerText="주민번호 형식에 맞게 입력하세요."
            document.getElementById("inputPnoResult").style.color="red";
            document.getElementById("inputPnoResult").style.fontWeight="bold";
        }
    }
});