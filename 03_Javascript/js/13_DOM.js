document.querySelector("#btn1").addEventListener("click", () => {
    const ul = document.getElementById("test");

    const list = ul.childNodes;
    console.log(list);
    console.log(list[3]);

    list[3].parentNode.style.background="skyblue";
    
    console.log(ul.firstChild);
    console.log(ul.lastChild);

    ul.childNodes[9].style.background="pink";
    
    console.log(ul.childNodes[9].nextSibling.nextSibling);

    console.log(ul.lastChild.previousSibling);

   list[11].appendChild(document.createTextNode("ZZZ"));

    list[11].append("뒤쪽으로 append");

    list[11].prepend("앞쪽으로 prepend");

    ul.before("이전입니다.");
    ul.after("이후입니다.");
  });


document.getElementById("btn2").addEventListener("click", () => {

    const ul = document.getElementById("test2");
    console.log(ul.children);
    console.log(ul.firstElementChild);
    console.log(ul.lastElementChild);
    console.log(ul.parentElement);
    console.log(ul.previousElementSibling);
    console.log(ul.nextElementSibling);
    
});