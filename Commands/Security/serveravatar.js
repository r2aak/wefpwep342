const { owners } = require(`${process.cwd()}/config`);
const Discord = require('discord.js');

module.exports = {
    name: 'serveravatar',
    run: async (client, message, args) => {
        const Pro = require(`pro.db`);
        const db = Pro.get(`Allow - Command serveravatar = [ ${message.guild.id} ]`);
        const allowedRole = message.guild.roles.cache.get(db);
        const isAuthorAllowed = message.member.roles.cache.has(allowedRole?.id);
        const isOwner = owners.includes(message.author.id);

        if (!isAuthorAllowed && message.author.id !== db && !isOwner) {
            return message.react('❌');
        }

        let avatarURL = '';

        if (message.attachments.size > 0) {
            avatarURL = message.attachments.first().url;
        } else if (args.length > 0) {
            avatarURL = args[0];
        } else {
            return message.reply('**يرجى ارفاق الصورة أو رابط الصورة.**');
        }

        try {
            await message.guild.setIcon(avatarURL);
            message.react('✅');
        } catch (error) {
            console.error(error);
            message.react('❌');
        }
    }
}
