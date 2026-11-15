import type { LucideIcon } from 'lucide-react'
import { Eye, Palette, Zap, Fingerprint, MoveUp, Volume2, Route, Compass, Waves } from 'lucide-react'
import { images } from './images'

export interface ReptileFact {
  icon: LucideIcon
  text: string
}

export interface Reptile {
  id: string
  name: string
  scientific: string
  category: string
  description: string
  image: string
  imageAlt: string
  /** object-position that keeps the animal's face visible in the card crop */
  focus: string
  facts: ReptileFact[]
  habitat: string
  more: string
}

export const reptiles: Reptile[] = [
  {
    id: 'panther-chameleon',
    name: 'Panther Chameleon',
    scientific: 'Furcifer pardalis',
    category: 'Color-Changing Master',
    description:
      'A remarkable reptile capable of changing its appearance using specialized skin cells.',
    image: images.chameleon,
    focus: '92% 40%',
    imageAlt: 'A brightly colored male panther chameleon perched on a branch',
    facts: [
      { icon: Eye, text: 'Independently moving eyes.' },
      { icon: Palette, text: 'Specialized color-changing skin cells.' },
      { icon: Zap, text: 'Lightning-fast projectile tongue.' },
    ],
    habitat: 'Coastal forests of Madagascar',
    more: 'Color shifts signal mood, temperature and social status. Males flash vivid patterns to court mates and to warn off rivals.',
  },
  {
    id: 'tokay-gecko',
    name: 'Tokay Gecko',
    scientific: 'Gekko gecko',
    category: 'Wall-Climbing Expert',
    description:
      'A powerful climber capable of navigating vertical surfaces and ceilings.',
    image: images.gecko,
    focus: '95% 30%',
    imageAlt: 'A tokay gecko with blue-grey skin and orange spots clinging to a surface',
    facts: [
      { icon: Fingerprint, text: 'Microscopic hair-like structures on its feet.' },
      { icon: MoveUp, text: 'Can climb smooth surfaces.' },
      { icon: Volume2, text: 'Recognizable loud vocalization.' },
    ],
    habitat: 'Rainforests and human dwellings across Southeast Asia',
    more: 'Its grip relies on molecular attraction rather than glue or suction, which lets it release a foot in a fraction of a second.',
  },
  {
    id: 'green-sea-turtle',
    name: 'Green Sea Turtle',
    scientific: 'Chelonia mydas',
    category: 'Ocean Traveler',
    description:
      "A marine reptile that travels enormous distances across the world's oceans.",
    image: images.turtle,
    focus: '30% 50%',
    imageAlt: 'A green sea turtle gliding through clear blue water',
    facts: [
      { icon: Route, text: 'Long-distance migration.' },
      { icon: Compass, text: "Uses Earth's magnetic field for navigation." },
      { icon: Waves, text: 'Can remain underwater for extended periods.' },
    ],
    habitat: 'Tropical and subtropical oceans worldwide',
    more: 'Females often return to the very beaches where they hatched, sometimes decades later, to lay their own eggs.',
  },
]
