
self.lastResult = '';
onmessage = function(e) {
	var fs = require('fs');

    console.log('worker.js: Message received from main script');
    var workerResult = self.lastResult + '<br />Result: ' + (e.data.first * e.data.second);
    self.lastResult = workerResult;
    postMessage(workerResult);
}

onerror = function(e) {
    console.error(e);
}