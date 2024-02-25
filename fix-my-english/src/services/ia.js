export async function spellChecker(input) {
  const response = await fetch("https://api.cohere.ai/v1/generate", {
    method: "POST",
    headers: {
      Authorization: "BEARER ",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "command",
      prompt: `This is a spell checker generator.

    Incorrect sample: "I are good!"
    Correct sample: "I am good!"
    --
    Incorrect sample: "I have 22 years old."
    Correct sample: "I am 22 years old."
    --  
    Incorrect sample: "I don't can know."
    Correct sample: "I don't know."
    --
    Incorrect sample: "${input}"
    Correct sample:`,
      max_tokens: 50,
      temperature: 0.3,
      k: 0,
      stop_sequences: ["--"],
      return_likelihoods: "NONE",
    }),
  })
    .then((response) => response.json())
    .catch((error) => console.error("Error:", error));

  // Obtener el texto generado
  let generatedText = response.generations[0].text;

  // Eliminar guiones "--" al final del texto
  if (generatedText.endsWith("--")) {
    generatedText = generatedText.slice(0, -2).trim(); // Eliminar los últimos dos caracteres y trim para eliminar espacios en blanco adicionales
  }

  // Eliminar la primera comilla si existe
  if (generatedText.startsWith('"')) {
    generatedText = generatedText.slice(1).trim(); // Eliminar la primera comilla y trim para eliminar espacios en blanco adicionales
  }

  // Eliminar la última comilla si existe
  if (generatedText.endsWith('"')) {
    generatedText = generatedText.slice(0, -1).trim(); // Eliminar la última comilla y trim para eliminar espacios en blanco adicionales
  }

  // Devolver el texto limpio
  return generatedText;
}
