
let TT = 0
const ciudades = Number(prompt('ingresa las sucursales que hay en la republica mexicana')) //5
//ciclo de las ciudades
for(let i = 1; i <= ciudades; i++){
    const tiendas = Number(prompt('ingresa las sucursales que hay en la ciudad ${i} '))//2
    let ST = 0
    //ciclo tiendas
    for (let j = 1; j <= tiendas; j++){
        const empleados = Number(prompt('ingresa el numero de empleados que tienes en tienda ${j}'))
    let SE = 0
    //ciclo de empleados
        for (let k = 1; k <= empleados; k++){
            const venta = Number(prompt('ingresa el monto de venta de empleado ${k}'))
            SE = SE + venta //3500
        }
        console.log('El numero de empleados es ${empleados}')
        ST = ST+SE
        console.log('la venta de la tienda ${i} es de: $ ${SE} ')
    }
}