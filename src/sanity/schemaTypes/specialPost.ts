import { Rule } from '@sanity/types'; // Import Rule type

export const specialPostSchema = {
  name: 'specialPost',
  title: 'Special Post',
  type: 'document',
  fields: [
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true, // Allow focus on a specific area of the image
      },
      validation: (Rule: Rule) => Rule.required(), // Explicitly type Rule
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().min(5).max(100), // Explicitly type Rule
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().min(10).max(200), // Explicitly type Rule
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: Rule) => Rule.required().min(20).max(300), // Explicitly type Rule
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().min(2).max(50), // Explicitly type Rule
    },
  ],
};

export default specialPostSchema;
