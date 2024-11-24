const followBtn = document.getElementById('follow-btn')
let personalApiUrl = "https://personal-blog-site-zeta.vercel.app/"
const publicKey = "BMfrE1Hs_o8ZLdb8YUYu6aDk7Hq259HEOUNg7nj6rt1mKyRazcerRHAAM70gQOGN-bR0v6OXZJ7YXQTN3DmDXvA"

followBtn.addEventListener('click', async () => {
    regServiceWorker()
})

function regServiceWorker() {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
        console.log('Service Worker and Push are supported');

        navigator.serviceWorker.register('../javascript/sw.js')
            .then(function (swReg) {
                console.log('Service Worker is registered', swReg);

                let swRegistration = swReg;
                initializeUI(swRegistration)
            })
            .catch(function (error) {
                console.error('Service Worker Error', error);
            });
    } else {
        console.warn('Push messaging is not supported');
    }

}

const urlBase64ToUint8Array = base64String => {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }

    return outputArray;
}

function initializeUI(swRegistration) {
    swRegistration.pushManager.getSubscription()
        .then(function (subscription) {
            isSubscribed = !(subscription === null);

            if (isSubscribed) {
                console.log('User IS subscribed.');
            } else {
                console.log('User is NOT subscribed.');
                swRegistration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: urlBase64ToUint8Array(publicKey)
                }).then(function (pushSubObj) {
                    console.log(pushSubObj)
                    fetch(`${personalApiUrl}user/save-subscription`, {
                        method: 'post',
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(pushSubObj)
                    })
                })

            }
        });
}