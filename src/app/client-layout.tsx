"use client";

//import { usePathname } from "next/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/components/Providers";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const pathname = usePathname();
  
  return (
    <AuthProvider>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        (
            <main className="flex-1">{children}</main>
          )
      </ThemeProvider>
    </AuthProvider>
  );
}
