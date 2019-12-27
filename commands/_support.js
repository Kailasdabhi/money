/*CMD
  command: /support
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg = data.message;
if (data.message== "Back"){
Bot.runCommand("/home")
}else{
var admin_chat = Bot.getProperty("admin_chat");
if(!admin_chat){
Bot.sendMessage("Sorry. Bot Have Not Admin now");
return
}
user_link = Libs.commonLib.getLinkFor(user)

msg = "*📍 A Chat MESSAGE Received From:* " + user_link +"\n\n✏️ Message: " + message +"\n\n*Give Him a Reply 🔽*\n/AdminRP" + user.telegramid;

Bot.sendMessageToChatWithId(admin_chat, msg);

Bot.sendMessage("*✅ Your Message Was Send*");
}
