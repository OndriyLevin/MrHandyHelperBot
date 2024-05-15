require('dotenv').config()

const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.TOKEN_BOT, {

    polling: true
    
});

bot.on('text', async msg => {

    switch (msg.text) {
        case '/start':
            console.log(msg.chat.username)
            console.log(msg.chat.id)
            await bot.sendMessage(msg.chat.id, 'Назови своё имя');
            break;
        case '/rolldice':
            await bot.sendDice(msg.chat.id)
            break;
        default:
            await bot.sendMessage(msg.chat.id, `Привет, ${msg.text}`);
            break;
    }

})

bot.on('new_chat_members', async msg => {
    console.log(msg.chat.username)
    console.log(msg.chat.id)
    await bot.sendMessage(msg.chat.id, `Привет, ${msg.chat.username}`);
})