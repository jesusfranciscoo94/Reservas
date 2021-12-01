document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "528112743002";

  let cliente = document.querySelector("#cliente").value;
  let calle = document.querySelector("#calle").value;
  let colonia = document.querySelector("#colonia").value;
  let numeroexterior = document.querySelector("#numeroexterior").value;
  let municipio = document.querySelector("#municipio").value;
  let codigopostal = document.querySelector("#codigopostal").value;
  let numerocelular = document.querySelector("#numerocelular").value;
  let referencias = document.querySelector("#referencias").value;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		*_MI NEGOCIO_*%0A
		*Reservas*%0A%0A
		*¿Cuál es tu nombre?*%0A
		${cliente}%0A
    *¿Cuál es tu calle?*%0A
		${calle}%0A
    *¿Cuál es tu colonia?*%0A
		${colonia}%0A
    *¿Cuál es tu numero exterior?*%0A
		${numeroexterior}%0A
    *¿Cuál es tu municipio?*%0A
		${municipio}%0A
    *¿Cuál es tu codigo postal?*%0A
		${codigopostal}%0A
    *¿Cuál es tu numero celular?*%0A
		${numerocelular}%0A
		*¿referencias?*%0A
		${referencias}`;

  if (cliente === "" || calle === "" || colonia === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;

  window.open(url);
});
