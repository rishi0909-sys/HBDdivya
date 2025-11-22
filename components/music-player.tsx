"use client"

import { useState, useRef } from "react"

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(() => {
          // Playback failed - likely no audio source available
          setIsPlaying(false)
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-purple-100/60 to-pink-100/60 rounded-3xl shadow-soft-lg p-8 border border-purple-200/50 text-center">
          <div className="text-4xl mb-4">🎶</div>
          <h3 className="text-2xl font-playpen font-bold text-foreground mb-2">Wanna listen to your Fav Band? 💕</h3>
          <p className="text-foreground/70 mb-6">Here You go</p>

          <button
            onClick={togglePlay}
            className="px-8 py-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full font-semibold hover:shadow-soft-lg transition-all duration-300 hover:scale-105"
          >
            {isPlaying ? "⏸ Pause Music" : "▶ Play Music"}
          </button>

          <audio
            ref={audioRef}
            src="/KcigsAfterSex.mp3"
            preload="metadata"
            style={{ display: "none" }}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
        </div>
      </div>
    </section>
  )
}
