import { type SchemaTypeDefinition } from 'sanity'
import post from './post'
import comment from './comment'
import blocks from './blocks'
import ourMission from './ourMission'
import category from './category'
import specialPost from './specialPost'
import author from './author'
import testimonials from './testimonials'
import joinOurTeamTextSchema from './joinOurTeamTextSchema'
import aboutPageSchema from './aboutPageSchema'
import ourTeamSchema from './ourTeamSchema'
import started from './started'
import contact from './contact'
import subscriber from './subscriber'

// import postId from './postId'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post , blocks , comment,ourMission, category, specialPost, author, testimonials, joinOurTeamTextSchema, aboutPageSchema, ourTeamSchema, started, contact, subscriber],
}
