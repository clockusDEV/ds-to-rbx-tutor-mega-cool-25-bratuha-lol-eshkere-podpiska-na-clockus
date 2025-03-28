import "dotenv/config"
import { ApplicationCommandOptionType, REST, Routes } from "discord.js"

const commands = [
    {
        name: "send",
        description: "Send a message to Roblox",
        options: [
            {
                name: "message",
                description: "The message to send to Roblox",
                type: ApplicationCommandOptionType.String,
                required: true
            }
        ]
    }
]

const rest = new REST({ version: "10" })
.setToken(process.env.BOT_TOKEN!)

export async function registerBanCommand(): Promise<void> {
    try {
        console.log("Регистрация команд");

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID!, process.env.GUILD_ID!),
            { body: commands }
        );

        console.log("Команды зарегистрированы");
    } catch (error) {
        console.error("Ошибка при регистрации команд:", error);
    }
}
