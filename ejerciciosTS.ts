// Ejercicio 1
// Declarar una variable de tipo string llamada "nombre" y asignarle tu nombre.
const nombre: string = "Macarena";

// Declarar una variable de tipo number llamada "edad" y asignarle tu edad.
let edad: number = 21;

// Declarar una variable de tipo boolean llamada "esEstudiante" y asignarle true o false.
const esEstudiante: boolean = true;

// Imprimir en consola el valor de cada variable usando console.log()
console.log(nombre, edad, esEstudiante);

// Ejercicio 2
// Declarar una función que reciba dos números como parámetros y retorne su suma.
function sumar(a: number, b:number): number {
    return a+b;
}

// Asegurar que los parámetros y el valor de retorno sean de tipo number.
// Llamar a la función e imprimir el resultado.
console.log("la suma es:", sumar(10,15));

// Realizar otra función que reste dos números.
function restar(c:number, d:number): number {
    return c-d;
}
console.log("la resta es:", restar(25,5));

// Realizar otra función que multiplique dos números.
function multiplicar(x: number, y:number): number {
    return x*y;
}
console.log("la multiplicacion es:", multiplicar(10,8));

// Ejercicio 3
// Crear un array de números llamado "numeros" y agregar algunos valores.
const numeros: number [] = [1,2,3,4,5,6,7,8,9]

// Usa un bucle para imprimir cada número multiplicado por 2 (usando forEach())
numeros.forEach(num => {
    console.log(2*num);
});

// Ejercicio 4
// Declarar una interfaz "Persona" con las propiedades: nombre (string), edad (number), y esEstudiante (boolean).
interface Persona {
    nombre:string;
    edad: number;
    esEstudiante: boolean;
};

// Crear tres objetos que sigan la estructura de la interfaz.
const per1: Persona = {nombre: 'Macarena', edad: 21, esEstudiante: true};
const per2: Persona = {nombre: 'Maria', edad: 23, esEstudiante: false};
const per3: Persona = {nombre: 'Luca', edad: 22, esEstudiante: true};

// Imprimir en consola.
console.log(per1,per2,per3);

// Ejercicio 5
// Declara una variable que pueda ser de tipo string o number.
let variable: string | number;

// Asigna un valor string y luego cambia su valor a number.Imprimir en consola ambos casos.
variable = 'Cadena';
console.log(variable);
variable = 1256;
console.log(variable);

// Ejercicio 6
// Definir una interfaz "Producto" con propiedades: nombre (string), precio (number), y enStock (boolean).
interface Producto {
    nombre: string; 
    precio: number; 
    enStock: boolean
};

// Crear un array de "productos" con seis objetos que sigan la interfaz.
const productos: Producto[] = [
    {nombre:'Cartuchera', precio: 10000, enStock:true},
    {nombre:'Lapiz', precio: 1500, enStock:false},
    {nombre:'Pincel', precio: 8000, enStock:true},
    {nombre:'Acrilico', precio: 15000, enStock:false},
    {nombre:'Pegamento', precio: 5500, enStock:true},
    {nombre:'Resaltador', precio: 2000, enStock:false},
]
// Crear una función que reciba el array y retorne los productos en stock (sólo en stock). 
const productosEnStock = productos.filter((productos) => productos.enStock)
console.log('Productos en stock:',productosEnStock);

// Crear otra función que reciba el array y retorne los productos sin stock (sólo sin stock). 
const productosSinStock = productos.filter((productos) => !productos.enStock)
console.log('Productos sin stock:',productosSinStock);
// Se puede usar método filter() para esto. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 

// Ejercicio 7
// Definir una interfaz "Cliente" con 4 propiedades a elección (por ahora solamente tipos string, booleanos y numbers).
interface Cliente {
    id: number;
    nombre:string;
    edad: number;
    activo:boolean

}

// Crear un array de "clientes" con seis objetos que sigan la interfaz.
const clientes: Cliente[] = [
    {id:1, nombre:'Luz', edad:21, activo:true},
    {id:2, nombre:'Pedro', edad:25, activo:false},
    {id:3, nombre:'Nestor', edad:50, activo:true},
    {id:4, nombre:'Ester', edad:30, activo:false},
    {id:5, nombre:'Adela', edad:58, activo:true},
    {id:6, nombre:'Emilia', edad:31, activo:false},
]

// Crear una función que reciba el array y retorne los clientes que cumplan una condición (segun el booleano que hayamos creado). 
const clientesActivos = clientes.filter((clientes)=> clientes.activo);
console.log('Clientes activos:', clientesActivos)

// Crear otra función que reciba el array y retorne los clientes que cumplan la condición inversa al punto de arriba (mismo booleano que hayamos elegido). 
const clientesInactivos = clientes.filter((clientes)=> !clientes.activo);
console.log('Clientes inactivos:', clientesInactivos)

//Ejercicio 8: Catálogo de Productos - forEach
//Crear un array llamado catalogo con varios objetos de productos. Cada producto debe tener las propiedades nombre (string) y precio (number).
interface ProdCat {
    nombre:string,
    precio:number
};

const catalogo: ProdCat[] = [
    {nombre:'Tablet',precio:50},
    {nombre:'Laptop',precio:2500},
    {nombre:'Mouse',precio:38},
    {nombre:'Teclado',precio:49},
    {nombre:'Monitor',precio:1580},
]

//Usar forEach para imprimir el nombre y el precio de cada producto. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach 
catalogo.forEach (catalogo => {
    console.log('Prodcuto:',catalogo.nombre,'Precio:', catalogo.precio)
});

//Ejercicio 9: Catálogo de Productos - filter
//Utilizar filter para crear un nuevo array llamado productosBaratos que solo contenga los productos con precio menor a 50.
//Imprimor productosBaratos en la consola.
const productosBaratos = catalogo.filter((catalogo)=> catalogo.precio < 50);
console.log('Prodcutos con precio menor a $50',productosBaratos);

//Ejercicio 10: Actualización de Inventario - map
//Utilizar map para crear un nuevo array catalogoConDescuento, donde cada producto tenga un 10% menos de precio. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map 
//Imprimir catalogoConDescuento en la consola.
const catalogoConDescuento = catalogo.map ((x)=> x.precio *0.90);
console.log('Precios del catagolo con descuento:',catalogoConDescuento);

//Ejercicio 11: Búsqueda de Usuario - find
//Crear un array llamado usuarios con varios objetos de usuario. Cada usuario debe tener id (number), nombre (string) y activo (boolean).
//Usar find para buscar el usuario con el id 3.
//Imprimir en la consola el objeto del usuario encontrado.
interface Usuario {
    id: number;
    nombre: string;
    activo: boolean
};

const usuarios: Usuario[]= [
    {id:1, nombre: 'Macarena', activo:true},
    {id:2, nombre: 'Angeles', activo:true},
    {id:3, nombre: 'Marta', activo:false},
    {id:4, nombre: 'Barbara', activo:false}
    ]

const foundId3 = usuarios.find((element) => element.id === 3);
console.log('El usuario con id = 3 es:',foundId3);

/*Ejercicio 12: Contador de Usuarios Activos - filter y length
Utilizar filter para crear un nuevo array usuariosActivos que contenga solo los usuarios con activo: true.
Usar la propiedad length para contar cuántos usuarios activos hay y muestra el resultado en la consola. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length */
const usuariosActivos = usuarios.filter((usuarios)=> usuarios.activo)
console.log('Cantidad de usuarios activos:',usuariosActivos.length)

/*Ejercicio 13: Actualización de Estado de Usuarios
Usando un bucle forEach, cambiar la propiedad activo de cada usuario a false.
Imprimir el array usuarios para verificar que todos los usuarios están inactivos.*/
usuarios.forEach(usuario => usuario.activo = false);
console.log(usuarios);

/*Ejercicio 14: Formateo de Productos para Mostrar - map
Usar el array catalogo.
Utilizar map para crear un nuevo array productosFormato que contenga el nombre y precio de cada producto como un string en el formato "Producto: [nombre], Precio: $[precio]".
Para esto podemos usar template strings `string text ${expression} string text`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals 
Imprimir el array productosFormato en la consola.*/

const productosFormato = productos.map ((x)=> `prodcuto: ${x.nombre},precio: $${x.precio}`);
console.log('productos:',productosFormato);

/*Ejercicio 15:
Con los datos que tenemos, crear una interfaz "User" y aplicarla, para que el siguiente codigo compile sin errores:*/

interface User {
    name: string;
    age: number;
    occupation: string
};

const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);

/*Ejercicio 16:
Vamos a volver a usar la interfaz User del ejercicio anterior.
Crear una nueva interfaz Admin segun los datos que tenemos.
Corregir el type Person para que acepte dos tipos: User y la nueva interfaz. 
Corregir la implementacion para aplicar el type Person para que el siguiente codigo compile sin errores. */
interface Admin {
    name: string;
    age: number;
    role: string
};

type Person = User|Admin;
const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

function logPerson2(person:Person) {
    console.log(` - ${person.name}, ${person.age}`);
}

persons.forEach(logPerson2);

