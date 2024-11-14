import { Chat } from "./../node_modules/openai/src/resources/chat/chat";
import type OpenAI from "openai";

const getWeather = () => `Its chilly, about 5c`;

export const runTool = async (
  toolCall: OpenAI.Chat.Completions.ChatCompletionMessageToolCall,
  userMessage: string
) => {
  const input = {
    userMessage,
    toolArgs: JSON.parse(toolCall.function.arguments || "{}"),
  };

  switch (toolCall.function.name) {
    case "get_weather":
      return getWeather();
    default:
      throw new Error(`Unknown tool: ${toolCall.function.name}`);
  }
};
