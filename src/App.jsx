import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedMenu from './components/FeaturedMenu'
import DigitalMenu from './components/DigitalMenu'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MenuModal from './components/MenuModal'
import { menuItems } from './data/menu'

function App() {
  const [activeItem, setActiveItem] = useState(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden bg-cream text-cascade-dark">
      <Navbar />
      <main className="relative">
        <Hero />
        <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:px-8">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cocoa">Welcome to Cascade</p>
            <h2 className="text-3xl font-semibold tracking-tight text-cascade-dark sm:text-4xl">A warm retreat for coffee, comfort, and conversation.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#4b504f] sm:text-lg">
              Discover premium brews, seasonal desserts, and a space designed for slow mornings and lingering evenings.
            </p>
          </div>
          <FeaturedMenu onSelectItem={setActiveItem} />
        </section>
        <DigitalMenu menuItems={menuItems} onSelectItem={setActiveItem} />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <MenuModal item={activeItem} onClose={() => setActiveItem(null)} />
      {!mounted && <div className="fixed inset-0 bg-[#2f3437] opacity-80" />}
    </div>
  )
}

export default App
