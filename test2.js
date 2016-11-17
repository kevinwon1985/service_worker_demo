if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service_worker.js', {
        scope: './'
    }).then(function (registration) {
        var serviceWorker;
        if (registration.installing) {
            serviceWorker = registration.installing;
            console.log('serviceWorker installing');
        } else if (registration.waiting) {
            serviceWorker = registration.waiting;
            console.log('serviceWorker waiting');
        } else if (registration.active) {
            serviceWorker = registration.active;
            console.log('serviceWorker active');
        }
        if (serviceWorker) {
            // logState(serviceWorker.state);
            serviceWorker.addEventListener('statechange', function (e) {
            	console.log('statechange', e);
            });
        }
    }).catch (function (error) {
    	console.error(error)
    });
} else {
	console.log('not support');
}