"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SendHorizonal, Mic, StopCircle } from "lucide-react";

interface MessageInputProps {
  onSendMessage: (content: string) => void;
  isLoading?: boolean;
  disabled?: boolean;
  placeholder?: string;
}

export function MessageInput({ 
  onSendMessage, 
  isLoading = false,
  disabled = false,
  placeholder = "Type a message..."
}: MessageInputProps) {
  const [message, setMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        200
      )}px`;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if (message.trim() && !isLoading && !disabled) {
      onSendMessage(message.trim());
      setMessage("");
      
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isLoading]);

  return (
    <div className="flex items-end gap-2">
      <div className="relative flex-1">
        <Textarea
          ref={textareaRef}
          value={message}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="min-h-[44px] max-h-[200px] pr-12 resize-none"
          disabled={isLoading || disabled}
        />
        <Button
          className="absolute right-1 bottom-1"
          size="icon"
          variant="ghost"
          onClick={toggleRecording}
          disabled={isLoading || disabled}
        >
          {isRecording ? (
            <StopCircle className="h-5 w-5 text-destructive" />
          ) : (
            <Mic className="h-5 w-5" />
          )}
        </Button>
      </div>
      
      <Button
        className={`h-10 w-10 rounded-full transition-all ${
          message.trim() && !disabled ? "opacity-100 scale-100" : "opacity-70 scale-95"
        }`}
        size="icon"
        onClick={handleSendMessage}
        disabled={!message.trim() || isLoading || disabled}
      >
        <SendHorizonal className="h-5 w-5" />
      </Button>
    </div>
  );
}