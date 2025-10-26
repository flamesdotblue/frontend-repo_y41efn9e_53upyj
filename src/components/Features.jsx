import { Image as ImageIcon, Layers, Shield, Rocket } from 'lucide-react';

const features = [
  {
    title: 'JPG → PDF',
    desc: 'Turn individual JPGs into crisp, ready‑to‑share PDFs instantly.',
    icon: ImageIcon,
    anchor: '#jpg-to-pdf',
    accent: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Merge pages',
    desc: 'Combine multiple images into a single, ordered PDF file.',
    icon: Layers,
    anchor: '#merge',
    accent: 'from-violet-500 to-indigo-500',
  },
  {
    title: 'Private & secure',
    desc: 'Local-first processing keeps your files safe and private.',
    icon: Shield,
    anchor: '#security',
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Fast by design',
    desc: 'Snappy UI and modern tech for a delightful workflow.',
    icon: Rocket,
    anchor: '#speed',
    accent: 'from-amber-500 to-orange-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Everything you need for beautiful PDFs</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Effortless tools for converting JPGs, merging pages, and creating polished PDFs with style.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <a key={f.title} href={f.anchor} className="group rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur p-5 hover:shadow-xl hover:-translate-y-0.5 transition">
              <div className={`h-11 w-11 rounded-xl bg-gradient-to-tr ${f.accent} text-white grid place-items-center shadow-md mb-4`}>
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">{f.desc}</p>
              <div className="mt-4 text-xs font-semibold text-neutral-900 dark:text-white opacity-60 group-hover:opacity-100">Learn more →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
