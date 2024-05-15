require('dotenv').config()

const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.TOKEN_BOT, {

    polling: true
    
});

bot.on('text', async msg => {
    
    swicth(msg.text) {
        case '/start':
            await bot.sendMessage(msg.chat.id, `Привет, ${msg.text}`);
            break;
    }
    
    console.log(msg.chat.username)
    await bot.sendMessage(msg.chat.id, `Привет, ${msg.text}`);

})