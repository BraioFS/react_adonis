import Url from "App/Models/Url";
import throwGenericError from "App/Utils/ThrowGenericErrorUtils";

export default class UrlService {
  public async fetchUrls() {
    try {
      const urlsList = await Url.query();
      return urlsList;
    } catch (error) {
      throwGenericError("An error occurred while fetching urls", error);
    }
  }

  public async findUrlById(id: number) {
    try {
      const url = await Url.query().where("id", id).first();
      return url;
    } catch (error) {
      throwGenericError("An error occurred while finding the url by id", error);
    }
  }

  public async findUrlByName(name: string) {
    try {
      const url = await Url.query().where("name", name).first();
      return url;
    } catch (error) {
      throwGenericError(
        "An error occurred while finding the url by name",
        error
      );
    }
  }

  public async findUrlByTypeId(id: number) {
    try {
      const url = await Url.query().where("type_id", id).first();
      return url;
    } catch (error) {
      throwGenericError(
        "An error occurred while finding the url by type id",
        error
      );
    }
  }

  public async saveUrl({ request }) {
    try {
      const { name, type_id } = request.all();
      await Url.updateOrCreate(
        { name, type_id },
        {
          name,
          type_id,
        }
      );
      return { message: "Successfully url saving!" };
    } catch (error) {
      throwGenericError("An error occurred while saving the url", error);
    }
  }

  public async deleteUrlById(id: number) {
    try {
      await Url.query().where("id", id).delete();
      return { message: "Successfully deleted!" };
    } catch (error) {
      throwGenericError("An error occurred while deleting the url", error);
    }
  }
}
