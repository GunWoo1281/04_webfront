function classTest() {
    document.getElementsByClassName("cls-test")[0].style.background="blue"
    document.getElementsByClassName("cls-test")[1].style.background="red"
    document.getElementsByClassName("cls-test")[2].style.background="pink"
}

function tagNameTest() {
    document.getElementsByTagName("li")[0].style.background=document.getElementsByTagName("li")[0].innerText;
    document.getElementsByTagName("li")[1].style.background=document.getElementsByTagName("li")[1].innerText;
    document.getElementsByTagName("li")[2].style.background=document.getElementsByTagName("li")[2].innerText;
    document.getElementsByTagName("li")[3].style.background=document.getElementsByTagName("li")[3].innerText;
    document.getElementsByTagName("li")[4].style.background=document.getElementsByTagName("li")[4].innerText;
}

function nameTest(){
    document.getElementById("name-div").innerHTML = "";
    document.querySelectorAll('input[type="checkbox"]:checked').forEach((value, index) => {
        document.getElementById("name-div").innerHTML += value.value + " ";
    });
    document.getElementById("name-div").innerHTML += "<br/>" + "선택된 취미 개수 : " + 
    document.querySelectorAll('input[type="checkbox"]:checked').length;
}

function cssTest(){
    document.querySelector('[target-div="css-div"] > div').style.background="yellow";
    document.querySelector('[target-div="css-div"] > div').innerText="CSS 단일 선택자로 선택하여 값 변경됨";
    document.querySelector('[target-div="css-div"] > div:nth-child(2)').style.background="green";
    document.querySelector('[target-div="css-div"] > div:nth-child(2)').innerText="첫번째 요소가 아니면 querySelector() 특징 활용 못함";
    document.querySelector('[target-div="css-div"]').style.border="10px solid red";

    document.querySelectorAll('[target-div="css-div"] > div')[0].style.fontFamily="궁서";

    document.querySelectorAll('[target-div="css-div"] > div')[1].style.fontSize="20px";
}

function readValue(){
    if(document.getElementById("user-input").value.trim() !=''){
        document.getElementById("chatting-bg").insertAdjacentHTML('beforeend','<p><span>'+ document.getElementById("user-input").value+ '</span></p>');
        document.getElementById("chatting-bg").scrollTop = document.getElementById("chatting-bg").scrollHeight;
    }
    else{
        alert("채팅내용을 입력해주세요.")
        document.getElementById("user-input").value="";
        document.getElementById("user-input").focus();
        return;
    }
}