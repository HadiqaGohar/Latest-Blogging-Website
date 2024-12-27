import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset : process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion : '2024-12-24',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
})
