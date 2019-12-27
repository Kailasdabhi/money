/*CMD
  command: /loginpassword
  help: 
  need_reply: true
  auto_retry_time: 
  folder: User
  answer: 
  keyboard: 
  aliases: 
CMD*/

User.getProperty("password");

if(data.message=="<password>"){
  Bot.runCommand("/YourCommandforsuccess");
}else{
Bot.sendMessage("❌ Incorrect");
