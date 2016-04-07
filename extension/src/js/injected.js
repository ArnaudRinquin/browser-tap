window.tapExtension = function(test) {

    const buffer = [];

    function postToContentScript(action) {
        // send message to contentScript.js
        window.postMessage(JSON.parse(JSON.stringify({
            action: {
                ...action,
                type: `tapResult/${action.type}`,
            },
            source: 'browser-tap-extension',
      })), '*');
    }

    window.pingTapExtension = function(){
        postToContentScript({
            type: 'init'
        });
    };

    window.pingTapExtension();

    window.startTesting = function startTesting(callback){

        const htest = test.createHarness();
        htest.createStream({ objectMode: true }).on('data', postToContentScript);

        htest.onFinish(postToContentScript.bind(null, {
            type:'endAll',
        }));

        buffer.forEach(function(originalArgs){
            htest.apply(null, originalArgs);
        });

    };

    return function wrapper() {
        buffer.push(arguments);
    };
}
