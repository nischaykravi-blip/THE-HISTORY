import { ancientDetails } from './ancientDetails'
import { medievalDetails } from './medievalDetails'
import { modernDetails } from './modernDetails'
import { ancientResearch } from './ancientResearch'
import medievalResearch from './medievalResearch.json'
import modernResearch from './modernResearch.json'
import type { DynastyDetail } from './detailTypes'

function mergeResearch(details: DynastyDetail[], researchById: Record<string, Partial<DynastyDetail>>) {
	return details.map((detail) => {
		const research = researchById[detail.id]
		if (!research) return detail

		const sections = { ...detail.sections, ...research.sections }
		if (research.sections?.overview) delete sections.origins

		return {
			...detail,
			...research,
			sections,
		} as DynastyDetail
	})
}

const ancientRegistryDetails = mergeResearch(ancientDetails, ancientResearch)
const medievalRegistryDetails = mergeResearch(medievalDetails, medievalResearch)
const modernRegistryDetails = mergeResearch(modernDetails, modernResearch)

export const detailRegistry = [...ancientRegistryDetails, ...medievalRegistryDetails, ...modernRegistryDetails]
export const detailById = new Map(detailRegistry.map((detail) => [detail.id, detail]))
