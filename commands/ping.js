const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {



    let msgping1 = new Date();

    let botping = new Date() - message.createdAt;

    let msgping2 = new Date() - msgping1;

    let pingembed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField('API Ping : ', Math.floor(client.ws.ping) + 'ms')
        .addField('Bot Ping : ', Math.floor(botping) + 'ms')
        .addField('Message Ping : ', '~' + Math.round(msgping2) + 'ms')
        .setTimestamp(new Date())
        .setFooter(`requested by ${message.author.tag}`);


    return message.channel.send(pingembed);


};

module.exports.help = {
    name: "ping"
};
