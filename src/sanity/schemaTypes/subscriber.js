// schemas/subscriber.js
export default {
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
  