/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/FkQLete9amt
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NavBar() {
  return (
    (<header className="flex items-center justify-between h-16 px-4 border-b bg-white">
      <div className="flex items-center space-x-4">
        <LogInIcon className="w-8 h-8 text-green-500" />
        <div className="relative">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search"
            className="pl-8 pr-4 py-2 rounded-full bg-gray-100" />
        </div>
      </div>
      <nav className="flex items-center space-x-6">
        <Link href="#" className="text-gray-600 hover:text-gray-900" prefetch={false}>
          Launches
        </Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900" prefetch={false}>
          Categories
        </Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900" prefetch={false}>
          Community
        </Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900" prefetch={false}>
          About Us
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" className="bg-green-100 text-green-700">
          Create an account
        </Button>
        <Button variant="default" className="bg-green-700 text-white">
          Sign in
        </Button>
      </div>
    </header>)
  );
}

function LogInIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>)
  );
}


function SearchIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}
