"use client"

import { useEffect, useState } from "react"
import Logo from "@/components/logo"
import HeroSection from "@/components/hero-section"
import PersonalMessage from "@/components/personal-message"
import SurpriseCards from "@/components/surprise-cards"
import ConfessionCard from "@/components/confession-card"
import LetterSection from "@/components/letter-section"
import PhotoGallery from "@/components/photo-gallery"
import MusicPlayer from "@/components/music-player"
import FinalSection from "@/components/final-section"
import FloatingEmojis from "@/components/floating-emojis"
import AudioProvider from "@/components/AudioProvider"
import AutoPlayIkkudi from "@/components/AutoPlayIkkudi"

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    setTimeout(() => setShowConfetti(true), 500)
  }, [])

  return (
    // <AudioProvider>
      <main className="min-h-screen  bg-[#F6F6F0] overflow-x-hidden">
        {/* <AutoPlayIkkudi /> */}
        <FloatingEmojis />
        <Logo />
        <HeroSection showConfetti={showConfetti} />
        <PersonalMessage />
        <SurpriseCards />
        <ConfessionCard />
        <LetterSection />
        <PhotoGallery />
        <MusicPlayer />
        <FinalSection />
      </main>
    // </AudioProvider>
  )
}
