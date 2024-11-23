// Public Key:
let personalApiUrl = "https://personal-blog-site-zeta.vercel.app/"
const publicKey = "BMfrE1Hs_o8ZLdb8YUYu6aDk7Hq259HEOUNg7nj6rt1mKyRazcerRHAAM70gQOGN-bR0v6OXZJ7YXQTN3DmDXvA"

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

const savesubscription = async (subscription) => {
    const response = await fetch(`${personalApiUrl}notify/save-subscription`,{
        method:'post',
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(subscription)
    })
    return response.json()
}

self.addEventListener('activate',async () => {
    try{
       const subscription = await self.registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicKey)
    })
    await savesubscription(subscription) 
    }
    catch(error){
        throw error
    }
})

self.addEventListener("push",async (e) => {
    const data =  await e.data.json()
    self.registration.showNotification(data.title, {body:data.body,
        icon:data.icon
    })
})