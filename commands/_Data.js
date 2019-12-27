/*CMD
  command: /Data
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var d = new Date();
var n = d.toUTCString();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let gett= Libs.DateTimeFormat.format(d," h:M:s T")
let time=gett+"M"
Bot.sendMessage(days[d.getDay()]+" "+d.getDate()+" "+months[d.getMonth()]+" "+d.getFullYear()+" "+time);
