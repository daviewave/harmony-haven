import sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '4w11zk3i',
  dataset: 'production',
  apiVersion: '2023-02-06',
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
