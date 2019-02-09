const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("543752674055553029")
setInterval(function() {
channel.send(`oh shit wtf i fuck dota and minecraft ياهو يلعن الي نفضك جاي تتفلس على امي يا ولد بدعس عليك وعلى ابوك يا جزمة يا ولد الجزمة ختف عليك`);
}, 30)
})

client.login(process.env.BOT_TOKEN);