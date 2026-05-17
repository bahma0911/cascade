export default function MenuModal({ item, onClose }) {
  if (!item) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-6 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] bg-[#f4eee6] shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full border border-slate-300 bg-white/70 px-3 py-2 text-lg text-cascade-dark transition hover:bg-white"
          aria-label="Close modal"
        >
          ×
        </button>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="p-8">
            <h2 className="text-4xl font-semibold text-cascade-dark">{item.name}</h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-[#4b504f]">{item.description}</p>
            <p className="mt-6 text-3xl font-semibold text-cocoa">{item.price}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-cocoa/10 px-4 py-2 text-sm text-cocoa">{item.category}</span>
              <span className="rounded-full bg-slate-200 px-4 py-2 text-sm text-[#5e5e5e]">Premium ingredients</span>
            </div>
            <button
              type="button"
              className="mt-10 inline-flex rounded-full bg-cocoa px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-cream transition hover:bg-[#543e2c]"
            >
              Order Now
            </button>
          </div>
          <div className="relative h-96 overflow-hidden bg-[#2f3437]">
            <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2f3437]/90 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </div>
  )
}
