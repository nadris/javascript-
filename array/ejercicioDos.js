const librosDeJS = [
    'JavaScript for Kids: A Playful Introduction to Programming',
    'Composing Software',
    'Eloquent JavaScript: A Modern Introduction to Programming',
    'JavaScript: The Good Parts',
    'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
    'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
    'JavaScript: The Definitive Guide',
    'You Don’t Know JS',
    'JavaScript Allongé: The Six Edition'];

//console.log(librosDeJS.length);
let tamanio = 0;
librosDeJS.forEach(
        ()=>{ tamanio ++ }
)
console.log('Mi lista de libros de JS', tamanio)
