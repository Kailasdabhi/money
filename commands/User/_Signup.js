/*CMD
  command: /Signup
  help: 
  need_reply: true
  auto_retry_time: 
  folder: User
  answer: 
  keyboard: 
  aliases: 
CMD*/

User.setProperty("username", data.message, "string");
Bot.runCommand("/setpassword");
