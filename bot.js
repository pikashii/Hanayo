const { Client, Attachment } = require('discord.js');

const client = new Client();

client.on('ready', () => {
  console.log('ready!');
});

client.on('message', message => {

    if(message.content.toLowerCase() === 'hanayo') 
        message.channel.send("i love you " + message.author + "!");
    else if(message.content.toLowerCase().includes('hanayo')) 
	message.channel.send("i love you " + message.author + "!");

    if(message.content.toLowerCase() === 'rin') 
        message.channel.send("i love my furry gf!");
    else if(message.content.toLowerCase().includes(' rin')) 
	message.channel.send("i love my furry gf!");

    if(message.content.toLowerCase() === ' maki') 
        message.channel.send("i love my intellectual gf!");
    else if(message.content.toLowerCase().includes(' maki')) 
	message.channel.send("i love my intellectual gf!");

    if(message.content.toLowerCase() === 'nozomi') 
        message.channel.send("thanos idol");
    else if(message.content.toLowerCase().includes('nozomi')) 
	message.channel.send("thanos idol");

    if(message.content.toLowerCase() === 'rice') 
        message.channel.send("pwease " + message.author + "! " + "pwease share some of your wice!");
    else if(message.content.toLowerCase().includes('rice')) 
	message.channel.send("pwease " + message.author + "! " + "pwease share some of your wice!");

    if(message.content.toLowerCase() === 'scout') 
        message.channel.send(message.author + ", i hope you get a ur!");
    else if(message.content.toLowerCase().includes('scout')) 
	message.channel.send(message.author + ", i hope you get a ur!!");

    if(message.content.toLowerCase() === 'thanos car') 
        message.channel.send("does thanos car is fuck?");

    if(message.content.toLowerCase() === 'umi') 
        message.channel.send("ocean man, take me by the hand");
    else if(message.content.toLowerCase().includes('umi')) 
	message.channel.send("ocean man, take me by the hand");

    if(message.content.toLowerCase() === 'x3 invite') 
        message.channel.send("https://discordapp.com/oauth2/authorize?client_id=490250262322348033&scope=bot&permissions=0");

    if(message.content.toLowerCase().includes('had to do it to em')) {
        const attachment = new Attachment('https://i.imgur.com/aIq162d.jpg');
        message.channel.send(attachment);
    }
});

client.login(');
