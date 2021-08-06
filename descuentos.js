const coupons = [
    {
        name: "invierno",
        discount: 10,
    },
    {
        name: "primavera",
        discount: 30,
    },
    {
        name: "verano",
        discount: 25,
    },
];

function calcularDescuentoPorCupon(cupon) {
    const isCouponValueValid = function (coupon) {
        return coupon.name === cupon;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);
    const resultCoupon = document.getElementById("ResultCoupon");
    
    
    if (!userCoupon) {
        resultCoupon.innerText = "El cupon que ingresaste es inválido o no existe";

        return 0;
    } else {
        const resultCoupon = document.getElementById("ResultCoupon");
        resultCoupon.innerText = "El cupón " + userCoupon.name + " añadió un descuento adicional del " + userCoupon.discount + "%";

        return userCoupon.discount;
    }
}

function calcularPrecioConDescuento(precio, descuento, cupon) {

    let descuentoCupon = calcularDescuentoPorCupon(cupon);
    let descuentoTotal = (descuento + descuentoCupon);

    const porcentajePrecioConDescuento = 100 - descuentoTotal;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const inputDiscount = document.getElementById("InputDiscount");
    const inputCoupon = document.getElementById("InputCoupon");

    const valuePriceStr = inputPrice.value;
    const valuePrice = parseInt(valuePriceStr, 10);
    const valueDiscountStr = inputDiscount.value;
    const valueDiscount = parseInt(valueDiscountStr, 10);
    const valueCoupon = inputCoupon.value;

    const finalPrice = calcularPrecioConDescuento(valuePrice, valueDiscount, valueCoupon);
    

    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText = "El precio final sería de: $" + finalPrice;
}