document.addEventListener("DOMContentLoaded", function () {
    const squareSideInput = document.getElementById("squareSide");
    const countButton = document.getElementById("countButton");
    const resetButton = document.getElementById("resetButton");

    squareSideInput.addEventListener('input', function () {
        const inputValue = squareSideInput.value.trim();
        countButton.disabled = !validateInput(inputValue);
    });

    countButton.addEventListener("click", function () {
        calculateArea();
    });

    resetButton.addEventListener("click", function () {
        resetForm("calculateArea", "resultCalculateArea");
    });

    function calculateArea() {
        const sideLength = parseFloat(squareSideInput.value);
        const area = sideLength * sideLength;
        displayResult("resultCalculateArea", `Luas Persegi: ${area}`);
    }

    function validateInput(input) {
        const integerRegex = /^\d+$/;
        return integerRegex.test(input);
    }

    function displayResult(resultElementId, result) {
        const resultElement = document.getElementById(resultElementId);
        resultElement.textContent = result;
    }

    function resetForm(formId, resultElementId) {
        document.getElementById(formId).reset();
        document.getElementById(resultElementId).textContent = "";
    }
});

// Additional script for Keliling Persegi
document.addEventListener("DOMContentLoaded", function () {
    const kelilingInput = document.getElementById("KelilingPersegiInput");
    const calculatePerimeterButton = document.getElementById("calculatePerimeterButton");
    const resetKelilingButton = document.getElementById("resetKeliling");

    kelilingInput.addEventListener('input', function () {
        const inputValue = kelilingInput.value.trim();
        calculatePerimeterButton.disabled = !validateInput(inputValue);
    });

    calculatePerimeterButton.addEventListener("click", function (event) {
        event.preventDefault(); // Mencegah pengiriman formulir
        calculatePerimeter();
    });

    resetKelilingButton.addEventListener("click", function (event) {
        event.preventDefault(); // Mencegah pengiriman formulir
        resetForm("calculatePerimeter", "resultCalculatePerimeter");
    });

    function calculatePerimeter() {
        const sideLength = parseFloat(kelilingInput.value);
        const perimeter = 4 * sideLength;
        displayResult("resultCalculatePerimeter", `Keliling Persegi: ${perimeter}`);
    }
});

function validateInput(input) {
    const integerRegex = /^\d+$/;
    return integerRegex.test(input);
}

function displayResult(resultElementId, result) {
    const resultElement = document.getElementById(resultElementId);
    resultElement.textContent = result;
}

function resetForm(formId, resultElementId) {
    document.getElementById(formId).reset();
    document.getElementById(resultElementId).textContent = "";
}