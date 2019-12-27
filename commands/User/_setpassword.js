/*CMD
  command: /setpassword
  help: 
  need_reply: true
  auto_retry_time: 
  folder: User
  answer: Send Password
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage("✅ Successful Signup, now you can Login");
User.setProperty("password", data.message, "string");
