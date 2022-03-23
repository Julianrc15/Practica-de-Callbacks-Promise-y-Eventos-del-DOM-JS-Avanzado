let nombreEmpleado=document.getElementById('nombreEmpleado');
let salarioEmpleado=document.getElementById('salarioEmpleado');
let valorVentas=document.getElementById('valorVenta');

const mensajeNombre=document.getElementById('mensajeNombre')
const mensajeSalario=document.getElementById('mensajeSalario')
const mensajeVenta=document.getElementById('mensajeVenta')



//select
let zonas=document.getElementById('zonas');
let zona=zonas.value;





let valorComision=document.getElementById('valorComision')
let totalPago=document.getElementById('totalPago')

let btnCalcular = document.getElementById('btnCalcular')




// eventos del DOM
//al recibir foco - función anonima (también se puede con función flecha)
nombreEmpleado.onfocus=function() {
    mensajeNombre.innerHTML="*Solo se aceptan letras y/o espacios"
}
//al quitar foco - función flecha (también se puede con función anonima)
nombreEmpleado.onblur=()=>{
    mensajeNombre.innerHTML=""
}

//ADDlistener

valorVentas.addEventListener('focus', function(){
    mensajeVenta.innerHTML="*Valor de ventas debe estar entre 1 millón y 50 millones"
})

valorVentas.addEventListener('blur', function(){
    mensajeVenta.innerHTML=""
})





//Funcion principal

function calcularSalario(salarioEmpleado,valorVentas,zona){
let comision=0;
    switch( zona ){

        case "norte": comision = (parseFloat(valorVentas)*5)/100;
        valorComision.innerHTML= comision;
        totalPago.innerHTML= parseFloat(salarioEmpleado)+comision;
        break
        case "sur": comision = (parseFloat(valorVentas)*4)/100; 
        valorComision.innerHTML= comision;
        totalPago.innerHTML= parseFloat(salarioEmpleado)+comision;
        break
        case "oriente": comision = (parseFloat(valorVentas)*3)/100; 
        valorComision.innerHTML= comision;
        totalPago.innerHTML= parseFloat(salarioEmpleado)+comision;
        break
        default: 
        window.alert("Zona no valida, por favor eliga zona valida.");
        break
    }



  
}

btnCalcular.addEventListener('click',()=>calcularSalario(salarioEmpleado.value,valorVentas.value,zonas.value))