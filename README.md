# ⚡ Hogwarts CLI — The Wizarding World Command Line Tool

```
  _   _                                _
 | | | | ___   __ ___      ____ _ _ __| |_ ___
 | |_| |/ _ \ / _` \ \ /\ / / _` | '__| __/ __|
 |  _  | (_) | (_| |\ V  V / (_| | |  | |_\__ \
 |_| |_|\___/ \__, | \_/\_/ \__,_|_|   \__|___/
              |___/
```

> *"It does not do to dwell on dreams and forget to live."* — Albus Dumbledore

A magical **Harry Potter themed CLI** built with **Node.js** and **TypeScript**. Every command, output, and error message is written in Harry Potter style — spells, wizards, Hogwarts houses, potions, and more! 🪄

---

## 📦 Tech Stack

| Tool | Purpose |
|------|---------|
| **TypeScript** | Type-safe, clean code |
| **Commander.js** | CLI framework for commands |
| **Chalk** | Beautiful colored terminal output |
| **Figlet** | ASCII art banner |
| **Ora** | Loading spinners |
| **Axios** | HTTP requests to APIs |
| **dotenv** | Environment variable management |

---

## 🚀 Setup & Installation

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd hogwards-cli
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

```bash
cp .env.example .env
```

Then edit `.env` and add your **OpenWeatherMap API** key (free tier):
- Get your key at: [https://openweathermap.org/api](https://openweathermap.org/api)

```env
OPENWEATHER_API_KEY=your_actual_api_key_here
```

### 4. Build the Project

```bash
npm run build
```

### 5. Run Locally

```bash
npm start -- <command>
# or
node dist/index.js <command>
```

### 6. Install Globally (Optional)

```bash
npm install -g .
```

Now you can use it as:

```bash
hogwarts <command>
```

---

## 🪄 Commands

### 1. `hogwarts cast <spell>` — Cast a Spell

Fetch spell info from the Harry Potter API.

```bash
hogwarts cast expelliarmus
```

**Example Output:**
```
✔ Spell found in the Restricted Section! 📖

✨ Spell: Expelliarmus

  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ⚡ Incantation: Expelliarmus
  ⚡ Effect: Forces an opponent to drop whatever's in their possession
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Use this spell wisely, young wizard! ⚡
```

---

### 2. `hogwarts character <name>` — Look Up a Character

Fetch character info from the Harry Potter API.

```bash
hogwarts character harry
```

**Example Output:**
```
✔ Witch/Wizard located on the Map! 🗺️

✨ Harry Potter

  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ⚡ Name: Harry Potter
  ⚡ Also Known As: The Boy Who Lived, The Chosen One
  ⚡ Species: human
  ⚡ House: 🦁 Gryffindor
  ⚡ Wizard: Yes 🪄
  ⚡ Wand: holly wood, phoenix tail feather core, 11" long
  ⚡ Patronus: 🦌 stag
  ⚡ Portrayed by: 🎬 Daniel Radcliffe
  ⚡ Status: ✅ Alive
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Mischief managed! 🗺️
```

---

### 3. `hogwarts sort <name>` — Sorting Hat Ceremony

Get sorted into a Hogwarts house! Uses a deterministic hash — the same name always gets the same house.

```bash
hogwarts sort Rithwik
```

**Example Output:**
```
✔ The Sorting Hat has decided! 🎩

  🎩 "Hmm, difficult. Very difficult..."

  🎩 "Better be... RAVENCLAW!" 🦅

  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ⚡ Sorted Into: 🦅 Ravenclaw
  ⚡ Founder: Rowena Ravenclaw
  ⚡ House Traits: Intelligence, Wisdom, Creativity, and Wit
  ⚡ House Animal: Eagle
  ⚡ House Ghost: The Grey Lady
  ⚡ Element: Air
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 4. `hogwarts potion` — Random Potion

Discover a random potion from Professor Snape's collection!

```bash
hogwarts potion
```

**Example Output:**
```
✔ A potion has been brewed! 🧪

✨ Potion: Felix Felicis (Liquid Luck)

  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ⚡ Name: Felix Felicis (Liquid Luck)
  ⚡ Effect: Makes the drinker incredibly lucky
  ⚡ Difficulty: Advanced — takes 6 months to brew
  ⚡ Ingredients: Ashwinder egg, squill bulb, murtlap tentacle...
  ⚡ Invented by: Zygmunt Budge
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 5. `hogwarts quote` — Wizarding World Wisdom

Get a random iconic Harry Potter quote.

```bash
hogwarts quote
```

**Example Output:**
```
✨ Wisdom from the Wizarding World

  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  "After all this time? Always."

  — Severus Snape
    The Deathly Hallows

  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 6. `hogwarts weather <city>` — The Enchanted Ceiling

See real weather described as the enchanted ceiling of the Great Hall! Requires an OpenWeatherMap API key in `.env`.

```bash
hogwarts weather London
```

**Example Output:**
```
✔ The enchanted ceiling has revealed the sky! 🏰

✨ The Enchanted Ceiling — London, GB

  ☀️ The sky is as clear as Felix Felicis — a perfect day for Quidditch!

  ⚡ Location: London, GB
  ⚡ Condition: clear sky
  ⚡ Temperature: 15°C
  ⚡ Humidity: 62%
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 7. `hogwarts github <username>` — Ministry of Magic Profile

Look up a GitHub profile and get a wizard rank based on repo count!

```bash
hogwarts github torvalds
```

**Example Output:**
```
✔ Ministry personnel file located! 📋

✨ Ministry File: Linus Torvalds

  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ⚡ GitHub Name: Linus Torvalds
  ⚡ Username: @torvalds
  ⚡ Location: Portland, OR
  ⚡ Public Repos: 📦 11
  ⚡ Followers: 👥 288340

  🦉 Wizard Rank: O.W.L. Student
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 8. `hogwarts patronus <name>` — Expecto Patronum!

Discover your patronus animal. The same name always produces the same patronus.

```bash
hogwarts patronus Rithwik
```

**Example Output:**
```
✔ A silver light bursts from the wand tip! ✨

  ✨ A shimmering, silver jack russell terrier erupts from the wand tip,
  galloping through the air, scattering the darkness...

  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ⚡ Patronus Form: 🐕 Jack Russell Terrier
  ⚡ Meaning: Loyal and brave — always ready for adventure.
  ⚡ Famous Match: Ron Weasley
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 9. `hogwarts greet <name>` — Dumbledore's Greeting

A time-aware greeting in Dumbledore's tone. Changes based on morning, afternoon, evening, or night!

```bash
hogwarts greet Rithwik
```

**Example Output (Night):**
```
✨ A Message from Dumbledore

  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  🧙 Burning the midnight oil, Rithwik?

  "Rithwik, I must say I'm not surprised to find you awake
  at this hour. Some of the most powerful magic happens under
  the stars..."

  🌙 The stars are particularly bright tonight. Sweet dreams! 💫

  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 10. `hogwarts edition` — Version

Show the version styled as the Elder Wand Edition.

```bash
hogwarts edition
```

**Example Output:**
```
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  🪄 Hogwarts CLI — Elder Wand Edition v1.0.0

  The wand chooses the wizard, Mr. Potter.
  And this CLI has chosen you.

  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 🏗️ Project Structure

```
hogwards-cli/
├── src/
│   ├── index.ts                  # 🏰 Main entry point — CLI setup & banner
│   ├── base/
│   │   └── BaseCommand.ts        # 🛡️ Abstract base class for all commands
│   ├── commands/
│   │   ├── CastCommand.ts        # ⚡ Fetch spell info
│   │   ├── CharacterCommand.ts   # 🧙 Fetch character info
│   │   ├── SortCommand.ts        # 🎩 Sorting Hat ceremony
│   │   ├── PotionCommand.ts      # 🧪 Random potion
│   │   ├── QuoteCommand.ts       # 📜 Random HP quote
│   │   ├── WeatherCommand.ts     # 🌦️ Weather as the Great Hall ceiling
│   │   ├── GitHubCommand.ts      # 🐙 GitHub profile + wizard rank
│   │   ├── PatronusCommand.ts    # 🦌 Patronus generator
│   │   ├── GreetCommand.ts       # 🌅 Dumbledore's greeting
│   │   └── VersionCommand.ts     # 🪄 Elder Wand Edition version
│   └── utils/
│       ├── api.ts                # 🦉 Axios wrapper with themed errors
│       └── theme.ts              # 🎨 House colors & styled text helpers
├── dist/                         # 📦 Compiled JavaScript output
├── .env.example                  # 🔑 Example environment variables
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md                     # 📖 You are here!
```

---

## 🎨 Architecture

The project uses a simple **OOP pattern**:

1. **`BaseCommand`** — Abstract class that all commands extend. Provides shared utilities:
   - `createSpinner()` — Loading spinners (ora)
   - `printHeader()` — Styled section headers
   - `printError()` — Themed error messages
   - `execute()` — Abstract method each command must implement

2. **Command Classes** — Each command extends `BaseCommand`:
   ```typescript
   export class CastCommand extends BaseCommand {
     constructor() {
       super("cast", "Cast a spell and learn its secrets");
     }
     async execute(spellName: string): Promise<void> { /* ... */ }
   }
   ```

3. **Utilities**:
   - `theme.ts` — House colors, styled text, dividers
   - `api.ts` — Axios wrapper with owl-themed error handling

---

## 🌐 APIs Used

| API | Used For | Key Required? |
|-----|----------|---------------|
| [HP API](https://hp-api.onrender.com) | Spells & Characters | ❌ No |
| [GitHub API](https://api.github.com) | User profiles | ❌ No |
| [OpenWeatherMap](https://openweathermap.org/api) | Weather data | ✅ Yes (free tier) |

---

## 🛡️ Error Handling

All errors are themed to fit the Wizarding World:

- **Network errors**: *"The owls could not deliver your message — network error! 🦉"*
- **Not found**: *"No witch or wizard named X found on the Map! Perhaps they're using an Invisibility Cloak? 🧥"*
- **API errors**: *"The owls returned with bad news! The Ministry of Magic may have restricted this information."*
- **Missing API key**: *"The enchanted ceiling needs an OpenWeatherMap API key to function!"*

---

## 📜 License

MIT — Use this magic freely, share it generously!

---

> *"Words are, in my not-so-humble opinion, our most inexhaustible source of magic."*
> — Albus Dumbledore

⚡ **Happy casting, wizard!** 🧙‍♂️
