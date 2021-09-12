export const guardarDatosForm = (nombreFinal, correoFinal, nacimientoFinal, numeroFinal) => {
    sessionStorage.setItem("nombreCompleto",nombreFinal);
    sessionStorage.setItem("correoElectronico",correoFinal);
    sessionStorage.setItem("fechaNacimiento",nacimientoFinal);
    sessionStorage.setItem("numeroCelular",numeroFinal);
}
