const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js')
keepAlive()

client.on('ready', async () => {


    console.clear();

    console.log(`${client.user.tag} - rich presence started!`
               )
const r = new Discord.RichPresence()
    .setApplicationId('1066072658262904852')
    .setType('PLAYING')
    .setURL('https://youtu.be/dQw4w9WgXcQ')
    .setState('for 11 hours')
  
    .setName('Indus Battle Royale')
    .setDetails('Testing phase-alpha')
    /*.setParty({
        max: 9999,
        current: 6789,
        id: Discord.getUUID(),
    })*/
    
    //.setStartTimestamp(Date.now())
  .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1081103878151487559/1102625662356955228/unnamed.png')
    .setAssetsLargeText('Indus Battle Royale')

     client.user.setActivity(r);
     client.user.setPresence({ status: "Online" });
})

client.login(process.env.TOKEN)
