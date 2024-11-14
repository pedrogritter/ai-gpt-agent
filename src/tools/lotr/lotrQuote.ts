import { z } from "zod";
import { readFileSync } from "fs";
import { join } from "path";
import type { ToolFn } from "../../../types";

export const lotrQuoteToolDefinition = {
  name: "lotr_quote",
  parameters: z
    .object({})
    .describe("Returns a random quote from Lord of the Rings movies."),
  description: "Returns a random quote from Lord of the Rings movies.",
};

type Args = z.infer<typeof lotrQuoteToolDefinition.parameters>;

interface LotrQuote {
  id: number;
  char: string;
  dialog: string;
  movie: string;
}

interface QuotesData {
  quotes: LotrQuote[];
}

export const getLotrQuote: ToolFn<Args, string> = async () => {
  try {
    const quotesFile = readFileSync(join(__dirname, "quotes.json"), "utf-8");
    const quotesData: QuotesData = JSON.parse(quotesFile);

    const randomIndex = Math.floor(Math.random() * quotesData.quotes.length);
    const quote = quotesData.quotes[randomIndex];

    return `${
      quote.char
    } - ${quote.dialog.trim()} - from movie [${quote.movie.trim()}]`;
  } catch (error) {
    console.error("Error getting LOTR quote:", error);
    return "No quote available";
  }
};
