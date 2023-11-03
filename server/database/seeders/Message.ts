import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Message from 'App/Models/Message';

export default class MessageSeeder extends BaseSeeder {
  public async run () {
    await Message.create({
      id: 1,
      message: 'message Example',
      user_id: 1,
      url_id: 1,
    });
  }
}
