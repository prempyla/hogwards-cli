import { BaseCommand } from "../base/BaseCommand";
import { owlPost, GITHUB_API_BASE } from "../utils/api";
import { label, value, divider, info } from "../utils/theme";
import chalk from "chalk";

interface GitHubUser {
  login: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  html_url: string;
  location: string;
  company: string;
}

const WIZARD_RANKS = [
  { minRepos: 0, rank: "First-Year Student", desc: "Just arrived at Hogwarts! Keep learning." },
  { minRepos: 5, rank: "Second-Year Student", desc: "You've learned the basics — the journey continues!" },
  { minRepos: 10, rank: "O.W.L. Student", desc: "Preparing for your Ordinary Wizarding Levels!" },
  { minRepos: 20, rank: "N.E.W.T. Student", desc: "Advanced magic! Nastily Exhausting Wizarding Tests level." },
  { minRepos: 30, rank: "Hogwarts Graduate", desc: "You've completed your magical education!" },
  { minRepos: 50, rank: "Ministry Official", desc: "Working at the Ministry of Magic — impressive!" },
  { minRepos: 75, rank: "Auror", desc: "A Dark Wizard catcher! Elite magical talent." },
  { minRepos: 100, rank: "Order of Merlin", desc: "One of the most decorated wizards in history!" },
  { minRepos: 150, rank: "Headmaster", desc: "Leading Hogwarts itself — Dumbledore would be proud!" },
  { minRepos: 200, rank: "Elder Wand Wielder", desc: "Master of the most powerful wand ever made!" },
];

export class GitHubCommand extends BaseCommand {
  constructor() {
    super("github", "Look up a GitHub wizard's Ministry profile");
  }

  async execute(username: string): Promise<void> {
    if (!username) {
      this.printError("Which wizard's Ministry file do you seek? Try: hogwarts github torvalds");
      return;
    }

    const spinner = this.createSpinner(`Consulting the Ministry records for "${username}"...`);
    spinner.start();

    const user = await owlPost<GitHubUser>(`${GITHUB_API_BASE}/users/${encodeURIComponent(username)}`);

    if (!user) {
      spinner.fail(`No Ministry record found for "${username}"! Perhaps they're a Muggle?`);
      return;
    }

    spinner.succeed(chalk.bold("Ministry personnel file located!"));

    // Find the highest matching rank
    let matchedRank = WIZARD_RANKS[0];
    for (const r of WIZARD_RANKS) {
      if (user.public_repos >= r.minRepos) matchedRank = r;
    }

    this.printHeader(`Ministry File: ${user.name || user.login}`);
    console.log(label("GitHub Name") + value(user.name || user.login));
    console.log(label("Username") + value(`@${user.login}`));
    if (user.bio) console.log(label("Bio") + value(user.bio));
    if (user.location) console.log(label("Location") + value(user.location));
    if (user.company) console.log(label("Company") + value(user.company));
    console.log(label("Public Repos") + value(String(user.public_repos)));
    console.log(label("Followers") + value(String(user.followers)));
    console.log(label("Following") + value(String(user.following)));

    console.log("\n" + divider());
    console.log(chalk.bold(`\n  Wizard Rank: ${matchedRank.rank}\n`));
    console.log(chalk.italic.gray(`  ${matchedRank.desc}`));
    console.log(divider());
    console.log(label("Profile URL") + value(user.html_url));
    console.log(info(`\n  "${user.name || user.login}" has been officially classified by the Ministry!\n`));
  }
}
