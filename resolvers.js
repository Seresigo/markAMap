const user = {
  _id: "1",
  name: "Philipp",
  email: "Philipp@ya.ru",
  picture: "https://cloudinary.com/asdf",
}

module.exports = {
  Query: {
    me: () => user,
  },
}
