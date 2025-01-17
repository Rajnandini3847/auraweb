'use client'

import { usePathname } from "next/navigation"
import { ThemeProvider } from "@/components/theme-provider";
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
export default function ClientLayout ({
    children,
}: {
    children : React.ReactNode
}) {
    const pathname = usePathname()
    const isChat = pathname === '/chat'

    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SidebarProvider>
            {isChat && <AppSidebar /> }
            <main className={isChat ? 'ml-[250px]' : ''}>
              { isChat && <SidebarTrigger /> }
              {children}
            </main>
          </SidebarProvider>
        </ThemeProvider>
    )
}