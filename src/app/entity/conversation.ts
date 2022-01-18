import {User} from "./User";
import {Message} from "./Message";

export class Conversation{
 id: number;
 name: string;
 lMessages: Array<Message>;
 lUsers: Array<User>;

 constructor(id: number, name: string, lMessages: Array<Message>, lUsers: Array<User>) {
  this.id = id;
  this.name = name;
  this.lMessages = lMessages;
  this.lUsers = lUsers;
 }
}
