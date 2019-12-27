/*CMD
  command: /Admin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: User
  answer: 
  keyboard: 
  aliases: 
CMD*/


if(message==user.username){

Bot.sendMessage("Success  Set User Name");

Bot.setProperty("userName"+user.telegramid,message,"text");

}else{
Bot.sendMessage("🔄check username");

Bot.sendMessage("❌Incorrect");

}
