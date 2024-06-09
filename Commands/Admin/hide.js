const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "hide",
  aliases: ["اخفاء"],
  description: "hide chat",
  usage: ["hide chat"],
  run: async (client, message, args, config) => {

         const Pro = require(`pro.db`)
        const db = Pro.get(`Allow - Command hide = [ ${message.guild.id} ]`)
const allowedRole = message.guild.roles.cache.get(db);
const isAuthorAllowed = message.member.roles.cache.has(allowedRole?.id);

if (!isAuthorAllowed && message.author.id !== db  && !message.member.permissions.has('MANAGE_CHANNELS')) {
    // إجراءات للتصرف عندما لا يتحقق الشرط
    return message.react(`❌`);
}
    
  let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
                message.channel.permissionOverwrites.edit(everyone, {
                        VIEW_CHANNEL: false
                }).then(() => {
                        message.react("✅").catch((err) => {
                                console.log(`**لم أتمكن من الرد على الرسالة:**` + err.message)
  })
                })
		
        },
};
                          