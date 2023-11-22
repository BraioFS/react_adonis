import Type from "App/Models/Type";
import throwGenericError from "App/Utils/ThrowGenericErrorUtils";

export default class TypeService {
  public async fetchTypes() {
    try {
      const typesList = await Type.query();
      return typesList;
    } catch (error) {
      throwGenericError("An error occurred while fetching types", error);
    }
  }

  public async findTypeById(id: number) {
    try {
      const type = await Type.query().where("id", id).first();
      return type;
    } catch (error) {
      throwGenericError(
        "An error occurred while finding the type by id",
        error
      );
    }
  }

  public async findTypeByName(name: string) {
    try {
      const type = await Type.query().where("name", name).first();
      return type;
    } catch (error) {
      throwGenericError(
        "An error occurred while finding the type by name",
        error
      );
    }
  }

  public async saveType({ request }) {
    try {
      const { name } = request.all();
      await Type.updateOrCreate(
        { name },
        {
          name,
        }
      );
      return { message: "Successfully type saving!" };
    } catch (error) {
      throwGenericError("An error occurred while saving the type", error);
    }
  }

  public async deleteTypeById(id: number) {
    try {
      await Type.query().where("id", id).delete();
      return { message: "Successfully deleted!" };
    } catch (error) {
      throwGenericError("An error occurred while deleting the type", error);
    }
  }
}
