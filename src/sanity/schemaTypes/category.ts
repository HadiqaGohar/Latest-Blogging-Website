const categorySchema = {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Category Description',
      type: 'text',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          { title: 'Business', value: 'FaBriefcase' },
          { title: 'Startup', value: 'FaRocket' },
          { title: 'Economy', value: 'FaPiggyBank' },
          { title: 'Technology', value: 'FaLaptop' },
        ], // List of available icons
      },
      description: 'Select the icon that corresponds to the category',
    },
  ],
};

export default categorySchema;
