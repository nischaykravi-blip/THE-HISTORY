import { ArrowLeft, ArrowUpRight, Clock3, MapPin } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { detailById } from '../data/detailRegistry'
import { detailSectionDefinitions, type DetailParagraph, type DetailSectionValue, type DetailSource } from '../data/detailTypes'
import { getEraForSlug, registryEntryIndex } from '../data/registryIndex'

const imageLicenseUrls: Record<string, string> = {
  'CC BY-SA 3.0': 'https://creativecommons.org/licenses/by-sa/3.0/',
  'CC BY-SA 4.0': 'https://creativecommons.org/licenses/by-sa/4.0/',
  'CC0 1.0': 'https://creativecommons.org/publicdomain/zero/1.0/',
  'CC BY 2.5': 'https://creativecommons.org/licenses/by/2.5/',
  'CC BY 4.0': 'https://creativecommons.org/licenses/by/4.0/',
  GFDL: 'https://www.gnu.org/licenses/fdl-1.3.html',
}

function CitationLinks({ indices, sources }: { indices: number[]; sources: DetailSource[] }) {
  return (
    <sup className="inline-citations">
      {indices.map((index) => sources[index] && (
        <a key={index} href={`#source-${index + 1}`} aria-label={`Source ${index + 1}`}>[{index + 1}]</a>
      ))}
    </sup>
  )
}

function SectionContentView({ value, sources }: { value: DetailSectionValue; sources: DetailSource[] }) {
  if (typeof value === 'string') return <p>{value}</p>

  return (
    <>
      {value.paragraphs.map((paragraph: DetailParagraph, index) => (
        <p key={index}>{paragraph.citations ? paragraph.text.replace(/ ?(?:\[\d+\])+/g, '') : paragraph.text}{paragraph.citations && <CitationLinks indices={paragraph.citations} sources={sources} />}</p>
      ))}
      {value.table && (
        <div className="detail-table-wrap">
          <table className="detail-table">
            <caption>{value.table.caption}</caption>
            <thead><tr>{value.table.columns.map((column) => <th key={column} scope="col">{column}</th>)}</tr></thead>
            <tbody>{value.table.rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
      )}
      {value.note && <aside className="detail-editorial-note">{value.note}</aside>}
    </>
  )
}

function firstParagraph(value: DetailSectionValue) {
  return typeof value === 'string' ? value : value.paragraphs[0]?.text ?? ''
}

export function DetailPage() {
  const { entryId } = useParams()
  const indexedEntry = entryId ? registryEntryIndex.get(entryId) : undefined
  const detail = entryId ? detailById.get(entryId) : undefined
  const era = indexedEntry ? getEraForSlug(indexedEntry.eraSlug) : undefined

  if (!indexedEntry || !detail || !era) return <Navigate to="/" replace />

  const { entry, parent } = indexedEntry
  const relatedEntries = detail.relatedIds
    .map((id) => registryEntryIndex.get(id))
    .filter((item): item is NonNullable<typeof item> => item !== undefined)

  return (
    <div className="detail-page" id="top">
      <div className="breadcrumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link><span>/</span><Link to={`/era/${era.slug}`}>{era.title}</Link><span>/</span>
        {parent && <><Link to={`/entry/${parent.id}`}>{parent.name}</Link><span>/</span></>}
        <span aria-current="page">{entry.name}</span>
      </div>
      <section className={`detail-hero ${era.tone}`} aria-labelledby="detail-title">
        <figure className="detail-hero-image">
          <img src={detail.image ?? era.image} alt={detail.imageAlt ?? era.imageAlt} />
          <figcaption><span>{era.title} · {entry.date}</span>{detail.imageAttribution && <small><a href={detail.imageSourceUrl} target="_blank" rel="noreferrer">Image: {detail.imageAttribution}</a>{detail.imageLicense && <> · <a href={imageLicenseUrls[detail.imageLicense] ?? detail.imageSourceUrl} target="_blank" rel="noreferrer">{detail.imageLicense}</a></>}</small>}</figcaption>
        </figure>
        <div className="detail-hero-copy">
          <span className="section-kicker">{era.title} · Historical registry</span>
          <h1 id="detail-title">{entry.name}</h1>
          <p className="detail-date"><Clock3 size={15} />{entry.date}</p>
          <p className="detail-region"><MapPin size={15} />{entry.region}</p>
          <p className="detail-lede">{firstParagraph(detail.sections.overview)}</p>
          <Link className="return-link" to={`/era/${era.slug}`}><ArrowLeft size={15} /> Back to {era.title} registry</Link>
        </div>
      </section>
      <div className="detail-layout">
        <nav className="detail-toc" aria-label="On this page">
          <span className="section-kicker">On this page</span>
          {detailSectionDefinitions.map((section) => (
            <a key={section.id} href={`#section-${section.id}`}>{section.title}</a>
          ))}
          <a href="#related-entries">Related entries</a>
        </nav>
        <div className="detail-content">
          {detailSectionDefinitions.map((section, index) => (
            <section className="detail-section" id={`section-${section.id}`} key={section.id} aria-labelledby={`heading-${section.id}`}>
              <span className="detail-section-index">{String(index + 1).padStart(2, '0')}</span>
              <div className="detail-section-body">
                <h2 id={`heading-${section.id}`}>{section.title}</h2>
                {detail.sections[section.id]
                  ? <SectionContentView value={detail.sections[section.id]!} sources={detail.sources} />
                  : <p className="research-pending">Research for this section is pending in this era’s content batch.</p>}
                {section.id === 'overview' && detail.sections.origins && <div className="detail-origins"><strong>Origins</strong><SectionContentView value={detail.sections.origins} sources={detail.sources} /></div>}
                {section.id === 'sources' && (
                  <ul className="source-list">
                    {detail.sources.map((source, sourceIndex) => (
                      <li id={`source-${sourceIndex + 1}`} key={source.url}><a href={source.url} target="_blank" rel="noreferrer"><span><strong>[{sourceIndex + 1}] {source.title}</strong>{source.publisher && <small>{source.publisher}</small>}{source.description && <small>{source.description}</small>}</span><ArrowUpRight size={14} /></a></li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
          <section className="detail-related" id="related-entries" aria-labelledby="related-heading">
            <span className="section-kicker">Continue the chronology</span>
            <h2 id="related-heading">Related entries</h2>
            <div className="related-grid">
              {relatedEntries.map(({ entry: related, eraSlug }) => (
                <Link className="related-entry" key={related.id} to={`/entry/${related.id}`}>
                  <span>{related.date}</span><strong>{related.name}</strong><ArrowUpRight size={16} />
                  <small>{getEraForSlug(eraSlug)?.title}</small>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
      <div className="detail-bottom-nav"><Link className="return-link" to={`/era/${era.slug}`}><ArrowLeft size={15} /> Return to {era.title}</Link><a href="#top">Back to top <ArrowUpRight size={14} /></a></div>
    </div>
  )
}
