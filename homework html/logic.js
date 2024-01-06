const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

buttonA.onclick = () => {
  const name = prompt("あなたの推しは誰ですか？");
  alert(`${name}`);
  headingA.textContent = `${name}`;
};
