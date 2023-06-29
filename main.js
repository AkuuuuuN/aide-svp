const Discord = require("discord.js")
const intents =  new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})
const loadCommands = require("./loaders/loadCommands");
const config = require("./config")

bot.commands = new Discord.Collection()

bot.on("ready", () => {
    console.log(`Est bien en Ligne ${bot.user.tag}!`);
});

bot.login(config.token)
loadCommands(bot)