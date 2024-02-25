import { CohereClient } from "cohere-ai";

const cohere = new CohereClient({
  token: "", // This is your trial API key
});

(async () => {
  const response = await cohere.generate({
    model: "command",
    prompt:
      "Generate an intro paragraph of a blog post geared towards people who are looking to learn how to rock climb. The post should be enthusiastic and speak to people who are inactive and nervous.",
    maxTokens: 300,
    temperature: 0.9,
    k: 0,
    stopSequences: [],
    returnLikelihoods: "NONE",
  });
  console.log(`Prediction: ${response.generations[0].text}`);
})();
