import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Contents extends BaseSchema {
  protected tableName = 'contents'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.integer('url_id')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}