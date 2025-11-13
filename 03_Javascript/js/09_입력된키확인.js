/* 키와 맵 코드
var key = document.getElementsByClassName("key");

// 키와 인덱스 매핑
var keyMap = {
    'q': 0,
    'w': 1,
    'e': 2,
    'r': 3
};

// 키 이벤트 핸들러
function handleKeyEvent(e, color) {
    var keyIndex = keyMap[e.key.toLowerCase()];
    if (keyIndex !== undefined) {
        key[keyIndex].style.background = color;
    }
}

document.addEventListener("keydown", function(e) {
    handleKeyEvent(e, "hotpink");
});

document.addEventListener("keyup", function(e) {
    handleKeyEvent(e, "white");
});
*/

var key = document.getElementsByClassName("key");
//스파게티
document.addEventListener("keydown", function(e){
    if(e.key.toLowerCase()=='q') key[0].style.background="hotpink";
    if(e.key.toLowerCase()=='w') key[1].style.background="hotpink";
    if(e.key.toLowerCase()=='e') key[2].style.background="hotpink";
    if(e.key.toLowerCase()=='r') key[3].style.background="hotpink";
});

document.addEventListener("keyup", function(e){
    if(e.key.toLowerCase()=='q') key[0].style.background="white";
    if(e.key.toLowerCase()=='w') key[1].style.background="white";
    if(e.key.toLowerCase()=='e') key[2].style.background="white";
    if(e.key.toLowerCase()=='r') key[3].style.background="white";
});
