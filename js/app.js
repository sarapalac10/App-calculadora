console.log("hola");

function sumar(){
    const forma = document.getElementById('formulario');
    let operandoA = forma['operandoA'];  /*Son los elementos del input, no los valores */
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = "La operación no se realiza pues no incluye números :( ";
    document.getElementById('resultado').innerHTML = `El resultado es: ${resultado}`;
    console.log(`El resultado es: ${resultado}`);
}