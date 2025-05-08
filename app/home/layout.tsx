export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex h-screen sticky">
        {/* Left Side - Navbar */}
        <nav className="w-1/4 bg-gray-800 space-y-5 text-white p-4">
          <h2 className="text-xl font-bold">Brand-name</h2>
          <div className="bg-white h-24 w-76">Placeholder</div>
          <ul className="mt-4 space-y-2">
            <li><a href="/home/dashboard" className="block p-2 hover:bg-gray-700">Dashboard</a></li>
            <li><a href="/home/aiarticlewriter" className="block p-2 hover:bg-gray-700">AI Article Writer</a></li>
            <li><a href="/home/alltools" className="block p-2 hover:bg-gray-700">All Tools (82)</a></li>
            <li><a href="/home/mycontent" className="block p-2 hover:bg-gray-700">My Content</a></li>
          </ul>
        </nav>
  
        {/* Right Side - Placeholder for Content */}
        <main className="w-3/4 bg-gray-200 p-4 overflow-y-auto">
          {children}
        </main>
      </div>
    );
  }
  