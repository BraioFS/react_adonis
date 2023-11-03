import { DateTime } from 'luxon'
import { BaseModel, column, BelongsTo, belongsTo  } from '@ioc:Adonis/Lucid/Orm'
import Type from './Type';

export default class Url extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string;

  @column()
  public type_id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Type, 
  { 
    foreignKey: 'id', 
    localKey: 'type_id' 
  })
  public profile: BelongsTo<typeof Type>
}
