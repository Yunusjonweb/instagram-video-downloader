const TelegramBot = require("node-telegram-bot-api");
const { TOKEN } = require("../config");
const downloaderMethod = require("./request");

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", async (message) => {
  try {
    let chatID = message.chat.id;
    const name = message.from.first_name;

    if (message.text == "/start") {
      bot.sendMessage(chatID, `Salom <b>${name}</b> botimizga xush kelibsiz`, {
        parse_mode: "HTML",
      });
    }

    const result = await downloaderMethod(message.text);

    if (result.videoURL) {
      await bot.sendVideo(chatID, result.videoURL, {
        caption: result.caption,
      });
    } else {
      bot.sendMessage(chatID, "❌ Video topilmadi.");
    }
  } catch (err) {
    console.log(err + "");
  }
});
