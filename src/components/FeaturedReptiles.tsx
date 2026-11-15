import ReptileCard from './ReptileCard'
import Reveal from './Reveal'
import { reptiles } from '../data/reptiles'

export default function FeaturedReptiles() {
  return (
    <section id="discover" className="bg-forest-900 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-16 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow">Featured Reptiles</p>
            <h2 className="mt-5 font-serif text-4xl font-bold leading-[1.05] text-sand-50 sm:text-6xl">
              Three creatures, <span className="font-light italic text-moss">three superpowers.</span>
            </h2>
          </div>
          <p className="max-w-md leading-relaxed text-sand-100/70 lg:col-span-5 lg:justify-self-end">
            From the rainforest canopy to the open ocean, each of these reptiles has evolved a
            remarkable way to survive.
          </p>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reptiles.map((r, i) => (
            <Reveal key={r.id} delay={i * 140}>
              <ReptileCard reptile={r} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
