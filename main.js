const Discord = require('discord.js');
const rpgDiceRoller = require('rpg-dice-roller');
const fs = require('fs');

const bot_token = 'NzQxNTQzODUyNzUzODEzNTY1.Xy5Ghw.xhmV0y05vxqv2aw1xTzEpJN0DR4';
const prefix = '!';

const client = new Discord.Client();
const roller = new rpgDiceRoller.DiceRoller();

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('TestBot is online!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    switch(command) {
        case 'help':
            client.commands.get('help').execute(message);
            break;
        case 'roll':
            client.commands.get('roll').execute(roller, message, args);
            break;
        default:
            message.channel.send('No such command!');
            break;
    }
});

client.login(bot_token);