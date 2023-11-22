import UrlService from "App/Services/UrlService";

const urlService = new UrlService();

export default class UrlsController {
  public async fetchUrls() {
    const response = await urlService.fetchUrls();
    return response;
  }

  public async findUrlById({ params }) {
    const response = await urlService.findUrlById(params.id);
    return response;
  }

  public async findUrlByName({ params }) {
    const response = await urlService.findUrlByName(params.name);
    return response;
  }

  public async findUrlByTypeId({ params }) {
    const response = await urlService.findUrlByTypeId(params.id);
    return response;
  }

  public async saveUrl(request) {
    const response = await urlService.saveUrl(request);
    return response;
  }

  public async deleteUrlById({ params }) {
    const response = await urlService.deleteUrlById(params.id);
    return response;
  }
}
