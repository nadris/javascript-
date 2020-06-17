const notasDeTPs = [7, 8, 9, 10,10,2,9,8,9,0,10];

let notaFinal = 0;
notasDeTPs.forEach(
    (element)=>{ notaFinal += element}
)
//console.log(notasDeTPs.length)
console.log(notaFinal/notasDeTPs.length)