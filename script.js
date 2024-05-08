document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (validateForm()) {
        
        alert('Formulario enviado correctamente');
        form.reset();
      } else {
        alert('Por favor, completa todos los campos obligatorios.');
      }
    });
  
    function validateForm() {
      const nombre = document.getElementById('nombre').value;
      const email = document.getElementById('email').value;
      const telefono = document.getElementById('telefono').value;
      const materia = document.getElementById('materia').value;
      const nivel = document.querySelector('input[name="nivel"]:checked');
  
      if (nombre === '' || email === '' || telefono === '' || materia === '' || !nivel) {
        return false;
      }
      return true;
    }
  });
  