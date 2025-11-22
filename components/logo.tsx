"use client"

export default function Logo() {
  return (
    <div className="flex justify-center pt-8 pb-4">
      <div className="animate-float-slow">
        <div className="text-center">
          <h1 className=" h-full text-5xl font-bold bg-gradient-to-r from-pink-400 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-text-glow">
            Divya <span className="emoji ml-2 text-foreground">🌷</span>
          </h1>
          <p className="text-lg text-purple-400 font-playpen mt-2">soft. warm. magical.</p>
          <div className="flex justify-center gap-2 mt-3 text-2xl">
            <span className="animate-sparkle">✨</span>
            <span className="animate-sparkle" style={{ animationDelay: "0.3s" }}>
              ✨
            </span>
            <span className="animate-sparkle" style={{ animationDelay: "0.6s" }}>
              ✨
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
