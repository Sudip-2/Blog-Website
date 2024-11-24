self.addEventListener("push",async (e) => {
    const data =  await e.data.json()
    self.registration.showNotification(data.title, {body:data.body,
        icon:data.icon
    })
})