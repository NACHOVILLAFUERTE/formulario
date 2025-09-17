document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('miFormulario');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        alert(`Nombre: ${nombre}\nEmail: ${email}`);
        // Aquí puedes agregar lógica para enviar los datos al servidor
    });
});