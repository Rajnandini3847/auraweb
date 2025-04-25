//import { HomepageSpline } from "@/components/HomepageSpline"
//import { Header } from "@/components/Header"
import FeatureSection from "@/components/FeatureSection"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sparkle, Bot, Key, Zap, ArrowRight, Command } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tighter hover:opacity-90 transition-opacity flex items-center gap-2"
            aria-label="AURA - Home"
          >
            <Sparkle className="w-6 h-7 text-purple-500" /> AURA
          </Link>
          <div className="flex gap-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-4 bg-gradient-to-r from-purple-800 via-purple-600 to-purple-800">
        <div className="absolute inset-0 bg-opacity-50 bg-black"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
           Your Ultimate Source of 
            <span className="block text-purple-300">LLMS</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your workflow with the cutting-edge API management tool. Perfect for students, professionals, and businesses.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700 transform hover:scale-105 transition-transform">
              <Link href="/register" className="flex items-center gap-2">
                Try Aura <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-purple-600 text-purple-300 hover:bg-purple-700 hover:text-white transform hover:scale-105 transition-transform">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section 
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-shadow bg-gray-800 rounded-lg transform hover:scale-105 transition-transform">
              <div className="flex items-center justify-center mb-4 animate-pulse">
                <Key className="w-16 h-16 text-blue-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-white text-center">API Key Management</h3>
              <p className="text-gray-400 text-center">Securely store and manage your API keys for different language models with ease.</p>
            </Card>
            <Card className="p-8 hover:shadow-xl transition-shadow bg-gray-800 rounded-lg transform hover:scale-105 transition-transform">
              <div className="flex items-center justify-center mb-4 animate-bounce">
                <Bot className="w-16 h-16 text-purple-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-white text-center">Multi-LLM Support</h3>
              <p className="text-gray-400 text-center">Access and manage multiple LLMs like GPT-4 and Claude from a single interface.</p>
            </Card>
            <Card className="p-8 hover:shadow-xl transition-shadow bg-gray-800 rounded-lg transform hover:scale-105 transition-transform">
              <div className="flex items-center justify-center mb-4 animate-spin">
                <Command className="w-16 h-16 text-orange-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-white text-center">Advanced Features</h3>
              <p className="text-gray-400 text-center">Utilize advanced features like context management and conversation history.</p>
            </Card>
          </div>
        </div>
      </section>
      */}
      <FeatureSection />

      

      {/* Footer Section */}
      <footer className="bg-gray-900 py-10 px-4 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Support Me</h2>
          <p className="text-lg mb-6">If you love using Auraweb, consider buying me a coffee!</p>
          <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700 transform hover:scale-105 transition-transform mb-4">
            <Link href="https://buymeacoffee.com/rajnandiniq" target="_blank" className="flex items-center gap-2">
              Buy Me a Coffee <Sparkle className="w-4 h-4" />
            </Link>
          </Button>
          <div className="flex justify-center gap-4 mt-4">
            <Link href="https://twitter.com" target="_blank" className="text-white hover:text-purple-500">
              <i className="fab fa-twitter fa-2x"></i>
            </Link>
            <Link href="https://github.com" target="_blank" className="text-white hover:text-purple-500">
              <i className="fab fa-github fa-2x"></i>
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="text-white hover:text-purple-500">
              <i className="fab fa-linkedin fa-2x"></i>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}