/*CMD
  command: /s
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type!="private"){
Bot.sendMessage("click me to use me");
return
}else{

let lib = Libs.ReferralLib;
let reflist = lib.currentUser.refList;
reflist = lib.currentUser.refList.get();
let tgid = user.telegramid
let reflink = Libs.ReferralLib.currentUser.getRefLink("Filmorebot", "");

let msg;
if(reflist.length>0){
  msg = reflist.length;
}else{
  msg = "0";
}
Bot.sendMessage("*❤️ Share and earn free Dogecoin from every deposit your referral makes!\nWe have 1 level affiliate coomision!\n\n1️⃣ Level - 15%*"); 

Bot.sendMessage("⚡Yᴏᴜʀ ʟɪɴᴋ ᴛᴏ ꜱʜᴀʀᴇ ᴡɪᴛʜ ғʀɪᴇɴᴅꜱ:\n"+reflink);

let totalref = Libs.ResourcesLib.userRes("refUser");


let balance = Libs.ResourcesLib.userRes("balance");

 


var button = [
[{title : "Show My Referrals" , command : "Command"}]
]
Bot.sendInlineKeyboard(button,"*📑 Referrals Statistics*\n_Track your referrals deposits and earnings_\n\n*1° Level:* "+msg+" users\n\n*​​​​​​​​​​​​​​​​​​​​👥 Total Deposits:* "+balance.value().toFixed(2)+" ​​​​​​​​​​​​​​​​​​​​Rs\n*​​​​​​​​​​​♾ Earnings:* "+refUser.value().toFixed(2)+" ​​​​​​​Rs");


}
