
// handle messages from inject.js
window.addEventListener('message', function(event) {
  // Only accept messages from the same frame
  if (event.source !== window) {
    return;
  }

  var message = event.data;

  // Only accept messages that we know are ours
  if (typeof message !== 'object' || message === null ||
      !message.source === 'browser-tap-extension') {
    return;
  }

  if (message.action) chrome.runtime.sendMessage(message.action);
});

var s = document.createElement('script');
s.type = 'text/javascript';

var script = require('raw!./injected.js');
s.appendChild(document.createTextNode(script));
(document.head || document.documentElement).appendChild(s);
s.parentNode.removeChild(s);
