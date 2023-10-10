chrome.runtime.onInstalled.addListener(function(){	
	chrome.tabs.query({url: ["*://www.youtube.com/*" , "*://vimeo.com/*" , "*://rutube.ru/*", "*://www.twitch.tv/*" , "*://seasonvar.ru/*" , "*://www.facebook.com/*" , "*://ok.ru/*" , "*://vk.com/*" , "*://www.netflix.com/*"]}, function (tabs) {
    if (tabs.length != 0) {
	for (var i = 0; i < tabs.length; i++) {chrome.tabs.reload(tabs[i].id)}
	 }})
     //window.open('', '_blank')
     //chrome.tabs.create({url:""});
  })

  chrome.runtime.onMessage.addListener( function (request, sender, sendResponse) {
    console.log("Got message from content Script: ", request);
    sendResponse('OK');
})


  
  
  
