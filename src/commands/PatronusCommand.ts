import { BaseCommand } from "../base/BaseCommand";
import { label, value, divider, info } from "../utils/theme";
import chalk from "chalk";

const PATRONUS_LIST = [
  { animal: "Stag", description: "Noble and protective — a leader who watches over others.", famousWizard: "Harry Potter" },
  { animal: "Otter", description: "Playful and intelligent — curious about the world.", famousWizard: "Hermione Granger" },
  { animal: "Jack Russell Terrier", description: "Loyal and brave — always ready for adventure.", famousWizard: "Ron Weasley" },
  { animal: "Doe", description: "Gentle and devoted — driven by love above all.", famousWizard: "Severus Snape" },
  { animal: "Phoenix", description: "Reborn from ashes — resilient and eternal, a symbol of hope.", famousWizard: "Albus Dumbledore" },
  { animal: "Horse", description: "Free-spirited and strong — galloping across open fields.", famousWizard: "Ginny Weasley" },
  { animal: "Hare", description: "Swift and clever — always one step ahead of danger.", famousWizard: "Nymphadora Tonks" },
  { animal: "Wolf", description: "A pack leader — fierce protector of those they love.", famousWizard: "Remus Lupin" },
  { animal: "Swan", description: "Graceful and elegant — beauty combined with inner strength.", famousWizard: "Cho Chang" },
  { animal: "Lynx", description: "Silent and sharp — sees through deception with ease.", famousWizard: "Kingsley Shacklebolt" },
  { animal: "Cat", description: "Independent and mysterious — walks their own path.", famousWizard: "Minerva McGonagall" },
  { animal: "Fox", description: "Cunning and adaptable — thrives in any situation.", famousWizard: "Seamus Finnigan" },
  { animal: "Eagle", description: "Wise and visionary — sees the bigger picture.", famousWizard: "A Ravenclaw legend" },
  { animal: "Bear", description: "Mighty and gentle — a powerful protector with a warm heart.", famousWizard: "Rubeus Hagrid" },
  { animal: "Owl", description: "Wise and watchful — knows secrets others cannot fathom.", famousWizard: "A keeper of ancient wisdom" },
  { animal: "Dragon", description: "Extraordinarily rare — raw power and majesty!", famousWizard: "An exceptionally rare wizard" },
];

export class PatronusCommand extends BaseCommand {
  constructor() {
    super("patronus", "Discover your patronus animal");
  }

  async execute(name: string): Promise<void> {
    if (!name) {
      this.printError("The spell needs a name to work! Try: hogwarts patronus Harry");
      return;
    }

    const spinner = this.createSpinner(`"${name}" raises their wand... "EXPECTO PATRONUM!"`);
    spinner.start();

    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Hash the name to deterministically pick a patronus
    const hash = name.toLowerCase().split("").reduce((sum, char, i) => sum + char.charCodeAt(0) * (i + 1), 0);
    const patronus = PATRONUS_LIST[hash % PATRONUS_LIST.length];

    spinner.succeed(chalk.bold("A silver light bursts from the wand tip!"));

    console.log(
      chalk.cyan(`\n  A shimmering, silver ${patronus.animal.toLowerCase()} erupts from the wand tip,`)
    );
    console.log(chalk.cyan(`  galloping through the air, scattering the darkness...\n`));

    this.printHeader(`${name}'s Patronus`);
    console.log(label("Patronus Form") + value(patronus.animal));
    console.log(label("Meaning") + value(patronus.description));
    console.log(label("Famous Match") + value(patronus.famousWizard));
    console.log(divider());
    console.log(info(`Your patronus is a reflection of your innermost self, ${name}.\n`));
  }
}
