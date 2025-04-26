"use client";

import { useState, useEffect } from "react";
import { Message, Conversation, ChatMode, ApiKey, LLMModel } from "@/types/chat";
import { v4 as uuidv4 } from "uuid";

export function useChat() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [currentConversation, setCurrentConversation] = useState<Conversation | null>(null);
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [models 
    //setModels
] = useState<LLMModel[]>([
    {
      id: "gpt-4",
      name: "GPT-4",
      provider: "OpenAI",
      description: "Advanced reasoning, instruction following, and detailed responses",
      requiresApiKey: true,
    },
    {
      id: "gpt-3.5-turbo",
      name: "GPT-3.5 Turbo",
      provider: "OpenAI",
      description: "Fast and efficient for most tasks with good reasoning",
      requiresApiKey: true,
    },
    {
      id: "claude-3-opus",
      name: "Claude 3 Opus",
      provider: "Anthropic",
      description: "Anthropic's most capable model for complex tasks",
      requiresApiKey: true,
    },
    {
      id: "gemini-pro",
      name: "Gemini Pro",
      provider: "Google",
      description: "Google's versatile model with strong reasoning abilities",
      requiresApiKey: true,
    },
    {
      id: "mistral-large",
      name: "Mistral Large",
      provider: "Mistral AI",
      description: "Powerful model with broad capabilities and low latency",
      requiresApiKey: true,
    },
  ]);

  useEffect(() => {
    if (conversations.length === 0) {
      const newConversation = createNewConversation();
      setConversations([newConversation]);
      setCurrentConversation(newConversation);
    }
  }, []);

  const createNewConversation = () => {
    return {
      id: uuidv4(),
      title: "New Conversation",
      messages: [],
      createdAt: new Date(),
      updatedAt: new Date(),
      model: "gpt-3.5-turbo",
      mode: "professional" as ChatMode,
    };
  };

  const startNewConversation = () => {
    const newConversation = createNewConversation();
    setConversations((prev) => [...prev, newConversation]);
    setCurrentConversation(newConversation);
    return newConversation;
  };

  const selectConversation = (conversationId: string) => {
    const conversation = conversations.find((c) => c.id === conversationId);
    if (conversation) {
      setCurrentConversation(conversation);
    }
  };

  const deleteConversation = (conversationId: string) => {
    setConversations((prev) => prev.filter((c) => c.id !== conversationId));
    if (currentConversation?.id === conversationId) {
      const remaining = conversations.filter((c) => c.id !== conversationId);
      setCurrentConversation(remaining.length > 0 ? remaining[0] : startNewConversation());
    }
  };

  const updateConversationTitle = (conversationId: string, title: string) => {
    setConversations((prev) =>
      prev.map((c) =>
        c.id === conversationId
          ? { ...c, title, updatedAt: new Date() }
          : c
      )
    );
    if (currentConversation?.id === conversationId) {
      setCurrentConversation((prev) =>
        prev ? { ...prev, title, updatedAt: new Date() } : null
      );
    }
  };

  const sendMessage = async (content: string) => {
    if (!currentConversation) return;
    
    const userMessage: Message = {
      id: uuidv4(),
      content,
      type: "user",
      timestamp: new Date(),
      model: currentConversation.model,
      mode: currentConversation.mode,
    };
    
    const updatedMessages = [...currentConversation.messages, userMessage];
    const updatedConversation = {
      ...currentConversation,
      messages: updatedMessages,
      updatedAt: new Date(),
    };
    
    setCurrentConversation(updatedConversation);
    setConversations((prev) =>
      prev.map((c) => (c.id === currentConversation.id ? updatedConversation : c))
    );

    setIsLoading(true);
    
    setTimeout(() => {
      const aiMessage: Message = {
        id: uuidv4(),
        content: `This is a simulated response to your message: "${content}". In a real implementation, this would come from the ${currentConversation.model} model using the ${currentConversation.mode} mode.`,
        type: "assistant",
        timestamp: new Date(),
        model: currentConversation.model,
        mode: currentConversation.mode,
      };
      
      const newMessages = [...updatedMessages, aiMessage];
      const newConversation = {
        ...updatedConversation,
        messages: newMessages,
        updatedAt: new Date(),
      };
      
      setCurrentConversation(newConversation);
      setConversations((prev) =>
        prev.map((c) => (c.id === currentConversation.id ? newConversation : c))
      );
      setIsLoading(false);
    }, 1500);
  };

  const changeMode = (mode: ChatMode) => {
    if (currentConversation) {
      const updatedConversation = { ...currentConversation, mode };
      setCurrentConversation(updatedConversation);
      setConversations((prev) =>
        prev.map((c) => (c.id === currentConversation.id ? updatedConversation : c))
      );
    }
  };

  const changeModel = (modelId: string) => {
    if (currentConversation) {
      const updatedConversation = { ...currentConversation, model: modelId };
      setCurrentConversation(updatedConversation);
      setConversations((prev) =>
        prev.map((c) => (c.id === currentConversation.id ? updatedConversation : c))
      );
    }
  };

  const saveApiKey = (provider: string, key: string) => {
    const existingKeyIndex = apiKeys.findIndex((k) => k.provider === provider);
    if (existingKeyIndex >= 0) {
      const updatedKeys = [...apiKeys];
      updatedKeys[existingKeyIndex] = { provider, key };
      setApiKeys(updatedKeys);
    } else {
      setApiKeys([...apiKeys, { provider, key }]);
    }
  };

  const getApiKey = (provider: string) => {
    return apiKeys.find((k) => k.provider === provider)?.key || "";
  };

  const hasApiKey = (modelId: string) => {
    const model = models.find(m => m.id === modelId);
    if (!model) return false;
    return !!getApiKey(model.provider);
  };

  return {
    conversations,
    currentConversation,
    models,
    apiKeys,
    isLoading,
    startNewConversation,
    selectConversation,
    deleteConversation,
    updateConversationTitle,
    sendMessage,
    changeMode,
    changeModel,
    saveApiKey,
    getApiKey,
    hasApiKey,
  };
}