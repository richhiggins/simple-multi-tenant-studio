import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {ukStructure} from './structure/uk'
import {auStructure} from './structure/au'

const sharedConfig = {
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
  dataset: 'production',
}

export default defineConfig([
  {
    ...sharedConfig,
    basePath: '/studio/uk',
    name: 'uk',
    title: 'United Kingdom',
    plugins: [structureTool({structure: ukStructure}), visionTool()],
    schema: {
      types: schemaTypes,
      templates: () => [
        {
          id: 'company-uk',
          title: 'Company',
          schemaType: 'company',
          value: {
            market: 'uk',
          },
        },
        {
          id: 'offer-uk',
          title: 'Offer',
          schemaType: 'offer',
          value: {
            market: 'uk',
          },
        },
      ],
    },
  },
  {
    ...sharedConfig,
    basePath: '/studio/au',
    name: 'au',
    title: 'Australia',
    plugins: [structureTool({structure: auStructure}), visionTool()],
    schema: {
      types: schemaTypes,
      templates: () => [
        {
          id: 'company-au',
          title: 'Company',
          schemaType: 'company',
          value: {
            market: 'au',
          },
        },
        {
          id: 'offer-au',
          title: 'Offer',
          schemaType: 'offer',
          value: {
            market: 'au',
          },
        },
      ],
    },
  },
])
