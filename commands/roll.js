module.exports = {
    name:'roll',
    description:'roll the dice',
    execute(roller, message, args) {        
        const username = message.author.toString();
        let rolls = "";
        let comments = "";
        for(const arg of args) {
            try {
                if(arg.match(/(\d+)?d(\d+)([\+\-]\d+)?/ig)) {
                    rolls += ", " + roller.roll(arg);
                } else {
                    comments += " " + arg
                }
            } catch(err) {
                message.channel.send('There is an error with your command. Please try again.');
            }
        }
        if(rolls != "") {
            rolls = rolls.slice(','.length);
            message.channel.send(`${username} rolled: ${rolls} ${comments}`);
        }
    }
}