import { generateImageToolDefinition } from "./generateImage";
import { redditToolDefinition } from "./reddit";
import { dadJokeDefinition } from "./dadJoke";

export const tools = [
  dadJokeDefinition,
  generateImageToolDefinition,
  redditToolDefinition,
];
