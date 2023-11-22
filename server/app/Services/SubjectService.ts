import Subject from "App/Models/Subject";
import throwGenericError from "App/Utils/ThrowGenericErrorUtils";

export default class SubjectService {
  public async fetchSubjects() {
    try {
      const subjectsList = await Subject.query();
      return subjectsList;
    } catch (error) {
      throwGenericError("An error occurred while fetching subjects", error);
    }
  }

  public async findSubjectById(id: number) {
    try {
      const subject = await Subject.query().where("id", id).first();
      return subject;
    } catch (error) {
      throwGenericError(
        "An error occurred while finding the subject by id",
        error
      );
    }
  }

  public async findSubjectByName(name: string) {
    try {
      const subject = await Subject.query().where("name", name).first();
      return subject;
    } catch (error) {
      throwGenericError(
        "An error occurred while finding the subject by name",
        error
      );
    }
  }

  public async saveSubject({ request }) {
    try {
      const { name } = request.all();
      await Subject.updateOrCreate(
        { name },
        {
          name,
        }
      );
      return { message: "Successfully subject saving!" };
    } catch (error) {
      throwGenericError("An error occurred while saving the subject", error);
    }
  }

  public async deleteSubjectById(id: number) {
    try {
      await Subject.query().where("id", id).delete();
      return { message: "Successfully deleted!" };
    } catch (error) {
      throwGenericError("An error occurred while deleting the subject", error);
    }
  }
}
