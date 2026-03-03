import chalk from "chalk";

// House colors
export const gryffindor = chalk.red;
export const slytherin = chalk.green;
export const ravenclaw = chalk.blue;
export const hufflepuff = chalk.yellow;

// Text helpers
export const header = (text: string): string => chalk.bold(`\n${text}\n`);
export const label = (text: string): string => chalk.bold(`  ${text}:`);
export const value = (text: string): string => ` ${text}`;
export const error = (text: string): string => chalk.red.bold(`\n${text}\n`);
export const success = (text: string): string => chalk.green.bold(`\n${text}\n`);
export const info = (text: string): string => chalk.gray.italic(`  ${text}`);
export const divider = (): string =>
  chalk.gray("  ────────────────────────────────────────────────");

export function getHouseColor(house: string): chalk.Chalk {
  switch (house.toLowerCase()) {
    case "gryffindor": return chalk.red;
    case "slytherin": return chalk.green;
    case "ravenclaw": return chalk.blue;
    case "hufflepuff": return chalk.yellow;
    default: return chalk.white;
  }
}
