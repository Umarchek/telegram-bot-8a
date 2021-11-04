const TelegramBot = require("node-telegram-bot-api")

const TOKEN = `2048632800:AAGCgjdxflFaSeheBmfts-7sSs44tUI8R78`
const bot = new TelegramBot(TOKEN, {
    polling: true
})

bot.on('message', async message => {
    const chatId = message.chat.id
    const name = message.from.first_name
    const text = message.text
    if (text == '/start' || text == 'start' || text == 'начать') {
        const keyboard = {
            resize_keyboard: true,
            one_time_keyboard: true,
            keyboard: [
                [
                    {
                        text: `Расписание уроков`
                    },
                    {
                        text: `Расписание звонков`
                    }
                ]
            ]
        }

        bot.sendMessage(chatId, `Здравствуйте <b>${name}</b>. Что вы хотите узнать?`, {
            parse_mode: 'HTML',
            reply_markup: keyboard
        })
    }

})