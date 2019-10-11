if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("/static/service-worker.js")
        .then(registration => {
            window.addEventListener('beforeinstallprompt', (e)=>{
                e.preventDefault();
                window.deferredPrompt = e;
            });
            console.log("service worker registration successful: ", registration);
        })
        .catch(err => {
            console.warn("service worker registration failed", err.message);
        });
}
