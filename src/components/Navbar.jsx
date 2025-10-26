import { useState } from 'react';
import { Rocket, Menu, X, Shield, Layers, Image as ImageIcon, User } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'JPG → PDF', icon: ImageIcon, href: '#jpg-to-pdf' },
    { label: 'Merge PDFs', icon: Layers, href: '#merge' },
    { label: 'Security', icon: Shield, href: '#security' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-500 text-white grid place-items-center shadow-lg shadow-indigo-500/30">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="font-semibold text-lg tracking-tight">PixelPDF</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                <item.icon className="h-4 w-4" />
                {item.label}
              </a>
            ))}
            <a href="#auth" className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 transition-colors">
              <User className="h-4 w-4" />
              Login / Sign up
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                <item.icon className="h-4 w-4" />
                {item.label}
              </a>
            ))}
            <a href="#auth" className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
              <User className="h-4 w-4" />
              Login / Sign up
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
