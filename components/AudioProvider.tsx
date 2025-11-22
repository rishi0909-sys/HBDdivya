"use client"

import React, { createContext, useContext, useEffect, useRef, useState } from "react"

type PlayTrackOptions = { volume?: number }

type AudioContextValue = {
  playBg: (src: string) => Promise<void>
  pauseBg: () => void
  playTrack: (src: string, opts?: PlayTrackOptions) => Promise<void>
  stopTrack: () => void
  isTrackPlaying: boolean
  setBgVolume: (v: number) => void
}

const AudioCtx = createContext<AudioContextValue | null>(null)

export const useAudio = () => {
  const ctx = useContext(AudioCtx)
  if (!ctx) throw new Error("useAudio must be used inside AudioProvider")
  return ctx
}

function fade(audio: HTMLAudioElement, from: number, to: number, ms = 300) {
  const steps = 12
  const stepMs = Math.max(10, Math.floor(ms / steps))
  const delta = (to - from) / steps
  let cur = from
  audio.volume = Math.max(0, Math.min(1, cur))
  let i = 0
  const iv = setInterval(() => {
    i++
    cur += delta
    audio.volume = Math.max(0, Math.min(1, cur))
    if (i >= steps) clearInterval(iv)
  }, stepMs)
}

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const bgRef = useRef<HTMLAudioElement | null>(null)
  const trackRef = useRef<HTMLAudioElement | null>(null)
  const [isTrackPlaying, setIsTrackPlaying] = useState(false)

  useEffect(() => {
    // create elements once on client
    bgRef.current = new Audio()
    bgRef.current.loop = true
    bgRef.current.preload = "metadata"
    bgRef.current.volume = 1

    trackRef.current = new Audio()
    trackRef.current.preload = "metadata"

    trackRef.current.onended = () => {
      setIsTrackPlaying(false)
      if (bgRef.current) {
        fade(bgRef.current, bgRef.current.volume, 1, 300)
        bgRef.current.play().catch(() => {})
      }
    }

    return () => {
      bgRef.current?.pause()
      trackRef.current?.pause()
      bgRef.current = null
      trackRef.current = null
    }
  }, [])

  const playBg = async (src: string) => {
    if (!bgRef.current) return
    if (bgRef.current.src !== src) bgRef.current.src = src
    bgRef.current.loop = true
    bgRef.current.volume = 1
    try {
      await bgRef.current.play()
    } catch {
      // autoplay blocked until interaction
    }
  }

  const pauseBg = () => {
    bgRef.current?.pause()
  }

  const setBgVolume = (v: number) => {
    if (!bgRef.current) return
    bgRef.current.volume = Math.max(0, Math.min(1, v))
  }

  const playTrack = async (src: string, opts?: PlayTrackOptions) => {
    if (!trackRef.current || !bgRef.current) return Promise.reject(new Error('audio-not-ready'))
    // duck background
    try {
      fade(bgRef.current, bgRef.current.volume, 0.12, 250)
    } catch {}
    trackRef.current.src = src
    // set pleasant low default volume if provided, otherwise keep track's current volume
    if (typeof opts?.volume === 'number') {
      trackRef.current.volume = Math.max(0, Math.min(1, opts.volume))
    } else {
      trackRef.current.volume = 0.18
    }
    try {
      await trackRef.current.play()
      setIsTrackPlaying(true)
    } catch {
      // playback blocked or failed; restore bg
      fade(bgRef.current, bgRef.current.volume, 1, 200)
      setIsTrackPlaying(false)
    }
  }

  const stopTrack = () => {
    if (!trackRef.current || !bgRef.current) return
    trackRef.current.pause()
    trackRef.current.currentTime = 0
    setIsTrackPlaying(false)
    fade(bgRef.current, bgRef.current.volume, 1, 200)
    bgRef.current.play().catch(() => {})
  }

  return (
    <AudioCtx.Provider value={{ playBg, pauseBg, playTrack, stopTrack, isTrackPlaying, setBgVolume }}>
      {children}
    </AudioCtx.Provider>
  )
}

export default AudioProvider
