import UserService from "App/Services/UserService";

const userService = new UserService();

export default class UsersController {
  public async fetchUsers() {
    const response = await userService.fetchUsers();
    return response;
}

public async findUserById({ params }) {
    const response = await userService.findUserById(params.id);
    return response;
}

public async findUserByName({ params }) {
    const response = await userService.findUserByName(params.name);
    return response;
}

public async saveUser(request) {
    const response = await userService.saveUser(request);
    return response;
}

public async deleteUserById({ params }) {
    const response = await userService.deleteUserById(params.id);
    return response;
}
}
