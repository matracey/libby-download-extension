export class Command {
  cmd: string;
  args: object;

  constructor(cmd: string, args: object) {
    this.cmd = cmd;
    this.args = args;
  }
}