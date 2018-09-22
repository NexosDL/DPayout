const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login(process.env.TOKEN)
var prefix = ("?")

bot.on('ready', function() {
    bot.user.setPresence({ game: { name: 'Nexøs. | Prefix [?] ', type: 2} })
    bot.user.setStatus('dnd');
    console.log("Connected");
});
bot.on('message', message => {
    if (message.content === prefix + "help"){
        var imagetest = new Discord.RichEmbed()
            .setTitle(message.author.username)
            .addField("*?ping*", 'Le bot répond : :ping_pong: Pong', true)
            .addField("Soon...", "Soon...", true)
            .setImage("https://cdn.discordapp.com/attachments/492818116720459814/492829342632640538/logo-dp2.png")
            .setColor("#0xFF8000")
            .setFooter("Nexøs. | Guillaume#8825 ❤️")
            message.channel.sendEmbed(imagetest);
            message.delete()
    }
    if (message.content === prefix + "ping"){
        message.reply(":ping_pong: Pong")
    }
    if (message.content === prefix + "gif"){
        message.reply(" :giphy: test gif bot")
    }
})
