const featuredItems = [
  {
    id: 1,
    category: 'Coffee',
    name: 'Cascade Signature Latte',
    description: 'Smooth espresso, steamed milk, and a hint of honey.',
    price: 'ETB 6.50',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    category: 'Desserts',
    name: 'Hazelnut Tartelette',
    description: 'Crisp pastry with rich nutty caramel cream.',
    price: 'ETB 8.00',
    image: 'https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    category: 'Breakfast',
    name: 'Warm Grain Bowl',
    description: 'Nutty quinoa with roasted roots and tahini drizzle.',
    price: 'ETB 10.50',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
  },
]

export default function FeaturedMenu() {
  return (
    <section className="mb-16" id="menu">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cocoa">Featured Flavors</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-cascade-dark sm:text-4xl">Seasonal highlights from our kitchen.</h3>
        </div>
        <p className="max-w-xl text-sm leading-6 text-[#4b504f] sm:text-base">
          Crafted for comfort and warmth, each menu card is designed to bring a premium, earthy touch to your table.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {featuredItems.map((item) => (
          <article key={item.id} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/80 shadow-soft transition-transform duration-500 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-72 overflow-hidden">
              <img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#2f3437]/80 to-transparent" />
            </div>
            <div className="space-y-4 p-6">
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-full bg-cocoa/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-cocoa">{item.category}</span>
                <span className="text-lg font-semibold text-cocoa">{item.price}</span>
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-cascade-dark">{item.name}</h4>
                <p className="mt-3 text-sm leading-6 text-[#4b504f]">{item.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
