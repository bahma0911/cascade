const images = [
  'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
]

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-6 pb-20 md:px-8">
      <div className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-cocoa">Gallery</p>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight text-cascade-dark sm:text-4xl">A warm tone for every moment.</h3>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, index) => (
          <div key={index} className="group overflow-hidden rounded-[2rem] bg-slate-950/5 shadow-soft transition hover:-translate-y-1">
            <img src={src} alt={`Gallery ${index + 1}`} className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-105" />
          </div>
        ))}
      </div>
    </section>
  )
}
