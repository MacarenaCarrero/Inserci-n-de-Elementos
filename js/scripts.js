const buttonElement = document.getElementById("button");
const listElement = document.getElementById("list");
let counter = 0;

const addItem = () => {
  const itemElement = document.createElement("li");
  itemElement.textContent = "Item " + counter++;
  listElement.append(itemElement);
};

buttonElement.addEventListener("click", addItem);

//

const rangeElement = document.getElementById("range");
const labelElement = document.getElementById("label");
const button2Element = document.getElementById("button2");
const containerElement = document.getElementById("container");

const generateHeader = () => {
  const titleElement = document.createElement("h" + rangeElement.value);
  titleElement.textContent = "h" + rangeElement.value;
  containerElement.append(titleElement);
};

const sizeHeader = (event) => {
  labelElement.textContent = event.target.value;
};

button2Element.addEventListener("click", generateHeader);
rangeElement.addEventListener("input", sizeHeader);
