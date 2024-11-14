import type { AIMessage } from "../types";
import { addMessages, getMessages, saveToolResponse } from "./memory";
import { runLLM } from "./llm";
import { logMessage, showLoader } from "./ui";
import { runTool } from "./toolRunner";

export const runAgent = async ({
  userMessage,
  tools,
}: {
  userMessage: string;
  tools: any[];
}) => {
  await addMessages([{ role: "user", content: userMessage }]);

  // const loader = showLoader("Thinking...");
  console.log("Thinking...");

  const history = await getMessages();

  const response = await runLLM({
    messages: history,
    tools: tools,
  });

  await addMessages([response]);

  if (response.tool_calls) {
    const toolCall = response.tool_calls[0];
    console.log(`Executing tool: ${toolCall.function.name} `);
    const toolResponse = await runTool(toolCall, userMessage);
    await saveToolResponse(toolResponse, toolCall.id);
    console.log(`Tool finished executing: ${toolCall.function.name} `);
  }

  logMessage(response);
  console.log("Done...");
  // loader.stop();

  return getMessages();
};
