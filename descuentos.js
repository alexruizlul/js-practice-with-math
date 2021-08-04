function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const inputDiscount = document.getElementById("InputDiscount");

    const valuePrice = inputPrice.value;
    const valueDiscount = inputDiscount.value;

    const finalPrice = calcularPrecioConDescuento(valuePrice, valueDiscount);

    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText = "El precio final sería de: $" + finalPrice;
}