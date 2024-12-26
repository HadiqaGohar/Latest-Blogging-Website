const authorSchema = {
  name: 'author', // The name of the schema
  title: 'Author', // The title of the schema
  type: 'document', // This schema represents a single document
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string', // Text field for the author's name
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string', // Text field for the author's role
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image', // Image field for the author's image
      options: {
        hotspot: true, // Allows for image cropping
      },
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string', // Type of social media platform (Facebook, Twitter, etc.)
              options: {
                list: [
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Twitter', value: 'twitter' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'LinkedIn', value: 'linkedin' },
                ], // Predefined list of platforms
              },
            },
            // {
            //   name: 'url',
            //   title: 'URL',
            //   type: 'url', // URL field for the social media link
            // },
          ],
        },
      ], // Allows an array of social media links
    },
  ],
};

export default authorSchema;
