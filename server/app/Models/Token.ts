import { DateTime } from "luxon";
import { BaseModel, column, BelongsTo, belongsTo  } from '@ioc:Adonis/Lucid/Orm'
import Url from "./Url";

export default class Token extends BaseModel {
  public static table = "tokens";

  @column({ isPrimary: true })
  public id: number;

  @column()
  public key: string;

  @column()
  public url_id: number;

  @column()
  public name: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Url, 
  { 
    foreignKey: 'id', 
    localKey: 'url_id' 
  })
  public profile: BelongsTo<typeof Url>
}
