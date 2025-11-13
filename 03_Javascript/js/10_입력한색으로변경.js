//1. 함수 호출 형식
// function changecolor(){
//     const box = document.getElementsByClassName("box");
//     const input = document.getElementsByClassName("color-input");

//     for(var i = 0; i<box.length; i++){
//         if(input[i].value=='')
//         {
//             box[i].style.background="black";
//         }
//         else{
//             box[i].style.background=input[i].value;
//         }
//     }
// }


//2. 고대 함수 호출방식
// document.getElementById("changeButton").onclick = function(){
//     const box = document.getElementsByClassName("box");
//     const input = document.getElementsByClassName("color-input");

//     for(var i = 0; i<box.length; i++){
//         if(input[i].value=='')
//         {
//             box[i].style.background="black";
//         }
//         else{
//             box[i].style.background=input[i].value;
//         }
//     }
// };


//3. 권장 방식
document.getElementById("changeButton").addEventListener("click", function() {
    const box = document.getElementsByClassName("box");
    const input = document.getElementsByClassName("color-input");

    for(var i = 0; i<box.length; i++){
        if(input[i].value=='')
        {
            box[i].style.background="black";
        }
        else{
            box[i].style.background=input[i].value;
        }
    }
});