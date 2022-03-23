let nombres =["María de los Ángeles","Juan Fernando Pérez del Corral",
"Matías de Greiff Rincón","Manuela del Pino Hincapié","Sebastián del Campo Yepes",
"Sofía del Río Arango","Ana María de la Peña Posada","Mónica Patricia de Ávalos Mendoza",
"Efraín de las Casas Mejía","Óscar de la Renta","Valentina Laverde de la Rosa",
"Marcela Rincón de Jaramillo","Marcos Zabala La Paz","Daniel La Roche Zuluaga","Margarita Suárez de Muñoz",]

let listaTrabajadores=document.getElementById("listaTrabajadores")
let btnListar = document.getElementById("btnListar")

// console.log(documento);



let trabajadores=[];


for (let i=0; i<50;i++){

    let trabajador={}
    trabajador.nombre =nombres[ Math.floor(Math.random()*nombres.length)]
    trabajador.documento= Math.floor(Math.random()*45687897);
    trabajador.salario= Math.floor(Math.random()*1975000);

    trabajadores.push(trabajador)
   
}

console.log(trabajadores)

function filtrarTrabajadores(trabajadores,buscarTrabajadores){
    let trabajadoresFiltrados = trabajadores.filter(function(trabajador){
        return (trabajador.salario>1000000)
    })
    buscarTrabajadores(trabajadoresFiltrados)
}


// btnListar.addEventListener('click', function(){
//     cargando.innerHTML="*Cargando lista de usuarios...."
//     console.log("cargando")
// })

function promesafiltrarTrabajadores(trabajadores){

   

    return new Promise(function(resolve, reject){
        let html = "";
        html +=`<label>Cargando Usuarios</label>`

        setTimeout(()=>{
            let estado =true;
            if(estado){
                resolve(trabajadores)
            }else{
                let html = "";
                html +=`<label>No hay usuarios que cumplan parametro</label>`
                reject(html)
            }


        },5000)

    })

}
//Ejecutar promesa

promesafiltrarTrabajadores(trabajadores)
    .then((data)=>{
                //Recorrer arreglo de objetos
                let html = "";
                html += `<table class="table table-striped table-hover"><th>Nombre</th><th>Documento</th><th>Salario</th>`
                for(let i=0; i<data.length; i++){
                    html += `<tr>
                                <td>${data[i].nombre}</td>
                                <td>${data[i].documento}</td>
                                <td>${data[i].salario}</td>
                                
                            </tr>`;
                }
                html += `</table>`
                document.getElementById('listaTrabajadores').innerHTML = html;
            })
            .catch((error)=>{
                
                document.getElementById('listaTrabajadores').innerHTML = error;
    })