const mogoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  picture: String,
})

mosule.exports = mongoose.model('User', userSchema)
