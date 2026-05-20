import { useState, useEffect } from 'react'

export default function Footer() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <footer className="bg-[#1c2423] text-cream">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="text-xl font-semibold tracking-[0.3em] text-white">Cascade</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-[#d6c6b5]">Premium cozy coffee experiences with an earthy, modern touch.</p>
        </div>
        <div className="flex items-center gap-4 text-sm text-[#d6c6b5]">
          <a href="https://www.instagram.com/cascadecoffee_/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="transition hover:text-white">Instagram</a>
          <a href="tel:+251949461270" className="transition hover:text-white">+251 94 946 1270</a>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-6 text-center text-sm text-[#89937d] md:px-8">
        © 2026 Cascade Coffee. All rights reserved.
      </div>
      {visible && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ opacity: 1, backgroundColor: '#6b4f3a' }}
          className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-cocoa bg-opacity-100 opacity-100 text-white shadow-xl transition hover:bg-[#543e2c]"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </footer>
  )
}
