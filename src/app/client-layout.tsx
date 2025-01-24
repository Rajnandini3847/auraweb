"use client";

import { usePathname } from "next/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { AuthProvider } from "@/components/Providers";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isChat = pathname === "/chat";

  return (
    <AuthProvider>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <SidebarProvider>
          {isChat && <AppSidebar />}
          {isChat ? (
            <SidebarInset>
              <main className="flex-1">
                <SidebarTrigger />
                {children}
              </main>
            </SidebarInset>
          ) : (
            <main className="flex-1">{children}</main>
          )}
        </SidebarProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
