self.lastResult = '';
onconnect = function(e) {
  var port = e.ports[0];

  port.onmessage = function(e) {
	  console.log('worker.js: Message received from main script');
	  var workerResult = self.lastResult + '<br />Result: ' + (e.data.first * e.data.second);
	  self.lastResult = workerResult;
	  port.postMessage(workerResult);
  }
}