const contactSchema = {
    name: 'contact',
    title: 'Contact Page',
    type: 'document',
    fields: [
      {
        name: 'sectionTitle',
        title: 'Section Title',
        type: 'string',
      },
      {
        name: 'sectionSubTitle',
        title: 'Section Sub Title',
        type: 'string',
      },
      {
        name: 'sectionDescription',
        title: 'Section Description',
        type: 'text',
      },
      {
        name: 'workingHours',
        title: 'Working Hours',
        type: 'object',
        fields: [
          {
            name: 'days',
            title: 'Days',
            type: 'string',
            description: 'e.g., Monday to Friday',
          },
          {
            name: 'hours',
            title: 'Hours',
            type: 'string',
            description: 'e.g., 9:00 AM to 8:00 PM',
          },
          {
            name: 'supportInfo',
            title: 'Support Info',
            type: 'string',
            description: 'e.g., Our Support Team is available 24/7',
          },
        ],
      },
      {
        name: 'contactDetails',
        title: 'Contact Details',
        type: 'object',
        fields: [
          {
            name: 'phoneNumber',
            title: 'Phone Number',
            type: 'string',
          },
          {
            name: 'email',
            title: 'Email Address',
            type: 'string',
          },
        ],
      },
      {
        name: 'contactForm',
        title: 'Contact Form',
        type: 'object',
        fields: [
          {
            name: 'fullNamePlaceholder',
            title: 'Full Name Placeholder',
            type: 'string',
            description: 'Placeholder text for the full name input',
          },
          {
            name: 'emailPlaceholder',
            title: 'Email Placeholder',
            type: 'string',
            description: 'Placeholder text for the email input',
          },
          {
            name: 'queryRelatedOptions',
            title: 'Query Related Options',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'List of options for the query related dropdown',
          },
          {
            name: 'messagePlaceholder',
            title: 'Message Placeholder',
            type: 'string',
            description: 'Placeholder text for the message textarea',
          },
        ],
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
  
  export default contactSchema;
  