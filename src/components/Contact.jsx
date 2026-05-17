export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 md:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-[#2f3437] px-6 py-10 text-cream shadow-soft sm:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#d6c6b5]">Contact</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Find us and feel at home.</h3>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#d6c6b5]">
              Cascade is a calm escape in the heart of the city. Pop in for morning coffee in an intimate, modern setting.
            </p>
          </div>
          <div className="space-y-6 rounded-[2rem] bg-[#f4eee6] p-6 text-cascade-dark shadow-soft">
            <div>
              <h4 className="text-lg font-semibold">Opening Hours</h4>
              <p className="mt-2 text-sm leading-7 text-[#4b504f]">Daily: 08:00 am - 09:00 pm</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Location</h4>
              <p className="mt-2 text-sm leading-7 text-[#4b504f]">Open in Google Maps for the exact café location.</p>
              <a
                href="https://maps.app.goo.gl/iAnoVtmYsn8PtrZ96"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex rounded-full bg-cocoa px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-cream transition hover:bg-[#543e2c]"
              >
                View location
              </a>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Connect</h4>
              <p className="mt-2 text-sm leading-7 text-[#4b504f]">
                Phone: <a href="tel:+251949461270" className="text-cocoa underline transition hover:text-[#543e2c]">+251 94 946 1270</a><br />
                Instagram: <a href="https://www.instagram.com/cascadecoffee_/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="text-cocoa underline transition hover:text-[#543e2c]">@cascadecoffee_</a>
              </p>
            </div>
          </div>
        </div>
    
      </div>
    </section>
  )
}
