const frmEmail = document.getElementById('frmEmail');

const serviceId = window.EMAILJS_SERVICE_ID;
const templateId = window.EMAILJS_TEMPLATE_ID;
const apikey = window.EMAILJS_API_KEY;

console.log(`Service ID: ${serviceId}`);
console.log(`Template ID: ${templateId}`);
console.log(`API Key: ${apikey}`);

frmEmail.addEventListener('submit', sendEmail);

function sendEmail(e) {
    e.preventDefault();

    if (!serviceId || !templateId || !apikey) {
        console.error('Variables de entorno no definidas correctamente.');
        return;
    }

    emailjs.init(serviceId);

    emailjs.sendForm(serviceId, templateId, frmEmail, apikey)
    .then(result => {
        Swal.fire('Mensaje enviado', 'Gracias por contactarnos.');
        frmEmail.reset(); // Reinicia el formulario después de enviar
    })
    .catch((error) => {
        console.error('Error al enviar el formulario:', error);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salió mal, inténtalo de nuevo.'
        });
    });
}
