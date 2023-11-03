import TokenService from "App/Services/TokenService";

const tokenService = new TokenService();

export default class TokensController {

    public async buscarTokens() {
        const resposta = await tokenService.buscarTokens();
        return resposta;
    }
}