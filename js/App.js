const ingresos= [
    new ingreso('sueldo', 650000),
    new ingreso('reintegro', 150000)
]

const egresos= [
    new egreso('alquiler', 200000),
    new egreso('comida', 100000)
]

let cargarApp = () =>{
    cargarCabezero();
    CargarIngresos();
    CargarEgresos();
}

let totalIngreso= () =>{
    let totalingreso = 0;
    for(let ingreso of ingresos){
        totalingreso += ingreso.valor
    }
    return totalingreso
}

let totalEgreso= () =>{
    let totalegreso = 0;
    for(let egreso of egresos){
        totalegreso += egreso.valor
    }
    return totalegreso
}

let cargarCabezero = () =>{
    let presupuesto= totalIngreso() - totalEgreso();
    let porcentajeEgreso= totalEgreso()/totalIngreso();
    document.getElementById('presupuesto').innerHTML=formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML= formatoPorcentaje(porcentajeEgreso);
    document.getElementById('egreso').innerHTML= formatoMoneda(totalEgreso());
    document.getElementById('ingreso').innerHTML= formatoMoneda(totalIngreso());
}

const formatoMoneda = (valor) =>{
    valor.toLocaleString('es-AR',{style:'currency',currency:'ARS', minimumFractionDigits:2})
    return '$' + valor
}

const formatoPorcentaje = (valor) =>{
    valor.toLocaleString('es-AR',{style:'percent', minimumFractionDigits:2})
    return valor
}

//revisar
const CargarIngresos =() =>{
    let ingresosHTML= '';
    for(let ingresosIterados of ingresos){
        ingresosHTML += CrearIngresosHTML(ingresosIterados);
    }
    document.getElementById('listaIngresos').innerHTML = ingresosHTML;
}

const CrearIngresosHTML= (ingresosIterados)=>{
    let ingresoFinalHTML = `<div class="elemento limpiarEstilos">
     <div class="elemento_descripcion">${ingresosIterados.descripcion}</div>
        <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">${ingresosIterados.valor}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn">
                                <ion-icon name="close-outline"></ion-icon>
                            </button>
                        </div>
                    </div>
        </div>`
        return ingresoFinalHTML
}

const CargarEgresos =() =>{
    let egresosHTML= '';
    for(let egresosIterados of egresos){
        egresosHTML += CrearEgresosHTML(egresosIterados);
    }
    document.getElementById('listaEgresos').innerHTML = egresosHTML;
}

const CrearEgresosHTML= (EgresosIterados)=>{
    let EgresoFinalHTML = `<div class="elemento limpiarEstilos">
     <div class="elemento_descripcion">${EgresosIterados.descripcion}</div>
        <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">${EgresosIterados.valor}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn">
                                <ion-icon name="close-outline"></ion-icon>
                            </button>
                        </div>
                    </div>
        </div>`
        return EgresoFinalHTML
}