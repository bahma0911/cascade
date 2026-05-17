export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#1f2927] text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#4f6f52]/40 via-[#2f3437]/15 to-[#2f3437]/95" />
      <div className="absolute inset-0 bg-warm-light mix-blend-screen" />
      <div className="absolute left-1/2 top-20 h-40 w-40 -translate-x-1/2 rounded-full bg-[#f4eee6]/20 blur-3xl" />
      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-center px-6 py-24 md:px-8 lg:py-32">
        <div className="mb-8 max-w-3xl rounded-3xl border border-white/10 bg-slate-950/40 p-8 shadow-soft backdrop-blur-xl">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/90">Cozy café retreat</span>
          <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight sm:text-6xl text-white">Cascade</h1>
          <p className="mt-4 max-w-xl text-lg leading-8 text-white/90 sm:text-xl">Coffee. Comfort. Conversation.</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#menu" className="inline-flex w-full items-center justify-center rounded-full bg-cocoa px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#543e2c] sm:w-auto">
              View Menu
            </a>
            <a href="#contact" className="inline-flex w-full items-center justify-center rounded-full border border-white/40 bg-white/10 px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white sm:w-auto">
              Visit Us
            </a>
          </div>
        </div>
        <div className="absolute right-8 top-24 hidden h-48 w-48 animate-float rounded-full bg-[#f4eee6]/10 blur-2xl md:block" />
        <div className="absolute left-8 bottom-24 hidden h-28 w-28 rounded-full bg-[#f4eee6]/15 blur-2xl md:block" />
        <div className="pointer-events-none absolute right-10 bottom-10 h-40 w-24 opacity-70">
          <div className="absolute bottom-0 left-1/2 h-24 w-6 -translate-x-1/2 rounded-full bg-white/35 blur-xl" />
          <div className="absolute bottom-10 left-[30%] h-24 w-5 rounded-full bg-white/40 opacity-70 animate-steam" />
          <div className="absolute bottom-4 left-[55%] h-28 w-4 rounded-full bg-white/30 opacity-60 animate-steam delay-200" />
        </div>
      </div>
    </section>
  )
}
