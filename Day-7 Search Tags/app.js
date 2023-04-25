const searchBox = document.querySelector(".searchBox__content ul");
const input = document.querySelector(".searchBox__input");
const btnRemoveAll = document.querySelector(".btnRemoveAll");

let tags = ["ReactJs", "Javascript"];

const deleteBtn = (index) => {
  tags.splice(index, 1);
  render();
};

const render = () => {
  searchBox.innerHTML = ``;
  tags.forEach((item, index) => {
    searchBox.innerHTML += `
            <li class="searchBox__item">
            ${item}
            <i class="fas fa-times" onclick="deleteBtn(${index})"></i>
            </li>`;
  });
  searchBox.appendChild(input);
  input.focus();
};
render();

input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    tags.push(input.value.trim());
    input.value = "";
    render();
  }
});

btnRemoveAll.addEventListener("click", () => {
  tags = [];
  render();
});
