import { DateTime } from 'luxon'
import { BaseModel, column, BelongsTo, belongsTo  } from '@ioc:Adonis/Lucid/Orm'
import Url from './Url';
import User from './User';

export default class Message extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public message: string;

  @column()
  public user_id: number

  @column()
  public url_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User, 
  { 
    foreignKey: 'id', 
    localKey: 'user_id' 
  })
  public profile: BelongsTo<typeof User>

  @belongsTo(() => Url, 
  { 
    foreignKey: 'id', 
    localKey: 'url_id' 
  })
  public url: BelongsTo<typeof Url>
}
