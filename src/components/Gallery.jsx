import img1 from '../image/2girls-cascade.jpg'
import img2 from '../image/bar-cascade.jpg'
import img3 from '../image/cascade-word.jpg'
import img4 from '../image/coffee-eating-cascade.jpg'
import img5 from '../image/fountain-cascade.jpg'
import img6 from '../image/full-cascade.jpg'
import img7 from '../image/outside-cascade.jpg'
import img8 from '../image/radio-cascade.jpg'
import img9 from '../image/sideword-cascade.jpg'
import img10 from '../image/2girls-2-cascade.jpg'
import img11 from '../image/cascade-wordfront.jpg'

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
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
            <a href={src} target="_blank" rel="noreferrer" className="block h-full w-full">
              <img src={src} alt={`Gallery ${index + 1}`} className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-105" />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
