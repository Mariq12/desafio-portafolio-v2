const frmEmail = document.getElementById('frmEmail');

const serviceId = 'service_XXXXX';
const templateId = 'template_XXXXX';
const apikey = 'XXXXXX'; 

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
