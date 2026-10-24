export type RegistryEntry = {
  id: string
  name: string
  date: string
  description: string
  region: string
  dateVerification?: string
  children?: RegistryEntry[]
}
