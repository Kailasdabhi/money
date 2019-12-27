/*CMD
  command: 💸 Withdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(message == "Cancel 🚫"){
  
 Bot.runCommand("/start");
return
}

let balance = User.getProperty("balance");
if (balance){
Bot.sendMessage(" ❗️ You must set your Payout Address First.")
return
}
let res = Libs.ResourcesLib.userRes("balance")
if(res.value()>=100){
Bot.runCommand("/start")
}else{
     Bot.sendMessage("❌ *Sorry Minimum Payout is Rs.100*")
}
