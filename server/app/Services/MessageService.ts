import Message from "App/Models/Message";
import throwGenericError from "App/Utils/ThrowGenericErrorUtils";

export default class MessageService {
  public async fetchMessages() {
    try {
      const messagesList = await Message.query();
      return messagesList;
    } catch (error) {
      throwGenericError("An error occurred while fetching messages", error);
    }
  }

  public async findMessageById(id: number) {
    try {
      const message = await Message.query().where("id", id).first();
      return message;
    } catch (error) {
      throwGenericError(
        "An error occurred while finding the message by id",
        error
      );
    }
  }

  public async findMessageByUserId(user_id: number) {
    try {
      const message = await Message.query().where("user_id", user_id).first();
      return message;
    } catch (error) {
      throwGenericError(
        "An error occurred while finding the message by user id",
        error
      );
    }
  }

  public async saveMessage({ request }) {
    try {
      const { user_id, message, url_id } = request.all();
      await Message.updateOrCreate(
        { user_id, message, url_id },
        {
          user_id,
          message,
          url_id,
        }
      );
      return { message: "Successfully message saving!" };
    } catch (error) {
      throwGenericError("An error occurred while saving the message", error);
    }
  }

  public async deleteMessageById(id: number) {
    try {
      await Message.query().where("id", id).delete();
      return { message: "Successfully deleted!" };
    } catch (error) {
      throwGenericError("An error occurred while deleting the message", error);
    }
  }
}
