// data/configEmailJS.js

const frmEmail = document.getElementById('frmEmail');

const serviceId = process.env.EMAILJS_SERVICE_ID;
const templateId = process.env.EMAILJS_TEMPLATE_ID;
const apikey = process.env.EMAILJS_API_KEY;

console.log(`Service ID: ${serviceId}`);
console.log(`Template ID: ${templateId}`);
console.log(`API Key: ${apikey}`);

frmEmail.addEventListener('submit', sendEmail);

function sendEmail(e) {
    e.preventDefault();

    emailjs.init(serviceId);

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
        });
    });
}
