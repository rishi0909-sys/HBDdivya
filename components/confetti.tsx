"use client"

import { useEffect, useState } from "react"

interface ConfettiPiece {
  id: number
  left: number
  delay: number
  duration: number
}

export default function Confetti() {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([])

  useEffect(() => {
    const pieces: ConfettiPiece[] = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 1,
    }))

    setConfetti(pieces)

    const timer = setTimeout(() => {
      setConfetti([])
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  const confettiEmojis = ["🎉", "🎊", "🎈", "💖", "✨", "🌟", "💫"]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti text-2xl md:text-4xl"
          style={{
            left: `${piece.left}%`,
            top: "-20px",
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
          }}
        >
          {confettiEmojis[piece.id % confettiEmojis.length]}
        </div>
      ))}
    </div>
  )
}
