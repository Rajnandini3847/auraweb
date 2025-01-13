import AppSidebar from '@/components/app-sidebar';
import ChatInput from '@/components/ChatInput';
//import HistorySidebar from '@/components/HistorySidebar';
import ProfileDropdown from '@/components/ProfileDropdown';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen  px-4 sm:px-6 md:px-8 lg:px-12">
      {/* History Button */}
      <AppSidebar/>
      
      <Link href={"/profile"}>
       <ProfileDropdown/>
      </Link>
      
      <div className="max-w-3xl mx-auto pt-20 pb-24 px-4">
        {/* Chat messages will appear here */}
        <ChatInput />
      </div>
      
    </div>     
  );
}
