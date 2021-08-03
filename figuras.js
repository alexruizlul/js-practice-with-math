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