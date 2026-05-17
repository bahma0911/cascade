export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 pb-20 md:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 rounded-[2rem] border border-white/10 bg-white/90 p-8 shadow-soft md:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-cocoa">Our story</p>
          <h3 className="text-3xl font-semibold tracking-tight text-cascade-dark sm:text-4xl">An Ethiopian-inspired coffee haven.</h3>
          <p className="text-base leading-8 text-[#4b504f]">
            At Cascade, every cup is rooted in warmth. We blend premium beans with a modern, earthy interior to create a space where conversation flows gently and mornings feel restorative.
          </p>
          <p className="text-base leading-8 text-[#4b504f]">
            Experience fragrant Ethiopian coffee notes, soft wood accents, and subtle amber lighting. Our café is designed to feel premium, calm, and inviting from the first step inside.
          </p>
        </div>
        <div className="grid gap-6">
          <article className="rounded-[2rem] bg-[#f4eee6] p-8 shadow-soft">
            <h4 className="mb-4 text-2xl font-semibold text-cascade-dark">Warm modern interiors</h4>
            <p className="text-sm leading-7 text-[#4b504f]">Soft upholstery, polished stone, and layered textures create a quiet luxury that pairs beautifully with our coffee rituals.</p>
          </article>
          <article className="rounded-[2rem] bg-[#f4eee6] p-8 shadow-soft">
            <h4 className="mb-4 text-2xl font-semibold text-cascade-dark">Crafted for connection</h4>
            <p className="text-sm leading-7 text-[#4b504f]">From breakfast gatherings to afternoon conversations, Cascade is the ideal retreat for meaningful moments and gentle energy.</p>
          </article>
        </div>
      </div>
    </section>
  )
}
