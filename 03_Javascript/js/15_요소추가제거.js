const container = document.getElementsByClassName("container")[0];

document.getElementById("add").addEventListener("click", () => {
    const row = document.createElement("div");
    row.classList.add("row");

    const input = document.createElement("input");
    input.type = "text";

    const button = document.createElement("button");
    button.innerHTML = "<span>&times;</span>";

    button.addEventListener("click", () => {
        row.remove();
    });

    row.append(input);
    row.append(button);
    container.append(row);
});

document.getElementById("calc").addEventListener("click", () => {
    let sum = 0;1
    for(let i = 0; i < container.children.length; i++){
        sum += parseInt(container.children[i].children[0].value);
    }
    alert(sum);
});