// Busque os elementos HTML
let massa = document.querySelector('#kg');
let altura = document.querySelector('#height');


formulario.onsubmit = (event) => {
  event.preventDefault(); // Impede o comportamento padrão de envio do formulário
  
  // Sua lógica aqui!
}

function calcularIMC() {
  
  var imc = massa.value / (altura.value * altura.value);

  if (massa.value <= 0) {
    document.getElementById('result').textContent = 'O número inserido no peso é inválido, insira outro'
  } else if (altura.value <= 0) {
    document.getElementById('result').textContent = 'O número inserido na altura é inválido, insira outro'
  } else if (imc < 17) {
    document.getElementById('result').textContent = `Seu IMC é de ${imc.toFixed(2)}, Você está muito abaixo do peso ideal para sua altura!`
  } else if (imc >= 17 && imc <= 18.49) {
    document.getElementById('result').textContent = `Seu IMC é de ${imc.toFixed(2)}, Você está abaixo do peso ideal para a sua altura!`
  } else if (imc >= 18.5 && imc <= 24.99) {
    document.getElementById('result').textContent = `Seu IMC é de ${imc.toFixed(2)}, Você está no peso ideal para a sua altura!`
  } else if (imc >= 25 && imc <= 29.99) {
    document.getElementById('result').textContent = `Seu IMC é de ${imc.toFixed(2)}, Você está acima do peso para a sua altura!`
  } else if (imc >= 30 && imc <= 34.99) {
    document.getElementById('result').textContent = `Seu IMC é de ${imc.toFixed(2)}, Você está com obesidade - grau I!`
  } else if (imc >= 35 && imc <= 39.99) {
    document.getElementById('result').textContent = `Seu IMC é de ${imc.toFixed(2)}, Você está com obesidade - II (severa)!`
  } else if (imc >= 40) {
    document.getElementById('result').textContent = `Seu IMC é de ${imc.toFixed(2)}, Você está com obesidade - III (mórbida)!`
  } else{}
  
  console.log(imc);
}