/*CMD
  command: 🎁 Bonus
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var daily_earn = User.getProperty("daily_earn");
if(daily_earn){
   duration_in_hours = ((new Date()) - daily_earn) / 1000/60/60;
}else{
   // It is the first time!
   duration_in_hours = 99;
}
if(duration_in_hours>=24){
   User.setProperty("daily_earn", (new Date()), "datetime");
   // add your code



let d=Math.random(20,720)
let am=d/1

//Bot.sendMessage(" *You Reicived:* "+am.toFixed(2)+" Balance")


let res = Libs.ResourcesLib.userRes("balance");
res.add (am);
Bot.sendMessage( "🔋 You earned " +am.toFixed(2)+ " Balance ");

}else{
   Bot.sendMessage("*❌ You have already received a bonus in the last 24 hours*");
}
