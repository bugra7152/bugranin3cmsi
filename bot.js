const Discord = require("discord.js");
const util = require('util');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setStatus("dnd")
  client.user.setActivity("xxx")
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', () => {
  console.log('I am ready!');
});
    
client.login(process.env.BOT_TOKEN);
