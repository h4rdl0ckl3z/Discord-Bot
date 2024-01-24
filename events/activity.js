const { Events } = require('discord.js');

const list = require('./status.js');
const status = list.status;

module.exports = {
    name: Events.ClientReady,
	async execute(client) {
        setInterval(() => {
            let random = Math.floor(Math.random() * status.length);
            client.user.setActivity(status[random]);
            // console.log(status[random]);
        }, 12000);
	},
};
