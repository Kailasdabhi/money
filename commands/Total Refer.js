/*CMD
  command: Total Refer
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let referrer = Libs.ReferralLib.currentUser.attractedByUser();
let ref = amount * 0.10;

if(referrer){
  let referrerRes = Libs.ResourcesLib.anotherUserRes("balance", referrer.telegramid);
let referrerTotalDeposit = let referrerTotalGain = Libs.ResourcesLib.anotherUserRes("TotalGain", referrer.telegramid);

referrerRes.add(ref);
referrerTotalDeposit.add(amount);
referrerTotalGain.add(ref);

Bot.sendMessageToChatWithId(referrer.telegramid, "Text");
}
