/*CMD
  command: /b
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let plan1  = Libs.ResourcesLib.userRes("plan1");
let plan2  = Libs.ResourcesLib.userRes("plan2");
let plan3  = Libs.ResourcesLib.userRes("plan3");
let plan4  = Libs.ResourcesLib.userRes("plan4");
let plan5  = Libs.ResourcesLib.userRes("plan5");

let totalysatoshi  = Libs.ResourcesLib.userRes("totalysatoshi");

let tomake  = Libs.ResourcesLib.userRes("tomake");
let satoshi = (plan1.value()/100000).toFixed(8);

var button = [
[{title : "Collect Satoshi" , command : "Make"}]
]
Bot.sendInlineKeyboard(button,"The machines produced Satoshi:\n\n💻 Cloud M1: "+satoshi+" Satoshi\n💻 Cloud M2: "+plan2.value().toFixed()+" Satoshi\n💻 Cloud M3: "+plan3.value().toFixed()+" Satoshi\n💻 Cloud M4: "+plan4.value().toFixed()+" Satoshi\n💻 Cloud M5: "+plan5.value().toFixed()+" Satoshi\n\nTotally produced: "+totalysatoshi.value().toFixed()+" Satoshi\n\ntotal "+tomake.value().toFixed());
