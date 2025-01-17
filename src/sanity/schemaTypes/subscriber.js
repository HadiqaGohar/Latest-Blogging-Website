// schemas/subscriber.js

const subscriberSchema = {
  name: "subscriber",
  type: "document",
  title: "Subscriber",
  fields: [
    {
      name: "email",
      type: "string",
      title: "Email",
      validation: (Rule) => Rule.email().required(),
    },
  ],
};

export default subscriberSchema;
