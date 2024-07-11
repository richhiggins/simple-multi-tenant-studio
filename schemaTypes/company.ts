import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Company',
  name: 'company',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'market',
      type: 'string',
      readOnly: true,
    }),
  ],
})
