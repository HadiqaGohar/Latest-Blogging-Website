const startedSchema = {
    name: 'started',
    title: 'Started Blog Section',
    type: 'document',
    fields: [
      {
        name: 'sectionTitle',
        title: 'Section Title',
        type: 'string',
      },
      {
        name: 'sectionSubTitle',
        title: 'Section Sub-Title',
        type: 'string',
      },
      {
        name: 'sectionDescription',
        title: 'Section Description',
        type: 'text',
      },
      {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'decorativeImage',
        title: 'Decorative Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  };
  
  export default startedSchema;
  