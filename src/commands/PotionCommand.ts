import { BaseCommand } from "../base/BaseCommand";
import { label, value, divider, info } from "../utils/theme";
import chalk from "chalk";

interface Potion {
  name: string;
  effect: string;
  difficulty: string;
  ingredients: string;
  inventor: string;
}

const POTIONS: Potion[] = [
  {
    name: "Polyjuice Potion",
    effect: "Transforms the drinker into the physical form of another person",
    difficulty: "Advanced",
    ingredients: "Lacewing flies, leeches, powdered Bicorn horn, knotgrass, fluxweed, shredded Boomslang skin",
    inventor: "Unknown (ancient recipe)",
  },
  {
    name: "Felix Felicis (Liquid Luck)",
    effect: "Makes the drinker incredibly lucky for a period of time",
    difficulty: "Advanced — takes 6 months to brew",
    ingredients: "Ashwinder egg, squill bulb, murtlap tentacle, tincture of thyme, occamy eggshell",
    inventor: "Zygmunt Budge",
  },
  {
    name: "Amortentia",
    effect: "The most powerful love potion in existence",
    difficulty: "Advanced",
    ingredients: "Ashwinder eggs, rose thorns, peppermint, powdered moonstone",
    inventor: "Unknown",
  },
  {
    name: "Veritaserum",
    effect: "Forces the drinker to tell the truth",
    difficulty: "Advanced — takes a full lunar cycle to mature",
    ingredients: "Jobberknoll feathers, lacewing flies, valerian sprigs, mistletoe berries",
    inventor: "Unknown",
  },
  {
    name: "Draught of Living Death",
    effect: "Puts the drinker into a death-like slumber",
    difficulty: "Very Advanced",
    ingredients: "Powdered root of Asphodel, infusion of Wormwood, Valerian roots, Sopophorous Bean",
    inventor: "Leticia Somnolens",
  },
  {
    name: "Wolfsbane Potion",
    effect: "Allows werewolves to keep their human minds during transformation",
    difficulty: "Extremely Advanced",
    ingredients: "Wolfsbane (Aconite), silver, dittany, moonstone powder",
    inventor: "Damocles Belby",
  },
  {
    name: "Pepperup Potion",
    effect: "Cures the common cold instantly",
    difficulty: "Moderate",
    ingredients: "Bicorn horn, mandrake root, hot peppers",
    inventor: "Glover Hipworth",
  },
];

export class PotionCommand extends BaseCommand {
  constructor() {
    super("potion", "Brew a random potion from the potions cupboard");
  }

  async execute(): Promise<void> {
    const spinner = this.createSpinner("Rummaging through the Potions cupboard...");
    spinner.start();

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const randomIndex = Math.floor(Math.random() * POTIONS.length);
    const potion = POTIONS[randomIndex];

    spinner.succeed(chalk.bold("A potion has been brewed!"));

    this.printHeader(`Potion: ${potion.name}`);
    console.log(label("Name") + value(potion.name));
    console.log(label("Effect") + value(potion.effect));
    console.log(label("Difficulty") + value(potion.difficulty));
    console.log(label("Ingredients") + value(potion.ingredients));
    console.log(label("Invented by") + value(potion.inventor));
    console.log(divider());
    console.log(info('"I can teach you how to bottle fame, brew glory, even stopper death." — Snape\n'));
  }
}
