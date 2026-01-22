import { Button } from "@/components/ui/button";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          
          {/* Logo / Brand */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-blue-600 text-white flex items-center justify-center rounded-lg font-bold">
              CA
            </div>
            <span className="font-semibold text-lg tracking-tight">
              CA Monk Blog
            </span>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a className="hover:text-black transition" href="#">Tools</a>
            <a className="hover:text-black transition" href="#">Practice</a>
            <a className="hover:text-black transition" href="#">Events</a>
            <a className="hover:text-black transition" href="#">Job Board</a>
            <a className="hover:text-black transition" href="#">Points</a>
          </nav>

          {/* Profile Button */}
          <Button className="rounded-full px-5 text-sm">
            Profile
          </Button>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1 max-w-7xl mx-auto p-6 w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t bg-white mt-10">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
          
          {/* Brand */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-semibold text-gray-900">
              <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-lg font-bold">
                CA
              </div>
              CA Monk Blog
            </div>
            <p className="text-gray-500">
              Learn, practice, and grow with curated finance and tech blogs.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-2">
            <p className="font-medium text-gray-900">Quick Links</p>
            <ul className="space-y-1">
              <li><a className="hover:text-black transition" href="#">Home</a></li>
              <li><a className="hover:text-black transition" href="#">Blogs</a></li>
              <li><a className="hover:text-black transition" href="#">Careers</a></li>
              <li><a className="hover:text-black transition" href="#">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-2">
            <p className="font-medium text-gray-900">Legal</p>
            <ul className="space-y-1">
              <li><a className="hover:text-black transition" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-black transition" href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center text-xs text-gray-500 py-4 border-t">
          © {new Date().getFullYear()} CA Monk Blog. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
