import MessageService from "App/Services/MessageService";

const messageService = new MessageService();

export default class MessagesController {
  public async fetchMessages() {
    const response = await messageService.fetchMessages();
    return response;
  }

  public async findMessageById({ params }) {
    const response = await messageService.findMessageById(params.id);
    return response;
  }

  public async findMessageByUserId({ params }) {
    const response = await messageService.findMessageByUserId(params.name);
    return response;
  }

  public async saveMessage(request) {
    const response = await messageService.saveMessage(request);
    return response;
  }

  public async deleteMessageById({ params }) {
    const response = await messageService.deleteMessageById(params.id);
    return response;
  }
}
