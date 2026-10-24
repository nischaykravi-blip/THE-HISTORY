import { useState } from 'react'
import { AlertTriangle, ArrowLeft, ArrowUpRight, ChevronDown, Clock3, MapPin } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { registryByEra } from '../data/registryIndex'
import type { RegistryEntry } from '../data/registryTypes'
import { eras } from '../data/eras'

function RegistryEntryRecord({ entry, index, nested = false }: { entry: RegistryEntry; index: string; nested?: boolean }) {
  const [expanded, setExpanded] = useState(false)
  const detailsId = `${entry.id}-details`

  return (
    <article className={`registry-record${nested ? ' registry-record-nested' : ''}`} id={entry.id}>
      <div className={`registry-item${nested ? ' registry-item-nested' : ''}`}>
        <span className="registry-item-number">{index}</span>
        <div className="registry-item-main">
          <h3><Link className="registry-entry-link" to={`/entry/${entry.id}`}>{entry.name}</Link></h3>
          <p className="registry-entry-date"><Clock3 size={13} strokeWidth={1.6} />{entry.date}</p>
        </div>
        <button
          className="registry-expand"
          type="button"
          aria-label={`${expanded ? 'Hide' : 'Show'} details for ${entry.name}`}
          aria-expanded={expanded}
          aria-controls={detailsId}
          onClick={() => setExpanded((current) => !current)}
        >
          <ChevronDown size={16} strokeWidth={1.6} />
        </button>
      </div>
      {expanded && (
        <div className="registry-details" id={detailsId}>
          <p>{entry.description}</p>
          <p className="registry-region"><MapPin size={14} strokeWidth={1.6} /><strong>Region</strong><span>{entry.region}</span></p>
          {entry.dateVerification && <p className="registry-verification"><AlertTriangle size={14} />{entry.dateVerification}</p>}
        </div>
      )}
      {entry.children && (
        <div className="registry-children" aria-label={`${entry.name} dynasties`}>
          <div className="registry-nested-heading"><span className="section-kicker">Five dynasties</span><span>Dynastic succession within the Sultanate</span></div>
          {entry.children.map((child, childIndex) => (
            <RegistryEntryRecord key={child.id} entry={child} index={`${index}.${childIndex + 1}`} nested />
          ))}
        </div>
      )}
    </article>
  )
}

export function EraPage() {
  const { slug } = useParams()
  const era = eras.find((item) => item.slug === slug)
  const entries = slug ? registryByEra[slug] : undefined
  const recordCount = entries?.reduce((count, entry) => count + 1 + (entry.children?.length ?? 0), 0)

  if (!era || !entries) return <Navigate to="/" replace />

  return (
    <div className="era-page" id="top">
      <div className="breadcrumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link><span>/</span><a href={`${import.meta.env.BASE_URL}#eras`}>The eras</a><span>/</span><span aria-current="page">{era.title}</span>
      </div>
      <section className={`era-masthead ${era.tone}`}>
        <div className="era-masthead-image"><img src={era.image} alt={era.imageAlt} /><span className="masthead-index">VOLUME {era.index}</span></div>
        <div className="era-masthead-copy">
          <span className="section-kicker">{era.subtitle}</span>
          <h1>{era.title}</h1>
          <div className="masthead-period"><span className="period-rule" />{era.period}</div>
          <p>{era.description}</p>
          <Link className="return-link" to="/"><ArrowLeft size={15} /> Return to all eras</Link>
        </div>
      </section>
      <section className="registry-section">
        <div className="registry-heading"><div><span className="section-kicker">Volume {era.index} · Registry</span><h2>Historical entries</h2></div><span className="status-stamp"><span /> {recordCount} records</span></div>
        <p className="registry-intro">Dates are approximate where indicated. These timelines overlap and are presented as concurrent histories, not as a single succession.</p>
        <div className="registry-grid">
          {entries.map((entry, index) => (
            <RegistryEntryRecord key={entry.id} entry={entry} index={String(index + 1).padStart(2, '0')} />
          ))}
        </div>
        <Link className="browse-link" to="/"><span>Continue exploring the collection</span><ArrowUpRight size={16} /></Link>
      </section>
    </div>
  )
}
