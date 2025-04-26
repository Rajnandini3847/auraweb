export type MessageType = "user" | "assistant";

export type ChatMode = "professional" | "chill" | "creative" | "precise";

export interface Message {
  id: string;
  content: string;
  type: MessageType;
  timestamp: Date;
  model?: string;
  mode?: ChatMode;
}

export interface Conversation {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
  model: string;
  mode: ChatMode;
}

export interface LLMModel {
  id: string;
  name: string;
  provider: string;
  description: string;
  requiresApiKey: boolean;
}

export interface ApiKey {
  provider: string;
  key: string;
}