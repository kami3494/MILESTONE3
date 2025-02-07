import { defineType } from "sanity";

export const order = defineType({
  name: 'order', // Must match `_type` in API
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'customerName',
      type: 'string',
      title: 'Customer Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'customerEmail',
      type: 'string',
      title: 'Customer Email',
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: 'customerAddress',
      type: 'string',
      title: 'Customer Address',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'orderDate',
      type: 'datetime',
      title: 'Order Date',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'status',
      type: 'string',
      title: 'Status',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Shipped', value: 'shipped' },
          { title: 'Delivered', value: 'delivered' },
        ],
      },
      initialValue: 'pending',
      validation: (Rule) => Rule.required(),
    },
  ],
});