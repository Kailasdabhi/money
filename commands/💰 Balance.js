/*CMD
  command: 💰 Balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type!="private"){ return }

let res = Libs.ResourcesLib.userRes("balance");
Bot.sendMessage("Available Balance Rs:" + res.value());

