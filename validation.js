const nameEl = document.querySelector('#name');
const emailEl = document.querySelector('#email');
const checkboxEl = document.querySelector('#checkbox');
const form = document.querySelector('#btn__submit');

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
    const checkbox = checkboxEl.checked;
    if (!isRequired(checkbox)) {
        showError(checkboxEl, 'Checkbox is required');
    } else {
        showSuccess(checkboxEl);
        valid = true;
    }
    return valid;
};


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
    console.log(isFormValid);
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


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};
// 
form.addEventListener('submit', debounce(function (e) {
    switch (e.target.id) {
        case 'name':
            checkname();
            break;
        case 'email':
            checkEmail();
            break;
        case 'checkbox':
            checkCheckbox();
            break;
    }
}));

