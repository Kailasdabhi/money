/*CMD
  command: /http
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

  HTTP.get( {
    url: "http://google.com",
    success: '/onLoading',
    error: '/onError'
    // headers: headers - if you need headers
  } )

/* also you can send POST request
  HTTP.post( {
    url: "http://example.com",
    success: '/onLoading ',
    body: {},  // body params
    // cookies: "" // cookies   
    // headers: headers - if you need headers
  } )
*/
