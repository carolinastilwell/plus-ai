function showAnswer(response) {
  console.log(response.data.answer);
}

let apiKey = "t8afd90435a4767d2a3fo6db06469dbc";
let context = "be polite and provide a concise anwer";
let prompt = "Who was the first female president?";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showAnswer);
