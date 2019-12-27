/*CMD
  command: /Video
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendPhoto({
  photo: "https://cashboss.in/invite?refcode=58DBC5&source=referral" //put here your photo url
, 
  caption: "Test photo with inline keyboard",

  reply_markup: { inline_keyboard: 
[
[{text: "Test" , callback_data: "Command"}]
]
}
});
