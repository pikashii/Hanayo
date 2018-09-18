const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDkwMjUwMjYyMzIyMzQ4MDMz.Dn2nDw.jYwEaO0xsUZGbzb048uNyL4AopU'; // Token goes here.

 
client.login(token); // login the bot with your token.
 
client.on('message', message => { // This is where we will handle all message events. Aka, the commands that will trigger the bot.
 
    if(message.content.toLowerCase() === 'hanayo') 
        message.channel.send("i love you " + message.author + "!");
    else if(message.content.toLowerCase().includes('hanayo')) 
	message.channel.send("i love you " + message.author + "!");

    if(message.content.toLowerCase() === 'rin') 
        message.channel.send("i love rin-chan " + "!");
    else if(message.content.toLowerCase().includes('rin')) 
	message.channel.send("i love rin-chan " + "!");

    if(message.content.toLowerCase() === 'maki') 
        message.channel.send("i love maki-chan " + "!");
    else if(message.content.toLowerCase().includes('maki')) 
	message.channel.send("i love maki-chan " + "!");

    if(message.content.toLowerCase() === 'nozomi') 
        message.channel.send("thanos idol");
    else if(message.content.toLowerCase().includes('nozomi')) 
	message.channel.send("thanos idol");

// etc.... you get the idea.

});
