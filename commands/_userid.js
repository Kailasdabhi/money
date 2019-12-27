/*CMD
  command: /userid
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: **inter userid**
  keyboard: 
  aliases: 
CMD*/

let userid = message;
User.setProperty("userid", userid, "integer");
Bot.runCommand('/addbalancetouser')
