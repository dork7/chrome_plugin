
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

  sendResponse({url: window.location.href})

}) // sending response to content.js


// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => sendResponse('pong')); //sending response to content.js



chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;


    makeCode(url);
    
    console.log(url);
});
function makeCode(url){ 
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        width : 200,
        height : 200
    });
    qrcode.makeCode(url);
}

 
 // var vid = $('video').get(0);
 // alert(vid);
 // console.log(vid.getCurrentTime());