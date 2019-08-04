const { users, roles } = require('../data/db')

module.exports = {
    hello() {
        return "Hi !!!"
   },
   dateNow() {
       return new Date;
  },
  loggedUser(){
      return {
          id: 1,
          name: "asdf",
          email: "asdf@sdf.com",
          age: "66",
          wage_usd: "666.66",
          vip: true
      }
  },
  featuredProduct(){
      return {
          name: "Computer",
          price: 49999.99,
          discount: 0.15,
      }
  },
  numbersLotery() {
      const crescente = (a, b) => a - b
      return Array(6).fill(0).map(() => parseInt(Math.random() * 60 + 1)).sort(crescente)
  },
  users() {
      return users
  },
  user( _ , args) {
       const selected = users.filter(u => u.id == args.id)
       return selected ? selected[0] : null
   },
   roles() {
       return roles
   },
   role( _ , args) {
       const selected = roles.filter(u => u.id == args.id)
       return selected ? selected[0] : null
   }
}