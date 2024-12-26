const blockContent = {
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    {
      type: 'block',
    },
    {
      type: 'image',
      options: { hotspot: true },
    },
  ],
};

export default blockContent;
