// console.log("2da Pre-Entrega JS")

 
// ---Function saludo--- //

function saludo() {
    //Nombre y apellido
    let name = prompt("Ingrese su nombre")
    let lastName = prompt("Ingrese su apellido")
    let edad = parseInt(prompt("Ingrese su edad"))
    const nameAndLastName = "!Hola, bienvenido" + " " + name + " " + lastName + "¡"
    alert(nameAndLastName)
}

// ---Edad--- //
const edadIngresada = parseInt(prompt("Ingrese su edad para verificar que sea apto para entrar a la pagina"))
if ((edadIngresada => 18) && (edadIngresada <= 36)) {
   console.log("Eres apto para ingresar a la Web")
} else {
    console.log("No eres apto para ingresar a la Web")
}

// ---Saludo--- //
saludo();

// ---Objetos--- //
class Persona {
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    } 
    //metodo
    hablar(){
        console.log("Buenas soy " + this.nombre)
        
    } 
}
const persona = new Persona ("joaquin", "leal", 20)
console.log (persona)
persona.hablar ()

// ---Producto--- //
const productos = [
    {
        id: 1,
        nombre: "cafe americano",
        precio: 330
    },
    {
        id: 2,
        nombre: "cafe expresso",
        precio: 300
    },
    {
        id: 3,
        nombre: "cafe latte",
        precio: 415
    },
    {
        id: 4,
        nombre: "cafe cortado",
        precio: 350
    },
    {
        id: 5,
        nombre: "cafe con leche",
        precio: 450
    },
    {
        id: 6,
        nombre: "cafe bombon",
        precio: 500
    },
    {
        id: 7,
        nombre: "cafe capuccino",
        precio: 390
    },
    {
        id: 8,
        nombre: "cafe iced machiato",
        precio: 550
    },
    {
        id: 9,
        nombre: "cafe mocca",
        precio: 400
    }
]
console.log(productos)

const busqueda = prompt("Ingrese el producto que desea buscar").toLowerCase();
const busqueda1= productos.find((producto) => producto.nombre === busqueda)
console.log(busqueda1)

const filtrado = parseInt(prompt("Ingrese precio maximo que desee, para asi poder brindarle mejor nuestros servicios"))
const filtrado1 = productos.filter((producto) => producto.precio <= filtrado)
console.log(filtrado1)

const copia = productos.slice()

copia.sort((a, b)=>{
   if(a.precio > b.precio){
      return 1;
   }
   if (a.precio < b.precio){
      return -1;
   }
   return 0
})
console.log(copia)



























