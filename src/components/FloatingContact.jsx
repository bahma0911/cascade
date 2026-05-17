export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/15554321000"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-3 rounded-full bg-[#25d366] px-4 py-3 text-sm font-semibold text-white shadow-xl transition hover:bg-[#21c45a]"
      >
        <span className="text-lg">💬</span>
        WhatsApp
      </a>
      <a
        href="https://t.me/cascade_coffee"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-3 rounded-full bg-[#0088cc] px-4 py-3 text-sm font-semibold text-white shadow-xl transition hover:bg-[#0077b8]"
      >
        <span className="text-lg">✈️</span>
        Telegram
      </a>
    </div>
  )
}
