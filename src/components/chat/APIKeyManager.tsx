"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ApiKey, LLMModel } from "@/types/chat";
import { X, Save, Eye, EyeOff, LinkIcon, ExternalLink } from "lucide-react";

interface APIKeyManagerProps {
  apiKeys: ApiKey[];
  models: LLMModel[];
  onSaveApiKey: (provider: string, key: string) => void;
  onClose: () => void;
  getApiKey: (provider: string) => string;
}

export function APIKeyManager({
  // apiKeys,
  models,
  onSaveApiKey,
  onClose,
  getApiKey,
}: APIKeyManagerProps) {
  // Get unique providers from models
  const providers = Array.from(new Set(models.map((model) => model.provider)));
  
  const [showKeys, setShowKeys] = useState<Record<string, boolean>>({});
  const [keyInputs, setKeyInputs] = useState<Record<string, string>>(() => {
    const initialValues: Record<string, string> = {};
    providers.forEach((provider) => {
      initialValues[provider] = getApiKey(provider);
    });
    return initialValues;
  });

  const handleSaveKey = (provider: string) => {
    onSaveApiKey(provider, keyInputs[provider]);
  };

  const toggleShowKey = (provider: string) => {
    setShowKeys((prev) => ({
      ...prev,
      [provider]: !prev[provider],
    }));
  };

  const getApiKeyUrl = (provider: string): string => {
    switch (provider) {
      case "OpenAI":
        return "https://platform.openai.com/api-keys";
      case "Anthropic":
        return "https://console.anthropic.com/account/keys";
      case "Google":
        return "https://ai.google.dev/";
      case "Mistral AI":
        return "https://console.mistral.ai/api-keys/";
      default:
        return "#";
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Manage API Keys</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4">
        Add your API keys to use different LLM providers. Your keys are stored locally and never sent to our servers.
      </p>
      
      <Tabs defaultValue={providers[0]} className="w-full">
        <TabsList className="grid w-full" style={{ gridTemplateColumns: `repeat(${providers.length}, 1fr)` }}>
          {providers.map((provider) => (
            <TabsTrigger key={provider} value={provider}>
              {provider}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {providers.map((provider) => (
          <TabsContent key={provider} value={provider} className="space-y-4 mt-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label htmlFor={`key-${provider}`} className="text-sm font-medium">
                  {provider} API Key
                </label>
                <a 
                  href={getApiKeyUrl(provider)} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-500 hover:text-blue-700 flex items-center"
                >
                  Get API Key
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
              
              <div className="flex">
                <div className="relative flex-1">
                  <Input
                    id={`key-${provider}`}
                    value={keyInputs[provider] || ""}
                    onChange={(e) => 
                      setKeyInputs((prev) => ({
                        ...prev,
                        [provider]: e.target.value,
                      }))
                    }
                    type={showKeys[provider] ? "text" : "password"}
                    placeholder={`Enter your ${provider} API key`}
                    className="pr-10"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    type="button"
                    className="absolute right-0 top-0 h-full"
                    onClick={() => toggleShowKey(provider)}
                  >
                    {showKeys[provider] ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <Button 
                  onClick={() => handleSaveKey(provider)}
                  className="ml-2"
                >
                  <Save className="mr-2 h-4 w-4" />
                  Save
                </Button>
              </div>
              
              <div className="pt-2">
                <h4 className="text-sm font-medium mb-2">Available Models:</h4>
                <div className="space-y-1">
                  {models
                    .filter((model) => model.provider === provider)
                    .map((model) => (
                      <div key={model.id} className="flex items-center text-sm pl-1">
                        <LinkIcon className="h-3 w-3 mr-2 text-muted-foreground" />
                        <span>{model.name}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
      
      <div className="border-t mt-4 pt-4 text-xs text-muted-foreground">
        <p>
          We never store your API keys on our servers. All keys are securely stored in your browsers local storage.
        </p>
      </div>
    </div>
  );
}