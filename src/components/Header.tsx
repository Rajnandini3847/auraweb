'use client'

import { Button } from "@/components/ui/button"
import { Sparkle } from "lucide-react"
import { useSession, signOut } from "next-auth/react"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Header() {
  const { data: session, status } = useSession()

  return (
    <header className="absolute top-4 left-4 right-4 z-50 shadow-md">
      <div className="container mx-auto px-20 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter hover:opacity-90 transition-opacity flex gap-2"
          aria-label="AURA - Home"
        >
          <Sparkle className="w-6 h-7 text-yellow-500" /> AURA
        </Link>

        {status === 'loading' ? (
          <Button size="lg" disabled>Loading...</Button>
        ) : session ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={session.user?.image || ''} alt={session.user?.name || ''} />
                  <AvatarFallback>{session.user?.name?.[0] || session.user?.email?.[0]}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuItem className="flex-col items-start">
                <div className="text-sm font-medium">{session.user?.name}</div>
                <div className="text-xs text-muted-foreground">{session.user?.email}</div>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => signOut({ callbackUrl: '/' })}>
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button asChild size="lg">
            <Link href="/login">Try Now</Link>
          </Button>
        )}
      </div>
    </header>
  )
}