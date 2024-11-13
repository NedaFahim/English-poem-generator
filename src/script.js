function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: "kkhh",
    autoStart: true,
    cursor: null,
    delay: 1,
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
