self.addEventListener("push",async (e) => {
    const data =  await e.data.json()
    self.registration.showNotification(data.title, {body:data.body,
        icon:data.icon
    })
})

self.addEventListener('notificationclick', function(event) {
    console.log('[Service Worker] Notification click received.');
  
    event.notification.close();
  
    event.waitUntil(
      clients.openWindow('https://sudipblogs.vercel.app/')
    );
  });