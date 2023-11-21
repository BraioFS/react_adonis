import Profile from "App/Models/Profile";
import throwGenericError from "App/Utils/ThrowGenericErrorUtils";

export default class ProfileService {

    public async fetchProfiles() {
        try {
            const profilesList = await Profile.query();
            return profilesList;
        } catch (error) {
            throwGenericError('An error occurred while fetching Profiles', error);
        }
    }

    public async findProfileById(id:number) {
        try {
            const profile = await Profile.query().where('id', id).first();
            return profile;
        } catch (error) {
            throwGenericError('An error occurred while finding the Profile by id', error);
        }
    }

    public async findProfileByName(name:string) {
        try {
            const profile = await Profile.query().where('name', name).first();
            return profile;
        } catch (error) {
            throwGenericError('An error occurred while finding the Profile by id', error);
        }
    }

    public async saveProfile({ request }) {
        try {
            const { name } = request.all();
            await Profile.updateOrCreate(
                { name },
                {
                    name,
                }
            );
            return { message: 'Successfully Profile saving!' };
        } catch (error) {
            throwGenericError('An error occurred while saving the Profile', error);
        }
    }

    public async deleteProfileById(id:number) {
        try {
            await Profile.query().where('id', id).delete();
            return { message: 'Successfully Profile deleted!' };
        } catch (error) {
            throwGenericError('An error occurred while deleting the Profile', error);
        }
    }
}