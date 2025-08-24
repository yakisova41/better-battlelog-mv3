/**
* Init Better Battlog for chrome
*/

const ivb = setInterval(() => {
    if (!document.head || !document.body || !window || !window.postMessage) return;
    clearInterval(ivb);
  
    const version = "5.3.2";
  
    // get settings from background page and than inject
    const port = chrome.runtime.connect({ name: "storage" });
    port.postMessage({ action: "get" });
    port.onMessage.addListener((msg) => {
      if (msg.action === "get") {
        if(document.getElementById("base-bf4-html")){
          sendInjectMsg(port, "bf4").then(
            inject(window.document, version, chrome.runtime.getURL("shared"), msg.BBLogStorage)
          );
        }
        if(document.getElementById("base-bf3-html")){
          sendInjectMsg(port, "bf3")
        }
      }
    });
  
    window.addEventListener(
      "message",
      (event) => {
        if (event.data.action === "store") {
          port.postMessage({ action: "save", storageObject: event.data.data });
        }
      },
      false
    );
  }, 5);


function sendInjectMsg(port, game) {
  return new Promise((resolve) => {
    port.postMessage({ action: game });
    const l = (msg) => {
      if (msg.action === game) {
        port.postMessage({ action: "load" });
        port.onMessage.removeListener(l);
        resolve(1);
      }
    }
    port.onMessage.addListener(l);    
  })

}