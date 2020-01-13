
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

  sendResponse({url: window.location.href})

})


//chrome.runtime.onMessage.addListener((request, sender, sendResponse) => sendResponse('pong'));

