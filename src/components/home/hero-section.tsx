"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  MessageSquareText, 
  Sparkles
} from "lucide-react";

import { motion as m } from "framer-motion";

export function HeroSection() {
   
  const textRef = useRef<HTMLSpanElement>(null);
  const personalities = [
    { name: "Professional", color: "text-blue-500" },
    { name: "Friendly", color: "text-green-500" },
    { name: "Chill", color: "text-purple-500" },
    { name: "Formal", color: "text-amber-500" },
    { name: "Creative", color: "text-pink-500" }
  ];

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;
    
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % personalities.length;
      textElement.textContent = personalities[currentIndex].name;
      textElement.className = `font-bold ${personalities[currentIndex].color}`;
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background dark:from-primary/10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-10">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 max-w-3xl"
          >
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none bg-primary/10 hover:bg-primary/20">
              <Sparkles className="mr-1 h-3 w-3" />
              <span>Introducing Aura Chat</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              One place to use all your favorite LLMs with <span ref={textRef} className="font-bold text-blue-500">Professional</span> personality
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
              Connect your API keys from OpenAI, Anthropic, Google, and more. Choose your personality mode and get the perfect response every time.
            </p>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="gap-2 group">
              <span>Get Started</span>
              <Zap className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <MessageSquareText className="h-4 w-4" />
              <span>Try Demo</span>
            </Button>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative w-full max-w-4xl rounded-lg border bg-background shadow-xl overflow-hidden"
          >
            <div className="px-4 py-3 border-b">
              <div className="flex items-center gap-1">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <div className="ml-3 text-xs font-medium">Aura Chat</div>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xs font-medium">You</span>
                </div>
                <div className="flex-1 rounded-lg bg-muted p-3 text-sm">
                  Can you explain quantum computing in simple terms?
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-blue-500" />
                </div>
                <div className="flex-1 rounded-lg bg-blue-500/10 p-3 text-sm">
                  <div className="font-medium text-blue-500 mb-1">Professional Mode</div>
                  <p>
                    Quantum computing leverages quantum mechanics principles to process information. Unlike classical computers that use bits (0s and 1s), quantum computers use quantum bits or qubits that can exist in multiple states simultaneously through superposition.
                  </p>
                  <p className="mt-2">
                    This allows quantum computers to perform certain calculations exponentially faster than classical computers, particularly for problems involving optimization, cryptography, and simulating quantum systems.
                  </p>
                </div>
              </div>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center justify-center gap-8 py-6"
          >
            <div className="text-muted-foreground/60 text-sm font-medium">Works with</div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              <div className="flex items-center text-lg font-semibold">OpenAI</div>
              <div className="flex items-center text-lg font-semibold">Anthropic</div>
              <div className="flex items-center text-lg font-semibold">Google</div>
              <div className="flex items-center text-lg font-semibold">Mistral</div>
              <div className="flex items-center text-lg font-semibold">Cohere</div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}