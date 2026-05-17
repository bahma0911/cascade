const images = [
  '/image/2girls-cascade.jpg',
  '/image/bar-cascade.jpg',
  '/image/cascade-word.jpg',
  '/image/coffee-eating-cascade.jpg',
  '/image/fountain-cascade.jpg',
  '/image/full-cascade.jpg',
  '/image/outside-cascade.jpg',
  '/image/radio-cascade.jpg',
  '/image/sideword-cascade.jpg',
  '/image/2girls-2-cascade.jpg',
  '/image/cascade-wordfront.jpg',
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
