"use client"

import { useEffect, useState } from "react"
import Confetti from "./confetti"

export default function FinalSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [showFinalConfetti, setShowFinalConfetti] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      setShowFinalConfetti(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-20 px-4 md:px-8 relative">
      {showFinalConfetti && <Confetti />}

      <div className="max-w-3xl mx-auto">
        <div
          className={`bg-gradient-to-br from-pink-100/80 to-purple-100/80 rounded-3xl shadow-soft-lg p-8 md:p-12 border border-pink-200/50 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="text-5xl mb-6 animate-float">🎉</div>

          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
            I hope this little page made you smile even a little, Divya.
          </p>

          <p className="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
            You deserve all the beauty life can offer.
          </p>

          <p className="text-2xl mt-6">Happy Birthday once again 💕🎀</p>

          <div className="flex justify-center gap-4 mt-8 text-3xl">
            <span className="animate-float">✨</span>
            <span className="animate-float" style={{ animationDelay: "0.3s" }}>
              🌷
            </span>
            <span className="animate-float" style={{ animationDelay: "0.6s" }}>
              💗
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
