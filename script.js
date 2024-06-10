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

  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      document.getElementById('inicio-titulo').textContent = data.inicio.titulo;
      document.getElementById('inicio-descripcion').textContent = data.inicio.descripcion;

      document.getElementById('nosotros-titulo').textContent = data.nosotros.titulo;
      document.getElementById('nosotros-descripcion').textContent = data.nosotros.descripcion;

      const serviciosGrid = document.getElementById('servicios-grid');
      data.servicios.forEach(servicio => {
        const servicioDiv = document.createElement('div');
        servicioDiv.classList.add('servicio');

        const servicioNombre = document.createElement('h3');
        servicioNombre.textContent = servicio.nombre;

        const servicioDescripcion = document.createElement('p');
        servicioDescripcion.textContent = servicio.descripcion;

        servicioDiv.appendChild(servicioNombre);
        servicioDiv.appendChild(servicioDescripcion);

        serviciosGrid.appendChild(servicioDiv);
      });
    })
    .catch(error => console.error('Error fetching data:', error));
});
