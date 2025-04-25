"use client";

import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function CtaSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-primary"
        >
          <div className="absolute inset-0 bg-grid-white/[0.05]">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-foreground/5 via-primary to-primary"></div>
          </div>
          
          <div className="relative flex flex-col items-center justify-center gap-6 px-4 py-12 text-center md:px-8 md:py-16 lg:px-16 lg:py-20">
            <Sparkles className="h-12 w-12 text-primary-foreground/80" />
            
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl">
              Ready to transform your AI conversations?
            </h2>
            
            <p className="max-w-[800px] text-primary-foreground/90 md:text-xl">
              Try Aura Chat today and experience the flexibility of using your favorite LLMs with customized personalities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button 
                size="lg" 
                className="gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2 bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Learn More
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}