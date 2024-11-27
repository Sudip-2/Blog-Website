let url = "https://personal-blog-site-zeta.vercel.app/"
let submitbtn = document.getElementById('submitBtnForContactForm')
let popup = document.querySelector('#submitPopup')
let popupHeading = document.querySelector('#submitPopupHeading')
submitbtn.addEventListener('click', async () => {
    let fullName = document.getElementById('nameOfnameEmail')
    let email = document.getElementById('emailOfnameEmail')
    let message = document.getElementById('contactFormMessage')
    if(email.value != '' && fullName.value != '' && message.value != '' && email.value.includes('@')){
        let senderProfile = {
            name:fullName.value,
            email:email.value,
            message:message.value
        }
        let response = await fetch(`${url}mail/sendmail`,{
            method:'post',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(senderProfile)
        })
        if(response.status == 200){
            let data = await response.json()
            popupHeading.textContent = data.message
            popup.showModal()
            setTimeout(()=>{
                popup.close()
            },1500)
        }
    }
    if(email.value === '' || !email.value.includes('@') ){
        popupHeading.textContent = "Enter Valid email"
            popup.showModal()
            setTimeout(()=>{
                popup.close()
            },1500)
    }
    if(fullName.value === ''){
        popupHeading.textContent = "Enter Name"
            popup.showModal()
            setTimeout(()=>{
                popup.close()
            },1500)
    }
    if(message.value === ''){
        popupHeading.textContent = "Enter Message"
            popup.showModal()
            setTimeout(()=>{
                popup.close()
            },1500)
    }
})