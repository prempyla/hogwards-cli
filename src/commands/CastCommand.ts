import { BaseCommand } from "../base/BaseCommand";
import { owlPost, HP_API_BASE } from "../utils/api";
import { label, value, divider, info } from "../utils/theme";
import chalk from "chalk";

interface HPSpell {
  id: string;
  name: string;
  description: string;
}

export class CastCommand extends BaseCommand {
  constructor() {
    super("cast", "Cast a spell and learn its secrets");
  }

  async execute(spellName: string): Promise<void> {
    if (!spellName) {
      this.printError("You must specify a spell! Try: hogwarts cast expelliarmus");
      return;
    }

    const spinner = this.createSpinner(`Waving wand and casting "${spellName}"...`);
    spinner.start();

    const spells = await owlPost<HPSpell[]>(`${HP_API_BASE}/spells`);

    if (!spells) {
      spinner.fail("The spell book is unreachable!");
      return;
    }

    const spell = spells.find(
      (s) => s.name.toLowerCase().includes(spellName.toLowerCase())
    );

    if (!spell) {
      spinner.fail(`No spell named "${spellName}" found in the Standard Book of Spells!`);
      return;
    }

    spinner.succeed(chalk.bold("Spell found in the Restricted Section!"));

    this.printHeader(`Spell: ${spell.name}`);
    console.log(label("Incantation") + value(spell.name));
    console.log(label("Effect") + value(spell.description || "This spell's effects remain a mystery..."));
    console.log(divider());
    console.log(info("Use this spell wisely, young wizard!\n"));
  }
}
