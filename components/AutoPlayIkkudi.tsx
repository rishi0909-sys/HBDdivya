"use client"

import { useEffect, useRef, useState } from 'react'
import { useAudio } from './AudioProvider'

export default function AutoPlayIkkudi() {
  const triedRef = useRef(false)
  const { playTrack } = useAudio()
  const [needsPrompt, setNeedsPrompt] = useState(false)

  useEffect(() => {
    let mounted = true

    const tryPlay = async () => {
      try {
        await playTrack('/ikkudi.mp3', { volume: 0.18 })
        triedRef.current = true
        if (mounted) setNeedsPrompt(false)
      } catch (e) {
        // autoplay blocked or audio not ready -> show prompt
        if (mounted) setNeedsPrompt(true)
      }
    }

    // Try immediately
    tryPlay()

    // Fallback: if autoplay blocked, start on first user interaction
    const onFirst = async () => {
      if (triedRef.current) return
      triedRef.current = true
      try {
        await playTrack('/ikkudi.mp3', { volume: 0.18 })
        if (mounted) setNeedsPrompt(false)
      } catch (e) {
        if (mounted) setNeedsPrompt(true)
      }
    }

    window.addEventListener('pointerdown', onFirst, { once: true })
    window.addEventListener('keydown', onFirst, { once: true })

    return () => {
      mounted = false
      window.removeEventListener('pointerdown', onFirst)
      window.removeEventListener('keydown', onFirst)
    }
  }, [playTrack])

  const handleClick = async () => {
    try {
      await playTrack('/ikkudi.mp3', { volume: 0.18 })
      setNeedsPrompt(false)
    } catch {
      // still blocked; keep prompt visible
      setNeedsPrompt(true)
    }
  }

  if (!needsPrompt) return null

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 px-4 py-2 bg-pink-500 text-white rounded-full shadow-lg hover:scale-105 transform-gpu"
      aria-label="Start soothing music"
    >
      ▶ Start Soothing Music
    </button>
  )
}
