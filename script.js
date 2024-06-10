document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const fullNameInput = document.getElementById('full-name');
    const dobInput = document.getElementById('dob');
    const billingAddressInput = document.getElementById('billing-address');
    const postalCodeInput = document.getElementById('postal-code');
    const cityInput = document.getElementById('city');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const dateInput = document.getElementById('date-input');
    const timeSelect = document.getElementById('time-select');
    const confirmButton = document.querySelector('.confirm-button');

    confirmButton.addEventListener('click', (event) => {
        event.preventDefault();

        // Clear previous error messages
        document.querySelectorAll('.error').forEach(error => error.remove());

        let valid = true;

        if (!validateFullName(fullNameInput.value)) {
            showError(fullNameInput, 'Please enter your full name.');
            valid = false;
        }

        if (!validateDOB(dobInput.value)) {
            showError(dobInput, 'Please enter a valid date of birth.');
            valid = false;
        }

        if (!validateAddress(billingAddressInput.value)) {
            showError(billingAddressInput, 'Please enter your billing address.');
            valid = false;
        }

        if (!validatePostalCode(postalCodeInput.value)) {
            showError(postalCodeInput, 'Please enter a valid postal code.');
            valid = false;
        }

        if (!validateCity(cityInput.value)) {
            showError(cityInput, 'Please enter your city.');
            valid = false;
        }

        if (!validateEmail(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email address.');
            valid = false;
        }

        if (!validatePhone(phoneInput.value)) {
            showError(phoneInput, 'Please enter a valid phone number.');
            valid = false;
        }

        if (!validateDate(dateInput.value)) {
            showError(dateInput, 'Please select a valid date.');
            valid = false;
        }

        if (!validateTime(timeSelect.value)) {
            showError(timeSelect, 'Please select a valid time.');
            valid = false;
        }

        if (valid) {
            // Redirect to confirmation page
            window.location.href = 'confirmation.html';
        }
    });

    function showError(input, message) {
        const error = document.createElement('div');
        error.className = 'error';
        error.style.color = 'red';
        error.textContent = message;
        input.parentNode.insertBefore(error, input.nextSibling);
    }

    function validateFullName(name) {
        return name.trim() !== '';
    }

    function validateDOB(dob) {
        const selectedDate = new Date(dob);
        const currentDate = new Date();
        return dob.trim() !== '' && !isNaN(new Date(dob).getTime()) && selectedDate < currentDate;
    }

    function validateAddress(address) {
        return address.trim() !== '';
    }

    function validatePostalCode(postalCode) {
        const postalCodePattern = /^[A-Za-z0-9]{3,10}$/;
        return postalCodePattern.test(postalCode.trim());
    }

    function validateCity(city) {
        return city.trim() !== '';
    }

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email.trim());
    }

    function validatePhone(phone) {
        const phonePattern = /^\+?\d{10,15}$/;
        return phonePattern.test(phone.trim());
    }

    function validateDate(date) {
        const selectedDate = new Date(date);
        const currentDate = new Date();
        return selectedDate >= currentDate;
    }

    function validateTime(time) {
        return time !== '';
    }
});
