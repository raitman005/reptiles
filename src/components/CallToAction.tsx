import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

export default function CallToAction() {
  return (
    <section id="about" className="bg-charcoal-900 py-28 lg:py-40">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
        <Reveal>
          <p className="eyebrow">About the project</p>
          <h2 className="mt-6 font-serif text-5xl font-bold leading-[0.98] tracking-tight text-sand-50 sm:text-7xl lg:text-8xl">
            THE WILD IS FULL OF <span className="font-light italic text-moss">SURPRISES</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg font-light leading-relaxed text-sand-100/80">
            Every creature has a story. Keep exploring and discover more about the incredible world
            of reptiles.
          </p>
          <div className="mt-12">
            <a href="#home" className="btn-primary">
              Explore More Wildlife <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
