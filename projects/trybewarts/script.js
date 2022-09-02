const btnHeader = document.querySelector('.btn-header');
const btnSubmmit = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const form = document.querySelector('#evaluation-form');

// Valida login
function validaLogin() {
  const email = document.getElementById('email');
  const senha = document.getElementById('senha');
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

// Verifica se checkbox está ok para habilitar botão
function verifyCheckbox() {
  if (agreement.checked) {
    btnSubmmit.disabled = false;
  } else {
    btnSubmmit.disabled = true;
  }
}

// Contador de caracteres
function contRemoveOrAdd() {
  const numberChar = textarea.value.length;
  const contras = 500 - numberChar;
  counter.innerText = contras;
}

// Pesquisei na internet como fazer
function getLearningValue() {
  const learning = document.querySelectorAll('[name=learning]:checked');
  const value = [];
  for (let index = 0; index < learning.length; index += 1) {
    if (index === 0) {
      value.push(learning[index].value);
    } else {
      value.push(` ${learning[index].value}`);
    }
  }
  return value;
}

function submmitForm() {
  const elementos = ['Nome', 'Email', 'Casa', 'Família', 'Matérias', 'Avaliação', 'Observações'];
  const main = document.getElementById('main');
  const newForm = document.createElement('div');
  newForm.id = 'form-data';
  main.appendChild(newForm);

  for (let index = 0; index < elementos.length; index += 1) {
    const paragraph = document.createElement('p');
    paragraph.innerText = `${elementos[index]}: ${localStorage.getItem(elementos[index])}`;
    newForm.appendChild(paragraph);
  }
}

btnSubmmit.addEventListener('click', (event) => {
  const name = document.getElementById('input-name');
  const lastName = document.getElementById('input-lastname');
  const email = document.getElementById('input-email');
  const house = document.getElementById('house');

  localStorage.setItem('Nome', `${name.value}  ${lastName.value}`);
  localStorage.setItem('Email', email.value);
  localStorage.setItem('Casa', house.value);
  localStorage.setItem('Família', document.querySelector('[name=family]:checked').value);
  localStorage.setItem('Matérias', getLearningValue());
  localStorage.setItem('Avaliação', document.querySelector('[name=rate]:checked').value);
  localStorage.setItem('Observações', textarea.value);
  form.style.display = 'none';
  submmitForm();
  localStorage.clear();
  event.preventDefault();
});

textarea.addEventListener('keyup', contRemoveOrAdd);
agreement.addEventListener('click', verifyCheckbox);
btnHeader.addEventListener('click', validaLogin);
