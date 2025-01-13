import ChatInput from '@/components/ChatInput';
import HistorySidebar from '@/components/HistorySidebar';
import {  UserCircle} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 ">
      {/* History Button */}
      <HistorySidebar/>
      
      <Link href={"/profile"}>
        <button className="fixed right-8 top-4 p-2 rounded-full hover:bg-slate-50 hover:shadow-md transition-all">
          <UserCircle size={24} className="text-gray-600"/>
        </button>
      </Link>
      
      <div className="max-w-3xl mx-auto pt-20 pb-24 px-4">
        {/* Chat messages will appear here */}
        <ChatInput />
      </div>
      
    </div>     
  );
}
