const TelegramBot = require('node-telegram-bot-api');
const token = '8006036337:AAGzKdInXTswN1Mb0X-_AVa_eaXdp51zjwM';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text.toLowerCase();

    if (text === 'halo') {
        bot.sendMessage(chatId, 'Halo! Apa kabar?');
    } else {
        bot.sendMessage(chatId, 'Maaf, saya tidak mengerti.');
    }
});

console.log('Bot berjalan...');