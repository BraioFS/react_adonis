import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Token extends BaseModel {
  public static table = "tokens";

  @column({ isPrimary: true })
  public id: number;

  @column()
  public key: string;

  @column()
  public url: string;

  @column()
  public name: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
