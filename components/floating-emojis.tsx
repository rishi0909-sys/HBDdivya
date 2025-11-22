"use client"

import { useEffect, useState } from "react"

interface FloatingEmoji {
  id: number
  emoji: string
  left: number
  delay: number
  duration: number
}

export default function FloatingEmojis() {
  const [emojis, setEmojis] = useState<FloatingEmoji[]>([])

  useEffect(() => {
    const floatingEmojis = ["🌸", "💗", "✨", "🎀", "💕", "🌷"]
    const newEmojis: FloatingEmoji[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      emoji: floatingEmojis[Math.floor(Math.random() * floatingEmojis.length)],
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 10 + Math.random() * 10,
    }))

    setEmojis(newEmojis)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {emojis.map((emoji) => (
        <div
          key={emoji.id}
          className="absolute animate-float-slow text-2xl md:text-4xl opacity-40 hover:opacity-70 transition-opacity"
          style={{
            left: `${emoji.left}%`,
            top: "50%",
            animationDelay: `${emoji.delay}s`,
            animationDuration: `${emoji.duration}s`,
          }}
        >
          {emoji.emoji}
        </div>
      ))}
    </div>
  )
}
