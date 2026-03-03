import ora from "ora";
import { header, divider, error } from "../utils/theme";

// Base class that all commands extend
export abstract class BaseCommand {
  protected name: string;
  protected description: string;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }

  // Every command must implement this
  abstract execute(...args: any[]): Promise<void>;

  protected createSpinner(message: string) {
    return ora({ text: message, spinner: "dots" });
  }

  protected printHeader(title: string): void {
    console.log(header(title));
    console.log(divider());
  }

  protected printError(message: string): void {
    console.log(error(message));
  }
}
