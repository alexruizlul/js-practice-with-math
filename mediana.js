function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

/* function esPar(lista) {
    if(lista.length % 2 === 0){
        return true;
    } else {
        return false;
    }

} */

/* function ordenarListaMenorAMayor(lista){
    lista.sort(function(a, b) {
        return a - b;
    });

    return lista;

    // const listaOrdenada = lista.sort((a, b) => a - b);
} */

// function calcularMediana(lista) {
 
//     ordenarListaMenorAMayor(lista);

//     let mediana;
//     let mitadLista = parseInt(lista.length / 2);
    
//     if(esPar(lista)){
//         let elemento1 = lista[mitadLista - 1];
//         let elemento2 = lista[mitadLista];

//         const promedioElemento1y2 = calcularMediaAritmetica([
//             elemento1,
//             elemento2
//         ]);

//         mediana = promedioElemento1y2;

//         return mediana;
//     } else {
//         mediana = lista[mitadLista];

//         return mediana;
//     }
// }

function calcularMediana(lista) {
 
    const listaOrdenada = lista.sort((a, b) => a - b);
    const mitadLista = parseInt(lista.length / 2);
    const esPar = () => listaOrdenada.length % 2 === 0;
    
    if(esPar()){
        let elemento1 = listaOrdenada[mitadLista - 1];
        let elemento2 = listaOrdenada[mitadLista];

        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2
        ]);

        return promedioElemento1y2;
    } else {

        return listaOrdenada[mitadLista];
    }
}