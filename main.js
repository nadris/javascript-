//import { upperCase } from "text-upper-case"
const calculadora = require ('grsnclc');
const to = require ('to-case');

const  nombres = ["JULIAN", "carlos", "catalina", "jorge"];
  //                  0       1           2         3
nombres.forEach( 
    (element) => 
    console.log(".-",to.capital(element))
    );


//console.log(to.camel("adicionar_numero"))
//console.log(to.capital("never adrian soSSA"))
//console.log(to.capital("never adrian SOSSA"))
//console.log(calculadora.soma(12,34));

//console.log(upperCase("never"));
//