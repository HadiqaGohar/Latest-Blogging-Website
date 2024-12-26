import { Rule } from '@sanity/types'; // Import the Rule type

export const aboutPageSchema = {
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    {
      name: "aboutSection",
      title: "About Section",
      type: "object",
      fields: [
        {
          name: "sectionTitle",
          title: "Section Title",
          type: "string",
          description: "Title for the About section.",
          validation: (Rule: Rule) => Rule.required().max(100),
        },
        {
          name: "sectionSubTitleLine1",
          title: "Section Subtitle Line 1",
          type: "string",
          description: "First line of subtitle",
          validation: (Rule: Rule) => Rule.required().max(200),
        },
        {
          name: "sectionSubTitleLine2",
          title: "Section Subtitle Line 2",
          type: "string",
          description: "Second line of subtitle",
          validation: (Rule: Rule) => Rule.required().max(200),
        },
        {
          name: "sectionSubTitleLine3",
          title: "Section Subtitle Line 3",
          type: "string",
          description: "Third line of subtitle",
          validation: (Rule: Rule) => Rule.required().max(200),
        },
        {
          name: "sectionParagraph",
          title: "Section Paragraph",
          type: "text",
          description: "Detailed paragraph describing the About section.",
          validation: (Rule: Rule) => Rule.required().max(500),
        },
        {
          name: "backgroundImage",
          title: "Background Image",
          type: "image",
          description: "Background image for the stats section.",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: "statsSection",
      title: "Stats Section",
      type: "object",
      fields: [
        {
          name: "statItems",
          title: "Stat Items",
          type: "array",
          of: [
            {
              name: "statItem",
              type: "object",
              fields: [
                {
                  name: "statNumber",
                  title: "Stat Number",
                  type: "string",
                  description: "Stat number (e.g., 12+, 18+, etc.).",
                  validation: (Rule: Rule) => Rule.required().max(10),
                },
                {
                  name: "statLabel",
                  title: "Stat Label",
                  type: "string",
                  description: "Label for the stat item (e.g., Blogs Published, Views on Finweet).",
                  validation: (Rule: Rule) => Rule.required().max(100),
                },
              ],
            },
          ],
          validation: (Rule: Rule) => Rule.required().min(3).max(3),
        },
      ],
    },
  ],
};

export default aboutPageSchema;
