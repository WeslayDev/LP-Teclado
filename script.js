const comprarBtns = document.querySelectorAll('#comprarBtn, #comprarBtn2');

comprarBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        window.location.href = "checkout.html";
    });
});
const faqButtons = document.querySelectorAll('.faq-btn');

faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const resposta = btn.nextElementSibling;
        resposta.style.display = resposta.style.display === 'block' ? 'none' : 'block';
    });
});