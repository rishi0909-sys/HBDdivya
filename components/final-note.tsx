export default function FinalNote() {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-gradient-to-r from-pink-100/80 to-blue-100/80 backdrop-blur-sm rounded-3xl shadow-lg p-12 border border-purple-200/50">
          <p className="text-xl md:text-2xl font-playpen font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-6">
            I hope this little website made you smile, even for a moment.
          </p>

          <p className="text-lg text-foreground/80 mb-8">You deserve the sweetest kind of happiness, Divya.</p>

          <p className="text-3xl mb-8">❤️</p>

          <p className="text-2xl md:text-3xl font-playpen font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Happy Birthday
          </p>
        </div>

        {/* Decorative elements at bottom */}
        <div className="flex justify-center gap-4 mt-12 text-5xl">
          <span className="animate-float">🎈</span>
          <span className="animate-float" style={{ animationDelay: "0.3s" }}>
            🎉
          </span>
          <span className="animate-float" style={{ animationDelay: "0.6s" }}>
            🎁
          </span>
          <span className="animate-float" style={{ animationDelay: "0.9s" }}>
            🎀
          </span>
        </div>
      </div>
    </section>
  )
}
