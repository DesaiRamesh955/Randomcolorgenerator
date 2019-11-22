const body = document.querySelector(".body");
const code = document.querySelector("code");
const input = document.querySelector("#input");
const Colors = () => {
  return Math.floor(Math.random() * 255);
};
const content = () => {
  let color = `rgb(${Colors()},${Colors()},${Colors()})`;
  code.style.transition = ".3s";
  body.style.transition = ".3s";
  body.style.background = color;
  code.style.color = color;
  code.innerText = color;
  input.value = color;
};
code.addEventListener("mousemove", e => {
  e.preventDefault();
});
window.onload = () => {
  content();
};
body.onmousemove = () => {
  content();
};

body.addEventListener("click", () => {
  navigator.clipboard
    .writeText(input.value)
    .then(() => {
      code.innerText = "Copied!";
    })
    .catch(err => {
      console.log(err);
    });
});
