/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'dynamic-media-cdn.tripadvisor.com',
      'cdn.prod.website-files.com',
      'sdg-migration-id.s3.amazonaws.com',
      'www.holidify.com',
       'photos.hotelbeds.com',
        'cdn.sanity.io',
        'encrypted-tbn0.gstatic.com',
        'rinewstoday.com',
        'blogger.googleusercontent.com',
        'media.architecturaldigest.com',



      // Add more domains as needed
    ],
  },
};

module.exports = nextConfig;
