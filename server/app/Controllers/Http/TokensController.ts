import TokenService from "App/Services/TokenService";

const tokenService = new TokenService();

export default class TokensController {

    public async fetchTokens() {
        const response = await tokenService.fetchTokens();
        return response;
    }

    public async findTokenById({ params }) {
        const response = await tokenService.findTokenById(params.id);
        return response;
    }

    public async findTokenByName({ params }) {
        const response = await tokenService.findTokenByName(params.name);
        return response;
    }

    public async saveToken(request) {
        const response = await tokenService.saveToken(request);
        return response;
    }

    public async deleteTokenById({ params }) {
        const response = await tokenService.deleteTokenById(params.id);
        return response;
    }
}