"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Conversation, LLMModel } from "@/types/chat";
import { 
  Plus, 
  MessageSquare, 
  Trash2, 
  X,
  Brain
  //ChevronDown,
  //ChevronUp
} from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ChatSidebarProps {
  conversations: Conversation[];
  currentConversationId?: string;
  onSelectConversation: (id: string) => void;
  onNewConversation: () => void;
  onDeleteConversation: (id: string) => void;
  onClose: () => void;
  models: LLMModel[];
  selectedModel: string;
  onSelectModel: (modelId: string) => void;
  onSaveApiKey: (provider: string, key: string) => void;
  getApiKey: (provider: string) => string;
}

export function ChatSidebar({
  conversations,
  currentConversationId,
  onSelectConversation,
  onNewConversation,
  onDeleteConversation,
  onClose,
  models,
  selectedModel,
  onSelectModel,
  onSaveApiKey,
  getApiKey,
}: ChatSidebarProps) {
  const [hoveredConversationId, setHoveredConversationId] = useState<string | null>(null);
  const [showApiKey, setShowApiKey] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const selectedModelData = models.find(m => m.id === selectedModel);

  const truncateTitle = (title: string, maxLength = 26) => {
    return title.length > maxLength ? `${title.substring(0, maxLength)}...` : title;
  };

  const handleModelChange = (modelId: string) => {
    onSelectModel(modelId);
    const model = models.find(m => m.id === modelId);
    if (model) {
      setApiKey(getApiKey(model.provider));
      setShowApiKey(true);
    }
  };

  const handleSaveApiKey = () => {
    if (selectedModelData) {
      onSaveApiKey(selectedModelData.provider, apiKey);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="font-semibold">Chat History</h2>
        <Button 
          variant="ghost" 
          size="icon"
          onClick={onClose}
          className="md:hidden"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="p-4 space-y-4 border-b">
        <div className="space-y-2">
          <label className="text-sm font-medium">Select Model</label>
          <Select value={selectedModel} onValueChange={handleModelChange}>
            <SelectTrigger>
              <SelectValue placeholder="Choose a model" />
            </SelectTrigger>
            <SelectContent>
              {models.map((model) => (
                <SelectItem key={model.id} value={model.id}>
                  <div className="flex items-center">
                    <Brain className="mr-2 h-4 w-4" />
                    {model.name}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {showApiKey && selectedModelData && (
          <div className="space-y-2">
            <label className="text-sm font-medium">
              {selectedModelData.provider} API Key
            </label>
            <div className="flex gap-2">
              <Input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Enter API key"
              />
              <Button onClick={handleSaveApiKey} size="sm">
                Save
              </Button>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-2">
        <Button 
          onClick={onNewConversation}
          className="w-full"
        >
          <Plus className="mr-2 h-4 w-4" />
          New Chat
        </Button>
      </div>
      
      <ScrollArea className="flex-1 px-2">
        <div className="space-y-2 py-2">
          {conversations.length === 0 ? (
            <p className="text-sm text-muted-foreground p-2 text-center">
              No conversations yet
            </p>
          ) : (
            conversations.map((conversation) => (
              <div
                key={conversation.id}
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground relative",
                  conversation.id === currentConversationId ? "bg-accent text-accent-foreground" : "transparent"
                )}
                onClick={() => onSelectConversation(conversation.id)}
                onMouseEnter={() => setHoveredConversationId(conversation.id)}
                onMouseLeave={() => setHoveredConversationId(null)}
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                <div className="flex-1 truncate">
                  <div className="font-medium truncate">
                    {truncateTitle(conversation.title)}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {format(conversation.updatedAt, "MMM d, h:mm a")}
                  </div>
                </div>
                
                {(hoveredConversationId === conversation.id || conversation.id === currentConversationId) && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 text-muted-foreground opacity-70 hover:opacity-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteConversation(conversation.id);
                    }}
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                )}
              </div>
            ))
          )}
        </div>
      </ScrollArea>
      
      <div className="p-4 border-t">
        <div className="text-xs text-muted-foreground">
          <p className="font-medium">Aura Chat</p>
          <p>© 2025 All rights reserved</p>
        </div>
      </div>
    </div>
  );
}