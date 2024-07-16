document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('input-text');
    const outputText = document.getElementById('output-text');
    const copyBtn = document.getElementById('copy-btn');
    const noMessage = document.getElementById('no-message');
    const copyMessage = document.getElementById('copy-message');
    const errorMessage = document.getElementById('error-message');

    function isValidInput(text) {
        const regex = /^[a-z\s]*$/;
        return regex.test(text);
    }

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 2000);
    }

    function clearError() {
        errorMessage.textContent = '';
        errorMessage.style.display = 'none';
    }

    function criptografarTexto() {
        const textoOriginal = outputText.value.toLowerCase();
        if (!isValidInput(textoOriginal)) {
            showError('Apenas letras minúsculas e sem acento são permitidas.');
            return;
        }

        const textoCriptografado = textoOriginal
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');

        outputText.value = textoCriptografado;
        clearError();
    }

    function descriptografarTexto() {
        const textoCriptografado = outputText.value.toLowerCase();
        if (!isValidInput(textoCriptografado)) {
            showError('Apenas letras minúsculas e sem acento são permitidas.');
            return;
        }

        const textoDescriptografado = textoCriptografado
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');

        outputText.value = textoDescriptografado;
        clearError();
    }

    inputText.addEventListener('input', () => {
        const value = inputText.value;

        if (!isValidInput(value)) {
            showError('Apenas letras minúsculas e sem acento são permitidas.');
            noMessage.style.display = 'none';
            outputText.style.display = 'none';
            copyBtn.style.display = 'none';
            copyMessage.style.display = 'none';
        } else {
            clearError();
            if (value) {
                noMessage.style.display = 'none';
                outputText.style.display = 'block';
                copyBtn.style.display = 'block';
                outputText.value = value;
            } else {
                noMessage.style.display = 'block';
                outputText.style.display = 'none';
                copyBtn.style.display = 'none';
                copyMessage.style.display = 'none';
            }
        }
    });

    document.getElementById('encrypt-btn').addEventListener('click', criptografarTexto);
    document.getElementById('decrypt-btn').addEventListener('click', descriptografarTexto);

    copyBtn.addEventListener('click', () => {
        outputText.select();
        document.execCommand('copy');
        copyMessage.style.display = 'block';
        setTimeout(() => {
            copyMessage.style.display = 'none';
        }, 2000);
    });
});
