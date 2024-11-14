import type OpenAI from "openai";
import {
  generateImage,
  generateImageToolDefinition,
} from "./tools/generateImage";
import { reddit, redditToolDefinition } from "./tools/reddit";
import { dadJoke, dadJokeDefinition } from "./tools/dadJoke";
import { getLotrQuote, lotrQuoteToolDefinition } from "./tools/lotr/lotrQuote";
import {
  generateVoice,
  generateVoiceToolDefinition,
} from "./tools/generateVoice";

export const runTool = async (
  toolCall: OpenAI.Chat.Completions.ChatCompletionMessageToolCall,
  userMessage: string
) => {
  const input = {
    userMessage,
    toolArgs: JSON.parse(toolCall.function.arguments || "{}"),
  };

  switch (toolCall.function.name) {
    case generateImageToolDefinition.name:
      return generateImage(input);
    case redditToolDefinition.name:
      return reddit(input);
    case dadJokeDefinition.name:
      return dadJoke(input);
    case lotrQuoteToolDefinition.name:
      return getLotrQuote(input);
    case generateVoiceToolDefinition.name:
      return generateVoice(input);
    default:
      throw new Error(`Never run this tool again: ${toolCall.function.name}`);
  }
};
