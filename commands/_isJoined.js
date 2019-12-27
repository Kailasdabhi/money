/*CMD
  command: /isJoined
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

chanell = "@Data_Manager"

Api.getChatMember({
  chat_id: chanell,
  user_id: user.telegramid,
  on_result :"/onCheckJoin"
})
