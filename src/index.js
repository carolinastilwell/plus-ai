function generateAnswer(event) {
  event.preventDefault();

  new Typewriter("#answer", {
    strings: "The answer here",
    autoStart: true,
    cursor: "",
  });
}

let formElement = document.querySelector("#form");
formElement.addEventListener("submit", generateAnswer);
