import { DateTime } from 'luxon'
import { BaseModel, column, BelongsTo, belongsTo  } from '@ioc:Adonis/Lucid/Orm'
import Subject from './Subject';
import Url from './Url';

export default class Content extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string;

  @column()
  public subject_id: number

  @column()
  public url_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Subject, 
  { 
    foreignKey: 'id', 
    localKey: 'subject_id' 
  })
  public profile: BelongsTo<typeof Subject>

  @belongsTo(() => Url, 
  { 
    foreignKey: 'id', 
    localKey: 'url_id' 
  })
  public url: BelongsTo<typeof Url>
}
