import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

let userData = {};
initForm();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  userData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
}

function onFormSubmit(event) {
  event.preventDefault();

  if (!userData.email || !userData.message) {
    alert('Усі поля повинні бути заповнені');
    return;
  }
  console.log(userData);
  userData = {};
  form.reset();
  localStorage.removeItem('feedback-form-state');
}

function initForm() {
  let savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    savedData = JSON.parse(savedData);
    form.email.value = savedData.email || '';
    form.message.value = savedData.message || '';
    userData = savedData;
  }
}
