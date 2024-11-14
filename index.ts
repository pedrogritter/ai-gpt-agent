import "dotenv/config";
import { runAgent } from "./src/agent";
import { z } from "zod";
import { tools } from './src/tools/index';

const userMessage = process.argv[2];

if (!userMessage) {
  console.error("Please provide a message");
  process.exit(1);
}

await runAgent({ userMessage, tools });
