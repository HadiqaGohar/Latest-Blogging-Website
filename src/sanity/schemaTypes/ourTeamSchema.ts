import { Rule } from '@sanity/types'; // Import Rule type

export const ourTeamSchema = {
  name: "ourTeam",
  title: "Our Team Section",
  type: "document",
  fields: [
    {
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      description: "Title for the Our Team section.",
      validation: (Rule: Rule) => Rule.required().max(100), // Explicitly type Rule
    },
    {
      name: "sectionSubTitle",
      title: "Section Subtitle",
      type: "string",
      description: "Subtitle for the Our Team section.",
      validation: (Rule: Rule) => Rule.required().max(200), // Explicitly type Rule
    },
    {
      name: "sectionDescription",
      title: "Section Description",
      type: "text",
      description: "Detailed description about the Our Team section.",
      validation: (Rule: Rule) => Rule.required().max(500), // Explicitly type Rule
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      description: "Background image for the Our Team section.",
      options: {
        hotspot: true,
      },
    },
    {
      name: "decorativeImage",
      title: "Decorative Image",
      type: "image",
      description: "Small decorative image for the Our Team section.",
      options: {
        hotspot: true,
      },
    },
  ],
};

export default ourTeamSchema;
