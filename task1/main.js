/*
  Parašyti JS kodą, kuris leis vartotojui įvesti temperatūrą celsijumi arba farenheitu.
  Įvedus celsijų - parodoma kiek temperatūros tai būtų farenheitu | įvedus farenheitą - parodoma kiek temperatūros tai būtų celsijumi.
*/

function convertTemperature() {

  // Nuskaitome įvestą temperatūrą ir parenkame vienetus
  const temperature = document.getElementById('temperature').value;
  const units = document.querySelector('input[name="units"]:checked').value;

  // Konvertuojame temperatūrą ir išvedame rezultatą
  if (units === 'celsius') {
    const fahrenheit = temperature * 1.8 + 32;
    document.getElementById('result').innerHTML = `${temperature}&deg;C yra ${fahrenheit}&deg;F`;
  } else {
    const celsius = (temperature - 32) / 1.8;
    document.getElementById('result').innerHTML = `${temperature}&deg;F yra ${celsius}&deg;C`;
  }
}



/*const form = document.createElement('form');

const label = document.createElement('label');
label.setAttribute('for', 'temperature');
label.textContent = 'Įveskite temperatūrą:';
form.appendChild(label);

const input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('id', 'temperature');
input.setAttribute('name', 'temperature');
form.appendChild(input);

const celsiusRadio = document.createElement('input');
celsiusRadio.setAttribute('type', 'radio');
celsiusRadio.setAttribute('id', 'celsius');
celsiusRadio.setAttribute('name', 'units');
celsiusRadio.setAttribute('value', 'celsius');
form.appendChild(celsiusRadio);

const celsiusLabel = document.createElement('label');
celsiusLabel.setAttribute('for', 'celsius');
celsiusLabel.textContent = 'Celsijaus';
form.appendChild(celsiusLabel);

const fahrenheitRadio = document.createElement('input');
fahrenheitRadio.setAttribute('type', 'radio');
fahrenheitRadio.setAttribute('id', 'fahrenheit');
fahrenheitRadio.setAttribute('name', 'units');
fahrenheitRadio.setAttribute('value', 'fahrenheit');
form.appendChild(fahrenheitRadio);

const fahrenheitLabel = document.createElement('label');
fahrenheitLabel.setAttribute('for', 'fahrenheit');
fahrenheitLabel.textContent = 'Farenheito';
form.appendChild(fahrenheitLabel);

const button = document.createElement('button');
button.setAttribute('type', 'button');
button.addEventListener('click', convertTemperature);
button.textContent = 'Konvertuoti';
form.appendChild(button);

document.body.appendChild(form);

const result = document.createElement('p');
result.setAttribute('id', 'result');
document.body.appendChild(result);

function convertTemperature() {
  // Nuskaitome įvestą temperatūrą ir parenkame vienetus
  const temperature = document.getElementById('temperature').value;
  const units = document.querySelector('input[name="units"]:checked').value;

  // Konvertuojame temperatūrą ir išvedame rezultatą
  if (units === 'celsius') {
    const fahrenheit = temperature * 1.8 + 32;
    document.getElementById('result').innerHTML = `${temperature}&deg;C yra ${fahrenheit}&deg;F`;
  } else {
    const celsius = (temperature - 32) / 1.8;
    document.getElementById('result').innerHTML = `${temperature}&deg;F yra ${celsius}&deg;C`;
  }
}*/


