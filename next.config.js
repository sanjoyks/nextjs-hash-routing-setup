module.exports = {
  reactStrictMode: true,
  spa: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/', // The :path parameter isn't used here so will be automatically passed in the query
      },
    ]
  },
}
