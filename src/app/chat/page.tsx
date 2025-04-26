// import AppSidebar from "@/components/app-sidebar";
// import ChatInput from "@/components/ChatInput";
// import ProfileDropdown from "@/components/ProfileDropdown";
// import { SelectModal } from "@/components/SelectModal";

// const Chat = () => {
//   return (
//     <div className="min-h-screen  px-4 sm:px-6 md:px-8 lg:px-12">
//       <AppSidebar />
//       <ProfileDropdown />
//       <SelectModal />
      
//       <div className="max-w-3xl mx-auto pt-20 pb-24 px-4">
//         <ChatInput />
//       </div>
//     </div>
//   );
// };

// export default Chat;
"use client";

//import { useTheme } from "next-themes";
import { ChatInterface } from "@/components/chat/ChatInterface";
import { ThemeProvider } from "@/components/theme-provider";

export default function ChatPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex flex-col min-h-screen">
        <ChatInterface />
      </div>
    </ThemeProvider>
  );
}