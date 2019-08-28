const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "!";
var adminprefix = '!'
const developers = ["436918120184021012"]


client.on("message", (message) => {

   if (message.content.startsWith("!new")) {   
        const reason = message.content.split(" ").slice(1).join(" ");  
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`First you need to create a rank called Support Team.`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });   
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: Done check your ticket, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`Hey ${message.author.username}!`, `:white_check_mark:  Done check your ticket, #ticket`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("!close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
       message.channel.send(`Of you are sure write .confirm`)
           .then((m) => {
               message.channel.awaitMessages(response => response.content === '.confirm', {
                       max: 1,
                       time: 10000,
                       errors: ['time'],
                   })  
                   .then((collected) => {
                       message.channel.delete();
                   })   
                   .catch(() => {
                       m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                           m2.delete();
                       }, 3000);
                   });
           });
   }
 
});

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== '436918120184021012') return;

if (message.content.startsWith(prefix + 'p')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 

if (message.content.startsWith(prefix + 'w')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 
if (message.content.startsWith(prefix + 'l')) {
client.user.setActivity(argresult, {type:'LISTENING'});
    message.channel.sendMessage(`**:white_check_mark: : ${argresult}**`)
} else 

if (message.content.startsWith(prefix + 's')) {
  client.user.setGame(argresult, "https://www.twitch.tv/Justin-Ly0001");
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
}

});

client.on('message', message => {
    if (message.content.startsWith("!bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO Broadcast Arab Bot`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
                  .addField('``My Prefix``' , `[-]` , true)
                  .addField('``My Language``' , `[ Java Script ]` , true)
                    })
}
});

client.on('message', msg => {
  if(msg.content === 'Hello')
  msg.reply('Hi ')
});

client.on('message', msg => {
  if(msg.content === 'Back')
  msg.reply('Welcome Back')
});

client.on('message', msg => {
  if(msg.content === 'Ip')
  msg.reply('mc.xlegendarygal.me ')
});

client.on('message', msg => {
  if(msg.content === 'xD')
  msg.reply('lol')
});

client.on('message', msg => {
  if(msg.content === 'MrBloods')
  msg.reply('What do u want')
});

client.on('message', msg => {
  if(msg.content === ' Bye')
  msg.reply('Bye ❤')
});
 
client.on('message', message => {
if(!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);if (command == "bc") {if(!message.member.roles.find('name','bc')) {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`**⛔ you must have \`ADMINISTRATOR\` premission**, or role called "bc"`)}
let args = message.content.split(" ").slice(1).join(" ");
if(!args) return message.channel.send(`**:rolling_eyes: please type the broadcast message**`)
let filter = m => m.author.id == message.author.id
let idx = 0, fails = 0;let broadcastt = new Discord.RichEmbed().setColor('#36393e')
.addField(`**[1] broadcast for all members\n\n[2] broadcast for online members\n\n[3] broadcast for a specific role\n\n[4] broadcast with photo\n\n[0] to cansel**`,`** **`)
.setDescription(`**Please type the number of your chose**`)
.setFooter('you can add to the message [user] = mention the user')
message.channel.send(broadcastt).then(msg => {
message.channel.awaitMessages(filter, {max: 1,time: 90000,errors: ['time']})
.then(collected => {if(collected.first().content === '1') {msg.delete(),message.channel.send(`**☑ Broadcast begin send....**`).then(m => {
message.guild.members.map(member => {setTimeout(() => {member.send(args.replace('[user]',member).replace('[icon]',`https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}.png?size=1024`)).then(() => {}).catch((err) => {});},);});})}
if(collected.first().content === '2') {msg.delete(),message.channel.bulkDelete(1),message.channel.send(`**☑ Broadcast begin send....**`);
message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {m.send(args.replace('[user]', m))})
message.guild.members.filter(m => m.presence.status === 'dnd').forEach(m => {m.send(args.replace('[user]', m)) })
return message.guild.members.filter(m => m.presence.status === 'idle').forEach(m => {m.send(args.replace('[user]', m)) })}
if(collected.first().content === '0') {msg.delete(),message.channel.bulkDelete(1);return message.channel.send(`**Broadcast Has Been Canseled**`);}
if(collected.first().content === '3') {msg.delete();message.channel.bulkDelete(1);
message.channel.send('**Please Type the role name or id.**');
message.channel.awaitMessages(filter, {max: 1,time: 40000,errors: ['time']}).then(t => {
let R = t.first().content;
let role = message.guild.roles.find('name',R) || message.guild.roles.get(R);
if(!role) return message.channel.send('**😕 I Can\'t find this role please try again**'),msg.delete();
message.channel.bulkDelete(2);
if(role.members.size < 1) return message.channel.send('**there is no one have this role **😕');;
let XYZ = new Discord.RichEmbed().setTitle('**:ballot_box_with_check: Broadcast begin send....**').setDescription(`**For the role: ${role}**`).setColor(role.color)
message.channel.send(XYZ)
message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {setTimeout(() => {n.send(args.replace('[user]',n)).catch((err) => {});});});}).catch(err =>{});}
if(!collected.first().content.includes(['1','2','3','4','0'])) {msg.edit('Canceled.')}
if(collected.first().content === '4') { msg.delete();
message.channel.send('**✅ Please Type the photo link now**,Type "cansel" to cansel.').then(msgg =>{
message.channel.awaitMessages(filter, {max: 1,time: 50000,errors: ['time']}).then(XX => {
let photo = XX.first().content; if(photo == 'cansel') {message.channel.bulkDelete(2); return message.channel.send('**Broadcast Has Been Canseled**')}
let embed = new Discord.RichEmbed().setImage(photo).setTitle(`**are you sure you want to send this? \`[y,n]\`**`).setColor('#36393e')
message.channel.send(embed).catch(e =>{return message.channel.send('**The Photo link is wrong :x:**')});
let filter = m => m.author.id == message.author.id
message.channel.awaitMessages(filter, {max: 1,time: 90000,errors: ['time']}).then(XD => {if(XD.first().content === 'y') {
let bc = new Discord.RichEmbed().setTitle(`${args}`).setImage(photo).setFooter(message.guild.name,`https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}.png?size=1024`)
message.channel.bulkDelete(2);msgg.delete();message.channel.send('**☑ Broadcast begin send....**');message.guild.members.map(member => {setTimeout(() => {member.send(bc)}
)})}if(XD.first().content == 'n') {message.channel.bulkDelete(2);message.channel.send('**Broadcast Has Been Canseled**')}
})}).catch(myst =>{msgg.edit('Timed out.');})})
}if(collected.first().content === '5'){} // لو تبي تضيف شي خامس :]
}).catch(mys =>{msg.edit('Timed out to chose.')})})}});

client.on('message', message => {
    if (message.author.bot) return;
    if (message.content.startsWith("!say")) {
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**You dont have** `ADMINISTRATOR` **permission**');
var args = message.content.trim().split(/ +/g).slice(1);
let cname = args[0];
let chan = message.guild.channels.find(element => element.name === cname);
if (chan) {
    let text = args.slice(1).join(" ");
    message.delete();
    chan.send(text);
} else {
    let text = args.join(" ");
    message.delete();
    message.channel.send(text);
   }
}
});

client.on('message', message => {
  if (message.content === prefix + 'cat') {
    message.react(`🐱`)
      message.channel.sendFile("http://thecatapi.com/api/images/get?format=src&type=png", "mystery-cat.png")
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'sug')) {
      if (message.author.bot) return
      if (!message.guild) return message.reply('**:x: This Commands Just In Server**')
      let Room = message.guild.channels.find(`name`, "suggestions")
      if (!Room) return message.channel.send(`**Error** :octagonal_sign:\n**I Can't find the __suggestions__ Channel**`)
      if(!Room.permissionsFor(client.user).has(['SEND_MESSAGES','READ_MESSAGES','EMBED_LINKS'])) return message.channel.send(`**Error** :octagonal_sign:
I Don\'t have Permissions on tha suggestions channel`)

      var args =  message.content.split(' ').slice(1).join(' ')
      if (!args) return message.reply('**Please type your suggestion after the command**')
      let embed = new Discord.RichEmbed()
      .setColor('#311464')
     .setAuthor(`New suggestion by ${message.author.username}`, 'https://media.discordapp.net/attachments/584630360017469461/584661803003281408/72-512.png?width=375&height=375')
      .addField(`suggestion :`,`**${args}**`)
      .setThumbnail(message.author.avatarURL)
      .setTimestamp();
      Room.sendEmbed(embed).then(c => {
          c.react('👍').then(() =>
              c.react('👎'))
const sug = new Discord.RichEmbed()
.setColor(0x00e2f3)
.setAuthor(`Done your suggestion was sent`, 'https://media.discordapp.net/attachments/584630360017469461/584632506930823199/582246841186254869.png')
message.channel.sendEmbed(sug)
////
})
}
});

client.on('message', message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + '!new')) {
  if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send(`**Error** :octagonal_sign:\nI Don\'t have MANAGE_CHANNELS Permission`)
  let log = message.guild.channels.find("name", "log");
  let args = message.content.split(' ').slice(1).join(' ');
  let support = message.guild.roles.find("name","Support Team");
  let ticketsStation = message.guild.channels.find("name", "TICKETS");
  let reason = message.content.split(" ").slice(1).join(" ");
  if(!reason) reason = 'NONE';
  const embed = new Discord.RichEmbed()
  .setColor("#36393e")
  .addField(`**Error :interrobang:**`, `This server doesn't have a \`Support Team\` role made so the ticket won't be opened.`)
  .setTimestamp();
  if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send({ embed: embed });
  if(message.guild.channels.exists("name", `ticket-${message.author.username}`)) return message.channel.send(`You already have a ticket open :no_entry:`);
  if(!ticketsStation) return message.channel.send(`**Error! **:interrobang:\n please create \`category\` Called \`TICKETS\``)
  message.guild.createChannel(`ticket-` + message.author.username, "text").then(c => {
  c.setParent(ticketsStation);
  const done = new Discord.RichEmbed()
  .setColor(`GREEN`)
  .setTitle(`Ticket Created`)
  .setDescription(`Ticket : #${c.name}
  by :<@${message.author.id}>
  Reason : ${reason}`)
  .setTimestamp()
  .setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588033107635208193/563111847692337174.png`)
  .setFooter(message.author.tag)
  if(log) log.send(done)
  let role = message.guild.roles.find("name", "Support Team");
  let role2 = message.guild.roles.find("name", "@everyone");
  c.overwritePermissions(role, {
  SEND_MESSAGES: true,
  READ_MESSAGES: true
  });
  c.overwritePermissions(role2, {
  SEND_MESSAGES: false,
  READ_MESSAGES: false
  });
                c.overwritePermissions(message.author, {
                    SEND_MESSAGES: true,
                    READ_MESSAGES: true
                });

                /////////////
  const eembed = new Discord.RichEmbed()
  .setColor("#00ffd4")
  //.setThumbnail(message.author.avatarURL)
  .addField(`Your ticket has been created :white_check_mark:`, `<#${c.id}>`)
  .setFooter(`${client.user.tag} BY | ${dev_tag}`,client.user.displayAvatarURL);
  //////////////////
  message.channel.send({ embed: eembed });
  const embed = new Discord.RichEmbed()
  .setColor(0xCF40FA)
  .setThumbnail(message.author.avatarURL)
  .addField(`**Welcome**`, `<@${message.author.id}>`)
  .addField(`Our **__Support Team__** will be here soon to help.`, `** **`)
  .addField(`Reason :`, `${reason}`)
  .setFooter(`${client.user.tag} BY | ${dev_tag}`,client.user.displayAvatarURL)
  .setTimestamp();
  c.send({ embed: embed }).then
  c.send(`<@${message.author.id}>`).then(b=>{
    b.delete();
  })
  }) .catch();
    }
    if(message.content.startsWith(prefix + '!close')) {
       
      if(message.author.bot) return;
        if(!message.channel.name.startsWith("ticket-")) return message.channel.send(`this command only for the tickets`)
  let close = new Discord.RichEmbed()
  .addField(`type \`${prefix}close\` again to confirm`, `** **`)
  .setColor("#36393e");
  message.channel.sendEmbed(close) .then(m => {
  const filter = msg => msg.content.startsWith(prefix + 'close');
  if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return
  message.channel.awaitMessages(response => response.content === prefix + 'close', {
  max: 1,
  time: 20000,
  errors: ['time']
  })
  .then((collect) => {
  message.channel.delete();
  let Reason = message.content.split(" ").slice(1).join(" ");
  if(!Reason) Reason = 'NONE';
let closee = new Discord.RichEmbed()
.setColor(`BLUE`)
.setAuthor(`Ticket Closed`)
.setDescription(`Ticket : #${message.channel.name}
By : <@${message.author.id}>
Reason : ${Reason}`)
.setTimestamp()
.setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588033109178712074/563111850162520077.png`)
.setFooter(message.author.tag)
let log = message.guild.channels.find("name", "log");
if(log) log.send(closee)
  }) .catch(() => {
  m.delete()
  .then(message.channel.send('Ticket close timed out, the ticket was not closed')) .then((c) => {
  c.delete(4000);
  }) 
  })
  })     
    } if(message.content.startsWith(prefix + `multiclose`)) {
      if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send(`**Error** :octagonal_sign:\nI Don\'t have MANAGE_CHANNELS Permission`)
      if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('You don\'t have Permission **MANAGE_CHANNELS** to close all tickets');
      message.guild.channels.filter(c => c.name.toLowerCase().startsWith("ticket-")).forEach(channel => { channel.delete(); })
const ttt = new Discord.RichEmbed()
.setColor("GREEN")
.addField(`**Done all Tickets has been closed :white_check_mark:**`,`** **`)
message.channel.send(ttt)
let log = message.guild.channels.find("name", "log");
const rr = new Discord.RichEmbed()
.setColor("GREEN")
.addField(`**all Tickets channels has been closed :white_check_mark:**`, `**by <@${message.author.id}>**`)
.setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588151961279397898/582096914376425501.png`)
.setTimestamp();
if(log) return log.send(rr)
//
} if(message.content.startsWith(prefix + `add`)) {
  if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send(`**Error** :octagonal_sign:\nI Don\'t have MANAGE_CHANNELS Permission to do this`)
  if(!message.channel.name.startsWith("ticket-")) return message.channel.send(`this command only for the tickets`);
let member = message.mentions.members.first();
if(!member) return message.channel.send(`**Please mention the user :x:**`);
if(message.channel.permissionsFor(member).has(['SEND_MESSAGES', 'VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'])) return message.channel.send(`this member already in this ticket :rolling_eyes:`);
message.channel.overwritePermissions(member.id, { SEND_MESSAGES: true, VIEW_CHANNEL: true, READ_MESSAGE_HISTORY: true });
message.channel.send(`**Done :white_check_mark:\nSuccessfully added <@${member.user.id}> to the ticket**`)
let tgt = new Discord.RichEmbed()
.setColor(`GREEN`)
.setAuthor(`Added member to a ticket`)
.setDescription(`Ticket : #${message.channel.name}
Member : ${member}
by : <@${message.author.id}>`)
.setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588033109539160066/563111851165220885.png`)
.setTimestamp();
let log = message.guild.channels.find("name", "log");
if(log) return log.send(tgt);
} if(message.content.startsWith(prefix + `remove`)) {
  if(!message.channel.name.startsWith("ticket-")) {
      return message.channel.send(`this command only for the tickets`);
  }
  let member = message.mentions.members.first();
  if(!member || member.id === client.user.id) {
      return message.channel.send(`**Please mention the user :x:**`);
  }
  if(!message.channel.permissionsFor(member).has(['SEND_MESSAGES', 'VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'])) {
      return message.channel.send(`:x: **${member.user.tag}** is not in this ticket to remove them`);
  }
  message.channel.overwritePermissions(member.id, { SEND_MESSAGES: false, VIEW_CHANNEL: false, READ_MESSAGE_HISTORY: false });
  message.channel.send(`**Done :white_check_mark:\nSuccessfully removed \`${member.user.tag}\` from the ticket**`)
  let gtg = new Discord.RichEmbed()
.setColor(`BLUE`)
.setAuthor(`removed member from a ticket`)
.setDescription(`Ticket : #${message.channel.name}
Member : ${member}
by : <@${message.author.id}>`)
.setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588033111212949555/563111852352077886.png`)
.setTimestamp();
let log = message.guild.channels.find("name", "log");
if(log) return log.send(gtg);
  }

  });

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
