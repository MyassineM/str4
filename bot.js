const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = ".";
var adminprefix = '.'
const developers = ["522130443097604107"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setp')) {
    client.user.setGame(argresult);
      message.channel.send(`**Bot Playing By  !                     | Yas.sine**#3327   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**Bot Watching By !                     | Yas.sine**#3327   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**Bot Listening By !                     | Yas.sine**#3327   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/One");
      message.channel.send(`**Bot Streaming By !                     | Yas.sine**#3327`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`**Bot Change Name By !                     | Yas.sine**#3327 : ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`**Bot Change Avatar By !                     | Yas.sine**#3327 : :**${argresult}** `);
}
});




