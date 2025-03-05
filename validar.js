document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("newsletter-form");
    const emailInput = document.getElementById("email");
    const errorMessage = document.getElementById("email-error");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio do formulário antes da validação

        const email = emailInput.value.trim();
        if (!validateEmail(email)) {
            errorMessage.style.display = "block"; // Exibe a mensagem de erro
            emailInput.style.borderColor = "red"; // Destaca o campo com erro
        } else {
            errorMessage.style.display = "none"; // Esconde a mensagem de erro
            emailInput.style.borderColor = "green"; // Indica sucesso
            alert("Subscription successful!");
            form.submit(); // Envia o formulário (se necessário)
        }
    });

    function validateEmail(email) {
        // Expressão regular para validar e-mail
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }
});
