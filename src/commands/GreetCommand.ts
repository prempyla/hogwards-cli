import { BaseCommand } from "../base/BaseCommand";
import { divider, info } from "../utils/theme";
import chalk from "chalk";

interface Greeting {
  salutation: string;
  message: string;
  advice: string;
}

export class GreetCommand extends BaseCommand {
  constructor() {
    super("greet", "Receive a personal greeting from Dumbledore");
  }

  async execute(name: string): Promise<void> {
    if (!name) {
      this.printError("Even Dumbledore needs a name to greet! Try: hogwarts greet Harry");
      return;
    }

    const hour = new Date().getHours();
    const greeting = this.getGreeting(hour, name);

    this.printHeader("A Message from Dumbledore");
    console.log(chalk.bold(`\n  ${greeting.salutation}\n`));
    console.log(chalk.white.italic(`  "${greeting.message}"\n`));
    console.log(`  ${greeting.advice}`);
    console.log("\n" + divider());
    console.log(info("Remember: Help will always be given at Hogwarts to those who ask for it.\n"));
  }

  private getGreeting(hour: number, name: string): Greeting {
    if (hour >= 5 && hour < 12) {
      return {
        salutation: `Good morning, dear ${name}!`,
        message: `Ah, ${name}! What a splendid morning it is. The owls have been particularly active today, and the house-elves have prepared a magnificent breakfast. I trust you slept well.`,
        advice: "A new day at Hogwarts is a new chance for magic. Make it count!",
      };
    }

    if (hour >= 12 && hour < 17) {
      return {
        salutation: `Good afternoon, ${name}!`,
        message: `${name}, my dear friend! I hope your afternoon classes are treating you well. I myself have just enjoyed a rather delightful lemon sherbet — I do find they help with concentration.`,
        advice: "The afternoon sun shines upon those who seek knowledge. Keep exploring!",
      };
    }

    if (hour >= 17 && hour < 21) {
      return {
        salutation: `Good evening, ${name}!`,
        message: `Ah, ${name}! The castle is particularly beautiful at this hour, wouldn't you say? The torches have just been lit, and the Great Hall awaits with a feast.`,
        advice: "As the sun sets over the Black Lake, remember to rest and reflect.",
      };
    }

    return {
      salutation: `Burning the midnight oil, ${name}?`,
      message: `${name}, I must say I'm not surprised to find you awake at this hour. Some of the most powerful magic happens under the stars. However, I would advise against wandering the corridors — Mr. Filch and Mrs. Norris are particularly vigilant tonight.`,
      advice: "The stars are particularly bright tonight. But even wizards need their rest. Sweet dreams!",
    };
  }
}
