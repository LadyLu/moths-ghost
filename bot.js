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

  if (message.content.includes("Brackenfall")) {
    message.channel.send("Where is that deputy of mine?");
  } else

  if (message.content.includes("bracken")) {
    message.channel.send("Where is that deputy of mine?");
  } else

  if (message.content.includes("Bracken")) {
    message.channel.send("Where is that deputy of mine?");
  }  else

  if (message.content.includes("brackenstar")) {
    message.channel.send("He is now a leader, eh? Better not turn my clan into carrion.");
  } else

  if (message.content.includes("Brackenstar")) {
    message.channel.send("He is now a leader, eh? Better not turn my clan into carrion.");
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
