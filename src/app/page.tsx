import { HomepageSpline } from "@/components/HomepageSpline"
import { Header } from "@/components/Header"
import HowSection from "@/components/HowSection"
import ProfileSection from "@/components/ProfileSection"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-12">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <HomepageSpline />
        <div className="max-w-[90rem] mx-auto">
          <div className="text-center space-y-8 mb-16">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter pt-10">
              Your Ultimate LLM Chat
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-[800px] mx-auto">
              Put your API Keys and use all your favourite models at 1 place 
            </p>
          </div>

          {/* Demo Video Container */}
          <div className="relative aspect-video max-w-[1000px] mx-auto rounded-xl overflow-hidden bg-muted pt-10">
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                size="lg"
                className="rounded-full w-16 h-16 p-0"
                aria-label="Play demo video"
              >
                <Play className="h-6 w-6" />
              </Button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-background/5" />
          </div>
        </div>
      </section>

      <HowSection />
      <ProfileSection />
    </div>
  )
}