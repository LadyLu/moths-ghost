const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'challenge') {

       message.reply('You dare challenge the greatest leader in the clans? I'll kick your tail from up here in Starclan!');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NDY2NDI3NTU5MDIyNjkwMzE1.DicAlg.dmudL7LtaJZYcOAZXzpcLNIHrFE);
