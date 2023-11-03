import Token from "App/Models/Token";
import throwGenericError from "App/Utils/ThrowGenericErrorUtils";

export default class TokenService {

    public async buscarTokens() {
        try {
            const listaToken = await Token.query();
            return listaToken;
        } catch (error) {
            throwGenericError('Erro ao buscar contato', error);
        }
    }

    public async buscarTokenPorId(id:number) {
        try {
            const token = await Token.query().where('id', id).first();
            return token;
        } catch (error) {
            throwGenericError('Ocorreu um erro ao buscar o token', error);
        }
    }

    public async salvarToken({ request }) {
        try {
            const { key, url, name } = request.all();
            const token = await Token.updateOrCreate(
                { key },
                {
                    key,
                    url,
                    name,
                }
            );
            return token;
        } catch (error) {
            throwGenericError('Ocorreu um erro ao salvar o token', error);
        }
    }
}