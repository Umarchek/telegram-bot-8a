const TelegramBot = require("node-telegram-bot-api")

const TOKEN = `2048632800:AAGCgjdxflFaSeheBmfts-7sSs44tUI8R78`
const bot = new TelegramBot(TOKEN, {
    polling: true
})