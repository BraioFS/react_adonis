import Token from "App/Models/Token";
import throwGenericError from "App/Utils/ThrowGenericErrorUtils";

export default class TokenService {

    public async fetchTokens() {
        try {
            const tokensList = await Token.query();
            return tokensList;
        } catch (error) {
            throwGenericError('An error occurred while fetching tokens', error);
        }
    }

    public async findTokenById(id:number) {
        try {
            const token = await Token.query().where('id', id).first();
            return token;
        } catch (error) {
            throwGenericError('An error occurred while finding the token by id', error);
        }
    }

    public async findTokenByName(name:string) {
        try {
            const token = await Token.query().where('name', name).first();
            return token;
        } catch (error) {
            throwGenericError('An error occurred while finding the token by name', error);
        }
    }

    public async saveToken({ request }) {
        try {
            const { key, url_id, name } = request.all();
            await Token.updateOrCreate(
                { key },
                {
                    key,
                    url_id,
                    name,
                }
            );
            return { message: 'Successfully token saving!' };
        } catch (error) {
            throwGenericError('An error occurred while saving the token', error);
        }
    }

    public async deleteTokenById(id:number) {
        try {
            await Token.query().where('id', id).delete();
            return { message: 'Successfully deleted!' };
        } catch (error) {
            throwGenericError('An error occurred while deleting the token', error);
        }
    }
}