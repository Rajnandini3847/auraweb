"use client"
import { Bot, Command, Key, ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Key,
    title: "API Key Management",
    description: "Securely store and manage your API keys for different language models with ease.",
    color: "text-blue-500",
    badge: "Security First",
    delay: 0.1,
  },
  {
    icon: Bot,
    title: "Multi-LLM Support",
    description: "Access and manage multiple LLMs like GPT-4 and Claude from a single interface.",
    color: "text-purple-500",
    badge: "Powerful",
    delay: 0.2,
  },
  {
    icon: Command,
    title: "Advanced Features",
    description: "Utilize advanced features like context management and conversation history.",
    color: "text-orange-500",
    badge: "Advanced",
    delay: 0.3,
  },
]

export default function FeatureSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 py-20">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:30px_30px] [mask-image:radial-gradient(white,transparent_70%)]" />
      <div className="container relative">
        <div className="mx-auto mb-16 flex max-w-[58rem] flex-col items-center justify-center text-center">
          <Badge className="mb-4" variant="outline">
            Features
          </Badge>
          <h2 className="mb-4 text-4xl font-bold tracking-tight">Powerful Features for Your AI Workflow</h2>
          <p className="text-muted-foreground">
            Everything you need to manage and interact with AI models, all in one place.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: feature.delay,
                duration: 0.5,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <Card className="group relative overflow-hidden border-muted-foreground/20 transition-colors hover:border-muted-foreground/50">
                <CardHeader>
                  <div className="mb-4 flex items-center justify-between">
                    <div className={cn("flex size-12 items-center justify-center rounded-lg border", feature.color)}>
                      <feature.icon className="size-6" />
                    </div>
                    <Badge variant="secondary">{feature.badge}</Badge>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="group w-full">
                    Learn more <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
                <div className="absolute right-[0.5px] top-[0.5px] size-[calc(100%-1px)] rounded-xl bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <Button size="lg" className="group">
            <span>Get Started Today</span>
            <Sparkles className="ml-2 size-4 transition-transform group-hover:rotate-12" />
          </Button>
        </div>
      </div>
    </section>
  )
}

