import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";

export default class IndexSeeder extends BaseSeeder {
  private async runSeeder(Seeder: { default: typeof BaseSeeder }) {
    await new Seeder.default(this.client).run();
  }

  public async run() {
    await this.runSeeder(await import("./Profile"));
    await this.runSeeder(await import("./Subject"));
    await this.runSeeder(await import("./Type"));
    await this.runSeeder(await import("./Url"));
    await this.runSeeder(await import("./Token"));
    await this.runSeeder(await import("./User"));
    await this.runSeeder(await import("./Content"));
    await this.runSeeder(await import("./Message"));
  }
}
