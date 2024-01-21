const { Events, ActivityType } = require('discord.js');

const status = [
	{
		name: 'อย่าดิ้น ๆ เดะไก่ตื้น',
		type: ActivityType.Custom
	},
	{
		name: 'พี่มาแล้วน้อง!',
		type: ActivityType.Custom
	},
	{
		name: 'ไอ้กากเอ่ย',
		type: ActivityType.Custom
	},
	{
		name: 'กูจะเกิดวันนี้ กูต้องเกิด',
		type: ActivityType.Custom
	},
	{
		name: 'กูบอกมึงแล้ว',
		type: ActivityType.Custom
	},
	{
		name: 'ฮั่นแน่! ไม่ได้แดกกูหรอก',
		type: ActivityType.Custom
	},
	{
		name: 'เดี่ยวพี่จัดการเองน้อง',
		type: ActivityType.Custom
	},
	{
		name: 'ขยี้ให้หนัก ขยี้ ๆ',
		type: ActivityType.Custom
	}
];

const random = status[Math.floor(Math.random() * status.length)];

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		setInterval(() => {
			client.user.setActivity(random);
		}, 10000);
	},
};
