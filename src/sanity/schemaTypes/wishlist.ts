// src/sanity/schematype/wishlist.ts
import { defineType } from "sanity";

export const wishlist = defineType({
  name: 'wishlist', // Must match `_type` in API
  title: 'Wishlist',
  type: 'document',
  fields: [
    {
      name: 'userId',
      type: 'string',
      title: 'User ID',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'productId',
      type: 'string',
      title: 'Product ID',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'productName',
      type: 'string',
      title: 'Product Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'productImage',
      type: 'string',
      title: 'Product Image URL',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'addedAt',
      type: 'datetime',
      title: 'Added At',
      initialValue: () => new Date().toISOString(),
    },
  ],
});