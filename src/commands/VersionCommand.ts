import { BaseCommand } from "../base/BaseCommand";
import { divider, info } from "../utils/theme";
import chalk from "chalk";

const VERSION = "1.0.0";
const EDITION = "Elder Wand Edition";

export class VersionCommand extends BaseCommand {
  constructor() {
    super("version", "Reveal the current Elder Wand Edition");
  }

  async execute(): Promise<void> {
    console.log("");
    console.log(divider());
    console.log("");
    console.log(chalk.bold(`  Hogwarts CLI — ${EDITION} v${VERSION}`));
    console.log("");
    console.log(chalk.gray.italic("  The wand chooses the wizard, Mr. Potter."));
    console.log(chalk.gray.italic("  And this CLI has chosen you."));
    console.log("");
    console.log(divider());
    console.log(info("Crafted with magic by wizards, for wizards.\n"));
  }
}
