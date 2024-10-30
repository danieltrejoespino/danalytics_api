// const users = [];
const users = [
  {
    id: 1,
    username: 'Daniel',
    password: '$2a$10$byTXPdvnZ8IZAo0gkr5gcOVdA9ws/Aqj4xk1qqxdxA04fegVhlR5W'
  },
  {
    id: 2,
    username: 'Marco',
    password: '$2a$10$Sn/hV0kYfcBV8rwpoHHXluwsQb3Zw14bpqjKwzlapa/LtuHiDp1OC'
  },
  {
    id: 3,
    username: 'Luis',
    password: '$2a$10$Sn/hV0kYfcBV8rwpoHHXluwsQb3Zw14bpqjKwzlapa/LtuHiDp1OC'
  },
  {
    id: 4,
    username: 'Crisis',
    password: '$2a$10$Sn/hV0kYfcBV8rwpoHHXluwsQb3Zw14bpqjKwzlapa/LtuHiDp1OC'
  },
  {
    id: 4,
    username: 'Uziel',
    password: '$2a$10$Sn/hV0kYfcBV8rwpoHHXluwsQb3Zw14bpqjKwzlapa/LtuHiDp1OC'
  },
  {
    id: 4,
    username: 'Ivan',
    password: '$2a$10$Sn/hV0kYfcBV8rwpoHHXluwsQb3Zw14bpqjKwzlapa/LtuHiDp1OC'
  },
  {
    id: 4,
    username: 'Vicky',
    password: '$2a$10$byTXPdvnZ8IZAo0gkr5gcOVdA9ws/Aqj4xk1qqxdxA04fegVhlR5W'
  },
  {
    id: 5,
    username: 'Sergio',
    password: '$2a$10$Sn/hV0kYfcBV8rwpoHHXluwsQb3Zw14bpqjKwzlapa/LtuHiDp1OC'
  }
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
