/*CMD
  command: /addbalancetouser
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: **Inter amount**
  keyboard: 
  aliases: 
CMD*/

 let res= Libs.ResourcesLib.userRes("balance", tgID);
   res.add(100)
   Bot.sendMessage("Added 100$ for you");
}else{
   Bot.sendMessage("You are hacker!")
}
