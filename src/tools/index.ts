import { generateImageToolDefinition } from "./generateImage";
import { redditToolDefinition } from "./reddit";
import { dadJokeDefinition } from "./dadJoke";
import { lotrQuoteToolDefinition } from "./lotr/lotrQuote";

export const tools = [
  dadJokeDefinition,
  generateImageToolDefinition,
  redditToolDefinition,
  lotrQuoteToolDefinition,
];
