"use client"

export default function LetterSection() {
  const letter = `Divya,

If I could wrap this day in warmth and hand it to you, I would.

You've been a chapter of my life that taught me so much — about care, about mistakes, about growth, about softness.

I'm not perfect. I reacted when I should've paused.
I spoke when I should've listened.
I hurt when I should've understood.
But I also cared — deeply — sometimes more than I knew how to show.

Wherever life takes you, I hope it leads you toward peace.
Toward joy.
Toward people who make you feel valued and understood.

You are a soft-hearted, strong person — a combination that's rare.
And I'm grateful I ever got to know this version of you.

Happy Birthday, Divya.
May this year be kind to you.`

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-blue-50/30 to-pink-50/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-playpen font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          A Letter to Divya <span className="emoji ml-2 text-foreground">💌</span>
        </h2>

        <div className="bg-white/85 backdrop-blur-sm rounded-3xl shadow-soft-lg p-8 md:p-12 border border-pink-100/50 max-h-96 overflow-y-auto">
          <div className="space-y-4 text-foreground leading-relaxed">
            {letter.split("\n\n").map((paragraph, idx) => (
              <p key={idx} className="text-base md:text-lg whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
