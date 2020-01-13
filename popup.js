
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

  sendResponse({url: window.location.href})

})


//chrome.runtime.onMessage.addListener((request, sender, sendResponse) => sendResponse('pong'));



chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    makeCode(url);
    
});
function makeCode(url){
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        width : 200,
        height : 200
    });
    qrcode.makeCode(url);
}