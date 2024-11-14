# AI GPT Agent
A Node.js application that creates an intelligent agent using OpenAI's GPT API with tool-calling capabilities.

## Description
This application creates an AI agent that can:
- Process natural language commands
- Execute specialized tools based on user requests
- Generate and manipulate images
- Tell dad jokes
- Maintain conversation history
- Handle multi-step tasks automatically

## Features
- 🤖 Integrates with OpenAI's GPT-4 API
- 🛠️ Supports custom tool execution
- 💾 Maintains persistent conversation history in JSON
- 🔄 Handles complex multi-step interactions
- 📝 Includes type safety with TypeScript
- 🎨 Supports image generation capabilities

## Prerequisites
- Node.js (v18 or higher)
- OpenAI API key
- TypeScript knowledge for development

## Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/ai-gpt-agent.git
cd ai-gpt-agent
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
OPENAI_API_KEY=your_api_key_here
```

## Usage

Run the agent with a prompt:
```bash
npm start "Your prompt here"
```

Example prompts:
```bash
npm start "Make a meme image from a random dad joke"
npm start "Tell me a dad joke"
```

## Project Structure
```
├── src/
│   ├── agent.ts      # Main agent logic
│   ├── ai.ts         # OpenAI configuration
│   ├── llm.ts        # Language model interface
│   ├── memory.ts     # Conversation history management
│   └── tools/        # Custom tool implementations
├── types.ts          # TypeScript type definitions
└── index.ts         # Application entry point
```

## Development

To add new tools:
1. Create a new tool function in `src/tools/`
2. Define the tool's schema using Zod
3. Add the tool to the tools array in `src/tools/index.ts`
