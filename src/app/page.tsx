import AppSidebar from '@/components/app-sidebar';
import ChatInput from '@/components/ChatInput';
import ProfileDropdown from '@/components/ProfileDropdown';


export default function Home() {
  return (
    <div className="min-h-screen  px-4 sm:px-6 md:px-8 lg:px-12">
      <AppSidebar/>
      <ProfileDropdown/>
      <div className="max-w-3xl mx-auto pt-20 pb-24 px-4">
        <ChatInput />
      </div>
    </div>     
  );
}
