import Spline from '@splinetool/react-spline';
import { Sparkles, Upload, Wand2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white dark:from-neutral-950/60 dark:via-neutral-950/70 dark:to-neutral-950" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 px-3 py-1.5 text-xs font-medium backdrop-blur">
          <Sparkles className="h-4 w-4 text-violet-600" />
          <span className="text-neutral-800 dark:text-neutral-100">Glassmorphic, modern PDF toolkit</span>
        </div>
        <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-300">
          Convert images to stunning PDFs in seconds
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
          PixelPDF is a sleek, secure, and lightning‑fast way to turn JPGs into PDFs, merge pages, and more — all in your browser.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#jpg-to-pdf" className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white px-5 py-3 text-sm font-semibold shadow-lg shadow-neutral-900/10 hover:bg-neutral-800 transition">
            <Upload className="h-4 w-4" />
            JPG to PDF
          </a>
          <a href="#features" className="inline-flex items-center gap-2 rounded-xl bg-white text-neutral-900 dark:bg-neutral-800 dark:text-white px-5 py-3 text-sm font-semibold border border-black/10 dark:border-white/10 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition">
            <Wand2 className="h-4 w-4" />
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
}
