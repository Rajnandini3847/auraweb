"use client";

import { useEffect, useRef } from "react";
import { Message } from "@/types/chat";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Loader2 } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface MessageListProps {
  messages: Message[];
  isLoading?: boolean;
  selectedModel: string;
  hasApiKey: boolean;
}

export function MessageList({ messages, isLoading = false, 
    //selectedModel, 
    hasApiKey }: MessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  if (messages.length === 0 && !isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-8">
        <h3 className="text-2xl font-semibold mb-4">Welcome to Aura Chat</h3>
        {!hasApiKey ? (
          <p className="text-muted-foreground max-w-md">
            To get started, please add your API key for the selected model in the sidebar.
            Lets become friends and explore the world of AI together! 🚀
          </p>
        ) : (
          <p className="text-muted-foreground max-w-md">
            Start a conversation by typing a message below. Im here to help! 💫
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {messages.map((message) => (
        <div
          key={message.id}
          className={cn(
            "flex animate-fade-in",
            message.type === "user" ? "justify-end" : "justify-start"
          )}
        >
          <div
            className={cn(
              "flex max-w-[85%] md:max-w-[75%] rounded-xl p-4",
              message.type === "user"
                ? "bg-primary text-primary-foreground ml-4"
                : "bg-secondary text-secondary-foreground mr-4"
            )}
          >
            <div className="flex flex-col">
              <div className="flex items-center space-x-2 mb-1">
                {message.type === "assistant" && (
                  <Avatar className="h-6 w-6">
                    <div className="flex h-full w-full items-center justify-center bg-primary/10 text-primary-foreground">
                      AI
                    </div>
                  </Avatar>
                )}
                <div className="flex-1 text-xs text-current opacity-70">
                  {message.type === "user" ? "You" : "AI"}
                </div>
                <div className="text-xs opacity-50">
                  {format(message.timestamp, "h:mm a")}
                </div>
              </div>
              
              <div className="text-sm whitespace-pre-wrap text-start">
                {message.content}
              </div>
              
              {message.model && message.mode && (
                <div className="flex flex-wrap gap-1.5 mt-2 text-xs opacity-70">
                  <Badge variant="outline" className="px-1.5 py-0 h-5">
                    {message.model}
                  </Badge>
                  <Badge variant="outline" className="px-1.5 py-0 h-5">
                    {message.mode}
                  </Badge>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
      
      {isLoading && (
        <div className="flex justify-start">
          <div className="bg-secondary text-secondary-foreground rounded-xl p-4 mr-4 flex items-center animate-pulse">
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            <span className="text-sm">AI is thinking...</span>
          </div>
        </div>
      )}
      
      <div ref={bottomRef} />
    </div>
  );
}