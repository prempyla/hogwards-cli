# Hogwarts CLI

A Harry Potter-themed command line tool built with Node.js and TypeScript. Execute enchanting commands that interact with Harry Potter data, GitHub profiles, and real-world APIs—all with magical wizard flair.

## Features

- 10 unique commands inspired by the Harry Potter universe
- Integration with multiple APIs (Harry Potter, GitHub, OpenWeatherMap)
- Themed responses with mystical formatting
- Built with TypeScript for type safety and better development experience

## Prerequisites

- Node.js 14+
- npm or yarn

## Installation

```bash
git clone <repo-url>
cd hogwards-cli
npm install
npm run build
```

To use the weather command, add your OpenWeatherMap API key to a `.env` file:
```
OPENWEATHER_API_KEY=your_key_here
```

## Usage

```bash
npm start -- <command>
```

Or install globally:
```bash
npm install -g .
hogwarts <command>
```

## Available Commands

- `cast <spell>` - Look up a spell
- `character <name>` - Look up a character
- `sort <name>` - Sorting Hat simulator
- `potion` - Random potion generator
- `quote` - Random Harry Potter quote
- `weather <city>` - Current weather conditions
- `github <username>` - GitHub user profile with wizard rank
- `patronus <name>` - Patronus generator
- `greet <name>` - Time-based greeting with wizard style
- `version` - Show version

### Examples

```bash
hogwarts cast stupefy
hogwarts character Harry Potter
hogwarts weather London
hogwarts github torvalds
```

## Architecture

The project follows a command-based architecture pattern:

- **BaseCommand** (`src/base/BaseCommand.ts`) - Abstract base class that all commands extend
- **Commands** (`src/commands/`) - Individual command implementations for each feature
- **Utilities** (`src/utils/`) - Shared helpers for API requests and themed output formatting

Each command inherits from BaseCommand and implements its own logic for handling user input and API interactions.

## External APIs

This project integrates with the following services:

- **Harry Potter API** - Character and spell data (no authentication required)
- **GitHub API** - User profile and repository information (no authentication required)
- **OpenWeatherMap API** - Real-time weather data (API key required)

## Project Structure

```
src/
  index.ts                 # Entry point
  base/
    BaseCommand.ts         # Abstract command base class
  commands/
    CastCommand.ts         # Spell lookup
    CharacterCommand.ts    # Character lookup
    SortCommand.ts         # Sorting Hat
    PotionCommand.ts       # Potion generation
    QuoteCommand.ts        # Random quotes
    WeatherCommand.ts      # Weather lookup
    GitHubCommand.ts       # GitHub profiles
    PatronusCommand.ts     # Patronus generator
    GreetCommand.ts        # Greetings
    VersionCommand.ts      # Version info
  utils/
    api.ts                 # API request helpers
    theme.ts               # Output formatting and colors
```

## Development

To contribute or modify the project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm start -- <command>`
5. Build with `npm run build`
6. Submit a pull request

## License

MIT

