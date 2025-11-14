const boxContainer = document.getElementsByClassName("test box-container")[0];

document.getElementById("createBox").addEventListener("click", () => {
    
    const box = document.createElement("div");
    box.classList.add("box");

    const input = document.createElement("input");
    input.type = "text";

    box.append(input);
    boxContainer.append(box);
});

document.getElementById("innerHTMLBox").addEventListener("click", () => {
    boxContainer.innerHTML+='\n    <div class="box">\n      <input type="text">\n    </div>\n  ';
});
