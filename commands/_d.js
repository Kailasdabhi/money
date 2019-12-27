/*CMD
  command: /d
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let referrer = Libs.ReferralLib.currentUser.attractedByUser();
let reff = amount * 0.15;

if(referrer){
  let referrerRes = Libs.ResourcesLib.anotherUserRes("balance", referrer.telegramid);
referrerRes.add(reff);
let referrerReff = Libs.ResourcesLib.anotherUserRes("Reff", referrer.telegramid);
referrerReff.add(reff);
let referrerD = Libs.ResourcesLib.anotherUserRes("balance", referrer.telegramid);
referrerD.add(amount);
Bot.sendMessageToChatWithId(referrer.telegramid,"✅ Referral commision: +"+reff.toFixed(2)+" DOGE");
}
