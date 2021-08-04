// Código del cuadrado

// console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("Cada lado del cuadrado mide: " + ladoCuadrado + "cm.");

// Perímetro
function perimetroCuadrado(lado) {
    return lado * 4;
}

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El perímetro del cuadrado es de: " + perimetroCuadrado + "cm.");

// Área
function areaCuadrado(lado) {
    return lado * lado;
}

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El área del cuadrado es de: " + areaCuadrado + "cm^2.")
// console.groupEnd();

// Código del triángulo

// console.group("Triángulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//     "Las medidas de cada lado del triángulo son: " 
//     + ladoTriangulo1
//     + "cm, "
//     + ladoTriangulo2
//     + "cm y "
//     + baseTriangulo
//     + "cm."
// );

// Altura
// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm.");

// Perímetro
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perímetro del triángulo es de: " + perimetroTriangulo + "cm.");

// Área
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El área del triángulo es de: " + areaTriangulo + "cm^2.");
// console.groupEnd();

//Código del círculo

// console.group("Círculo");
// const radioCirculo = 4;
// const diametroCirculo = radioCirculo * 2;
// console.log(
//     "El radio del circulo es de "
//     + radioCirculo
//     + "cm y el diámetro de "
//     + diametroCirculo
//     + "cm."
// );

// PI
const PI = Math.PI;
// console.log("El valor de PI es: " + PI);

function diametroCirculo(radio) {
    return radio * 2;
}

// Perímetro
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perímetro del círculo es de: " + perimetroCirculo + "cm.");

// Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El área del círculo es de: " + areaCirculo + "cm^2.");
// console.groupEnd();

// Código del triángulo isósceles

function alturaTrianguloIsosceles(lado1, lado2, lado3) {
    if (lado1 === lado2) {
        let a = lado1;
        let b = lado3;

        let altura = Math.sqrt(
            (a * a) - ((b * b) / 4)
        );

        return altura;
    } else if (lado1 === lado3) {
        let a = lado1;
        let b = lado2;

        let altura = Math.sqrt(
            (a * a) - ((b * b) / 4)
        );

        return altura;
    } else if (lado2 === lado3) {
        let a = lado2;
        let b = lado1;

        let altura = Math.sqrt(
            (a * a) - ((b * b) / 4)
        );

        return altura;
    }

    return 0;
}





// Aquí interactuamos con el HTML

// HTML cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// HTML triángulo
function calcularPerimetroTriangulo() {
    // Se obtienen las etiquetas input de cada valor
    const inputLado1 = document.getElementById("InputTrianguloLado1");
    const inputLado2 = document.getElementById("InputTrianguloLado2");
    const inputBase = document.getElementById("InputTrianguloBase");

    // Se guarda el valor que se ingresó en cada input
    // Como la función perimetroTriangulo() ejecutará una suma de los 3 valores que se le pasen
    // puede que haga una concatenación nada más porque el value que se introduce en el input
    // se toma como un String, es por eso que se necesita convertir a Int para poder realizar
    // operaciones aritméticas con los valores. Esto no pasa con la multiplicación *.
    const valueLado1Str = inputLado1.value;
    const valueLado1 = parseInt(valueLado1Str, 10);
    const valueLado2Str = inputLado2.value;
    const valueLado2 = parseInt(valueLado2Str, 10);
    const valueBaseStr = inputBase.value;
    const valueBase = parseInt(valueBaseStr, 10);
    

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById("InputTrianguloBase");
    const inputAltura = document.getElementById("InputTrianguloAltura");

    const valueBase = inputBase.value;
    const valueAltura = inputAltura.value;

    const area = areaTriangulo(valueBase, valueAltura);
    alert(area);
}

// HTML círculo
function calcularPerimetroCirculo() {
    const inputRadio = document.getElementById("InputCirculoRadio");
    const valueRadio = inputRadio.value;

    const perimetro = perimetroCirculo(valueRadio);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const inputRadio = document.getElementById("InputCirculoRadio");
    const valueRadio = inputRadio.value;

    const area = areaCirculo(valueRadio);
    alert(area);
}

// HTML triángulo isósceles
function calcularAlturaTrianguloIsosceles() {
    // Se obtienen las etiquetas input de cada valor
    const inputLado1 = document.getElementById("InputTrianguloIsoscelesLado1");
    const inputLado2 = document.getElementById("InputTrianguloIsoscelesLado2");
    const inputLado3 = document.getElementById("InputTrianguloIsoscelesLado3");

    // Se guarda el valor que se ingresó en cada input
    // Como la función perimetroTriangulo() ejecutará una suma de los 3 valores que se le pasen
    // puede que haga una concatenación nada más porque el value que se introduce en el input
    // se toma como un String, es por eso que se necesita convertir a Int para poder realizar
    // operaciones aritméticas con los valores. Esto no pasa con la multiplicación *.
    const valueLado1Str = inputLado1.value;
    const valueLado1 = parseInt(valueLado1Str, 10);
    const valueLado2Str = inputLado2.value;
    const valueLado2 = parseInt(valueLado2Str, 10);
    const valueLado3Str = inputLado3.value;
    const valueLado3 = parseInt(valueLado3Str, 10);
    

    const altura = alturaTrianguloIsosceles(valueLado1, valueLado2, valueLado3);
    if (altura != 0){
        alert(altura);
    } else {
        alert("Las medidas no corresponden a las de un triángulo isósceles. Inténtalo de nuevo");
    }
}