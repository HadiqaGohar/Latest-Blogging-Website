import { Rule } from '@sanity/types'; // Import the Rule type

const joinOurTeamTextSchema = {
  name: "joinOurTeamText",
  title: "Join Our Team Text",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
      description: "The main heading text for the section.",
      validation: (Rule: Rule) => Rule.required().max(100),
    },
    {
      name: "subText",
      title: "Subtext",
      type: "text",
      description: "The descriptive text under the heading.",
      validation: (Rule: Rule) => Rule.required().max(200),
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
      description: "Text for the button.",
      validation: (Rule: Rule) => Rule.required().max(50),
    },
  ],
};

export default joinOurTeamTextSchema;
