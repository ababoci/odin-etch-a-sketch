container = document.querySelector(".container")

for (let i = 0; i < 16; i++) {
    new_div = document.createElement("div");
    new_div.classList.add("grid");
    container.append(new_div);
}