const frmEmail = document.getElementById('frmEmail')
frmEmail.addEventListener('submit', sendEmail)

const serviceId = EMAILJS_SERVICE_ID;
const templateId = EMAILJS_TEMPLATE_ID;
const apikey = EMAILJS_API_KEY;

console.log(`Service ID: ${serviceId}`);
console.log(`Template ID: ${templateId}`);
console.log(`API Key: ${apikey}`);



function sendEmail(e) {
    e.preventDefault()

    emailjs.init(serviceId)

    emailjs.sendForm(serviceId, templateId, frmEmail, apikey)
    .then(result => {
        Swal.fire('Mensaje enviado', 'Gracias por contactarnos.');
        frmEmail.reset(); // Reinicia el formulario después de enviar
    })
    .catch((error) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salió mal, inténtalo de nuevo.'
        })
    });
}