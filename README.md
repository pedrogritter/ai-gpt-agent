# ai-gpt-agent
A simple agent to test OpenAI's GPT API
## Description
This is a simple Node.js application that interacts with OpenAI's GPT API to maintain a conversational memory using a local JSON database.

## Features
- Interacts with OpenAI's GPT API
- Maintains conversation history in a local JSON file
- Supports message threading with metadata
- Command-line interface for easy interaction

## Prerequisites
- Node.js installed on your system
- An OpenAI API key

## Install and Run

1. Clone this repository

2. Install dependencies with:
```
npm install
```
3. Add your OpenAI API key to a **.env** file:
```
//.env
OPENAI_API_KEY = 'YourAPIKey'
```

4. Run a prompt with:

```
npm start "Your prompt to the agent"
```
