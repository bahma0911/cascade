export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 md:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-[#2f3437] px-6 py-10 text-cream shadow-soft sm:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#d6c6b5]">Contact</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Find us and feel at home.</h3>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#d6c6b5]">
              Cascade is a calm escape in the heart of the city. Pop in for morning coffee or evening desserts in an intimate, modern setting.
            </p>
          </div>
          <div className="space-y-6 rounded-[2rem] bg-[#f4eee6] p-6 text-cascade-dark shadow-soft">
            <div>
              <h4 className="text-lg font-semibold">Opening Hours</h4>
              <p className="mt-2 text-sm leading-7 text-[#4b504f]">Mon - Fri: 8am - 8pm<br />Sat - Sun: 9am - 9pm</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Location</h4>
              <p className="mt-2 text-sm leading-7 text-[#4b504f]">123 Cascade Lane, Riverside District</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Connect</h4>
              <p className="mt-2 text-sm leading-7 text-[#4b504f]">Phone: +1 (555) 432-1000<br />Instagram: @cascade.cafe<br />Telegram: @cascade_coffee</p>
            </div>
          </div>
        </div>
        <div className="mt-10 rounded-[2rem] border border-white/10 bg-black/10 p-8 text-center text-sm text-[#d6c6b5] shadow-soft">
          <p className="font-medium">Map placeholder</p>
          <p className="mt-4 max-w-2xl mx-auto leading-7">A beautifully designed map will appear here once your site is connected to a mapping service. Until then, enjoy the warm imagery and cozy atmosphere.</p>
        </div>
      </div>
    </section>
  )
}
