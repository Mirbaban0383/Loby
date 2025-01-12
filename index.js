const express = require("express");
const app = express();
app.listen(() => console.log("Server Started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});

const { Client } = require('discord.js-selfbot-v13');
const client = new Client(); // All partials are loaded automatically
client.on('ready', async () => {
  console.log(`${client.user.username} is ready!                        Fatures: 
1- Streaming Added
2- Joined Voice Channel
3- Without Offline 24/7`);
})
const { joinVoiceChannel } = require('@discordjs/voice');
client.on('ready', () => {
  client.user.setActivity("QAIDDDD", { type: "STREAMING", url: "https://twitch.tv/NotNexusss" })
  setInterval(async () => {
    client.channels.fetch("ID VOICE")
      .then((channel) => {
        const VoiceConnection = joinVoiceChannel({
          channelId: channel.id,
          guildId: channel.guild.id,
          adapterCreator: channel.guild.voiceAdapterCreator
        });
      }).catch((error) => { return; });
  }, 1000)
});
client.login(process.env.token);