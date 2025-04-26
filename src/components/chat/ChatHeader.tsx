"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Menu, 
  Pencil, 
  Check,
  Moon,
  Sun,
  Laptop,
  // Settings
} from "lucide-react";
import { useTheme } from "next-themes";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { ChatMode } from "@/types/chat";
import { ModeSelector } from "./ModeSelector";

interface ChatHeaderProps {
  title: string;
  onMenuClick: () => void;
  showSidebar: boolean;
  selectedMode: ChatMode;
  onSelectMode: (mode: ChatMode) => void;
}

export function ChatHeader({ 
  title, 
  onMenuClick, 
  showSidebar,
  selectedMode,
  onSelectMode
}: ChatHeaderProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const { setTheme, theme } = useTheme();

  const handleTitleEdit = () => {
    setIsEditing(false);
  };

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b bg-card/80 backdrop-blur-md p-4">
      <div className="flex items-center">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onMenuClick}
          className="mr-2"
          aria-label={showSidebar ? "Hide sidebar" : "Show sidebar"}
        >
          <Menu className="h-5 w-5" />
        </Button>
        
        {isEditing ? (
          <div className="flex items-center">
            <Input
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="h-9 max-w-[200px]"
              autoFocus
            />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleTitleEdit}
              className="ml-1"
            >
              <Check className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <div className="flex items-center">
            <h1 className="text-lg font-medium truncate max-w-[200px]">
              {title}
            </h1>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => {
                setEditedTitle(title);
                setIsEditing(true);
              }}
              className="ml-1 opacity-50 hover:opacity-100"
            >
              <Pencil className="h-3 w-3" />
            </Button>
          </div>
        )}
      </div>
      
      <div className="flex items-center gap-2">
        <ModeSelector
          selectedMode={selectedMode}
          onSelectMode={onSelectMode}
        />
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              {theme === "dark" ? (
                <Moon className="h-5 w-5" />
              ) : theme === "light" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Laptop className="h-5 w-5" />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              <Sun className="mr-2 h-4 w-4" />
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              <Moon className="mr-2 h-4 w-4" />
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              <Laptop className="mr-2 h-4 w-4" />
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}