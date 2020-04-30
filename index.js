const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot('1232088235:AAF_LN5eRM_4G56EvB5AJEr8Kfyta_87NOA',{polling: true});

bot.on('message', msg => {

  bot.sendMessage(msg.chat.id, `Привет ${msg.from.first_name}`)

});
