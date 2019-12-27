/*CMD
  command: /c
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

function refLink(MajesticDogeMiningBot){
return "https://t.me/"+MajesticDogeMiningBot+"?start="+user.telegramid
}
referralLink = refLink("MajesticDogeMiningBot")

Bot.sendMessage("✨You will receive free 50 GH/s for evey person that click through your referral link" + \n referralLink + "💡To check your invited user click /reflist ");
let res = Libs.ResourcesLib.userRes("Hash"); 
Bot.sendMessage("🎁 Total GH/s you earned from Referral" + res.have()-150);
