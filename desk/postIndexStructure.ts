import {ListItemBuilder} from 'sanity/desk'
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Post Index')
    .schemaType('postIndex')
    .child(S.editor().title('Post Index').schemaType('postIndex').documentId('postIndex')),
)
