function speakLord(response) {
  new Typewriter("#verse", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateVerse(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "8beee9c371af2b46ffd9dt029273d0o6";
  let context =
    "You are a biblical scholar and expert and love to encourage through scripture. Your mission is to generate a scripture. Make sure to follow the user instructions. Generate ONE verse per prompt. Include the translation the verse was took from.";
  let prompt = `User instructions: Generate a Bible verse to encourage about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let verseElement = document.querySelector("#verse");
  verseElement.classList.remove("hidden");
  verseElement.innerHTML = `<div class="generating">⏳ Seeking God’s word… " ${instructionsInput.value} "</div>`;

  axios.get(apiURL).then(speakLord);
}

let verseFormElement = document.querySelector("#verse-generator-form");
verseFormElement.addEventListener("submit", generateVerse);
