const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDkwMjUwMjYyMzIyMzQ4MDMz.Dn2nDw.jYwEaO0xsUZGbzb048uNyL4AopU'; // Token goes here.
 
client.login(token); // login the bot with your token.
 
client.on('message', message => { //message commands!
 
    if(message.content.toLowerCase() === 'hanayo') //the standalone message 'hanayo'
        message.channel.send("i love you " + message.author + "!");
    else if(message.content.toLowerCase().includes('hanayo')) //all messages containing 'hanayo'
	message.channel.send("i love you " + message.author + "!");
    //copy and paste more as needed
 
 
});#Hanayo
