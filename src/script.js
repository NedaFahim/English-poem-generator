function displayPoem(response) {
  console.log("poem generated");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 1,
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "930bfof4e5b7tb729d2b7a0ceb8d91f3";
  let context =
    "you are a romantic poem expert and love to write short poems. your mission is to generate a 4 line poem in basic HTML. make sure to follow user instructions.";
  let prompt = `user instructions: generate an English poem about ${instructionsInput.value}. sign the poem with 'SheCodes AI' inside an <strong> element. do not show "html" on the top.`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log(`generate a poem about ${instructionsInput.value}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
