import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Profile from 'App/Models/Profile'

export default class ProfileSeeder extends BaseSeeder {
  public async run () {
    await Profile.create({
      id: 1,
      name: 'ALUNO'
    });

    await Profile.create({
      id: 2,
      name: 'ADMINISTRADOR'
    });
  }
}
