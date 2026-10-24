export type Era = {
  slug: string
  title: string
  subtitle: string
  period: string
  description: string
  image: string
  imageAlt: string
  index: string
  tone: string
}

export const eras: Era[] = [
  {
    slug: 'ancient',
    title: 'Ancient Era',
    subtitle: 'Pre-Vedic to Classical Period',
    period: 'Before c. 600 CE',
    description: 'From the earliest cultural foundations to the classical age, this volume will gather the records of antiquity.',
    image: 'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=1100&q=85',
    imageAlt: 'Carved stone architecture at an ancient Indian temple',
    index: 'I',
    tone: 'saffron',
  },
  {
    slug: 'medieval',
    title: 'Medieval Era',
    subtitle: 'Regional Kingdoms to Imperial Courts',
    period: 'c. 600–1700 CE',
    description: 'A changing landscape of regional powers, cultural exchange, and imperial ambition awaits its place in the registry.',
    image: 'https://images.unsplash.com/photo-1592639296346-560c37a0f711?auto=format&fit=crop&w=1100&q=85',
    imageAlt: 'Historic red sandstone architecture in India',
    index: 'II',
    tone: 'jade',
  },
  {
    slug: 'early-modern-modern',
    title: 'Early Modern & Modern Era',
    subtitle: 'Early Modernity to Independence',
    period: 'c. 1700 CE onward',
    description: 'The final volume will trace the transitions, movements, and turning points of the early modern and modern periods.',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1100&q=85',
    imageAlt: 'The Taj Mahal reflected in its long garden pool',
    index: 'III',
    tone: 'indigo',
  },
]
