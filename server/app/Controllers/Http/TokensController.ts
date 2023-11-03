import TokenService from "App/Services/TokenService";

const tokenService = new TokenService();

export default class TokensController {

    public async buscarTokens() {
        const resposta = await tokenService.buscarTokens();
        return resposta;
    }

    public async buscarContatoPorUsuario(request) {
        const resposta = await contatoService.buscarContatoPorUsuario(request);
        return resposta;
    }
}