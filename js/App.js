const ingresos= [
    new ingreso('sueldo', 650000),
    new ingreso('reintegro', 150000)
]

const egresos= [
    new egreso('alquiler', 200000),
    new egreso('comida', 100000)
]

let cargarApp = () =>{
    cargarCabezero()
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
    document.getElementById('presupuesto').innerHTML=presupuesto;
    document.getElementById('porcentaje').innerHTML= porcentajeEgreso;
    document.getElementById('egreso').innerHTML= totalEgreso();
    document.getElementById('ingreso').innerHTML= totalIngreso();
}