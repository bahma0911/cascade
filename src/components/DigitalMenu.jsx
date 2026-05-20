import { useEffect, useMemo, useState } from 'react'

const categories = ['All', 'Hot Coffee Drinks', 'Iced Drinks & mojitios', 'Hot Tea', 'Juice', 'Breakfast', 'Pizza & Wraps', 'Other Foods', 'Extras' ]

export default function DigitalMenu({ menuItems }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    setShowAll(false)
  }, [activeCategory])

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, menuItems, search])

  const visibleItems = useMemo(() => {
    if (activeCategory === 'All' && !showAll) {
      return filteredItems.slice(0, 4)
    }
    return filteredItems
  }, [activeCategory, filteredItems, showAll])

  const showMoreButton = activeCategory === 'All' && filteredItems.length > 4

  return (
    <section id="menu" className="mx-auto max-w-7xl px-6 pb-20 md:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-white/90 px-6 py-8 shadow-soft backdrop-blur-xl sm:px-10">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cocoa">Digital Menu</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-cascade-dark sm:text-4xl">Browse with ease.</h3>
          </div>
          <div className="max-w-md">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search coffee, tea, foods..."
              className="w-full rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm text-cascade-dark outline-none transition focus:border-cocoa focus:ring-2 focus:ring-cocoa/20"
            />
          </div>
        </div>
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${activeCategory === category ? 'bg-cocoa text-cream' : 'border border-slate-200 bg-white text-cascade-dark hover:bg-slate-50'}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleItems.map((item) => (
            <article key={item.id} className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[#f7f2eb] shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-56 overflow-hidden">
                <img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-slate-200 px-3 py-1 text-xs uppercase tracking-[0.25em] text-[#5a5a5a]">{item.category}</span>
                  <span className="text-lg font-semibold text-cocoa">{item.price}</span>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-cascade-dark">{item.name}</h4>
                </div>
              </div>
            </article>
          ))}
          {visibleItems.length === 0 && (
            <div className="col-span-full rounded-[1.75rem] border border-dashed border-slate-300 bg-white/80 p-10 text-center text-sm text-[#5f605f]">
              No results found. Try another category or search term.
            </div>
          )}
        </div>
        {showMoreButton && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="rounded-full bg-cocoa px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-cream transition hover:bg-[#543e2c]"
            >
              {showAll ? 'Show less' : `Show more (${filteredItems.length - 4})`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
