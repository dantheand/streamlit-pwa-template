// Apply Config
document.addEventListener('DOMContentLoaded', () => {
    // Titles and Meta
    document.title = CONFIG.appName;
    document.getElementById('apple-title').content = CONFIG.appName;
    document.getElementById('theme-color').content = CONFIG.themeColor;
    
    // Icons
    document.getElementById('favicon').href = CONFIG.appIcon;
    document.getElementById('apple-icon').href = CONFIG.appIcon; 
    
    // iframe
    const iframe = document.getElementById('main-iframe');
    iframe.src = CONFIG.iframeUrl;
    
    // Body Background
    document.body.style.backgroundColor = CONFIG.backgroundColor;
    document.getElementById('offline-overlay').style.backgroundColor = CONFIG.backgroundColor;
    
    // Initial Online/Offline Check
    updateOnlineStatus();
});

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

// Online/Offline Handler
function updateOnlineStatus() {
    const overlay = document.getElementById('offline-overlay');
    if (navigator.onLine) {
        overlay.style.display = 'none';
    } else {
        overlay.style.display = 'flex';
    }
}

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);
