import TokenService from "App/Services/TokenService";

const tokenService = new TokenService();

export default class TokensController {

    public async buscarTokens() {
        const resposta = await tokenService.buscarTokens();
        return resposta;
    }

    public async buscarTokenPorId({ params }) {
        const resposta = await tokenService.buscarTokenPorId(params.id);
        return resposta;
    }

    public async salvarToken(request) {
        const resposta = await tokenService.salvarToken(request);
        return resposta;
    }
}