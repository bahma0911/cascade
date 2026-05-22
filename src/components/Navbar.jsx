import { useEffect, useState } from 'react'

const links = [
  { name: 'Home', href: '#home' },
  { name: 'Menu', href: '#menu' },
  { name: 'About', href: '#about' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'backdrop-blur-xl bg-slate-950/85 shadow-lg shadow-slate-950/10' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <a href="#home" className="flex items-center gap-2 text-lg font-semibold tracking-[0.3em] text-cream uppercase sm:text-xl">
          <img src="/light-box.png" alt="Cascade Logo" className="h-6 w-6" />
          Cascade
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-cream transition-colors duration-300 hover:text-cocoa">
              {link.name}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-solid border-white/25 bg-cocoa text-white shadow-lg shadow-cocoa/20 transition hover:bg-[#543e2c] md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="text-xl text-black">{menuOpen ? '×' : '☰'}</span>
        </button>
      </div>
      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="text-base text-white transition hover:text-cocoa" onClick={() => setMenuOpen(false)}>{link.name}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
