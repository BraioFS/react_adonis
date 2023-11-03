import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Token from 'App/Models/Token'

export default class TokenSeeder extends BaseSeeder {
  public async run () {
    await Token.create({
      id: 1,
      key: 'example',
      url: 'https://example',
      name: 'example'
    })
  }
}