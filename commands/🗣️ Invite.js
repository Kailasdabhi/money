/*CMD
  command: 🗣️ Invite
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let parther_link=Libs.ReferralLib.currentUser.getRefLink("Filmorebot");
Bot.sendMessage("👤 " + user.first_name +  " ✨You will receive Rs:1.0 for evey person that click through your referral link \n \n "+parther_link);



