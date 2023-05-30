import chalk, { Chalk } from "chalk";

class LogFormatter {
  static setColor(text: string, color: keyof typeof Chalk): string {
    const chalkInstance: typeof Chalk = chalk as any;
    return (chalkInstance[color] as (text: string) => string)(text);
  }

  static setBold(text: string): string {
    return chalk.bold(text);
  }

  static formatLog(message: string, color: keyof typeof Chalk): string {
    const formattedMessage = this.setColor(message, color);
    return this.setBold(formattedMessage);
  }

  static createHyperlink(text: string, url: string): string {
    const hyperlink = `\u001B]8;;${url}\u0007${text}\u001B]8;;\u0007`;
    return hyperlink;
  }

  static formatLogWithHyperlink(message: string, color: keyof typeof Chalk, url: string): string {
    const formattedMessage = this.setColor(message, color);
    const hyperlink = this.createHyperlink(formattedMessage, url);
    return this.setBold(hyperlink);
  }
}

export default new LogFormatter()