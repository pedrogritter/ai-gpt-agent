import { JSONFilePreset } from "lowdb/node";
import type { AIMessage } from "../types";
import { v4 as uuidv4 } from "uuid";

export type MessageWithMetadata = AIMessage & {
  id: string;
  createdAt: string;
};

export const addMetadata = (message: AIMessage): MessageWithMetadata => ({
  ...message,
  id: uuidv4(),
  createdAt: new Date().toISOString(),
});

export const removeMetadata = (message: MessageWithMetadata): AIMessage => {
  const { id, createdAt, ...MessageWithoutMetada } = message;
  return MessageWithoutMetada;
};

type Data = {
  messages: MessageWithMetadata[];
};

const defaultData: Data = { messages: [] };

export const getDB = async () => {
  const db = await JSONFilePreset<Data>("db.json", defaultData);
  return db;
};

export const addMessages = async (messages: AIMessage[]) => {
  const db = await getDB();
  db.data.messages.push(...messages.map(addMetadata));
  await db.write();
};

export const getMessages = async () => {
  const db = await getDB();
  return db.data.messages.map(removeMetadata);
};

export const saveToolResponse = async (
  toolResponse: string,
  toolCallID: string
) => {
  return addMessages([
    { role: "tool", content: toolResponse, tool_call_id: toolCallID },
  ]);
};
