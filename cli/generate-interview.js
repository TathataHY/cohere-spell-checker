import { CohereClient } from "cohere-ai";
import ora from "ora";

const cohere = new CohereClient({
  token: "", // This is your trial API key
});

const spinner = ora("Generating 5 software interview questions...").start();

const start = performance.now();

const interval = setInterval(() => {
  const time = Math.floor((performance.now() - start) / 1000);
  spinner.text = `Generating 5 software interview questions (${time}s)...`;
}); // Actualiza cada segundo

(async () => {
  try {
    const response = await cohere.generate({
      model: "command",
      prompt:
        "Generate only a list of 5 interview questions for a Senior Software Engineer.",
      maxTokens: 100,
      temperature: 0.9,
      k: 0,
      stopSequences: [],
      returnLikelihoods: "NONE",
    });

    const time = Math.floor((performance.now() - start) / 1000);
    spinner.succeed(`Done on ${time}s!`);
    clearInterval(interval); // Detiene el intervalo después de recibir la respuesta
    console.log(`${response.generations[0].text}`);
  } catch (error) {
    spinner.fail("An error occurred while generating interview questions.");
    console.error(error);
  } finally {
    spinner.stop();
  }
})();
