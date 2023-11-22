import ContentService from "App/Services/ContentService";

const contentService = new ContentService();

export default class ContentsController {

    public async fetchContents() {
        const response = await contentService.fetchContents();
        return response;
    }

    public async findContentById({ params }) {
        const response = await contentService.findContentById(params.id);
        return response;
    }

    public async findContentByName({ params }) {
        const response = await contentService.findContentByName(params.name);
        return response;
    }

    public async saveContent(request) {
        const response = await contentService.saveContent(request);
        return response;
    }

    public async deleteContentById({ params }) {
        const response = await contentService.deleteContentById(params.id);
        return response;
    }
}