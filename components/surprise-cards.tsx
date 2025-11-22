"use client"

import { useState } from "react"

interface Surprise {
  title: string
  hidden: string
  icon: string
}

const surprises: Surprise[] = [
  {
    title: "A Wish for Peace",
    hidden: "May this year feel calm in ways your heart hasn't felt in a long time. 💗",
    icon: "🌸",
  },
  {
    title: "A Wish for Softness",
    hidden: "May life treat you gently, the way you deserve. 🌷",
    icon: "🎀",
  },
  {
    title: "A Wish for Love",
    hidden: "May you be surrounded by people who choose you without hesitation. ✨",
    icon: "💕",
  },
  {
    title: "A Wish for Happiness",
    hidden: "May small moments bring you big smiles this year. 🎀",
    icon: "✨",
  },
]

export default function SurpriseCards() {
  const [revealed, setRevealed] = useState<boolean[]>([false, false, false, false])

  const toggleReveal = (idx: number) => {
    const newRevealed = [...revealed]
    newRevealed[idx] = !newRevealed[idx]
    setRevealed(newRevealed)
  }

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className=" h-[50px] text-4xl md:text-5xl font-playpen font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
          Tap to Reveal Your Birthday Surprises <span className="emoji ml-2 text-foreground">🎀</span>
        </h2>
        {/* </div> */}
        <p className="text-center text-foreground/60 mb-12">Click each card to discover your wishes</p>

        <div className="grid md:grid-cols-2 gap-6">
          {surprises.map((surprise, idx) => (
            <div
              key={idx}
              onClick={() => toggleReveal(idx)}
              className="h-48 cursor-pointer perspective animate-bounce-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div
                className={`relative w-full h-full transition-all duration-500 transform ${
                  revealed[idx] ? "rotate-y-180" : ""
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  transform: revealed[idx] ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* Front */}
                <div
                  className="absolute w-full h-full bg-gradient-to-br from-pink-200/60 to-purple-200/60 rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-pink-200/50 shadow-soft hover:shadow-soft-lg transition-all"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="text-5xl mb-3">{surprise.icon}</div>
                  <h3 className="text-xl font-playpen font-bold text-foreground">{surprise.title}</h3>
                </div>

                {/* Back */}
                <div
                  className="absolute w-full h-full bg-gradient-to-br from-purple-300/70 to-pink-300/70 rounded-2xl p-6 flex items-center justify-center text-center border border-purple-200/50 shadow-soft"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <p className="text-lg font-medium text-white">{surprise.hidden}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
