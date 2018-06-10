const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
  
  let msg =  bot.guilds.map(guild => `${message.guild.iconURL}**${guild.name}** Üye Sayısı: ${guild.memberCount}`).join('\n');
  let embed = new Discord.RichEmbed()
  .setTitle(`Teşekkürler: ${bot.guilds.size} sunucu!`)
  .setDescription(`${msg}`)
  .setColor("#ebf442");
  message.channel.send(embed);
}

module.exports.help = {
  name: "ekleyenler"
}
