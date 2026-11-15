import { Instagram, Twitter, Youtube } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Discover', href: '#discover' },
  { label: 'About', href: '#about' },
]

const socials = [
  { label: 'Instagram', icon: Instagram },
  { label: 'Twitter', icon: Twitter },
  { label: 'YouTube', icon: Youtube },
]

export default function Footer() {
  return (
    <footer className="border-t border-sand-100/10 bg-forest-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div>
            <a href="#home" className="font-serif text-xl font-bold tracking-[0.2em] text-sand-50">
              REPTILE<span className="text-moss"> DISCOVERY</span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-sand-500">
              A small field guide to the planet's most surprising reptiles.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex gap-8">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm uppercase tracking-widest text-sand-100/70 transition hover:text-moss"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex gap-3">
            {socials.map(({ label, icon: Icon }) => (
              <li key={label}>
                <a
                  href="#home"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-sand-100/20 text-sand-100/70 transition hover:border-moss hover:text-moss"
                >
                  <Icon size={16} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-14 border-t border-sand-100/10 pt-8 text-xs text-sand-500">
          &copy; {new Date().getFullYear()} Reptile Discovery. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
