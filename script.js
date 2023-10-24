function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
    const conversionType = document.getElementById("conversionType").value;
    let result;

    if (conversionType === "celsiusToFahrenheit") {
        result = (inputTemperature * 9/5) + 32;
    } else if (conversionType === "fahrenheitToCelsius") {
        result = (inputTemperature - 32) * 5/9;
    }

    document.getElementById("result").textContent = `Resultado: ${result.toFixed(2)} °`;
}

function contar() {
    let texto = document.getElementById("texto").value;
    let caracteres = texto.length;
    document.getElementById("caracteres").innerHTML = caracteres;
}

document.getElementById("contar").addEventListener("click", contar);
