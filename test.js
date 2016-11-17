var first = document.querySelector('#number1');

var result = document.querySelector('.result');

/** dedicate worker case */
if (window.Worker) {
    var myWorker = new Worker("worker.js");

    first.onchange = function() {
      myWorker.postMessage({
          first: first.value,
          second: first.value
      });
    };

    myWorker.onmessage = function(e) {
        result.innerHTML = e.data;
    };
}

/** shared worker case */
// if (window.SharedWorker) {
//     var myWorker = new SharedWorker("shared_worker.js");

//     first.onchange = function() {
//       myWorker.port.postMessage({
//           first: first.value,
//           second: first.value
//       });
//     };

//     myWorker.port.onmessage = function(e) {
//         result.innerHTML = e.data;
//     };
// }

