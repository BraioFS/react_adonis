import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Token from 'App/Models/Token';

export default class TokenSeeder extends BaseSeeder {
  public async run () {
    await Token.create({
      id: 1,
      name: 'Token Example',
      key: "Key Example",
      url_id: 1
    });
  }
}
