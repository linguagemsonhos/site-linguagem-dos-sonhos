document.addEventListener('DOMContentLoaded', function() {
    // Elementos
    const contactForm = document.getElementById('contactForm');
    const paymentSection = document.getElementById('paymentSection');
    const verifyBtn = document.getElementById('verifyBtn');
    const dreamBtn = document.getElementById('dreamBtn');
    const dreamModal = document.getElementById('dreamModal');
    const closeBtn = document.querySelector('.close-btn');
    const dreamForm = document.getElementById('dreamForm');
    const yearSpan = document.getElementById('currentYear');

    // Ano atual
    yearSpan.textContent = new Date().getFullYear();

    // Função para copiar chave PIX
    window.copyPixKey = function() {
        navigator.clipboard.writeText('alinguagemdossonhos3@gmail.com')
            .then(() => alert('Chave PIX copiada!'))
            .catch(err => console.error('Erro ao copiar:', err));
    };

    // Validação do formulário de contato
    verifyBtn.addEventListener('click', function() {
        const email = document.getElementById('userEmail').value;
        const phone = document.getElementById('userPhone').value;

        // Validação (apenas um obrigatório)
        if (!email && !phone) {
            alert('Por favor, informe seu e-mail ou WhatsApp.');
            return;
        }

        // Valida e-mail se preenchido
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        // Valida telefone se preenchido
        if (phone && !/\(\d{2}\) \d{5}-\d{4}/.test(phone)) {
            alert('Por favor, insira um WhatsApp válido (DD) 99999-9999');
            return;
        }

        // Armazena os dados
        document.getElementById('formEmail').value = email || '';
        document.getElementById('formPhone').value = phone || '';

        // Mostra a seção de pagamento
        contactForm.style.display = 'none';
        paymentSection.style.display = 'block';
    });

    // Abre o modal do sonho
    dreamBtn.addEventListener('click', function() {
        dreamModal.style.display = 'block';
    });

    // Fecha o modal
    closeBtn.addEventListener('click', function() {
        dreamModal.style.display = 'none';
    });

    // Fecha ao clicar fora
    window.addEventListener('click', function(event) {
        if (event.target === dreamModal) {
            dreamModal.style.display = 'none';
        }
    });

    // Envio do formulário
    dreamForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        fetch(this.action, {
            method: 'POST',
            body: new FormData(this)
        })
        .then(response => {
            if (response.ok) {
                alert('Seu sonho foi enviado! Responderemos em breve no contato informado.');
                dreamForm.reset();
                dreamModal.style.display = 'none';
                
                // Reseta o fluxo
                contactForm.style.display = 'block';
                paymentSection.style.display = 'none';
            } else {
                throw new Error('Falha no envio');
            }
        })
        .catch(error => {
            alert('Ocorreu um erro. Por favor, tente novamente.');
            console.error(error);
        });
    });
});