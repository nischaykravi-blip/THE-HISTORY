export const detailSectionDefinitions = [
  { id: 'overview', title: 'Complete Historical Overview' },
  { id: 'timeline', title: 'Detailed Chronology' },
  { id: 'major-rulers', title: 'Major Rulers' },
  { id: 'rise-to-power', title: 'Rise to Power' },
  { id: 'battles-military', title: 'Battles and Military' },
  { id: 'administration', title: 'Administration and Governance' },
  { id: 'economy-trade', title: 'Economy and Trade' },
  { id: 'society', title: 'Society and Daily Life' },
  { id: 'religion-philosophy', title: 'Religion and Philosophy' },
  { id: 'art-architecture', title: 'Art and Architecture' },
  { id: 'science-technology', title: 'Science and Technology' },
  { id: 'territory-maps', title: 'Territory and Historical Maps' },
  { id: 'decline-transformation', title: 'Decline or Transformation' },
  { id: 'legacy', title: 'Legacy' },
  { id: 'sources', title: 'Sources and Further Reading' },
] as const

export type DetailSectionId = (typeof detailSectionDefinitions)[number]['id']

export type DetailSource = {
  title: string
  url: string
  publisher?: string
  description?: string
}

export type DetailParagraph = {
  text: string
  citations?: number[]
}

export type DetailTable = {
  caption: string
  columns: string[]
  rows: string[][]
}

export type DetailSectionContent = {
  paragraphs: DetailParagraph[]
  table?: DetailTable
  note?: string
}

export type DetailSectionValue = string | DetailSectionContent

export type DynastyDetail = {
  id: string
  image?: string
  imageAlt?: string
  imageAttribution?: string
  imageLicense?: string
  imageSourceUrl?: string
  relatedIds: string[]
  sections: Partial<Record<DetailSectionId | 'origins', DetailSectionValue>> & {
    overview: DetailSectionValue
    sources: DetailSectionValue
  }
  sources: DetailSource[]
}
