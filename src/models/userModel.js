// const users = [];
const users = [
  {
    id: 1,
    username: 'Daniel',
    password: '$2a$10$byTXPdvnZ8IZAo0gkr5gcOVdA9ws/Aqj4xk1qqxdxA04fegVhlR5W'
  },
]

export default class User {
  constructor({ username, password }) {
    this.id = users.length + 1;
    this.username = username;
    this.password = password;
  }

  save() { 
    users.push(this); 
    console.log(users); 
  }

  static async findOne({ username }) {
    return users.find(user => user.username === username);
  }
}
