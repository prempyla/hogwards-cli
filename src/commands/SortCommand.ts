import { BaseCommand } from "../base/BaseCommand";
import { label, value, divider, info, getHouseColor } from "../utils/theme";
import chalk from "chalk";

const HOUSES = [
  {
    name: "Gryffindor",
    founder: "Godric Gryffindor",
    traits: "Bravery, Courage, Determination, and Nerve",
    animal: "Lion",
    ghost: "Nearly Headless Nick",
    element: "Fire",
  },
  {
    name: "Slytherin",
    founder: "Salazar Slytherin",
    traits: "Ambition, Cunning, Resourcefulness, and Leadership",
    animal: "Serpent",
    ghost: "The Bloody Baron",
    element: "Water",
  },
  {
    name: "Ravenclaw",
    founder: "Rowena Ravenclaw",
    traits: "Intelligence, Wisdom, Creativity, and Wit",
    animal: "Eagle",
    ghost: "The Grey Lady",
    element: "Air",
  },
  {
    name: "Hufflepuff",
    founder: "Helga Hufflepuff",
    traits: "Hard Work, Loyalty, Patience, and Fair Play",
    animal: "Badger",
    ghost: "The Fat Friar",
    element: "Earth",
  },
];

export class SortCommand extends BaseCommand {
  constructor() {
    super("sort", "Let the Sorting Hat assign you a house");
  }

  async execute(name: string): Promise<void> {
    if (!name) {
      this.printError("The Sorting Hat needs a name! Try: hogwarts sort Harry");
      return;
    }

    const spinner = this.createSpinner(`The Sorting Hat is examining the mind of "${name}"...`);
    spinner.start();

    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Simple hash: sum character codes, mod by 4
    const hash = name.toLowerCase().split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const houseIndex = hash % 4;
    const house = HOUSES[houseIndex];
    const houseColor = getHouseColor(house.name);

    spinner.succeed(chalk.bold("The Sorting Hat has decided!"));

    console.log(
      chalk.italic('\n  "Hmm, difficult. Very difficult. Plenty of courage, I see.\n   Not a bad mind either. There\'s talent, oh my goodness, yes..."\n')
    );

    console.log(houseColor.bold(`  "Better be... ${house.name.toUpperCase()}!"\n`));

    console.log(divider());
    console.log(label("Sorted Into") + value(house.name));
    console.log(label("Founder") + value(house.founder));
    console.log(label("House Traits") + value(house.traits));
    console.log(label("House Animal") + value(house.animal));
    console.log(label("House Ghost") + value(house.ghost));
    console.log(label("Element") + value(house.element));
    console.log(divider());
    console.log(info(`Welcome to ${house.name}, ${name}! May your journey be magical!\n`));
  }
}
