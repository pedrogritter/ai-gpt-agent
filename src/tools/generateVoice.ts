import { writeFileSync } from "node:fs";
import { z } from "zod";
import type { ToolFn } from "../../types";
import { openai } from "../ai";

export const generateVoiceToolDefinition = {
  name: "generate_voice",
  parameters: z
    .object({
      userMessage: z
        .string()
        .describe(
          "The message to use to generate voice with a audio generator"
        ),
    })
    .describe("Generate a spoken audio of text (text in, audio out)"),
};

type Args = z.infer<typeof generateVoiceToolDefinition.parameters>;

export const generateVoice: ToolFn<Args, string> = async ({
  toolArgs,
  userMessage,
}) => {
  // Generate speech using OpenAI's TTS API
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "alloy",
    input: toolArgs.userMessage,
  });

  console.log("Ran the voice generation");

  // Get the binary audio data
  const buffer = Buffer.from(await mp3.arrayBuffer());

  // Save the audio file
  const fileName = `audio_${Date.now()}.mp3`;
  writeFileSync(`./public/audio/${fileName}`, buffer);

  // Return the path to the audio file
  return `/audio/${fileName}`;
};
