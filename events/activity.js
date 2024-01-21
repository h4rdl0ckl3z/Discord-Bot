const { Events, ActivityType } = require('discord.js');

const status = [
    {
        name: 'ไม่ต้องชอบอะไรเหมือนเราก็ได้ แค่ชอบเราก็พอ 😉',
        type: ActivityType.Custom
    },
    {
        name: 'โตมาถึงได้รู้ว่า โลกไม่ได้สวยเหมือนเรา 😹',
        type: ActivityType.Custom
    },
    {
        name: 'ถ้าที่ตรงนั้น ไม่ใช่ที่ของเรา เราจะไม่มีโฉนด 🤣',
        type: ActivityType.Custom
    },
    {
        name: 'เขามันทรงดี  ส่วนเราทรงตัวได้ก็บุญแล้ว',
        type: ActivityType.Custom
    },
    {
        name: 'เวรกรรมของเธอ ที่ได้เจอคนน่ารักแบบเรา 😉',
        type: ActivityType.Custom
    },
    {
        name: 'ชีวิตไม่เคยเป็นภาระใครเลย... นอกจากสิ่งศักดิ์สิทธิ์',
        type: ActivityType.Custom
    },
    {
        name: 'ขอโทษนะ ที่ค่า PM 2.5 พุ่งขนาดนี้ เพราะคำว่ารักมันกลายเป็นฝุ่นไปแล้ว ',
        type: ActivityType.Custom
    },
    {
        name: 'เหงานิดหน่อย แต่กินข้าวอร่อยเหมือนเดิม',
        type: ActivityType.Custom
    },
    {
        name: 'ยุคนี้พรหมลิขิต ก็สู้บัตรเครดิตไม่ได้หรอก',
        type: ActivityType.Custom
    },
    {
        name: 'สิ่งเล็กๆ เค้าเรียกว่ารัก แต่ถ้าสิ่งลับๆ เค้าเรียกว่าชู้',
        type: ActivityType.Custom
    },
    {
        name: 'ถึงอะไรจะไม่ดี แต่ปากดีที่หนึ่งนะ',
        type: ActivityType.Custom
    },
    {
        name: 'นึกว่าอยู่กลุ่มเสี่ยง ที่ไหนได้อยู่กลุ่มโสด T_T',
        type: ActivityType.Custom
    },
    {
        name: 'ถึงใจไม่แข็งพอ แต่เราก็มี บ่า ไหล่ คอ ที่แข็งมาก!',
        type: ActivityType.Custom
    },
    {
        name: 'เป็นคนไม่อ้อนใคร เพราะส่วนใหญ่อ้อนบาทา',
        type: ActivityType.Custom
    },
    {
        name: 'คนที่คิดไปไกล สุดท้ายก็ต้องเติมน้ำมัน',
        type: ActivityType.Custom
    },
    {
        name: 'เพื่อนตายหาไม่ยาก ไม่ที่บ้านก็ที่วัด',
        type: ActivityType.Custom
    },
    {
        name: 'ในวันที่ไม่มีคนข้างเคียง เราก็ยังมีเหนียงที่อยู่ข้างคอ',
        type: ActivityType.Custom
    },
    {
        name: 'ถ้าต้มบะหมี่ไม่เหมือนซองมาม่า ก็อย่าบังอาจมาว่าหน้าชั้นไม่เหมือนในเฟส',
        type: ActivityType.Custom
    }
];

module.exports = {
    name: Events.ClientReady,
	async execute(client) {
        setInterval(() => {
            let random = Math.floor(Math.random() * status.length);
            client.user.setActivity(status[random]);
            console.log(status[random]);
        }, 10000);
	},
};
