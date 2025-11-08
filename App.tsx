import { Mail, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black opacity-90"></div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <header className="container mx-auto px-6 py-8">
          <div className="flex items-center gap-4">
            <div className="relative w-32 h-32 bg-white rounded-lg p-4">
              <img
                src="/Screenshot 2025-10-05 164010.png"
                alt="PROAMP LTD Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">PROAMP LTD</h1>
              <p className="text-xs text-zinc-400 tracking-wide">PROAMP.CO.UK</p>
            </div>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-4xl w-full text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                Handmade Guitar Amplifiers
              </h2>
              <p className="text-xl md:text-2xl text-zinc-400 font-light">
                Crafted with precision in the UK
              </p>
            </div>

            <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

            <div className="max-w-2xl mx-auto space-y-6">
              <p className="text-lg text-zinc-300 leading-relaxed">
                We're putting the finishing touches on something extraordinary.
                Each amplifier is meticulously handcrafted to deliver unparalleled tone
                and reliability for discerning musicians.
              </p>

              <div className="inline-block bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg px-8 py-4">
                <p className="text-amber-500 font-semibold text-lg">Coming Soon</p>
                <p className="text-sm text-zinc-400 mt-1">Website launching shortly</p>
              </div>
            </div>

            <div className="pt-8 space-y-6">
              <p className="text-zinc-400 text-sm uppercase tracking-widest">Get in touch</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="mailto:proampltd@gmail.com"
                  className="flex items-center gap-2 text-zinc-300 hover:text-amber-500 transition-colors duration-300 group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>proampltd@gmail.com</span>
                </a>
                <div className="hidden sm:block w-px h-6 bg-zinc-800"></div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <MapPin className="w-5 h-5" />
                  <span>Made in the UK</span>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="container mx-auto px-6 py-8">
          <div className="text-center text-zinc-500 text-sm">
            <p>&copy; {new Date().getFullYear()} PROAMP LTD. All rights reserved.</p>
          </div>
        </footer>
      </div>

      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}

export default App;