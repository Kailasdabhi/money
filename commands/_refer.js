/*CMD
  command: /refer
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let parther_link=Libs.ReferralLib.currentUser.getRefLink("Filmore","user");
Bot.sendMessage("👤   " + user.username +  " ✨You will receive free 50 GH/s for evey person that click through your referral link \n \n "+parther_link);
