import { ancientRegistry } from './ancientRegistry'
import { eras } from './eras'
import type { RegistryEntry } from './registryTypes'
import { medievalRegistry } from './medievalRegistry'
import { modernRegistry } from './modernRegistry'

export const registryByEra: Record<string, RegistryEntry[]> = {
  ancient: ancientRegistry,
  medieval: medievalRegistry,
  'early-modern-modern': modernRegistry,
}

export type IndexedRegistryEntry = {
  entry: RegistryEntry
  eraSlug: string
  parent?: RegistryEntry
}

export const registryEntryIndex = new Map<string, IndexedRegistryEntry>()

function indexEntries(entries: RegistryEntry[], eraSlug: string, parent?: RegistryEntry) {
  for (const entry of entries) {
    registryEntryIndex.set(entry.id, { entry, eraSlug, parent })
    if (entry.children) indexEntries(entry.children, eraSlug, entry)
  }
}

for (const [eraSlug, entries] of Object.entries(registryByEra)) indexEntries(entries, eraSlug)

export function getEraForSlug(slug: string) {
  return eras.find((era) => era.slug === slug)
}
