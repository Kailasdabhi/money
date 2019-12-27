/*CMD
  command: /setBalance
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params=="GJHURFVJLHF"){
   let res = Libs.ResourcesLib.userRes("money", tgID);
   res.add(100)
   Bot.sendMessage("Added 100$ for you");
}else{
   Bot.sendMessage("You are hacker!")
}
