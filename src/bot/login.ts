import { Client, Events, GatewayIntentBits } from "discord.js";
import "dotenv/config"
import { registerBanCommand } from "./sendToRoblox";

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
})

client.once(Events.ClientReady, readyClient => {
    console.log(`Сработало! Залогинился как ${readyClient.user.tag}`);
	registerBanCommand()
});

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return
})

client.login(process.env.BOT_TOKEN)