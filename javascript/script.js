const form = document.querySelector('.js-form');
const input = document.querySelector('.js-input');
const errorText = document.querySelector('.js-error');

const validateEmail = function (input) {
  const reg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi;

  return reg.test(input);
};

form.addEventListener('submit', (e) => {
  if (
    input.value == null ||
    input.value === '' ||
    !validateEmail(input.value)
  ) {
    e.preventDefault();
    input.style.outline = '1px solid hsl(354, 100%, 66%)';
    errorText.innerHTML = 'Please provide a valid email address';
    input.setAttribute('aria-invalid', true);
    input.setAttribute('aria-describedby', errorText.id);
  }
});
