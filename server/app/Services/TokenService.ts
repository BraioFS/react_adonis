import Token from "App/Models/Token";
import throwError from "App/Utils/ThrowErrorUtils";

export default class TokenService {

    public async buscarTokens() {
        try {
            const listaToken = await Token.query();
            return listaToken;
        } catch (error) {
            console.log("file: TokenService.ts:10 ~ TokenService ~ buscarTokens ~ error:", error)
            throw new Error("Erro ao buscar contato");
        }
    }

    public async buscarContatoPorUsuario(request) {
        try {
            const token = await Token.query().where('id', request.id).first();
            return token;
        } catch (error) {
            console.log("Erro: ", error)
            throw new Error("Erro ao buscar contato");
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
            throwError('Erro ao salvar: ' + error.message);
        }
    }
}