window.addEventListener('load', (event) => {
    chrome.tabs.executeScript(null,
        { file: 'content.js' },
        connect
        );
});


function connect() {
 document.getElementById("qrcode").innerhtml = "";

 chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    var url = tabs[0].url;
    if (url.includes("watch"))
    {
        var port = chrome.tabs.connect(tabs[0].id);
        document.getElementById("qrcode").innerhtml = "";
        port.postMessage({ function: 'html' });
        port.onMessage.addListener((response) => {
          vtime = response.vtime;
          title = response.title;
          response = "";

        mURL = url.concat("?t=",vtime); // getting url and concatinatin with time


        makeCode(mURL); // making QrCode
////// to display things in popup
//        const div = document.createElement('div')
//        div.textContent = mURL
//      document.body.appendChild(div)



         port.disconnect();
    });
    }
    else {
        // if the current tab is not a youtube video this will execute
        makeCode(url);
    }


});

}

function makeCode(url){
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        width : 200,
        height : 200
    });
    qrcode.makeCode(url);
}
