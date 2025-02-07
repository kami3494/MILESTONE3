// src/lib/sanity.ts
import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'afxnmmvc'; // Replace with your Sanity project ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'; // Default to 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-01'; // Use the latest API version
const token = process.env.SANITY_API_TOKEN || 'skrmeLU5xjxMKa2tzxhcCZFpp2EtNOFLVLpp3QKEeFoeOAL7qXAOYdoQfUDyAH3OC3kgjjmalDGqVRv0SiJ2vuXN3KD5PWI5hU88h9XwjHM0iNwEYE6yW8f2LczooSIAjv1htUYBhSX5Su1hJqBLHZX4P0V3i0oGzvroh58Ki9gpN5I81e5C'; // Optional: Only if you need write access

export const client = createClient({
  projectId,
  dataset,
  token, // Include token only if needed for write operations
  useCdn: true, // Set to `false` if you need fresh data on every request
  apiVersion,
});

export default client;