document.addEventListener('DOMContentLoaded', function() {
    // Atualiza o ano no footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Validação do formulário de contato
    document.getElementById('verifyBtn').addEventListener('click', function() {
        const email = document.getElementById('userEmail').value;
        const phone = document.getElementById('userPhone').value;
        
        // Regex que aceita (DD)99999-9999 (SEM espaço)
       const phoneRegex = /^\(\d{2}\)\s?\d{4,5}-?\d{4}$/;  
        
        if (email || phone) {
            if (phone && !phoneRegex.test(phone)) {
                alert("Por favor, insira um WhatsApp válido: (DD)999999999 ou (DD) 99999-9999 ou DD99999999");
                return;
            }
            
            // Preenche os campos hidden e mostra a seção de pagamento
            if (email) document.getElementById('formEmail').value = email;
            if (phone) document.getElementById('formPhone').value = phone;
            document.getElementById('paymentSection').style.display = 'block';
            document.getElementById('contactForm').style.display = 'none';
        } else {
            alert('Informe seu e-mail ou WhatsApp');
        }
    });

    // Abre o modal ao clicar em "Descrever Meu Sonho"
    document.getElementById('dreamBtn').addEventListener('click', function() {
        document.getElementById('dreamModal').style.display = 'block';
    });

    // Fecha o modal
    document.querySelector('.close-btn').addEventListener('click', function() {
        document.getElementById('dreamModal').style.display = 'none';
    });

    // Copia a chave PIX
    window.copyPixKey = function() {
        navigator.clipboard.writeText('alinguagemdossonhos3@gmail.com')
            .then(() => alert('Chave PIX copiada!'))
            .catch(err => console.error('Erro ao copiar:', err));
    };
});
