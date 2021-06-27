var user = "Alexis"
var persona =  {
    nombre : "alexis",
    sexo : "Masculino"
}

var miobjeto = {
    //clave : valor
    nombre : "Alexis",
    edad : 23,
    importante : true,
    text : `Usuario ${user}`,
    miFuncion : (a,b) => a + b,
    otroObjeto : persona,
    fecha : new Date()
}

var {nombre} = miobjeto;

var otraFuncion= ({text}) => text

console.log(otraFuncion(miobjeto));