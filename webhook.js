const { EmbedBuilder, WebhookClient, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');
const { webhookId, webhookToken } = require('./webhook-config.json');

const webhookClient = new WebhookClient({ id: webhookId, token: webhookToken });

const http = require('http');

let host = 'http://localhost:3000';
require('dotenv').config();
let tiktokUsername = process.env.tiktokUsername;
let url_roominfo = host + '/roominfo?tiktokUsername=' + tiktokUsername;

http.get(url_roominfo,(res) => {
    let body = "";

    res.on("data", (chunk) => {
        body += chunk;
    });

    res.on("end", () => {
        try {
            let json = JSON.parse(body);
            // do something with JSON
            // console.log(json);
            const embed = new EmbedBuilder(
                {
                    color: 0xFF2BF2,
                    title: json.title,
                    url: 'https://www.tiktok.com/' + tiktokUsername + '/live',
                    author: {
                        name: json.owner.nickname + ' is now live on Tiktok!',
                        icon_url: json.cover.url_list[0],
                        url: 'https://www.tiktok.com/' + tiktokUsername + '/live',
                    },
                    fields: [
                        {
                            name: 'Game',
                            value: json.game_tag[0]['show_name'],
                            inline: true,
                        },
                        {
                            name: 'View',
                            value: json.user_count,
                            inline: true,
                        },
                    ],
                    image: {
                        url: '',
                    },
                    timestamp: new Date().toISOString(),
                    footer: {
                        text: '',
                        icon_url: '',
                    },
                }
            );
            const button = new ButtonBuilder(
                {
                    type: 2,
                    style: ButtonStyle.Link,
                    label: 'Watch Stream',
                    url: json.share_url,
                }
            );
            const row = new ActionRowBuilder()
                .addComponents(button)
            webhookClient.send({
                content: '@everyone ' + json.owner.nickname + ' is live now🔴',
                components: [row],
                embeds: [embed],
            });
        } catch (error) {
            console.error(error.message);
        };
    });

}).on("error", (error) => {
    console.error(error.message);
});