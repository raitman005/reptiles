import { useState } from 'react'
import { ArrowUpRight, Minus, MapPin } from 'lucide-react'
import Photo from './Photo'
import type { Reptile } from '../data/reptiles'

interface ReptileCardProps {
  reptile: Reptile
  index: number
}

export default function ReptileCard({ reptile, index }: ReptileCardProps) {
  const [open, setOpen] = useState(false)
  const panelId = `${reptile.id}-more`

  return (
    <article className="group flex h-full flex-col border border-sand-100/10 bg-charcoal-800 transition duration-500 hover:-translate-y-2 hover:border-moss/40 hover:shadow-2xl hover:shadow-black/40">
      <div className="relative aspect-[1/1] overflow-hidden">
        <Photo
          src={reptile.image}
          alt={reptile.imageAlt}
          focus={reptile.focus}
          className="h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-800 via-transparent to-transparent" />
        <span className="absolute left-5 top-5 font-serif text-5xl font-light italic text-sand-50/90">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="absolute bottom-5 left-5 bg-forest-950/80 px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-moss backdrop-blur">
          {reptile.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-serif text-3xl font-bold leading-tight text-sand-50">{reptile.name}</h3>
        <p className="mt-1 text-sm italic text-sand-500">{reptile.scientific}</p>
        <p className="mt-4 leading-relaxed text-sand-100/80">{reptile.description}</p>

        <ul className="mt-6 space-y-3 border-t border-sand-100/10 pt-6">
          {reptile.facts.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-start gap-3 text-sm text-sand-100/85">
              <Icon size={18} className="mt-0.5 shrink-0 text-moss" aria-hidden="true" />
              <span>{text}</span>
            </li>
          ))}
        </ul>

        <div
          id={panelId}
          className={`grid transition-all duration-500 ${open ? 'mt-6 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
        >
          <div className="overflow-hidden">
            <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-moss">
              <MapPin size={14} aria-hidden="true" /> {reptile.habitat}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-sand-100/75">{reptile.more}</p>
          </div>
        </div>

        <div className="mt-auto pt-8">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className="btn-ghost w-full !border-moss/50 !text-moss hover:!bg-moss hover:!text-forest-950"
          >
            {open ? 'Show Less' : 'Learn More'}
            {open ? <Minus size={16} /> : <ArrowUpRight size={16} />}
          </button>
        </div>
      </div>
    </article>
  )
}
