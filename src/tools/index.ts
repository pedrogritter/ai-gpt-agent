import { generateImageToolDefinition } from "./generateImage";
import { redditToolDefinition } from "./reddit";
import { dadJokeDefinition } from "./dadJoke";
import { lotrQuoteToolDefinition } from "./lotr/lotrQuote";
import { generateVoiceToolDefinition } from "./generateVoice";

export const tools = [
  dadJokeDefinition,
  generateImageToolDefinition,
  redditToolDefinition,
  lotrQuoteToolDefinition,
  generateVoiceToolDefinition,
];
