"use client"

const reasons = [
  { icon: "😊", text: "Your smile makes everything instantly better." },
  { icon: "💫", text: "You're kind in ways you don't even notice." },
  { icon: "🫂", text: "You make people feel safe and understood." },
  { icon: "💝", text: "Your heart is softer than you know." },
  { icon: "✨", text: "You turn ordinary moments into beautiful memories." },
  { icon: "💕", text: "You deserve all the love you give to others." },
]

export default function ReasonsCards() {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-playpen font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Why You&apos;re Special
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="group cursor-pointer" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="bg-gradient-to-br from-pink-100/60 to-purple-100/60 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-pink-200/50 hover:border-purple-300">
                <div className="text-5xl mb-4 group-hover:animate-float">{reason.icon}</div>
                <p className="text-lg font-medium text-foreground">{reason.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
