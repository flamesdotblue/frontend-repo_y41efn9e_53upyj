import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AuthSection from './components/AuthSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        {/* Anchor targets for sections referenced in the nav */}
        <section id="jpg-to-pdf" className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur p-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold tracking-tight">JPG to PDF</h3>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-300">Upload one or more JPG images and we will transform them into a beautiful PDF. Drag-and-drop supported.</p>
                </div>
                <div className="flex-1 w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button className="rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-800/80 px-4 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition">Select images</button>
                    <button className="rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-3 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition">Convert to PDF</button>
                  </div>
                  <p className="mt-2 text-xs text-neutral-500">Full conversion runs in the backend — this is a preview UI.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="merge" className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur p-6">
              <h3 className="text-2xl font-bold tracking-tight">Merge multiple pages into a single PDF</h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-300">Combine several images into a single, ordered PDF. Arrange, reorder, and create a polished document.</p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button className="rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-800/80 px-4 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition">Add pages</button>
                <button className="rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-800/80 px-4 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition">Reorder</button>
                <button className="rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-3 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition">Create PDF</button>
              </div>
            </div>
          </div>
        </section>

        <section id="security" className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 dark:from-emerald-400/10 dark:to-teal-400/10 p-6">
              <h3 className="text-2xl font-bold tracking-tight">Secure by default</h3>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">Your files are processed with privacy in mind. We focus on minimal data retention and transparent controls.</p>
            </div>
          </div>
        </section>

        <AuthSection />

        <footer className="py-10 border-t border-black/5 dark:border-white/10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} PixelPDF. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm">
              <a href="#features" className="hover:underline">Features</a>
              <a href="#auth" className="hover:underline">Account</a>
              <a href="#home" className="hover:underline">Top</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
