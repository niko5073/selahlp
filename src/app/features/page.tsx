import Link from 'next/link';

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] font-figtree">
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-8 py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <img src="/logo.png" alt="Selah Logo" width={40} height={40} className="inline-block object-contain m-0 p-0" />
          <span className="text-white text-2xl font-bold tracking-tight group-hover:underline">Selah</span>
        </Link>
      </nav>

      {/* Header */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold tracking-tight text-white mb-4">Features</h1>
        <p className="text-xl text-gray-300">Build cloud infrastructure faster with Selah</p>
      </section>

      {/* Feature Section Example */}
      <section className="max-w-5xl mx-auto mb-20">
        {/* Main Feature Card with Gradient */}
        <div className="rounded-3xl p-8 mb-8 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-white">
              <h2 className="text-3xl font-bold mb-2">Agent</h2>
              <p className="text-lg mb-4">Your AI agent that scans code, blueprints infra, and deploys in minutes.</p>
            </div>
            <div className="flex-1">
              {/* Replace with your screenshot or code block */}
              <div className="bg-black/70 rounded-xl p-4 text-white font-mono text-sm">
                <pre>
{`# Example
selah scan --repo my-app
selah deploy --cloud aws`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#18181b] rounded-xl p-6 text-white shadow">
            <h3 className="font-semibold mb-2">Finds Context</h3>
            <p className="text-gray-300 text-sm">Selah understands your codebase and finds the right context for infra generation.</p>
          </div>
          <div className="bg-[#18181b] rounded-xl p-6 text-white shadow">
            <h3 className="font-semibold mb-2">Runs Commands</h3>
            <p className="text-gray-300 text-sm">Automate cloud tasks with simple, natural language commands.</p>
          </div>
          <div className="bg-[#18181b] rounded-xl p-6 text-white shadow">
            <h3 className="font-semibold mb-2">Loops on Errors</h3>
            <p className="text-gray-300 text-sm">Selah iterates and fixes errors automatically, saving you time.</p>
          </div>
        </div>
      </section>

      {/* Add more feature sections here as needed */}

      {/* Call to Action */}
      <section className="text-center py-16">
        <h2 className="text-4xl font-bold text-white mb-4">Try Selah Now</h2>
        <a href="/download" className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-2xl hover:bg-gray-200 transition">Download for Mac</a>
      </section>
    </main>
  );
} 