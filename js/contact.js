let enviarFormulario = (e) => {
    const email = document.getElementById("email").value;
    const nombre = document.getElementById("nombre").value;
    const pais = document.getElementById("pais").value;
    const mensaje= document.getElementById("message").value;
    const data = {
        email: email,
        nombre: nombre,
        pais: pais,
        mensaje: mensaje
    }

    var xhr = new XMLHttpRequest();
    var url = "http://localhost8080.com/api/v1/contactos";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert('Formulario enviado correctamente')
            document.getElementById('form').reset();
        }
    };
    try {

        xhr.send(JSON.stringify(data));
    } catch (e) {
        alert('Error al enviar formulario')
    }
}

let obtenerPaises = () => {
    fetch('http://localhost:8080/api/v1/paises').then(res =>
        res.json()
    ).then(data => {
        const paisSelect = document.getElementById('pais');
        for (let pais of data) {
            let paisOption = document.createElement('option');
            paisOption.value = pais.id;
            paisOption.text = pais.pais
            paisSelect.appendChild(paisOption);
        }
    }).catch(e => {
        alert('Error al obtener paises');
    });

}

document.addEventListener("DOMContentLoaded", () => {
    obtenerPaises();
  });
