/*CMD
  command: /onGetOutTransactions
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let parther_link=Libs.ReferralLib.currentUser.getRefLink("Filmore","user");
Bot.sendMessage("👤  " + user.username +  " Your referral link \n \n "+parther_link);
let refid=params
let refcount = Libs.ResourcesLib.userRes("balance"); 
Bot.sendMessage("🎁 Total GH/s you earned from Referral" + res.have()-150);

var buttons = [
   [   { title: " Investment ", command: "touch" } ]
]
Bot.sendInlineKeyboard(buttons,"welcome");

if(chat.chat_type!="private"){ return }

let res = Libs.ResourcesLib.userRes("balance");
Bot.sendMessage("You have: " + res.value() + "√");

