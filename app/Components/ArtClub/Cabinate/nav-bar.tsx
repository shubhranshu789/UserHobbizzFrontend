import Link from "next/link"
import { Button } from "@/components/ui/button"

export function NavBar() {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          ClubHub
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
            Dashboard
          </Link>
          <Link href="/members" className="text-gray-600 hover:text-gray-900">
            Members
          </Link>
          <Link href="/cabinet" className="text-sky-500 font-medium">
            Cabinet
          </Link>
          <Link href="/events" className="text-gray-600 hover:text-gray-900">
            Events
          </Link>
          <Link href="/resources" className="text-gray-600 hover:text-gray-900">
            Resources
          </Link>
        </nav>

        <div className="flex items-center">
          <Button variant="outline" className="bg-sky-100 text-sky-700 border-sky-200 hover:bg-sky-200">
            Profile
          </Button>

          <button className="md:hidden ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile navigation - hidden by default */}
      <div className="hidden">
        <div className="px-4 py-3 space-y-1">
          <Link href="/dashboard" className="block py-2 px-3 rounded hover:bg-gray-100">
            Dashboard
          </Link>
          <Link href="/members" className="block py-2 px-3 rounded hover:bg-gray-100">
            Members
          </Link>
          <Link href="/cabinet" className="block py-2 px-3 rounded bg-sky-100 text-sky-700">
            Cabinet
          </Link>
          <Link href="/events" className="block py-2 px-3 rounded hover:bg-gray-100">
            Events
          </Link>
          <Link href="/resources" className="block py-2 px-3 rounded hover:bg-gray-100">
            Resources
          </Link>
        </div>
      </div>
    </header>
  )
}
