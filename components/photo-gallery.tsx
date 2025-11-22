"use client"

export default function PhotoGallery() {
  const items = [
    { type: 'image', src: '/WhatsApp Image 2025-11-07 at 14.59.45.jpeg', alt: 'Memory 1' },
    { type: 'image', src: '/WhatsApp Image 2025-11-07 at 14.59.55 (1).jpeg', alt: 'Memory 2' },
    { type: 'image', src: '/WhatsApp Image 2025-11-07 at 14.59.55.jpeg', alt: 'Memory 3' },
    { type: 'image', src: '/WhatsApp Image 2025-11-07 at 15.00.08.jpeg', alt: 'Memory 4' },
    { type: 'video', src: '/WhatsApp Video 2025-11-07 at 15.00.13.mp4', poster: '/WhatsApp Image 2025-11-07 at 14.59.45.jpeg' },
    { type: 'video', src: '/WhatsApp Video 2025-11-07 at 15.00.14.mp4', poster: '/WhatsApp Image 2025-11-07 at 14.59.55.jpeg' },
  ]

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-playpen font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
          <span className="emoji ml-2 text-foreground">📸</span>Photo & Video Gallery
        </h2>
        <p className="text-center text-foreground/60 mb-8">Add your favorite memories here 💗</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((it, idx) => (
            <div
              key={idx}
              className="h-72 md:h-[60vh] bg-gradient-to-br from-pink-100/50 to-purple-100/50 rounded-3xl border-2 border-dashed border-pink-200/50 flex items-center justify-center hover:border-purple-300 transition-all duration-300 cursor-pointer hover:shadow-soft animate-fade-up"
              style={{ animationDelay: `${idx * 0.06}s` }}
            >
              <div className="w-full h-full">
                {it.type === 'image' ? (
                  <img
                    src={it.src}
                    alt={it.alt || `photo-${idx}`}
                    className="rounded-3xl object-cover w-full h-full block"
                    loading="lazy"
                  />
                ) : (
                  <video
                    preload="metadata"
                    poster={it.poster}
                    muted
                    autoPlay
                    playsInline loop 
                    className="rounded-3xl object-cover w-full h-full bg-black"
                  >
                    <source src={it.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
