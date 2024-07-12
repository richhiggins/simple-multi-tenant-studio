import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Offer',
  name: 'offer',
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
      name: 'company',
      type: 'reference',
      to: [{type: 'company'}],
      options: {
        filter: ({document}) => {
          if (!document.market) {
            return {
              filter: '!defined(market)',
            }
          }
          return {
            filter: `market == $market`,
            params: {market: document.market},
          }
        },
      },
    }),
    defineField({
      name: 'market',
      type: 'string',
      readOnly: true,
    }),
  ],
})
