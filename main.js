const btn_whatsapp = document.getElementById('whatsapp');
const contact = document.getElementById('contact');

btn_whatsapp.addEventListener('click',() => window.open("https://w.app/DAMS", "_blank"));
contact.addEventListener('click', () => window.location.href = "#contacto");