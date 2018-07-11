const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content.startsWith === 'fight') {
    	message.channel.send('YOU DARE CHALLENGE THE ALMIGHTY MOTHSTAR?!');
  	} else

  if (message.content.startsWith("hellkits")) {
    message.channel.send("Ah, the devilish spawn of Bracken and Bear. Not even I will look down upon such kits.");
  } 
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
