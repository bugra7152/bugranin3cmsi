const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

client.on('ready', () => {
console.log(`Bot ${client.user.username} adı ile giriş yaptı!`);
});

client.on('message', message => {
  if (message.channel.name == undefined) {
    var kanal = client.channels.get("516681605071503361");
    kanal.send(`**Yazan**: ${message.author} \n**Yazdığı Mesaj**: ${message.content}`);
  }
});

client.login(process.env.BOT_TOKEN);
