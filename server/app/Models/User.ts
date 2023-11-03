import { DateTime } from 'luxon'
import { BaseModel, column, BelongsTo, belongsTo  } from '@ioc:Adonis/Lucid/Orm'
import Profile from './Profile'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public password: string

  @column()
  public profile_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Profile, 
  { 
    foreignKey: 'id', 
    localKey: 'profile_id' 
  })
  public profile: BelongsTo<typeof Profile>
}
