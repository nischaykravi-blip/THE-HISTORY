import { ArrowDown, ArrowUpRight, Compass } from 'lucide-react'
import { Link } from 'react-router-dom'
import { EraCard } from '../components/EraCard'
import { eras } from '../data/eras'

export function HomePage() {
  return (
    <>
      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="hero-kicker"><span className="kicker-rule" /> An era-by-era historical registry <span className="kicker-rule" /></div>
          <h1>The Chronicles of the <em>Indian Subcontinent:</em><span className="title-divider" /><span className="title-subline">The Complete Era-by-Era Registry</span></h1>
          <p className="hero-intro">A considered guide to the histories, cultures, and turning points that shaped a vast and varied region.</p>
          <a className="hero-action" href="#eras">Explore the eras <ArrowDown size={16} /></a>
        </div>
        <div className="hero-art" aria-label="Historic Indian monument framed by carved stonework">
          <img src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1500&q=90" alt="The Taj Mahal viewed through its garden" />
          <div className="art-caption"><span className="caption-mark">✳</span><span>Histories in their<br />proper context</span><span className="caption-line" /></div>
          <span className="art-vertical">AN ARCHIVE IN THE MAKING · 01 — 03</span>
        </div>
        <div className="hero-index"><span>01</span><span className="index-line" /><span>03</span></div>
      </section>

      <section className="era-section" id="eras">
        <div className="section-heading">
          <div><span className="section-kicker">The collection</span><h2>Choose a volume</h2></div>
          <p>Three broad eras. One evolving record of the subcontinent.</p>
        </div>
        <div className="era-grid">
          {eras.map((era) => <EraCard key={era.slug} era={era} />)}
        </div>
        <div className="collection-note"><span className="note-ornament">✳</span><span>Each volume is being prepared as a dedicated registry. Detailed entries will follow in the next phase.</span></div>
      </section>

      <section className="about-section" id="about">
        <div className="about-seal"><Compass size={29} strokeWidth={1.2} /><span>BHARAT<br />ARCHIVE</span></div>
        <div className="about-copy"><span className="section-kicker">A living reference</span><h2>History, with room for its many voices.</h2><p>This registry is designed to make the long arc of the Indian subcontinent's past easier to explore, one era at a time. Its structure will grow alongside the records it contains.</p></div>
        <Link to="/era/ancient" className="about-link">Begin with the earliest volume <ArrowUpRight size={17} /></Link>
      </section>
    </>
  )
}
