
var key = document.getElementsByClassName("key");

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