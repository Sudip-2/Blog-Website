const followBtn = document.getElementById('follow-btn')

const checkpersmission = () => {
    if (!('serviceWorker' in navigator)) {
        throw new Error("No support for service worker")
    }
}

const registersw = async () => {
    await navigator.serviceWorker.register('../javascript/sw.js')
}

const reqNotifyPerm = async () => {
    const permission = await Notification.requestPermission()
    if (permission != 'granted') {
        throw new Error("Notification permission not granted")
    }
}

followBtn.addEventListener('click', async() => {
    checkpersmission()
    await reqNotifyPerm()
    await registersw()
})