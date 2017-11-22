import { MessageType } from './chatMessageType';

export class ChatMessage {

    public type: MessageType;
    public message: string;

    public constructor(message: string, type: MessageType) {
        this.message = message;
        this.type = type;
    }
}
