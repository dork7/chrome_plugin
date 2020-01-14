///// just some random code xX
function ping() {
  chrome.runtime.sendMessage('ping', response => {
    if(chrome.runtime.lastError) {
      setTimeout(ping, 1000);
    } else {
        var video = document.getElementsByTagName("video")[0];
        alert(video);
      // alert("ready");
      // Do whatever you want, background script is ready now
      console.log(video.currentTime);
            
    }
  });
}
// //document.addEventListener('click', () => alert('Click occurred! in content'));

ping();
console.log("content script");