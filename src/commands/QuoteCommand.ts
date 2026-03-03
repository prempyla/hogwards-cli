import { BaseCommand } from "../base/BaseCommand";
import { divider, info } from "../utils/theme";
import chalk from "chalk";

const QUOTES = [
  { text: "It does not do to dwell on dreams and forget to live.", speaker: "Albus Dumbledore", book: "The Philosopher's Stone" },
  { text: "It is our choices, Harry, that show what we truly are, far more than our abilities.", speaker: "Albus Dumbledore", book: "The Chamber of Secrets" },
  { text: "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.", speaker: "Albus Dumbledore", book: "The Prisoner of Azkaban" },
  { text: "After all this time? Always.", speaker: "Severus Snape", book: "The Deathly Hallows" },
  { text: "Words are, in my not-so-humble opinion, our most inexhaustible source of magic.", speaker: "Albus Dumbledore", book: "The Deathly Hallows" },
  { text: "I solemnly swear that I am up to no good.", speaker: "Harry Potter", book: "The Prisoner of Azkaban" },
  { text: "Fear of a name increases fear of the thing itself.", speaker: "Albus Dumbledore", book: "The Philosopher's Stone" },
  { text: "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.", speaker: "Albus Dumbledore", book: "The Philosopher's Stone" },
  { text: "Dobby is free!", speaker: "Dobby", book: "The Chamber of Secrets" },
  { text: "When in doubt, go to the library.", speaker: "Ron Weasley", book: "The Chamber of Secrets" },
  { text: "Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?", speaker: "Albus Dumbledore", book: "The Deathly Hallows" },
  { text: "We've all got both light and dark inside us. What matters is the part we choose to act on.", speaker: "Sirius Black", book: "The Order of the Phoenix" },
  { text: "You're a wizard, Harry.", speaker: "Rubeus Hagrid", book: "The Philosopher's Stone" },
  { text: "The ones who love us never really leave us.", speaker: "Sirius Black", book: "The Prisoner of Azkaban" },
  { text: "Turn to page 394.", speaker: "Severus Snape", book: "The Prisoner of Azkaban" },
];

export class QuoteCommand extends BaseCommand {
  constructor() {
    super("quote", "Receive wisdom from the Wizarding World");
  }

  async execute(): Promise<void> {
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    const quote = QUOTES[randomIndex];

    this.printHeader("Wisdom from the Wizarding World");
    console.log(chalk.italic.white(`\n  "${quote.text}"\n`));
    console.log(chalk.bold(`  — ${quote.speaker}`));
    console.log(chalk.gray.italic(`    ${quote.book}`));
    console.log("\n" + divider());
    console.log(info("The magic lives on in these words...\n"));
  }
}
