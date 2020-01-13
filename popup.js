
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

  sendResponse({url: window.location.href})

})


//chrome.runtime.onMessage.addListener((request, sender, sendResponse) => sendResponse('pong'));


var qrcode = new QRCode(document.getElementById("qrcode"), {
    width : 100,
    height : 100
});

qrcode.makeCode("https://www.youtube.com/user/VoidRealms");
