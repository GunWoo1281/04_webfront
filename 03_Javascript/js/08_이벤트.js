const test1a = document.querySelector("#test1-1");

test1a.onclick = function() {
    alert("고전 이벤트 모델 확인 버튼 클릭됨");
}

document.querySelector("#test1-2").onclick = function() {
    test1a.onclick = null;
    alert("고전 이벤트 모델 제거됨");
}

const test1c = document.querySelector("#test1-3");

test1c.onclick = function(){
    test1c.style.background="red";
}

test1c.onclick = function(){
    test1c.style.color="white";
}

const test2 = document.querySelector("#test2");

test2.addEventListener("click", function() {
    if (test2.style.opacity == "") {
        test2.style.opacity = 1;
    }
    test2.style.opacity -= 0.1;

    if(test2.style.opacity==0){
        test2.style.opacity=1;
    }
});

var count = 0;
test2.addEventListener("click", function() {
    count++;
    this.innerText="클릭!!! "+ count;
});



document.getElementById("box3").onclick = function(){
    if(document.getElementById("box3").style.background==''){
        document.getElementById("box3").style.background="white";
    }
    alert(document.getElementById("box3").style.background);
}

function enter(){
   if(document.getElementById("input3").value != ''){
    document.getElementById("box3").style.background=document.getElementById("input3").value;
   }
}