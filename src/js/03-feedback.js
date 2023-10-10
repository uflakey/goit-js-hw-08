import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const button = document.querySelector('button');

form.addEventListener(input, onInputForm);
button.addEventListener(submit, onSubmitForm);
