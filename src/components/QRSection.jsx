const menuQRCode = {
  label: 'Cascade Menu',
  url: 'https://cascade.com/#menu',
}

export default function QRSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 md:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-[#2f3437] px-6 py-10 text-cream shadow-soft sm:px-10">
        <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#d6c6b5]">QR Menu Access</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Scan once to open our menu.</h3>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#d6c6b5]">
              One QR code gives instant access to Cascade's menu on mobile, so guests can browse and order with ease.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-5 shadow-lg backdrop-blur-xl">
            <div className="mb-4 rounded-3xl overflow-hidden bg-white/10 shadow-inner">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=${encodeURIComponent(menuQRCode.url)}`}
                alt="Cascade menu QR code"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-2 text-sm text-[#d6c6b5]">
              <p className="font-semibold text-white">{menuQRCode.label}</p>
              <p>{menuQRCode.url}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
