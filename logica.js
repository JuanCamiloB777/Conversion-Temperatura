const datos = document.getElementById("inputGrados")
const boton = document.getElementById("convertirTemp")
const resultado = document.getElementById("resultado")

boton.addEventListener("click",function(){
    const datosNumero = Number(datos.value)
    if(datosNumero===0){
        resultado.innerHTML = `<li class="conversion fs-5">Agrega un valor valido porfis :3</li>`
        return;
    }

    const Fahren = ((datosNumero*1.8)+32)
    const Kelvin = (datosNumero+273.15)
    resultado.innerHTML = `
    <li class="conversion fs-4">
    Grados Fan: ${Fahren}
    </li>
    <li class="conversion fs-4">
    Grados Kelvin: ${Kelvin}
    </li>
    `
})