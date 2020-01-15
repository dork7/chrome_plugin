// this portion is used for youtube .it send play time of youtube video back to popup 
chrome.runtime.onConnect.addListener((port) => {
  port.onMessage.addListener((msg) => {
    if (msg.function == 'html') {
      var video = document.getElementsByTagName("video")[0];
      console.log(video.currentTime);
      port.postMessage({ vtime: video.currentTime , title: document.title });
    }
  });
});

console.log("content script");
