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
    } else if (!hassymbol) {
            errorMessage.textContent = 'Password must contain at least one special character.';
        } else {
            errorMessage.textContent = '';
        }
    });