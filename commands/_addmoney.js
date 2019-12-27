/*CMD
  command: /addmoney
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let balance = message;
let userid = getProperty("userid")
let userRes = Libs.ResourcesLib.AnotherUserRes("balance", userid)
userRes.add(balance)
