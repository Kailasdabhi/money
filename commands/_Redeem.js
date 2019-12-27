/*CMD
  command: /Redeem
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(amounts>=50){
balans.removeAnyway(parseFloat(msg));
total.add(parseFloat(msg));
widrawn.add(parseFloat(msg));
Bot.sendMessage("💵 Withdrawal Succesful\nWe're sending your payment right now\n\nPlease allow up to 48hours to be completed"); 

Bot.sendMessageToChatWithId(yourTgid, "One of your investor @"+user.username+" has withdrawn his/her profit of "+msg+" Doge please send to his withdrawal address "+wallet+"");
