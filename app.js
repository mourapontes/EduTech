// app.js

document.addEventListener('DOMContentLoaded', () => {
    const iconesInfo = document.querySelectorAll('.icone-info');

    iconesInfo.forEach(icone => {
        icone.addEventListener('click', () => {
            const infoTexto = icone.nextElementSibling;
            if (infoTexto.style.display === 'block') {
                infoTexto.style.display = 'none';
            } else {
                infoTexto.style.display = 'block';
                infoTexto.textContent = icone.getAttribute('data-info');
            }
        });
    });

    const inscrevaBtn = document.getElementById('inscrevaBtn');
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close');
    const inscricaoForm = document.getElementById('inscricaoForm');

    inscrevaBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    inscricaoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;

        // Simulação de envio dos dados para o serviço de atendimento
        console.log(`Nome: ${nome}, Email: ${email}, Telefone: ${telefone}`);
        alert('Obrigado por se inscrever na EduTech!');

        // Fechar o modal após o envio
        modal.style.display = 'none';
    });
});

function playVideo(videoFile) {
    alert(`Reproduzindo vídeo: ${videoFile}`);
}

function startQuiz(quizTopic) {
    alert(`Iniciando quiz de: ${quizTopic}`);
}