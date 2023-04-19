const taza = {
    capacidad: 500,
    peso: '20g',
    material: 'porcelana',
    color: 'champage',
    diseño: 'taza ingenio en sofware'
}

const foco = {
    color: 'blanco',
    forma: 'circular',
    peso: '10g',
    potencia: 220,
    tipo: 'led',
    informacion:{
        marca: 'LG',
        conectividad: 'bluetooth'
    }
    Array:{1,2,3,4}
}

const nombre=taza.diseño

const{tipo}=foco;
const{color}=foco;

console.log(tipo)
console.log(color)

const{diseño, material, precio}=taza
console.log(diseño)
console.log(material)
console.log(precio)
