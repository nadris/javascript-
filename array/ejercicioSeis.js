const masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];
const numerosPares = [];
const numerosImpares = [];

masNumeros.forEach( element => {
    if (element % 2 == 0){
        numerosPares.push(element)
    }else{
        numerosImpares.push(element);
    }

});
console.log(numerosPares);
console.log(numerosImpares);