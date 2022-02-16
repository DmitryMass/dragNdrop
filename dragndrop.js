const item = document.querySelector(".item");
const placeHolders = document.querySelectorAll(".placeholder");

item.addEventListener("dragstart", dragStart);
item.addEventListener("dragend", dragEnd);

for (const placeholder of placeHolders) {
  //   console.log(placeholder);
  placeholder.addEventListener("dragover", dragOver);
  placeholder.addEventListener("dragenter", dragEnter);
  placeholder.addEventListener("dragleave", dragLeave);
  placeholder.addEventListener("drop", dragDrop);
}

function dragStart(event) {
  //   console.log("drag start", event.target);  Это и есть сам елемент Айтем
  event.target.classList.add("hold");
  setTimeout(() => {
    event.target.classList.add("hide");
  }, 0);
}
function dragEnd(event) {
  //   console.log("drag end");
  event.target.className = "item";

  //   event.target.classList.remove("hold");
  //   event.target.classList.remove("hide");

  //   Так же можно использовать еще 2 варианта
  //  event.target.classList.remove("hold", "hide")
}

function dragOver(item) {
  item.preventDefault();
}
function dragEnter(event) {
  event.target.classList.add("hovered");
  //   console.log("drag enter");
}
function dragLeave(event) {
  event.target.classList.remove("hovered");
  //   console.log("drag Leave");
}
function dragDrop(event) {
  event.target.classList.remove("hovered");
  event.target.append(item);
  //   console.log("drag drop");
}
