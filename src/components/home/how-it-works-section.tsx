"use client";

// import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Add your API keys",
      description: "Securely connect your existing LLM API keys from OpenAI, Anthropic, Google, and more.",
      icon: "key"
    },
    {
      number: "02",
      title: "Choose your model",
      description: "Select from a wide range of models across providers, like GPT-4, Claude, or Gemini.",
      icon: "cpu"
    },
    {
      number: "03",
      title: "Select a personality",
      description: "Pick the perfect tone for your conversation - professional, friendly, chill, formal, or creative.",
      icon: "sparkles"
    },
    {
      number: "04",
      title: "Start chatting",
      description: "Get responses tailored to your selected personality and model combination.",
      icon: "message-square-text"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none bg-primary/10 hover:bg-primary/20">
              <span>How It Works</span>
            </div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Simple setup, powerful capabilities
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              Get started in minutes and unlock the full potential of AI with your existing API keys. No need to create new accounts with each provider.
            </motion.p>
            
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background">
                    <span className="text-lg font-medium">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-4"
            >
              <Button size="lg" className="gap-2 group">
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-video overflow-hidden rounded-xl border bg-background shadow-xl">
              <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]">
                <div className="absolute inset-0 bg-black/80 dark:bg-black/70">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-background/0 to-background/0"></div>
                </div>
              </div>
              
              <div className="relative flex h-full flex-col justify-center p-6 md:p-8">
                <div className="mx-auto w-full max-w-md space-y-4">
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-semibold">Supported Models</h3>
                    <p className="text-sm text-muted-foreground">
                      Connect to any of these models using your API keys
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg border bg-background/80 p-3">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <div className="text-sm font-medium">OpenAI</div>
                      </div>
                      <div className="mt-2 text-xs text-muted-foreground">
                        GPT-3.5-Turbo, GPT-4, GPT-4o
                      </div>
                    </div>
                    
                    <div className="rounded-lg border bg-background/80 p-3">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <div className="text-sm font-medium">Anthropic</div>
                      </div>
                      <div className="mt-2 text-xs text-muted-foreground">
                        Claude Instant, Claude 2, Claude 3
                      </div>
                    </div>
                    
                    <div className="rounded-lg border bg-background/80 p-3">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <div className="text-sm font-medium">Google</div>
                      </div>
                      <div className="mt-2 text-xs text-muted-foreground">
                        Gemini Pro, Gemini Ultra
                      </div>
                    </div>
                    
                    <div className="rounded-lg border bg-background/80 p-3">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <div className="text-sm font-medium">Mistral</div>
                      </div>
                      <div className="mt-2 text-xs text-muted-foreground">
                        Mistral 7B, Mixtral 8x7B
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}