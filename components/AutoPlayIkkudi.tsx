"use client"

import { useEffect, useRef, useState } from 'react'
import { useAudio } from './AudioProvider'

export default function AutoPlayIkkudi() {
  const triedRef = useRef(false)
  const { playTrack, prepareTrackMuted, unmuteTrack } = useAudio()
  const [waitingGesture, setWaitingGesture] = useState(false)

  useEffect(() => {
    let mounted = true

    const tryPlay = async () => {
      try {
        await playTrack('/ikkudi.mp3', { volume: 0.07 })
        triedRef.current = true
        return
      } catch {
        // try to prepare muted playback so we can unmute on gesture
        try {
          await prepareTrackMuted('/ikkudi.mp3')
          triedRef.current = true
          // wait for user gesture to unmute
          if (mounted) setWaitingGesture(true)
          return
        } catch {
          // preparing muted failed; we'll wait for gesture to try playTrack then
          if (mounted) setWaitingGesture(true)
        }
      }
    }

    // Try immediately
    tryPlay()

    const onGesture = async () => {
      if (triedRef.current) {
        // we prepared muted playback earlier, just unmute
        try {
          unmuteTrack(0.18)
        } catch {}
        if (mounted) setWaitingGesture(false)
        return
      }

      triedRef.current = true
      try {
        await playTrack('/ikkudi.mp3', { volume: 0.18 })
        if (mounted) setWaitingGesture(false)
      } catch {
        // give up; nothing more we can do programmatically
        if (mounted) setWaitingGesture(false)
      }
    }

    window.addEventListener('pointerdown', onGesture, { once: true })
    window.addEventListener('keydown', onGesture, { once: true })

    return () => {
      mounted = false
      window.removeEventListener('pointerdown', onGesture)
      window.removeEventListener('keydown', onGesture)
    }
  }, [playTrack])

  // No visible UI — we will unmute on the first user gesture (no button)
  return null
}
