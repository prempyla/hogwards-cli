import { BaseCommand } from "../base/BaseCommand";
import { owlPost, WEATHER_API_BASE } from "../utils/api";
import { label, value, divider, info, error } from "../utils/theme";
import chalk from "chalk";

interface WeatherResponse {
  name: string;
  sys: { country: string };
  main: { temp: number; feels_like: number; humidity: number };
  weather: Array<{ main: string; description: string }>;
  wind: { speed: number };
}

export class WeatherCommand extends BaseCommand {
  constructor() {
    super("weather", "See the weather through the Great Hall's enchanted ceiling");
  }

  async execute(city: string): Promise<void> {
    if (!city) {
      this.printError("Which city's sky should the Great Hall reflect? Try: hogwarts weather London");
      return;
    }

    const apiKey = process.env.OPENWEATHER_API_KEY;
    if (!apiKey || apiKey === "your_openweathermap_api_key_here") {
      console.log(error("The enchanted ceiling needs an OpenWeatherMap API key to function!"));
      console.log(info("Add your key to the .env file: OPENWEATHER_API_KEY=your_key_here"));
      console.log(info("Get a free key at: https://openweathermap.org/api\n"));
      return;
    }

    const spinner = this.createSpinner(`The Great Hall ceiling is revealing the skies of ${city}...`);
    spinner.start();

    const url = `${WEATHER_API_BASE}/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
    const weather = await owlPost<WeatherResponse>(url);

    if (!weather) {
      spinner.fail("The enchanted ceiling is cloudy — couldn't fetch weather!");
      return;
    }

    spinner.succeed(chalk.bold("The enchanted ceiling has revealed the sky!"));

    const condition = weather.weather[0]?.main || "Unknown";
    const magicalDesc = this.getMagicalDescription(condition, weather.main.temp);

    this.printHeader(`The Enchanted Ceiling — ${weather.name}, ${weather.sys.country}`);
    console.log(chalk.italic.cyan(`\n  ${magicalDesc}\n`));
    console.log(label("Location") + value(`${weather.name}, ${weather.sys.country}`));
    console.log(label("Condition") + value(weather.weather[0]?.description || "Unknown"));
    console.log(label("Temperature") + value(`${weather.main.temp}°C`));
    console.log(label("Feels Like") + value(`${weather.main.feels_like}°C`));
    console.log(label("Humidity") + value(`${weather.main.humidity}%`));
    console.log(label("Wind Speed") + value(`${weather.wind.speed} m/s`));
    console.log(divider());
    console.log(info('"The ceiling was bewitched to look like the sky outside." — Hermione\n'));
  }

  private getMagicalDescription(condition: string, temp: number): string {
    const descriptions: Record<string, string> = {
      Clear: "The sky is as clear as Felix Felicis — a perfect day for Quidditch practice!",
      Clouds: "Storm clouds gather like Dementors over the Forbidden Forest...",
      Rain: "It's raining harder than the night Hagrid brought Harry to Privet Drive!",
      Drizzle: "A light drizzle, as if someone cast Aguamenti a bit too enthusiastically!",
      Thunderstorm: "Thunder rumbles like a Hungarian Horntail! Best stay indoors.",
      Snow: "Snow blankets the grounds like Dumbledore's beard — Hogwarts looks magnificent!",
      Mist: "A thick mist has descended, like the entrance to Platform 9 and 3/4.",
      Fog: "Fog as thick as a Concealment Charm — watch your step!",
    };

    let desc = descriptions[condition] || `The magical atmosphere is ${condition.toLowerCase()} — how peculiar!`;

    if (temp < 0) desc += "\nColder than a Dementor's kiss! Wear your enchanted scarf.";
    else if (temp > 35) desc += "\nHotter than dragon fire! Even Norbert would find this a bit much.";

    return desc;
  }
}
