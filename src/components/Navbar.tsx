import { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { useScrolled } from '../hooks/useScrolled'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Discover', href: '#discover' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)
  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? 'border-b border-sand-100/10 bg-forest-900/95 shadow-lg shadow-black/20 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10"
      >
        <a href="#home" className="font-serif text-lg font-bold tracking-[0.2em] text-sand-50">
          REPTILE<span className="text-moss"> DISCOVERY</span>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-sm font-medium uppercase tracking-widest text-sand-100/80 transition-colors hover:text-sand-50"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-moss transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#discover" className="btn-primary hidden !py-2.5 sm:inline-flex">
            Explore <ArrowRight size={16} />
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-full p-2 text-sand-50 transition hover:bg-sand-50/10 md:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-sand-100/10 bg-forest-900 px-6 pb-8 pt-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-serif text-2xl text-sand-50"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#discover" onClick={() => setOpen(false)} className="btn-primary mt-4 w-full">
            Explore <ArrowRight size={16} />
          </a>
        </div>
      )}
    </header>
  )
}
