module.exports = {
  client: { service: { url: 'http://localhost:8000/___graphql' } },
  schemas: {
    gatsby: {
      endpoint: 'http://localhost:8000/___graphql'
    }
  },
  queries: {
    schema: 'gatsby',
    includes: ['./src/**/*.js'],
    excludes: ['node_modules/**']
  }
};
