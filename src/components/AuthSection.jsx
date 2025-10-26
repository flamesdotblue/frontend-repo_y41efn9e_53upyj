import { useState } from 'react';
import { Mail, Lock, UserPlus, LogIn } from 'lucide-react';

export default function AuthSection() {
  const [mode, setMode] = useState('login');

  return (
    <section id="auth" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Access your workspace</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-xl">
            Create an account or sign in to manage conversions, keep your preferences, and enjoy a seamless file workflow.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
            <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" /> One-click JPG → PDF
            </li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500" /> Merge multiple pages into one PDF
            </li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-rose-500" /> Secure by default
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur p-6">
          <div className="flex items-center gap-2 text-sm font-medium">
            <button
              onClick={() => setMode('login')}
              className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border ${mode === 'login' ? 'bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-neutral-900 dark:border-white' : 'bg-transparent text-neutral-700 dark:text-neutral-300 border-black/10 dark:border-white/10'}`}
            >
              <LogIn className="h-4 w-4" /> Login
            </button>
            <button
              onClick={() => setMode('signup')}
              className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border ${mode === 'signup' ? 'bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-neutral-900 dark:border-white' : 'bg-transparent text-neutral-700 dark:text-neutral-300 border-black/10 dark:border-white/10'}`}
            >
              <UserPlus className="h-4 w-4" /> Sign up
            </button>
          </div>

          <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            {mode === 'signup' && (
              <div>
                <label className="block text-xs font-medium mb-1">Full name</label>
                <div className="relative">
                  <input type="text" required className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-800/80 px-3 py-2 pl-9 outline-none focus:ring-2 focus:ring-neutral-900/20 dark:focus:ring-white/20" placeholder="Alex Johnson" />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">👤</span>
                </div>
              </div>
            )}
            <div>
              <label className="block text-xs font-medium mb-1">Email address</label>
              <div className="relative">
                <input type="email" required className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-800/80 px-3 py-2 pl-9 outline-none focus:ring-2 focus:ring-neutral-900/20 dark:focus:ring-white/20" placeholder="you@domain.com" />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Password</label>
              <div className="relative">
                <input type="password" required className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-800/80 px-3 py-2 pl-9 outline-none focus:ring-2 focus:ring-neutral-900/20 dark:focus:ring-white/20" placeholder="••••••••" />
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
              </div>
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-500 text-white px-4 py-2.5 font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition">
              {mode === 'login' ? 'Login' : 'Create account'}
            </button>
            <p className="text-[11px] text-neutral-500 text-center">By continuing you agree to our Terms and Privacy Policy.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
