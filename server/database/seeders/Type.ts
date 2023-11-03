import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Type from 'App/Models/Type';

export default class TypeSeeder extends BaseSeeder {
  public async run () {
    await Type.create({
      id: 1,
      name: 'Type Example',
    });

    await Type.create({
      id: 2,
      name: 'Type Example 2',
    });
  }
}
