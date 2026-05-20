export default function FeaturedMenu() {
  return (
    <section className="mb-16">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cocoa">Featured Flavors</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-cascade-dark sm:text-4xl">Seasonal highlights from our kitchen.</h3>
        </div>
        <p className="max-w-xl text-sm leading-6 text-[#4b504f] sm:text-base">
          Explore our digital menu below to discover the full selection of coffee, tea, breakfast, and cozy bites.
        </p>
      </div>
    </section>
  )
}
