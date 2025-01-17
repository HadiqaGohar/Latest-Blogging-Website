export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
    },
    {
      name: 'post',
      title: 'Post',
      type: 'reference',
      to: [{ type: 'post' }], // Reference to a "post" document
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'likeCount',
      title: 'Like Count',
      type: 'number',
      initialValue: 0,
    },
    {
      name: 'authorImage',
      title: 'Author Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
