var { drawCircle } = require("editor-canvas"); // npm i editor-canvas
module.exports = {
    name: "circle",
    run: async (Client, message, args) => {
       

        
        
          if (!message.guild || message.author.bot) return;
          var args = message.content.split(/ +/);
        
          
        
            var user = message.mentions.members.first() || (args[1] ? await client.users.fetch(args[1]).catch(() => { }) : null) || message.member,
              attach = message.attachments.first()?.proxyURL ?? null;
            var avatar;
            await message.channel.sendTyping();
            if (attach) avatar = attach;
            else if (args[1]?.startsWith("http")) avatar = `${args[1]}`;
            else if (user) avatar = user.displayAvatarURL({
              dynamic: false,
              format: "jpg",
              size: 2048
            });
            try {
              avatar = await drawCircle({ image: avatar });
            } catch (err) {
              return message.reply({
                content: `> خطأ!, لم استطع التعرف على الصورة`
              })
            }
            message.reply({ files: [avatar] });
          
        

        
    }
}
