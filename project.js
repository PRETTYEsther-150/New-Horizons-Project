const passwordInput = document.querySelector('input[type="password"]');
const errorMessage = document.createElement('div');
errorMessage.style.color = 'red';
errorMessage.style.fontSize = '12px';
errorMessage.style.fontFamily = 'Arial, sans-serif';
passwordInput.parentNode.insertBefore(errorMessage, passwordInput.nextSibling);
passwordInput.addEventListener('input', function() {
    const password = this.value;
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < 8) {
        errorMessage.textContent = 'Password must be at least 8 characters long.';
    } else if (!hasNumber) {
        errorMessage.textContent = 'Password must contain at least one number.';
    } else if (!hasSymbol) {
            errorMessage.textContent = 'Password must contain at least one special character.';
        } else {
            errorMessage.textContent = '';
        }
    });

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    const email = document.querySelector('input[type="email"]').value.trim();
    const password = document.querySelector('input[type="password"]').value.trim();
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!email || !password) {
        alert('Please enter both email and password.');
        return;
    }

    if (password.length < 8) {
        errorMessage.textContent = 'Password must be at least 8 characters long.';
        return;
    }
    if (!hasNumber) {
        errorMessage.textContent = 'Password must contain at least one number.';
        return;
    }
    if (!hasSymbol) {
        errorMessage.textContent = 'Password must contain at least one special character.';
        return;
    }

    errorMessage.textContent = '';
    window.location.href = 'complete-dashboard.html';
});

