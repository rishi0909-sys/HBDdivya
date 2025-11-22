"use client"

export default function PersonalMessage() {
  const message = `Divya,
There are some people who enter your life softly… without noise… without force… and still change everything.
You're one of them.

There's a kind of magic in you — gentle, comforting, calming — the kind that doesn't ask to be noticed, but is impossible to ignore.
Your presence lightens heavy days.
Your voice feels like safety.
Your kindness is rare… beautifully rare.

I know we've had our ups and downs. I know I'm imperfect. I know I've made mistakes. But even then — even in the middle of all the chaos — I always felt something warm when it came to you.

There were days I treated you like you meant the world.
And days I messed up because I didn't know how to handle my emotions.
I wish I could undo every moment that hurt you.
But I can only grow from it, and become better — genuinely better.

On your birthday, I want to send you one wish:
A life full of peace… softness… gentleness… the kind of comfort that doesn't demand anything from you.

You deserve a world that treats your heart with care.
You deserve calm mornings, warm people, and honest love.
You deserve every kind of beauty life can offer.

Thank you for being you, Divya.
Happy Birthday.`

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-[2.5rem] shadow-soft-lg p-8 md:p-12 border border-pink-100/50 hover:shadow-soft-lg transition-shadow duration-300 animate-fade-up">
          <div className="space-y-6 text-foreground leading-relaxed">
            {message.split("\n\n").map((paragraph, idx) => (
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
