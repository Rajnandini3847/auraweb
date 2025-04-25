"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  KeyRound, 
  Cpu, 
  Sparkles, 
  MessageSquareText, 
  Gauge, 
  Shield 
} from "lucide-react";
import { motion } from "framer-motion";

export function FeaturesSection() {
  const features = [
    {
      title: "Multiple LLM Support",
      description: "Connect to OpenAI, Anthropic, Google, and more using your own API keys.",
      icon: <Cpu className="h-12 w-12 text-primary/80" />,
      delay: 0
    },
    {
      title: "Personality Modes",
      description: "Choose from professional, friendly, chill, formal, creative, and more.",
      icon: <Sparkles className="h-12 w-12 text-primary/80" />,
      delay: 0.1
    },
    {
      title: "Secure API Key Management",
      description: "Your API keys are encrypted and never stored on our servers.",
      icon: <KeyRound className="h-12 w-12 text-primary/80" />,
      delay: 0.2
    },
    {
      title: "Conversation History",
      description: "All your conversations are saved for easy reference.",
      icon: <MessageSquareText className="h-12 w-12 text-primary/80" />,
      delay: 0.3
    },
    {
      title: "Blazing Fast Responses",
      description: "Get responses quickly thanks to our optimized architecture.",
      icon: <Gauge className="h-12 w-12 text-primary/80" />,
      delay: 0.4
    },
    {
      title: "Privacy Focused",
      description: "Your data stays with you, not us. Complete privacy by design.",
      icon: <Shield className="h-12 w-12 text-primary/80" />,
      delay: 0.5
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none bg-primary/10 hover:bg-primary/20">
            <span>Features</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Everything you need for smarter AI interactions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-[900px] text-muted-foreground md:text-xl"
          >
            Aura Chat gives you the flexibility to use your favorite LLMs with customized personality modes that are not available anywhere else.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
            >
              <Card className="h-full transition-all hover:shadow-md">
                <CardHeader>
                  <div className="mb-4 rounded-full w-16 h-16 flex items-center justify-center bg-muted">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}