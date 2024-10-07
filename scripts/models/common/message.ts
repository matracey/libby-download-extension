import { Task } from "./task";

export class Message {
  cmd: string;
  status: Task;

  constructor(cmd: string, status: Task) {
    this.cmd = cmd;
    this.status = status;
  }
}