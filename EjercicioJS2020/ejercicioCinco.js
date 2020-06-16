//ejercicioCinco.js
console.log("ARREGLOS");

//tipo de crear arreglos
//var alumnos = ['gonzalo','abel','cintia','yaneth'];
//let comidas = ['saice','ranga','aji chapaco']; 
//const PI = 3.141516;

// clonar arreglo
var frutas = ['pera','manzana','durazno'];
var copiaFrutas = frutas.slice();
//console.log(copiaFrutas)

//traer el ultimo elemento
var frutas2 = ['pera','manzana','limon','lima','melon','mandarina'];
     //             0       1         2 
     // lenngth devuelve 3
//console.log(frutas2[frutas2.length-1])


let alumnos = ['gonzalo','edgar','carlos'];
alumnos.shift()
//console.log(alumnos) 

let ciudades = ['tarija','oruro','la paz'];
ciudades.pop(); //delete 
//console.log(ciudades);

// adicionar un valor al inicio del arreglo
let barriosTarija = ['La Loma','san Bernardo','Molino'];
barriosTarija.unshift('San Roque');
barriosTarija.unshift('Los chapacos');
//console.log(barriosTarija);

// adicionar al final del arreglo
let plazadeTarija = ['principal','sucre','bolivar']
plazadeTarija.push('villa avaroa');
plazadeTarija.push('san bernardo');
//console.log(plazadeTarija);

let celulares = ['samsung','xiomi','sony']
celulares[1] = 'apple'
//console.log(celulares);

let paises = ['bolivia','peru','chile','guatemala'];
//                0       1       2           3
paises.splice(1,2);
//console.log(paises);


//colocar de reversa un arreglo 
let galletas = ['mabel','cracker','arcor'];
galletas.reverse()
//console.log(galletas) 

let estudiantes = ['gonzalo','alexis','raul','manuel'];
estudiantes.sort()
//console.log(estudiantes);

let numeroLocos = [12,9,11,7,8,4,0,15,100];
/*numeroLocos.sort(
    function(a,b){
        return a - b
    });*/
 numeroLocos.sort((a,b)=>{return a - b})   
//console.log(numeroLocos)

let arregloUno = ['uno', 'dos'];
let arreglodos = ['tres','cuatro'];
let arregloFinal = arregloUno.concat(arreglodos);
//console.log(arregloFinal)

let frutasNuevo2 = ['mandarina','pera','pera','sandia','frutilla','papaya','pera','pera'];
let nuevoFruta = frutasNuevo2.filter( item => item !== 'pera')
//console.log(nuevoFruta);


let precios = [20 , 30 , 40,2,1,3,4]
let nuevoPrecio = precios.filter((item)=> item < 10 )
//console.log(nuevoPrecio.sort((a,b)=>{ return a - b}))



//  7 [1,7,2,3,7] => [1,2,3]

let numeroMagicos = [2,4];
console.log(numeroMagicos.filter((item)=> item !== 7 ));










