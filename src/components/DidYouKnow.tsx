import Photo from './Photo'
import Reveal from './Reveal'
import { images } from '../data/images'
import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'

interface Stat {
  value: number
  suffix: string
  label: string
  description: string
}

const stats: Stat[] = [
  {
    value: 360,
    suffix: '°',
    label: 'Panoramic vision',
    description:
      'A chameleon moves each eye independently, letting it scan nearly all the way around without turning its head.',
  },
  {
    value: 14000,
    suffix: '',
    label: 'Hairs per mm²',
    description:
      'Tiny hair-like structures on a tokay gecko toe pad, each splitting into even finer tips, create its astonishing grip.',
  },
  {
    value: 2000,
    suffix: '+ km',
    label: 'One-way migration',
    description:
      'Green sea turtles swim across entire ocean basins between feeding grounds and the beaches where they nest.',
  },
]

function StatItem({ stat, delay }: { stat: Stat; delay: number }) {
  const { ref, visible } = useInView<HTMLDivElement>(0.4)
  const count = useCountUp(stat.value, visible)

  return (
    <Reveal delay={delay}>
      <div ref={ref} className="border-t border-sand-100/25 pt-8">
        <p className="font-serif text-6xl font-bold leading-none text-sand-50 sm:text-7xl xl:text-8xl">
          {count.toLocaleString('en-US')}
          <span className="text-moss">{stat.suffix}</span>
        </p>
        <p className="mt-5 text-xs font-medium uppercase tracking-[0.25em] text-moss">{stat.label}</p>
        <p className="mt-3 max-w-xs leading-relaxed text-sand-100/75">{stat.description}</p>
      </div>
    </Reveal>
  )
}

export default function DidYouKnow() {
  return (
    <section id="did-you-know" className="relative overflow-hidden py-28 lg:py-40">
      <Photo
        src={images.stats}
        alt="A green sea turtle swimming in deep blue water"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-forest-950/85" />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-900 via-transparent to-forest-900" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-20 max-w-3xl">
          <p className="eyebrow">Did You Know?</p>
          <h2 className="mt-5 font-serif text-4xl font-bold leading-[1.05] text-sand-50 sm:text-6xl">
            Numbers that <span className="font-light italic text-moss">defy belief.</span>
          </h2>
        </Reveal>

        <div className="grid gap-14 md:grid-cols-3 md:gap-10">
          {stats.map((s, i) => (
            <StatItem key={s.label} stat={s} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  )
}
