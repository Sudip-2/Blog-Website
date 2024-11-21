let submitbtn = document.getElementById('submitBtnForContactForm')
submitbtn.addEventListener('click',() => {
    let fullName = document.getElementById('nameOfnameEmail')
    let email = document.getElementById('emailOfnameEmail')
    let message = document.getElementById('contactFormMessage')
    let senderProfile = {
        name:fullName.value,
        email:email.value,
        message:message.value
    }
    fetch('https://personal-blog-site-sable.vercel.app/mail/sendmail',{
        method:'post',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(senderProfile)
    })
})