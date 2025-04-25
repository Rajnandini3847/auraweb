"use client";

import { useState } from "react";
import { Tabs,  TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export function ModesSection() {
  const [activeTab, setActiveTab] = useState("professional");
  
  const modes = {
    professional: {
      title: "Professional",
      description: "Clear, concise, and business-appropriate responses.",
      color: "bg-blue-500",
      textColor: "text-blue-500",
      borderColor: "border-blue-500",
      bgColor: "bg-blue-500/10",
      question: "How can I improve team productivity?",
      answer: "To improve team productivity, implement clear communication channels, establish measurable goals, and provide regular feedback. Consider using productivity tools like Asana or Trello to track projects, and schedule regular retrospectives to identify and remove bottlenecks. Additionally, encourage work-life balance to prevent burnout, which can significantly impact long-term productivity."
    },
    friendly: {
      title: "Friendly",
      description: "Warm, conversational, and approachable responses.",
      color: "bg-green-500",
      textColor: "text-green-500",
      borderColor: "border-green-500",
      bgColor: "bg-green-500/10",
      question: "Can you suggest a good movie for tonight?",
      answer: "Hey there! For movie night, how about checking out 'Everything Everywhere All At Once'? It's this amazing blend of comedy, action, and heartfelt moments that'll keep you entertained the whole time! It's got Michelle Yeoh being absolutely fantastic, and trust me, you'll be talking about it for days! Grab some popcorn and enjoy! Let me know what you think if you watch it! 😊"
    },
    chill: {
      title: "Chill",
      description: "Relaxed, casual, and laid-back responses.",
      color: "bg-purple-500",
      textColor: "text-purple-500",
      borderColor: "border-purple-500",
      bgColor: "bg-purple-500/10",
      question: "What's a good hobby to try?",
      answer: "So like, photography could be pretty cool to get into. Just grab your phone to start - no need for fancy gear right away. You can just wander around your neighborhood and snap whatever catches your eye. Super low-pressure, and you can share the pics on Instagram if you want, or just keep 'em for yourself. It's all good either way, ya know?"
    },
    formal: {
      title: "Formal",
      description: "Highly structured, proper, and traditional responses.",
      color: "bg-amber-500",
      textColor: "text-amber-500",
      borderColor: "border-amber-500",
      bgColor: "bg-amber-500/10",
      question: "How should I address a dignitary in correspondence?",
      answer: "When addressing a dignitary in formal correspondence, one must adhere to proper protocol. For ambassadors, the appropriate salutation is 'Your Excellency.' For government ministers, 'The Honorable' is the correct form of address. It is imperative that one researches the specific titles associated with the individual's position to ensure the utmost propriety is maintained throughout the communication."
    },
    creative: {
      title: "Creative",
      description: "Imaginative, expressive, and original responses.",
      color: "bg-pink-500",
      textColor: "text-pink-500",
      borderColor: "border-pink-500",
      bgColor: "bg-pink-500/10",
      question: "Tell me a short story about a robot.",
      answer: "In a city where rain fell like digital tears, ARIA-7 collected forgotten dreams. Each night, she'd unfold her copper wings and dance between rooftops, gathering the whispers humans abandoned in sleep. She stored them in her crystal heart—not because she was programmed to, but because she'd discovered something her creators never intended: the dreams glowed warmer when kept together. By morning, she'd return to her charging station, secretly nurturing the kaleidoscope of human imagination pulsing within her circuits."
    }
  };

  const activeMode = modes[activeTab as keyof typeof modes];

  return (
    <section id="modes" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none bg-primary/10 hover:bg-primary/20">
            <span>Personality Modes</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Choose the perfect tone for every conversation
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-[900px] text-muted-foreground md:text-xl"
          >
            Customize how AI responds to you with unique personality modes not available on standard platforms.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-12 max-w-4xl"
        >
          <Tabs 
            defaultValue="professional" 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {Object.entries(modes).map(([key, mode]) => (
                  <TabsTrigger 
                    key={key} 
                    value={key}
                    className={`flex items-center gap-2 data-[state=active]:${mode.textColor} data-[state=active]:${mode.bgColor}`}
                  >
                    <span>{mode.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <div className="relative mt-4 overflow-hidden rounded-xl border bg-background p-2">
              <div className="absolute top-0 right-0 left-0 h-1">
                <div className={`h-full w-full ${activeMode.color}`}></div>
              </div>
              <div className="flex flex-col space-y-4 p-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-xs font-medium">You</span>
                  </div>
                  <div className="flex-1 rounded-lg bg-muted p-3 text-sm">
                    {activeMode.question}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full ${activeMode.bgColor} flex items-center justify-center`}>
                    <span className={`text-xs font-medium ${activeMode.textColor}`}>AI</span>
                  </div>
                  <div className={`flex-1 rounded-lg ${activeMode.bgColor} p-3 text-sm`}>
                    <div className={`font-medium ${activeMode.textColor} mb-1`}>{activeMode.title} Mode</div>
                    <p>{activeMode.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}