const MongoLib = require('../lib/mongo');
const bcrypt = require('bcrypt');

class UsersService {
  constructor() {
    this.collection = 'users';
    this.MongoDB = new MongoLib();
  }

  async getUser({ email }) {
    const [user] = await this.MongoDB.getAll(this.collection, { email });
    //console.log('El user en SERVICE es=========>', user);
    return user
  }

  async createUser({ user }) {
    const { name, email, password } = user;
    const hashedPassword = await bcrypt.hash(password, 10);

    const createUserId = await this.MongoDB.create(this.collection, {
      name,
      email,
      password: hashedPassword
    });

    return createUserId;
  }

  async getOrCreateUser({ user }) {
    const querieUser = await this.getUser({ email: user.email });

    if (querieUser) {
      return querieUser;
    }

    await this.createUser({ user });
    return await this.getUser({ email: user.email });
  }
}

module.exports = UsersService;