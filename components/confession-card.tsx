"use client"

import { useEffect, useState } from "react"

export default function ConfessionCard() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const fullText = `I have something to say to you…

No matter what happened, no matter where we stand today…
I want you to know that I genuinely wish you the happiest things in life.
I'm healing, learning, growing… and I hope you are too.
You deserve love that feels safe and peaceful.`

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <div
          className={`bg-gradient-to-br from-pink-100/70 to-purple-100/70 rounded-3xl shadow-soft-lg p-8 md:p-12 border border-pink-200/50 transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Floating hearts decoration */}
          <div className="absolute -top-4 -left-4 text-3xl animate-float">💗</div>
          <div className="absolute -bottom-4 -right-4 text-3xl animate-float" style={{ animationDelay: "0.5s" }}>
            💗
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-playpen font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-8 text-center">
              {fullText.split("\n")[0]}
            </h3>

            <div className="space-y-4">
              {fullText
                .split("\n\n")
                .slice(1)
                .map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-lg text-foreground leading-relaxed animate-fade-up"
                    style={{ animationDelay: `${0.3 + idx * 0.2}s` }}
                  >
                    {paragraph}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
