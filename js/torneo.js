let obtenerTorneos = () => {
  fetch("http://localhost:8080/api/v1/torneos?subTorneos=false")
    .then((res) => res.json())
    .then((data) => {
      const torneodiv = document.getElementById("our-trainers");
      for (let torneo of data) {
        let nombreTorneo = torneo.nombre;
        let paisTorneo = torneo.Pais.pais;
        let ciudadTorneo = torneo.ciudad;
        let fechafin;
        let fechafinicioTorneo;
        try {
          fechafin = torneo.finInscripcion.split("T")[0];
          fechafinicioTorneo = torneo.inicioTorneo.split("T")[0];
        } catch (e) {
          fechafin = "";
          fechafinicioTorneo = "";
        }

        torneodiv.innerHTML += `<div class="our-trainer-box col-md-6 col-sm-6 col-xs-12">
            <div class="product-image-wrapper">
              <div class="product-content">
                <div class="product-image product-trainer">
                  <a href="trainer-profile.html"
                    ><img src="./images/stage-imagenes/group-of-dancers-428823C.jpg" alt=""
                  /></a>
                </div>
                <div class="info-products">
                  <div class="product-name">
                   <b> <a>${nombreTorneo}</a> </b>
                    <div class="product-bottom"></div>
                  </div>
                  <div class="product-info">
                    <p>
                   <b>Pais:</b> ${paisTorneo}
                        <br>
                        <b>Ciudad:</b>    ${ciudadTorneo}
                        <br>
                        <b>Fecha fin de Inscripcion:</b> ${fechafin}
                        <br>
                        <b>Fecha inicio de Torneo:</b> ${fechafinicioTorneo}
                    </p>
                    <div class="actions">
                       <button id="botonc" class="btn btn-dark"> Inscribirte</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            `;
      }
    })
    .catch((e) => {
      alert("Error al obtener paises");
    });
};

document.addEventListener("DOMContentLoaded", () => {
  obtenerTorneos();
});
