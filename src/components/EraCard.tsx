import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Era } from '../data/eras'

export function EraCard({ era }: { era: Era }) {
  return (
    <Link className={`era-card ${era.tone}`} to={`/era/${era.slug}`} aria-label={`Explore the ${era.title}: ${era.subtitle}`}>
      <div className="era-image-wrap">
        <img className="era-image" src={era.image} alt={era.imageAlt} loading="lazy" />
        <span className="era-number">{era.index}</span>
        <span className="era-period">{era.period}</span>
      </div>
      <div className="era-card-body">
        <div>
          <span className="eyebrow">{era.subtitle}</span>
          <h3>{era.title}</h3>
        </div>
        <span className="era-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
      </div>
      <span className="era-card-rule" />
    </Link>
  )
}
