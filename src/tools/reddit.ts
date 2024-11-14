import { z } from "zod";
import type { ToolFn } from "../../types";
import fetch from "node-fetch";

export const redditToolDefinition = {
  name: "reddit",
  parameters: z.object({}),
  description: "Get the latest posts from reddit",
};

type Args = z.infer<typeof redditToolDefinition.parameters>;

export const reddit: ToolFn<Args, string> = async ({ toolArgs }) => {
  // Fetch posts from reddit main page
  // const { data } = await fetch("https://www.reddit.com/.json").then((res) =>
  //   res.json()
  // );

  // Fetch from subreddit instead
  const { data } = await fetch(
    "https://www.reddit.com/r/Damnthatsinteresting/.json"
  ).then((res) => res.json());

  const relevantInfo = data.children.map((child: any) => ({
    title: child.data.title,
    link: child.data.url,
    subreddit: child.data.subreddit_name_prefixed,
    author: child.data.author,
    upvotes: child.data.ups,
  }));

  return JSON.stringify(relevantInfo, null, 2);
};
