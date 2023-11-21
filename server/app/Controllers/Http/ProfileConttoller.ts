import ProfileService from "App/Services/ProfileService";

const profileService = new ProfileService();

export default class ProfilesController {
  public async fetchProfiles() {
    const response = await profileService.fetchProfiles();
    return response;
  }

  public async findProfileById({ params }) {
    const response = await profileService.findProfileById(params.id);
    return response;
  }

  public async findProfileByName({ params }) {
    const response = await profileService.findProfileByName(params.name);
    return response;
  }

  public async saveProfile(request) {
    const response = await profileService.saveProfile(request);
    return response;
  }

  public async deleteProfileById({ params }) {
    const response = await profileService.deleteProfileById(params.id);
    return response;
  }
}
