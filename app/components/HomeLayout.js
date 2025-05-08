// this is the layout for the home page. Home page will include a navbar(left hand side) for accessing user dashboard, AI arcticle writer, All tools, my content and My account(settings) ).

export default function HomeLayout(){
    return (
        <div className="flex h-screen">
            {/* left side for the navbar */}
            <nav className="w-1/4 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <ul className="mt-4 space-y-2">
          <li>
            <Link href="/home/section1" className="block p-2 hover:bg-gray-700">Section 1</Link>
          </li>
          <li>
            <Link href="/home/section2" className="block p-2 hover:bg-gray-700">Section 2</Link>
          </li>
          <li>
            <Link href="/home/section3" className="block p-2 hover:bg-gray-700">Section 3</Link>
          </li>
        </ul>
      </nav>
            {/* right side - placeholder for content */}
            <main className="w-3/4 p-4 bg-gray-400">
                {children}
            </main>
        </div>
    );
}