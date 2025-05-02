let formElement = document.querySelector("#form");
formElement.addEventListener("submit", generateAnswer);

function generateAnswer(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");

  let apiKey = "t8afd90435a4767d2a3fo6db06469dbc";
  let context =
    encodeURIComponent(`You are a witty and professional email writer. Your job is to take blunt, brutally honest thoughts and rewrite them as polite, diplomatic work emails. Keep the response short (1 to 2 lines), tactful, and appropriate for corporate communication.

Examples:
"I forgot to do it" → "Apologies for the delay — I'll prioritize this now."
"This meeting is pointless" → "Let's follow up asynchronously to use everyone's time efficiently."
"I didn't read the document" → "Thanks for flagging — I'll review it and circle back shortly."
"That's not my job" → "Happy to help where I can — is there someone better suited for this?"
`);

  let prompt = encodeURIComponent(
    `Rewrite this honest thought into a polite, professional sentence: "${userInput.value}"`
  );
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(showAnswer);
}

function showAnswer(response) {
  let aiAnswer = response.data.answer;

  new Typewriter("#answer", {
    strings: aiAnswer,
    autoStart: true,
    cursor: " ",
    delay: 1,
  });
}
