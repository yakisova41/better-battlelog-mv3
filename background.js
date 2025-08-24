/**
* Background JS for saving options
*/

chrome.runtime.onConnect.addListener((port) => {
    if (port.name === "storage") {
      port.onMessage.addListener(async (msg) => {
        if (msg.action === "get") {
          chrome.storage.local.get("BBLogStorage", (data) => {
            const storageObject = data.BBLogStorage || {};
            port.postMessage({
              BBLogStorage: storageObject,
              action: "get",
            });
          });
        }
  
        if (msg.action === "save") {
          chrome.storage.local.set({ BBLogStorage: msg.storageObject }, () => {
            port.postMessage({ action: "save", status: "ok" });
          });
        }

        if(msg.action === "bf4" || msg.action === "bf3") {
          injectScriptToMain(port, msg.action, [ 
            "/shared/bblog-translations-compressed.js"
          ], false);
        }

        if(msg.action === "bf4") {
          injectScriptToMain(port, "bf4", [ 
            "/shared/bblog-bf4weapons.js",
            "/shared/charts_loader.js",
            "/shared/html2canvas.min.js"
          ])
        }

        if(msg.action === "bf3") {
          injectScriptToMain(port, "bf4", [ 
            "/shared/bblog-weapons-compressed.js"
          ])
        }

        if(msg.action === "load") {
          injectScriptToMain(port, "load", [ 
            "/shared/bblog.js"
          ])
        }
      });
    }
  });


function injectScriptToMain(port, action, files, responseResultToPort = true) {
  chrome.scripting.executeScript({
    target : {tabId :  port.sender.tab?.id},
    files,
    world:"MAIN"
  }).then((results) => {
    if(responseResultToPort) {
      port.postMessage({ action, status: "ok" });
    }
  })
}