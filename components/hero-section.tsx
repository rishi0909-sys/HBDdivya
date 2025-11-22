"use client"

import { useEffect, useState } from "react"
import Confetti from "./confetti"

interface Props {
  showConfetti: boolean
}

export default function HeroSection({ showConfetti }: Props) {
  const [hearts, setHearts] = useState<{ id: number; left: number }[]>([])
  const [heartCount, setHeartCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setHeartCount((prev) => {
        const newId = prev + 1
        const left = Math.random() * 100
        setHearts((h) => [...h, { id: newId, left }])

        setTimeout(() => {
          setHearts((h) => h.filter((heart) => heart.id !== newId))
        }, 2000)

        return newId
      })
    }, 600)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {showConfetti && <Confetti />}

      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-heart-float text-4xl"
          style={{ left: `${heart.left}%`, bottom: "20%" }}
        >
          ❤️
        </div>
      ))}

      <div className="relative z-10 text-center">
        <div className="mb-8">
          <div>
          <h1 className=" h-[400px] text-6xl md:text-7xl font-playpen font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-purple-300 mb-4 animate-text-glow">
            Happy Birthday Divya
          </h1>
          </div>
          <p className="text-4xl mb-8">💖</p>
          <p className="text-xl md:text-2xl text-foreground/80 font-sans max-w-2xl mx-auto font-light">
            You deserve all the softness and magic today.
          </p>
        </div>

        <div className="flex justify-center gap-8 mt-12 text-3xl md:text-4xl">
          <span className="animate-float">🎂</span>
          <span className="animate-float" style={{ animationDelay: "0.2s" }}>
            ✨
          </span>
          <span className="animate-float" style={{ animationDelay: "0.4s" }}>
            🌸
          </span>
          <span className="animate-float" style={{ animationDelay: "0.6s" }}>
            💗
          </span>
          <span className="animate-float" style={{ animationDelay: "0.8s" }}>
            🎈
          </span>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="text-foreground/40 text-sm">↓ Scroll for more ↓</div>
      </div>
    </section>
  )
}
