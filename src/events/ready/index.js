import { Events } from "discord.js"

export const event = {
    name: Events.ClientReady,
    once:true,
}

export const action = (readyClient) => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
}