const form = document.querySelector('.js-form');
const input = document.querySelector('.js-input');
const errorText = document.querySelector('.js-error');

const validateEmail = function (input) {
  const reg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi;

  return reg.test(input);
};

const setErrorState = function (e, message) {
  e.preventDefault();
  errorText.innerHTML = message;
  input.style.outline = '1px solid hsl(354, 100%, 66%)';
  input.setAttribute('aria-invalid', true);
  input.setAttribute('aria-describedby', errorText.id);
};

form.addEventListener('submit', (e) => {
  if (input.value === '') {
    setErrorState(e, 'Whoops! It looks like you forgot to add your email');
  } else if (input.value == null || !validateEmail(input.value)) {
    setErrorState(e, 'Please provide a valid email address');
  }
});
