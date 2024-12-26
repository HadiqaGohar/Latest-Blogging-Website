import blockContent from './blocks'; // Import blockContent schema

const postSchema = {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'category',
      type: 'string',
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
    {
      name: 'authorprofileimg',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'paragraph',
      title: 'Paragraph',
      type: 'blockContent', // Use blockContent schema here for rich text
    },
    {
      name: 'comments',
      title: 'Comments',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'comment' }],
        },
      ],
    },
  ],
};

export default postSchema;
