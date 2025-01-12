import ChatInput from '../components/ChatInput';
import ProfilePage from '../app/profile/page';
import SettingsPage from '../app/settings/page';
import { History, UserCircle} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen ">
      {/* History Button */}
      <button className="fixed left-8 top-4 p-2 rounded-full hover:bg-white hover:shadow-md transition-all">
         <History size={24} className="text-gray-600" />
      </button>
      <button className="fixed right-8 top-4 p-2 rounded-full hover:bg-slate-50 hover:shadow-md transition-all">
         <UserCircle size={24} className="text-gray-600"/>
      </button>
      <div className="max-w-3xl mx-auto pt-20 pb-24 px-4">
        {/* Chat messages will appear here */}
        <ChatInput />
      </div>
      
    </div>     
  );
}
