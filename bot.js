const Discord = require('discord.js');
const client = new Discord.Client();
const token = ''; // token omitted.
 
client.login(token);
 
client.on('message', message => { //message commands!
 
    if(message.content.toLowerCase() === 'hanayo') //the standalone message 'hanayo'
        message.channel.send("i love you " + message.author + "!");
    else if(message.content.toLowerCase().includes('hanayo')) //all messages containing 'hanayo'
	message.channel.send("i love you " + message.author + "!");
    //copy and paste more as needed
 
 
});#Hanayo
