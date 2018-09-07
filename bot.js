const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`${client.user.tag} Olarak Giriş Yapıldı!`);
  client.user.setActivity(`PLAYERUNKNOWN'S BATTLEGROUNDS`, { type: 'PLAYING' });

});

client.on('message', message => {
  if (message.content === 'bandashki') {
    message.channel.send('blatata');
  }
});

client.on('guildMemberAdd', member => {
  setTimeout(function(){
    member.send('Merhabaaa :blush: Diğerleri gibi satirlarca yazmaya gerek yok.Samimi bi aile ortami var.Oyun sohbet sunucusudur ve sende davetlisin :wink:\nhttps://discord.gg/YUD7pct https://imgur.com/bvTdOGI');
   }, 10000);
});

client.on('guildMemberRemove', member => {
  setTimeout(function(){
    member.send('Merhabaaa :blush: Diğerleri gibi satirlarca yazmaya gerek yok.Samimi bi aile ortami var.Oyun sohbet sunucusudur ve sende davetlisin :wink:\nhttps://discord.gg/YUD7pct https://imgur.com/bvTdOGI');
   }, 10000);
});

client.login(process.env.BOT_TOKEN);