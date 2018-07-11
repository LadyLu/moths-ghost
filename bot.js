const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content.startsWith("fight")) {
    	message.channel.send("YOU DARE CHALLENGE THE ALMIGHTY MOTHSTAR?!");
  	} else

  if (message.content.includes("hellkits")) {
    message.channel.send("Ah, the devilish spawn of Bracken and Bear. Not even I will look down upon such kits.");
  } else

  if (message.content.includes("brackenfall")) {
    message.channel.send("Where is that deputy of mine?");
  } else
      
  if (message.content === 'm_love') {
      message.reply('Ah... Yes.. *pat pat* You are a... Noble warrior? Yes, noble.');
  }

 
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
