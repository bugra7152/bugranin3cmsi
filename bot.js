const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('Aleyküm Selam');
  }

  if (msg.content === 'Selamın Aleyküm') {
    msg.reply('Aleyküm Selam');
  }
    if (msg.content === 'sea') {
    msg.reply('Aleyküm Selam');
  }
    if (msg.content === 'selamün aleyküm') {
    msg.reply('Aleyküm Selam');
  }
    if (msg.content === 'selam') {
    msg.reply('Aleyküm Selam');
  }
    if (msg.content === 'selamlar') {
    msg.reply('Aleyküm Selam');
  }
  if (msg.content === 'Buğra') {
    msg.reply('Efendim');
  }
  if (msg.content === 'bugi') {
    msg.reply('Efendim');
  };
  if (msg.content === 'bura') {
    msg.reply('Efendim');
  }
  if (msg.content === 'Selamun aleyküm') {
    msg.reply('Aleyküm Selam');
  }
  if (msg.content === 'Selamun aleykum') {
    msg.reply('Aleyküm Selam');
  }
});

client.login('Mjg0MDEyOTA0MjEzMjUwMDQ4.DjTvGA.rDFFakoA7wz6K_5jTv2xltJGjiY');
