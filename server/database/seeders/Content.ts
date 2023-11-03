import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Content from 'App/Models/Content';

export default class ContentSeeder extends BaseSeeder {
  public async run () {
    await Content.create({
      id: 1,
      name: 'Name Example',
      subject_id: 1,
      url_id: 1,
    });
  }
}
