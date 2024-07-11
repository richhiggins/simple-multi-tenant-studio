import type {StructureResolver} from 'sanity/structure'

export const auStructure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([S.documentTypeListItem('company').title('Companies')])
    .child(S.documentList().title('Companies').filter('market == "au"'))
