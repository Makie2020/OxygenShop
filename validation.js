const nameEl = document.querySelector('#name');
const emailEl = document.querySelector('#email');
const checkboxEl = document.querySelector('#checkbox');
const modalEl = document.querySelector('#emailModal');
const form = document.querySelector('#btn__submit');
const modal = document.querySelector('#btn__modal');


const checkname = () => { 
    let valid = false;
    const min = 2,max = 100;
    const name = nameEl.value.trim();
    if (!isRequired(name)) {
        showError(nameEl, 'Name cannot be blank.');
    } else if (!isBetween(name.length, min, max)) {
        showError(nameEl, `The name must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(nameEl);
        valid = true;
    }
    return valid;
};

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, '  Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const checkCheckbox = () => {
    let valid = false;
    const checkboxChecked = checkboxEl.checked;
    if (!checkboxChecked) {
        showError(checkboxEl, 'Checkbox is required');
    } else {
        showSuccess(checkboxEl);
        valid = true;
    }
    return valid;
};

const checkModal = () => {
    let valid = false;
    const modal = modalEl.value.trim();
    if (!isRequired(modal)) {
        showError(modalEl, 'Email cannot be blank.');
    } else if (!isEmailValid(modal)) {
        showError(modalEl, 'Email is not valid.')
    } else {
        showSuccess(modalEl);
        modalMenu.classList.remove('show'); 
        valid = true;
    }
    return valid;
}    

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    const formField = input.parentElement;
    formField.classList.remove('error');
    formField.classList.add('success');
    const error = formField.querySelector('small');
    error.textContent = '';
}

form.addEventListener('click', function (e) {
    e.preventDefault();
    let isnameValid = checkname(),
        isEmailValid = checkEmail(),
        isCheckboxValid = checkCheckbox();
    let isFormValid = isnameValid && isEmailValid && isCheckboxValid;
    if (isFormValid) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            name: nameEl.value.trim(),
            email: emailEl.value.trim(),
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
            }
});
//modal
modal.addEventListener('click', function (e) {
    e.preventDefault();
    let isEmailValid = checkModal();
    if (isEmailValid === true) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            email: modalEl.value.trim(),
        }),headers: {'Content-type': 'application/json; charset=UTF-8'},
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }
});

const modalMenu = document.getElementById('modal');
setTimeout(() => {
    modalMenu.classList.add('show');
}, 5000);

window.onload = function () {
  if (sessionStorage.getItem("modal") === "none") {
    modalMenu.classList.remove('show')
  }
  document.getElementById("close").onclick = function () {
    modalMenu.classList.remove('show');
    sessionStorage.setItem("modal", "none");
  };
};
document.addEventListener('click', (e) => {
    let clickInside = modalMenu.contains(e.target)
    if (!clickInside) {
       modalMenu.classList.remove('show')
    }
})
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modalMenu.classList.remove('show')
    }
  })