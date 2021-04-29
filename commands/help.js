module.exports = {
    name:'help',
    description:'command list',
    execute(message) {
        message.channel.send('Note: Commands are space sensitive.\n List of commands:\n !roll -e.g. !roll d20, !roll 10d6+20, !roll 2d6 4d6');
    }
}