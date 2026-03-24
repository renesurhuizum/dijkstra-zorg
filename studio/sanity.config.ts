import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'dijkstra-zorg',
  title: 'Dijkstra Zorg & Begeleiding',
  projectId: 'gowerghf',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
})
