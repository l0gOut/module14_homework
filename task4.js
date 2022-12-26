const img = document.querySelector("img");
const width = document.querySelector('[name="width"]');
const height = document.querySelector('[name="height"]');
const submit = document.querySelector("button");
const text = document.querySelector("h1");

width.addEventListener("input", () => (text.textContent = ""));

height.addEventListener("input", () => (text.textContent = ""));

submit.addEventListener("click", () => {
  const widthImage = width.value - 0;
  const heightImage = height.value - 0;

  if (
    100 <= widthImage &&
    widthImage <= 300 &&
    100 <= heightImage &&
    heightImage <= 300
  ) {
    fetch(`https://picsum.photos/${widthImage}/${heightImage}`).then(
      response => {
        img.setAttribute("src", response.url);
      }
    );
  } else {
    text.textContent = "Одно из чисел вне диапазона от 100 до 300";
  }
});
