/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

function hello(message){
  let greetings = "Hello, " + 
  user.first_name + " " + 
  user.last_name + 
  "(" + user.username + ") ! \nTelegramID: " + 
  user.telegramid + "\n\n";

  Bot.sendMessage(greetings + "\n" + message);
}

function doTouchOwnLink(){
  Bot.sendMessage("You click on yours own link!");
}

function doAttracted(channel){
  hello("Referal: " + channel);
}

function doAtractedByUser(refUser){
  hello("ℹ️ You were invited by user : " + 
    refUser.first_name + " @" + refUser.username);
  
  Bot.sendMessageToChatWithId(refUser.chatId, 
    "You just Joined new user: @" + user.username);
}

function doAlreadyAttracted(){
  Bot.sendMessage("ℹ️ You are the user of this bot already.");
}

let trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions);
var buttons = [
    {title: "Join To Channel", url: "https://t.me/Data_Manager"},
    {title: "Joined", command: "/isJoined" }
];

Bot.sendInlineKeyboard(buttons, "Please Join To Data Manager Channel");
