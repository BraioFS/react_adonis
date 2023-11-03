import Token from "App/Models/Token";

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
}