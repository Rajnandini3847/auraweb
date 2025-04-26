"use client";

//import { useState } from "react";
import { LLMModel } from "@/types/chat";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Brain, 
   // Info 
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ModelSelectorProps {
  models: LLMModel[];
  selectedModel: string;
  onSelectModel: (modelId: string) => void;
}

export function ModelSelector({
  models,
  selectedModel,
  onSelectModel,
}: ModelSelectorProps) {
  // Group models by provider
  const modelsByProvider: Record<string, LLMModel[]> = {};
  models.forEach((model) => {
    if (!modelsByProvider[model.provider]) {
      modelsByProvider[model.provider] = [];
    }
    modelsByProvider[model.provider].push(model);
  });

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium">Model Selection</h3>
      
      <ScrollArea className="h-[180px] rounded-md border">
        <div className="p-4 space-y-6">
          {Object.entries(modelsByProvider).map(([provider, providerModels]) => (
            <div key={provider} className="space-y-2">
              <h4 className="text-sm font-medium text-muted-foreground">
                {provider}
              </h4>
              <div className="space-y-1">
                {providerModels.map((model) => (
                  <TooltipProvider key={model.id}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant={selectedModel === model.id ? "default" : "outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            selectedModel === model.id
                              ? ""
                              : "text-muted-foreground"
                          )}
                          onClick={() => onSelectModel(model.id)}
                        >
                          <Brain className="mr-2 h-4 w-4" />
                          <span className="text-sm">{model.name}</span>
                          {model.requiresApiKey && (
                            <span className="ml-auto text-xs bg-background text-muted-foreground rounded-full px-1.5 py-0.5">
                              API Key
                            </span>
                          )}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="right" className="max-w-[200px]">
                        <p className="text-sm">{model.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}