const { ApolloServer } = require('apollo-server')

require('dotenv').config()

const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
const mongoose = require('mongoose')
const { findOrCreateUser } = require('./controllers/userController')

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(connection => console.log('------------------DB connected!------------------'))
  .catch(err => console.error('Db not connected',err))

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    let authToken = null
    let currentUser = null
    try {
      authToken = req.headers.authorization
      if (authToken) {
        //find or create user
        curentUser = await findOrCreateUser(authToken)
      }
    } catch (err) {
      console.error(`Unable to authenticate user with token ${authToken}`)
    }
    return { curentUser }
  },
})

server.listen().then(({ url }) => {
  console.log(url)
})
