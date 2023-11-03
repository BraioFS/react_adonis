import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Subject from 'App/Models/Subject';

export default class SubjectSeeder extends BaseSeeder {
  public async run () {
    await Subject.create({
      id: 1,
      name: 'Subject Example',
    });
  }
}
