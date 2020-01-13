



function ping() {
  chrome.runtime.sendMessage('ping', response => {
    if(chrome.runtime.lastError) {
      setTimeout(ping, 1000);
    } else {
      // Do whatever you want, background script is ready now
      console.log(response);
      // const div = document.createElement('div')
      // div.textContent = `${response.url} url`
      // document.body.appendChild(div)


      var qrcode = new QRCode(document.getElementById("qrcode"), {
        width : 100,
        height : 100
      });

      qrcode.makeCode("https://www.youtube.com/user/VoidRealms");


     alert("ready");
  }
});
}

ping();