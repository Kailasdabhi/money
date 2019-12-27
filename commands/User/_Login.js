/*CMD
  command: /Login
  help: 
  need_reply: true
  auto_retry_time: 
  folder: User
  answer: 
  keyboard: 
  aliases: 
CMD*/

User.getProperty("username");

if(data.message=="<username>"){
  Bot.runCommand("/loginpassword");
}else{
Bot.sendMessage("❌ This Username is not Registered yet");
