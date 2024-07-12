import type {StructureResolver} from 'sanity/structure'

export const auStructure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.documentTypeListItem('company')
        .title('Companies')
        .child(S.documentList().title('Companies').filter('_type=="company" && market == "au"')),
      S.documentTypeListItem('offer')
        .title('Offers')
        .child(S.documentList().title('Offers').filter('_type=="offer" && market == "au"')),
    ])
