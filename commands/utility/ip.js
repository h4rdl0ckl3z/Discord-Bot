const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ip-public')
		.setDescription('IP PUBLIC!'),
	async execute(interaction) {
		var http = require('http');
		http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(res) {
			res.on('data', function(ip) {
				return interaction.reply('IP Public : ' + ip);
			});
		});
	},
};
