//Contact form
const form = document.querySelector('.contact_form');
function sendEmail(e) {
    e.preventDefault()

    const name = document.querySelector('.name');
    const email = document.querySelector('.email');
    const subject = document.querySelector('.subject');
    const message = document.querySelector('.message');
    const templateParams = {
        to_name: name,
        from_name: 'shean',
        message: message,
        reply_to: email,
        subject: subject
    };
    emailjs.send("service_eo2czsu", "template_4qlvqcr", templateParams, "VACIso3FT4AJt_17d").then(function(res){console.log(res)});
}

form.addEventListener('submit', sendEmail);
