const testimonialsSchema = {
  name: 'testimonials', // The name of the schema
  title: 'Testimonials Section', // The title of the schema
  type: 'document', // Represents a single document
  fields: [
    // Section Heading
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string', // The title of the testimonial section (e.g., "TESTIMONIALS")
    },
    {
      name: 'sectionSubtitle',
      title: 'Section Subtitle',
      type: 'string', // Subtitle for the section (e.g., "What people say about our blog")
    },
    {
      name: 'sectionDescription',
      title: 'Section Description',
      type: 'text', // Description of the section (e.g., "Lorem ipsum dolor sit amet...")
    },

    // Testimonial content (an array of testimonial objects)
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array', // Allows multiple testimonials
      of: [
        {
          type: 'object',
          name: 'testimonial',
          fields: [
            {
              name: 'quote',
              title: 'Quote',
              type: 'text', // Testimonial text
            },
            {
              name: 'authorName',
              title: 'Author Name',
              type: 'string', // The name of the author of the testimonial (e.g., "John Doe")
            },
            {
              name: 'authorLocation',
              title: 'Author Location',
              type: 'string', // Location of the author (e.g., "New York, USA")
            },
            {
              name: 'authorImage',
              title: 'Author Image',
              type: 'image', // Image of the author
              options: {
                hotspot: true, // Allows the user to crop the image
              },
            },
          ],
        },
      ],
    },
  ],
};

export default testimonialsSchema;
