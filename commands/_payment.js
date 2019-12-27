/*CMD
  command: /payment
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

...
// part of code for /payment

if(oneTimePassword==message){
  ...
  var secret = "GJHURFVJLHF" // use own secret. You can store it in property
  Bot.runCommand("/setBalance");
  Bot.sendMessage("Thank you for payment!");
}
