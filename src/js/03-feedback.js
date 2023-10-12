import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
console.log(form);

form.addEventListener('input', throttle(handlerInput, 500));
form.addEventListener('submit', handlerSubmit);

let data = {};
console.log(data);

function handlerInput(event) {
  localStorage.setItem('feedback-form-state', data);
}

function handlerSubmit(event) {
  event.preventDefault();
  const { email, message } = event.currentTarget.elements;

  data = {
    email: email.value,
    message: message.value,
  };
  localStorage.getItem('feedback-form-state');
  console.log(data);

  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
