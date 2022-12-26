const number = document.querySelector('[name="number"]');
const button = document.querySelector("button");
const text = document.querySelector("h1");

number.addEventListener("input", () => (text.innerHTML = ""));

button.addEventListener("click", () => {
  const int = number.value - 0;

  if (1 <= int && int <= 10) {
    const xhr = new XMLHttpRequest();

    text.textContent = "Загружаем...";

    xhr.open("GET", `https://picsum.photos/v2/list?limit=${int}`);

    xhr.onload = function () {
      if (xhr.status != 200) {
        console.log("Статус ответа: ", xhr.status);
        text.textContent = "Ошибка!";
      } else {
        console.log("Результат: ", JSON.parse(xhr.response));
        text.textContent = "Загружено!";
      }
    };

    xhr.send();
  } else {
    text.textContent = "Число вне диапазона от 1 до 10";
  }
});

number;
