import { ArrowRight } from 'lucide-react'
import Photo from './Photo'
import { images } from '../data/images'

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-end overflow-hidden">
      <div className="absolute inset-0">
        <Photo
          src={images.hero}
          alt="A vividly colored panther chameleon in close-up"
          loading="eager"
          className="h-full w-full animate-slowZoom object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/60 to-forest-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/80 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-28 pt-40 lg:px-10">
        <p className="eyebrow animate-fadeUp">A field guide to three survivors</p>
        <h1
          className="mt-6 max-w-4xl animate-fadeUp font-serif text-5xl font-bold leading-[0.95] tracking-tight text-sand-50 sm:text-7xl lg:text-[6.5rem]"
          style={{ animationDelay: '120ms' }}
        >
          THE WILD SIDE OF <span className="font-light italic text-moss">REPTILES</span>
        </h1>
        <p
          className="mt-8 max-w-xl animate-fadeUp text-lg font-light leading-relaxed text-sand-100/85"
          style={{ animationDelay: '260ms' }}
        >
          Discover three extraordinary creatures and the fascinating secrets behind their survival.
        </p>
        <div
          className="mt-10 flex animate-fadeUp flex-col gap-4 sm:flex-row"
          style={{ animationDelay: '400ms' }}
        >
          <a href="#discover" className="btn-primary">
            Explore Reptiles <ArrowRight size={16} />
          </a>
          <a href="#did-you-know" className="btn-ghost">
            Discover Their World
          </a>
        </div>
      </div>

      <a
        href="#discover"
        aria-label="Scroll to featured reptiles"
        className="absolute bottom-8 right-6 hidden flex-col items-center gap-3 text-[0.65rem] uppercase tracking-[0.3em] text-sand-100/70 sm:flex lg:right-10"
      >
        <span style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        <span className="relative block h-14 w-px overflow-hidden bg-sand-100/25">
          <span className="absolute inset-0 animate-scrollCue bg-moss" />
        </span>
      </a>
    </section>
  )
}
