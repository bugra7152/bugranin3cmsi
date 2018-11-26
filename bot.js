const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log(`Bot ${client.user.username} adı ile giriş yaptı!`);
});

client.on('message', message => {
  if (message.channel.name == undefined) {
    var kanal = client.channels.get("516692159664226305");
    kanal.send(`**Yazan**: ${message.author} \n**Yazdığı Mesaj**: ${message.content}`);
  }
});

client.login(process.env.BOT_TOKEN);
