import { BaseCommand } from "../base/BaseCommand";
import { owlPost, HP_API_BASE } from "../utils/api";
import { label, value, divider, info, getHouseColor } from "../utils/theme";
import chalk from "chalk";

interface HPCharacter {
  name: string;
  alternate_names: string[];
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: number;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: { wood: string; core: string; length: number };
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alive: boolean;
  image: string;
}

export class CharacterCommand extends BaseCommand {
  constructor() {
    super("character", "Look up a witch or wizard's profile");
  }

  async execute(characterName: string): Promise<void> {
    if (!characterName) {
      this.printError("You must specify a character! Try: hogwarts character harry");
      return;
    }

    const spinner = this.createSpinner(`Consulting the Marauder's Map for "${characterName}"...`);
    spinner.start();

    const characters = await owlPost<HPCharacter[]>(`${HP_API_BASE}/characters`);

    if (!characters) {
      spinner.fail("The Marauder's Map is blank!");
      return;
    }

    const character = characters.find(
      (c) =>
        c.name.toLowerCase().includes(characterName.toLowerCase()) ||
        c.alternate_names.some((alt) => alt.toLowerCase().includes(characterName.toLowerCase()))
    );

    if (!character) {
      spinner.fail(`No witch or wizard named "${characterName}" found on the Map!`);
      return;
    }

    spinner.succeed(chalk.bold("Witch/Wizard located on the Map!"));

    const houseColor = getHouseColor(character.house);

    this.printHeader(character.name);
    console.log(label("Name") + value(character.name));

    if (character.alternate_names.length > 0) {
      console.log(label("Also Known As") + value(character.alternate_names.join(", ")));
    }

    console.log(label("Species") + value(character.species || "Unknown"));
    console.log(label("Gender") + value(character.gender || "Unknown"));

    if (character.house) {
      console.log(label("House") + " " + houseColor.bold(character.house));
    }

    if (character.dateOfBirth) {
      console.log(label("Date of Birth") + value(character.dateOfBirth));
    }

    console.log(label("Wizard") + value(character.wizard ? "Yes" : "No (Muggle)"));

    if (character.ancestry) {
      console.log(label("Ancestry") + value(character.ancestry));
    }

    if (character.wand && character.wand.wood) {
      console.log(label("Wand") + value(`${character.wand.wood} wood, ${character.wand.core} core, ${character.wand.length}" long`));
    }

    if (character.patronus) {
      console.log(label("Patronus") + value(character.patronus));
    }

    if (character.actor) {
      console.log(label("Portrayed by") + value(character.actor));
    }

    console.log(label("Status") + value(character.alive ? "Alive" : "Deceased"));
    console.log(divider());
    console.log(info("Mischief managed!\n"));
  }
}
