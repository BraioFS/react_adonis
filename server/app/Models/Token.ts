import { BaseModel, column} from '@ioc:Adonis/Lucid/Orm'

export default class Token extends BaseModel {
    public static table = 'tokens'

    @column({ isPrimary: true })
    public id: number

    @column()
    public key: string

    @column()
    public url: string

    @column()
    public name: string
}