import TypeService from "App/Services/TypeService";

const typeService = new TypeService();

export default class TypesController {

    public async fetchTypes() {
        const response = await typeService.fetchTypes();
        return response;
    }

    public async findTypeById({ params }) {
        const response = await typeService.findTypeById(params.id);
        return response;
    }

    public async findTypeByName({ params }) {
        const response = await typeService.findTypeByName(params.name);
        return response;
    }

    public async saveType(request) {
        const response = await typeService.saveType(request);
        return response;
    }

    public async deleteTypeById({ params }) {
        const response = await typeService.deleteTypeById(params.id);
        return response;
    }
}