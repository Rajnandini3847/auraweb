"use client";

import { ChatMode } from "@/types/chat";
import { 
  Briefcase, 
  Coffee, 
  Sparkles, 
  Target
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ModeSelectorProps {
  selectedMode: ChatMode;
  onSelectMode: (mode: ChatMode) => void;
}

interface ModeOption {
  value: ChatMode;
  label: string;
  description: string;
  icon: React.ReactNode;
}

export function ModeSelector({ selectedMode, onSelectMode }: ModeSelectorProps) {
  const modes: ModeOption[] = [
    {
      value: "professional",
      label: "Professional",
      description: "Formal, precise responses",
      icon: <Briefcase className="h-4 w-4" />,
    },
    {
      value: "chill",
      label: "Chill",
      description: "Casual, friendly chat",
      icon: <Coffee className="h-4 w-4" />,
    },
    {
      value: "creative",
      label: "Creative",
      description: "Imaginative responses",
      icon: <Sparkles className="h-4 w-4" />,
    },
    {
      value: "precise",
      label: "Precise",
      description: "Concise, factual answers",
      icon: <Target className="h-4 w-4" />,
    },
  ];

  return (
    <Select value={selectedMode} onValueChange={(value) => onSelectMode(value as ChatMode)}>
      <SelectTrigger className="w-[140px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {modes.map((mode) => (
          <SelectItem key={mode.value} value={mode.value}>
            <div className="flex items-center">
              <span className="mr-2">{mode.icon}</span>
              <span>{mode.label}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}