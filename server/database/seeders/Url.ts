import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Url from 'App/Models/Url';

export default class UrlSeeder extends BaseSeeder {
  public async run () {
    await Url.create({
      id: 1,
      name: 'Url Example',
      type_id: 1
    });

    await Url.create({
      id: 2,
      name: 'Url Example 2',
      type_id: 2
    });
  }
}
