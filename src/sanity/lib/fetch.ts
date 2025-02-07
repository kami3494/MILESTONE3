import { createClient } from '@sanity/client';

// Create a Sanity client instance
createClient({
  projectId: 'afxnmmvc', // Your Sanity project ID
  dataset: 'production', // Dataset, generally 'production' hota hai
  token: 'skrmeLU5xjxMKa2tzxhcCZFpp2EtNOFLVLpp3QKEeFoeOAL7qXAOYdoQfUDyAH3OC3kgjjmalDGqVRv0SiJ2vuXN3KD5PWI5hU88h9XwjHM0iNwEYE6yW8f2LczooSIAjv1htUYBhSX5Su1hJqBLHZX4P0V3i0oGzvroh58Ki9gpN5I81e5C', // Sanity API token
  useCdn: true, // Use CDN for faster responses
});

