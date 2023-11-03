import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User';

export default class UserSeeder extends BaseSeeder {
  public async run () {
    await User.create({
      id: 1,
      name: 'Name Example',
      email: "Email Example",
      password: "Password Example",
      profile_id: 1,
      url_id: 1,
    });
  }
}
