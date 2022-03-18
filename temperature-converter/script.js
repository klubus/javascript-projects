const celciusInput = document.getElementById("celcius-input");
const fahrenheitInput = document.getElementById("fahrenheit-input");
const kelvinInput = document.getElementById("kelvin-input");

const inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) {
  let input = inputs[i];

  input.addEventListener("input", function (e) {
    let value = parseFloat(e.target.value);

    switch (e.target.name) {
      case "celcius-input":
        fahrenheitInput.value = value * 1.8 + 32;
        kelvinInput.value = value + 273.15;
        break;

      case "fahrenheit-input":
        kelvinInput.value = (value - 32) / 1.8 + 273.15;
        celciusInput.value = (value - 32) / 1.8;
        break;

      case "kelvin-input":
        celciusInput.value = value - 273.15;
        fahrenheitInput.value = (value - 273.15) * 1.8 + 32;
        break;
    }
  });
}
