// Inicializa a biblioteca de animações de rolagem
AOS.init();

document.addEventListener('DOMContentLoaded', function() {

    // =======================================================
    // 1. LÓGICA DO CONTADOR REGRESSIVO
    // =======================================================
    const fixedLaunchDate = "Feb 21, 2026 18:00:00"; 
    const launchDate = new Date(fixedLaunchDate).getTime();

    const countdownElement = document.getElementById('contador-regressivo');

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = launchDate - now;

        const dayInMs = 24 * 60 * 60 * 1000;
        const hourInMs = 60 * 60 * 1000;
        const minuteInMs = 60 * 1000;

        const days = Math.floor(distance / dayInMs);
        const hours = Math.floor((distance % dayInMs) / hourInMs);
        const minutes = Math.floor((distance % hourInMs) / minuteInMs);
        const seconds = Math.floor((distance % minuteInMs) / 1000);

        let output = `
            ${days}d 
            ${hours.toString().padStart(2, '0')}h 
            ${minutes.toString().padStart(2, '0')}m 
            ${seconds.toString().padStart(2, '0')}s
        `;

        if (countdownElement) {
            if (distance < 0) {
                clearInterval(interval);
                countdownElement.innerHTML = "Lançamento ocorrido!";
            } else {
                countdownElement.innerHTML = output;
            }
        }
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);


    // =======================================================
    // 2. LÓGICA DA MÁSCARA DE TELEFONE
    // =======================================================
    const inputTelefone = document.getElementById('telefone');

    if (inputTelefone) {
        inputTelefone.addEventListener('input', function (e) {
            let valor = e.target.value.replace(/\D/g, ''); // Remove tudo que não for dígito
            let valorFormatado = '';

            if (valor.length === 0) {
                e.target.value = valorFormatado;
                return;
            }

            // Formato: (XX)
            valorFormatado = '(' + valor.substring(0, 2);

            // Formato: (XX) XXXXX-XXXX (padrão 9 dígitos)
            if (valor.length > 2) {
                valorFormatado += ') ' + valor.substring(2, 7); // Adiciona (XX) XXXXX
            }
            if (valor.length > 7) {
                valorFormatado += '-' + valor.substring(7, 11); // Adiciona -XXXX
            }

            e.target.value = valorFormatado;
        });
    }


    // =======================================================
    // 3. LÓGICA DE SUBMISSÃO DO FORMULÁRIO (RSVP)
    // =======================================================
    const form = document.querySelector('.form');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o recarregamento da página

            // Coleta os dados para envio
            const formData = {
                nome: document.getElementById('nome').value,
                email: document.getElementById('email').value,
                telefone: document.getElementById('telefone').value,
                unidade: document.getElementById('unidade').value
            };

            // **IMPORTANTE:** Aqui você deve inserir o código para enviar
            // 'formData' para o seu serviço de coleta (API, Google Forms, etc.)
            
            console.log('Dados prontos para envio:', formData);
            
            // Dê um feedback visual ao usuário
            alert('Sua presença foi confirmada com sucesso! Em breve entraremos em contato.');
            
            // Limpa o formulário
            form.reset();
        });
    }

});