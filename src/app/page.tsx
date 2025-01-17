import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen  px-4 sm:px-6 md:px-8 lg:px-12">
      <nav className="absolute top-0 right-0 p-6">
        <Button>
          <Link
            href="/chat"
            className="px-6 py-2 rounded-full shadow-md transition-all "
          >
            Try Now
          </Link>
        </Button>
      </nav>
    </div>
  );
}
