#!/usr/bin/env node

import dotenv from "dotenv";
dotenv.config();

import { Command } from "commander";
import figlet from "figlet";
import chalk from "chalk";

import { CastCommand } from "./commands/CastCommand";
import { CharacterCommand } from "./commands/CharacterCommand";
import { SortCommand } from "./commands/SortCommand";
import { PotionCommand } from "./commands/PotionCommand";
import { QuoteCommand } from "./commands/QuoteCommand";
import { WeatherCommand } from "./commands/WeatherCommand";
import { GitHubCommand } from "./commands/GitHubCommand";
import { PatronusCommand } from "./commands/PatronusCommand";
import { GreetCommand } from "./commands/GreetCommand";
import { VersionCommand } from "./commands/VersionCommand";

const castCmd = new CastCommand();
const characterCmd = new CharacterCommand();
const sortCmd = new SortCommand();
const potionCmd = new PotionCommand();
const quoteCmd = new QuoteCommand();
const weatherCmd = new WeatherCommand();
const githubCmd = new GitHubCommand();
const patronusCmd = new PatronusCommand();
const greetCmd = new GreetCommand();
const versionCmd = new VersionCommand();

function showBanner(): void {
  const banner = figlet.textSync("Hogwarts", {
    font: "Standard",
    horizontalLayout: "default",
    verticalLayout: "default",
  });

  console.log("");
  console.log(chalk.bold(banner));
  console.log(chalk.bold("  The Wizarding World CLI — Elder Wand Edition v1.0.0"));
  console.log(chalk.gray.italic('  "It does not do to dwell on dreams and forget to live." — Dumbledore'));
  console.log("");
}

const program = new Command();

program
  .name("hogwarts")
  .description("A magical Harry Potter themed CLI tool")
  .version("1.0.0", "-v, --version", "Show the Elder Wand Edition version")
  .addHelpText("beforeAll", () => { showBanner(); return ""; });

program
  .command("cast <spell>")
  .description("Cast a spell and learn its magical secrets")
  .action(async (spell: string) => { await castCmd.execute(spell); });

program
  .command("character <name>")
  .description("Look up a witch or wizard on the Marauder's Map")
  .action(async (name: string) => { await characterCmd.execute(name); });

program
  .command("sort <name>")
  .description("Let the Sorting Hat assign you a Hogwarts house")
  .action(async (name: string) => { await sortCmd.execute(name); });

program
  .command("potion")
  .description("Brew a random potion from the Potions cupboard")
  .action(async () => { await potionCmd.execute(); });

program
  .command("quote")
  .description("Receive wisdom from the Wizarding World")
  .action(async () => { await quoteCmd.execute(); });

program
  .command("weather <city>")
  .description("See the weather through the Great Hall's enchanted ceiling")
  .action(async (city: string) => { await weatherCmd.execute(city); });

program
  .command("github <username>")
  .description("Look up a GitHub wizard's Ministry of Magic profile")
  .action(async (username: string) => { await githubCmd.execute(username); });

program
  .command("patronus <name>")
  .description("Discover your patronus animal — Expecto Patronum!")
  .action(async (name: string) => { await patronusCmd.execute(name); });

program
  .command("greet <name>")
  .description("Receive a personal, time-aware greeting from Dumbledore")
  .action(async (name: string) => { await greetCmd.execute(name); });

program
  .command("edition")
  .description("Reveal the current Elder Wand Edition")
  .action(async () => { await versionCmd.execute(); });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
