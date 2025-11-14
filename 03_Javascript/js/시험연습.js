document.getElementById("btn1").addEventListener("click", function(){
    const size = document.getElementById("input1").value + "px";
    const color = document.getElementById("input2").value;

    document.getElementById("input3").style.color=color;
    document.getElementById("input3").style.fontSize=size;
});