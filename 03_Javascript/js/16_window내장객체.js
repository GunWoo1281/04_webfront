document.getElementById("btn1").addEventListener("click", () => {
    window.setTimeout(
        function(){
            alert("2초후 알림");
        }
    ,2000)
});


let clock= setInterval(function (){
    const now = new Date();
    
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    if(hour < 10) hour = "0" + hour;
    if(minute < 10) minute = "0" + minute;
    if(second < 10) second = "0" + second;

    document.getElementById("clock").innerText = hour +  " : " + minute + " : " + second;
}, 1000);

document.getElementById("stop").addEventListener("click", () => {
    window.clearInterval(clock);
});