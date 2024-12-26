import { Rule } from '@sanity/types'; // Import Rule type

const ourMissionSchema = {
  name: 'ourMission',
  title: 'Our Mission',
  type: 'document',
  fields: [
    {
      name: 'aboutUsTitle',
      title: 'About Us Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().min(5).max(100), // Explicitly type Rule
    },
    {
      name: 'aboutUsDescription',
      title: 'About Us Description',
      type: 'text',
      validation: (Rule: Rule) => Rule.required().min(10), // Explicitly type Rule
    },
    {
      name: 'ourMissionTitle',
      title: 'Our Mission Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().min(5).max(100), // Explicitly type Rule
    },
    {
      name: 'ourMissionDescription',
      title: 'Our Mission Description',
      type: 'text',
      validation: (Rule: Rule) => Rule.required().min(10), // Explicitly type Rule
    },
    {
      name: 'readMoreLink',
      title: 'Read More Link',
      type: 'url',
      description: 'Link for the "Read More" section',
      validation: (Rule: Rule) => Rule.uri({ allowRelative: true }), // Explicitly type Rule
    },
  ],
  preview: {
    select: {
      title: 'aboutUsTitle',
      subtitle: 'ourMissionTitle',
    },
  },
};

export default ourMissionSchema;
