import { MessageType } from './chatMessageType';

export class ChatMessage {

    public constructor(public message: string,
                       public type: MessageType,
                       public score?: number,
                       public kbQuestion?: string) { }
}
