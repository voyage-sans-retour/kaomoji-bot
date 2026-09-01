require("dotenv").config();

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/kaomoji-bot-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Hi, I'm a bot that will give you list of kaomojis you can copy+paste for use in your messages. Type /kaomoji-bot-help to see a directory of emotions.\nLatency: ${latency}ms` });
});

(async () => {
  await app.start();
  console.log("bot is running!");
})();

app.command("/kaomoji-bot-help", async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
`Available Commands:
/kaomoji-bot-ping - Check bot latency
/kaomoji-bot-help - Get a directory of available commands\n

Emoticons:
/kaomoji-bot-happy 
/kaomoji-bot-sad
/kaomoji-bot-angry
/kaomoji-bot-tired 
/kaomoji-bot-embarrassed
/kaomoji-bot-sympathetic
/kaomoji-bot-annoyed
/kaomoji-bot-afraid
/kaomoji-bot-pain
/kaomoji-bot-confused
/kaomoji-bot-surprised
/kaomoji-bot-love

Actions:
/kaomoji-bot-greeting
/kaomoji-bot-winking
/kaomoji-bot-hugging
/kaomoji-bot-writing
/kaomoji-bot-running
/kaomoji-bot-sleeping
`
  });
});