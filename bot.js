const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'challenge') {
    	message.reply('YOU DARE CHALLENGE THE ALMIGHTY MOTHSTAR?!');
  	} else

def on_message(self, message):
  if "Bracken" in message: {
            self.send("That deputy would be nothing without my almighty glory!");
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
