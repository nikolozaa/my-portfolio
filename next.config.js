/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}


module.exports = nextConfig

// const withPlugins = require('next-compose-plugins');

// const withCSS = require('@zeit/next-css')

// module.exports = withCSS({
//   reactStrictMode: true,
//   cssLoaderOptions: {
//     url: false
//   }
// })


// module.exports = withPlugins(
//   [
//     [withCSS],
//   ],
//   {
//     reactStrictMode: true,
//     cssLoaderOptions: {
//       url: false
//     }
//   },
// );
