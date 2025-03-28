import { Client, Events, GatewayIntentBits } from "discord.js";
import "dotenv/config"
import { registerBanCommand } from "./sendToRoblox";

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
})

client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
	registerBanCommand()
});

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return 

    if (interaction.commandName === "send") {
        const message = interaction.options.getString("message", true)
        
        const key = 'taJ2QzthBU+Hd6y1X/Q6sQcJmhs9Y9Pybab04akYqM1p7r/5ZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXRwWkNJNkluTnBaeTB5TURJeExUQTNMVEV6VkRFNE9qVXhPalE1V2lJc0luUjVjQ0k2SWtwWFZDSjkuZXlKaVlYTmxRWEJwUzJWNUlqb2lkR0ZLTWxGNmRHaENWU3RJWkRaNU1WZ3ZVVFp6VVdOS2JXaHpPVms1VUhsaVlXSXdOR0ZyV1hGTk1YQTNjaTgxSWl3aWIzZHVaWEpKWkNJNklqTTBPRGMxTmpNMk9DSXNJbUYxWkNJNklsSnZZbXh2ZUVsdWRHVnlibUZzSWl3aWFYTnpJam9pUTJ4dmRXUkJkWFJvWlc1MGFXTmhkR2x2YmxObGNuWnBZMlVpTENKbGVIQWlPakUzTkRFME16Z3hNRElzSW1saGRDSTZNVGMwTVRRek5EVXdNaXdpYm1KbUlqb3hOelF4TkRNME5UQXlmUS5XMVl0UVlOV1pMR0hsQVltNF94M1B6Z0s1cE40czNuSW5Ra29JU2YzR2NpR0NJTkZ4WmpkVklWNkVtU0U5VDR1TU5Ldnk4VTBRX1o0M3k5UGEwOFNkLXFXS01sMF8zcWp4ZlZsQ244eXdYbGNad3B0M3NMbThNVUtzZnFocGcyNVRoOHFqYnVrRVMzYTJKVkJMYmpzUG1sb014a20zUTNNc3ZhTzJMaG1yYmx5b2dqcVJlSE9qeGVMV0xDankxM0pqdEpPek9odzBkRWV6U2JSYmN3RmNuZnVuOEJfOWxMNjZqcTEyU3QzZUNYRFZualZzVmd3NHdybXI4eUFUMURfRnFHQjFlTUloQ2hmVEZRRXBOQnFLbk1IUjg5RVVVcy1pUzJvdDliWWVjSkluZHlodk40VWk2ZGxHbmdBRC1vZWZucDhwTG1VLUd4bWVKZktfYnJhcEE='

        const universeId = 7346527271;
        const link = `https://apis.roblox.com/cloud/v2/universes/${universeId}:publishMessage`;
    
        const response = await fetch(link, {
            method: 'POST',
            headers: {
                'x-api-key': key,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "topic": "SendMessage",
                "message": message
            })
        })
    
        const result = await response.json();
    }
})

client.on("messageCreate", async (message) => {
    message.channel
})

client.login(process.env.BOT_TOKEN)