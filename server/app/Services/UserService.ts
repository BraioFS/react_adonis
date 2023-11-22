import User from "App/Models/User";
import throwGenericError from "App/Utils/ThrowGenericErrorUtils";

export default class UserService {

    public async fetchUsers() {
        try {
            const usersList = await User.query();
            return usersList;
        } catch (error) {
            throwGenericError('An error occurred while fetching users', error);
        }
    }

    public async findUserById(id:number) {
        try {
            const user = await User.query().where('id', id).first();
            return user;
        } catch (error) {
            throwGenericError('An error occurred while finding the user by id', error);
        }
    }

    public async findUserByName(name:string) {
        try {
            const token = await User.query().where('name', name).first();
            return token;
        } catch (error) {
            throwGenericError('An error occurred while finding the token by name', error);
        }
    }

    public async saveUser({ request }) {
        try {
            const { name, email, password, profile_id } = request.all();
            await User.updateOrCreate(
                { email },
                {
                    name,
                    email,
                    password,
                    profile_id,
                }
            );
            return { message: 'Successfully user saving!' };
        } catch (error) {
            throwGenericError('An error occurred while saving the user', error);
        }
    }

    public async deleteUserById(id:number) {
        try {
            await User.query().where('id', id).delete();
            return { message: 'Successfully user deleted!' };
        } catch (error) {
            throwGenericError('An error occurred while deleting the user', error);
        }
    }
}