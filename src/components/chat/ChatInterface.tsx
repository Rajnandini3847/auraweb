"use client";

import { useState, useEffect } from "react";
import { useChat } from "@/hooks/useChat";
import { ChatHeader } from "@/components/chat/ChatHeader";
import { ChatSidebar } from "@/components/chat/ChatSidebar";
import { MessageList } from "@/components/chat/MessageList";
import { MessageInput } from "@/components/chat/MessageInput";
//import { ModeSelector } from "@/components/chat/ModeSelector";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function ChatInterface() {
  const chat = useChat();
  const [showSidebar, setShowSidebar] = useState(true);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (isMobile) {
      setShowSidebar(false);
    }
  }, [isMobile]);

  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      {/* Overlay for mobile when sidebar is open */}
      {isMobile && showSidebar && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-20"
          onClick={() => setShowSidebar(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } fixed md:relative z-30 h-full w-[280px] border-r bg-card/80 backdrop-blur-md transition-transform duration-300 ease-in-out`}
      >
        <ChatSidebar 
          conversations={chat.conversations}
          currentConversationId={chat.currentConversation?.id}
          onSelectConversation={chat.selectConversation}
          onNewConversation={chat.startNewConversation}
          onDeleteConversation={chat.deleteConversation}
          onClose={() => setShowSidebar(false)}
          models={chat.models}
          selectedModel={chat.currentConversation?.model || ""}
          onSelectModel={chat.changeModel}
          onSaveApiKey={chat.saveApiKey}
          getApiKey={chat.getApiKey}
        />
      </div>

      {/* Main chat area */}
      <div className="relative flex-1 flex flex-col h-full overflow-hidden">
        <ChatHeader 
          title={chat.currentConversation?.title || "New Chat"}
          onMenuClick={handleSidebarToggle}
          showSidebar={showSidebar}
          selectedMode={chat.currentConversation?.mode || "professional"}
          onSelectMode={chat.changeMode}
        />

        <div className="relative flex-1 flex flex-col h-full overflow-hidden">
          {/* Messages container */}
          <div className="flex-1 overflow-y-auto p-4">
            <MessageList 
              messages={chat.currentConversation?.messages || []}
              isLoading={chat.isLoading}
              selectedModel={chat.currentConversation?.model || ""}
              hasApiKey={chat.hasApiKey(chat.currentConversation?.model || "")}
            />
          </div>

          {/* Bottom bar with input */}
          <div className="border-t bg-card/80 backdrop-blur-md p-4">
            <MessageInput 
              onSendMessage={chat.sendMessage}
              isLoading={chat.isLoading}
              disabled={!chat.hasApiKey(chat.currentConversation?.model || "")}
              placeholder={
                chat.hasApiKey(chat.currentConversation?.model || "")
                  ? "Type a message..."
                  : "Please add an API key to start chatting"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}