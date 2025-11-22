"use client"

const memories = [
  { icon: "💬", label: "First Talk", description: "Where it all began" },
  { icon: "😄", label: "Inside Jokes", description: "Shared laughter & moments" },
  { icon: "🎞️", label: "Best Memories", description: "Times we won't forget" },
  { icon: "🤝", label: "Shared Laughs", description: "Your infectious energy" },
  { icon: "🌟", label: "Growth Together", description: "Becoming better versions" },
]

export default function MemoriesTimeline() {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-playpen font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          Our Memories
        </h2>

        <div className="space-y-8">
          {memories.map((memory, index) => (
            <div key={index} className="flex items-center gap-6 group cursor-pointer">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 shadow-md">
                  {memory.icon}
                </div>
              </div>
              <div className="flex-1 bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-pink-100/50 group-hover:border-purple-300 transition-all duration-300">
                <h3 className="text-2xl font-playpen font-bold text-foreground mb-1">{memory.label}</h3>
                <p className="text-foreground/70">{memory.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
