import Content from "App/Models/Content";
import throwGenericError from "App/Utils/ThrowGenericErrorUtils";

export default class ContentService {

    public async fetchContents() {
        try {
            const contentsList = await Content.query();
            return contentsList;
        } catch (error) {
            throwGenericError('An error occurred while fetching contents', error);
        }
    }

    public async findContentById(id:number) {
        try {
            const content = await Content.query().where('id', id).first();
            return content;
        } catch (error) {
            throwGenericError('An error occurred while finding the content by id', error);
        }
    }

    public async findContentByName(name:string) {
        try {
            const content = await Content.query().where('name', name).first();
            return content;
        } catch (error) {
            throwGenericError('An error occurred while finding the content by name', error);
        }
    }

    public async saveContent({ request }) {
        try {
            const { name, url_id, subject_id } = request.all();
            await Content.updateOrCreate(
                { name, subject_id },
                {
                    name,
                    url_id,
                    subject_id,
                }
            );
            return { message: 'Successfully content saving!' };
        } catch (error) {
            throwGenericError('An error occurred while saving the content', error);
        }
    }

    public async deleteContentById(id:number) {
        try {
            await Content.query().where('id', id).delete();
            return { message: 'Successfully deleted!' };
        } catch (error) {
            throwGenericError('An error occurred while deleting the content', error);
        }
    }
}