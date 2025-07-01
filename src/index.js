// Select the form element from the DOM
let formElement = document.querySelector("#form");

// Add a submit event listener to trigger the generateAnswer function
formElement.addEventListener("submit", generateAnswer);

// Main function to handle form submission and API interaction
function generateAnswer(event) {
  event.preventDefault();

  // Get the user input element
  let userInput = document.querySelector("#user-input");

  // API key for authentication
  let apiKey = "t8afd90435a4767d2a3fo6db06469dbc";

  // Provide a context for the AI to guide how it rewrites the input
  let context =
    encodeURIComponent(`You are a witty and professional email writer. Your job is to take blunt, brutally honest thoughts and rewrite them as polite, diplomatic work emails. Keep the response short (1 to 2 lines), tactful, and appropriate for corporate communication.
Examples:
"I forgot to do it" = "Apologies for the delay — I'll prioritize this now."
"This meeting is pointless" = "Let's follow up asynchronously to use everyone's time efficiently."
"I didn't read the document" = "Thanks for flagging — I'll review it and circle back shortly."
"That's not my job" = "Happy to help where I can — is there someone better suited for this?"
`);

  // Prepare the actual prompt using the user input
  let prompt = encodeURIComponent(
    `Rewrite this honest thought into a polite, professional sentence: "${userInput.value}"`
  );

  // Construct the full API URL with prompt, context, and API key
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  // Display a loading message while waiting for the response
  let answerElement = document.querySelector("#answer");
  answerElement.classList.remove("hidden");
  answerElement.innerHTML = "Translating thought...";

  // Send the get request to the AI API and handle the response with showAnswer
  axios.get(apiUrl).then(showAnswer);
}

// Function to handle and display the AI-generated response
function showAnswer(response) {
  let aiAnswer = response.data.answer;

  // Use the Typewriter effect to animate the AI’s response
  new Typewriter("#answer", {
    strings: aiAnswer,
    autoStart: true,
    cursor: " ",
    delay: 1,
  });
}
