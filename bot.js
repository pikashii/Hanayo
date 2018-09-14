const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDkwMjUwMjYyMzIyMzQ4MDMz.Dn2nDw.jYwEaO0xsUZGbzb048uNyL4AopU'; // Token goes here.
 
client.login(token); // login the bot with your token.
 
client.on('message', message => { // This is where we will handle all message events. Aka, the commands that will trigger the bot.
 
    if(message.content.toLowerCase() === 'hanayo')
        message.channel.send("i love you " + message.author + "!");
    else if(message.content.toLowerCase().includes('hanayo'))
	message.channel.send("i love you " + message.author + "!");
    // etc.... you get the idea.
 
 
});#Hanayo
