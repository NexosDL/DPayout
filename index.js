const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login(process.env.TOKEN)
var prefix = ("?")

bot.on('ready', function() {
    bot.user.setPresence({ game: { name: '@Nexøs.#8825 | [?] ', type: 3} })
    bot.user.setStatus('dnd');
    console.log("Connected");
});
bot.on('message', message => {
    if (message.content === prefix + "help"){
        var imagetest = new Discord.RichEmbed()
            .setTitle(message.author.username)
            .addField("DestinyPayout", 'Invitation Officiel', true)
            .addField("DestinyLife", 'Invitation Officiel', true)
            .setThumbnail("https://cdn.discordapp.com/attachments/492818116720459814/492829342632640538/logo-dp2.png")
            .setColor("#0xFF8000")
            .setFooter("Nexøs. | Guillaume#8825 ❤️")
            message.channel.sendEmbed(imagetest);
            message.delete()
    }
    if (message.content === "poll"){
        message.react("492821382950813697")
        message.react("492821381856362497")
    }
})
