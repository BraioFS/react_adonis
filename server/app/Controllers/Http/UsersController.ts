import UserService from "App/Services/UserService";

const userService = new UserService();

export default class UsersController {
  public async fetchUsers() {
    const response = await userService.fetchUsers();
    return response;
}

public async findUSerById({ params }) {
    const response = await userService.findUSerById(params.id);
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
