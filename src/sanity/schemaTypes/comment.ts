const commentSchema = {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'string',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
    {
      name: 'likeCount',
      title: 'Like Count',
      type: 'number',
      initialValue: 0,
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'post',
      title: 'Post',
      type: 'reference',
      to: [{ type: 'post' }],
    },
  ],
};

export default commentSchema;
