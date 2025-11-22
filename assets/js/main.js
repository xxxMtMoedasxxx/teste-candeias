// Lógica aqui
/**
 * CLUBE CANDEIAS - Lógica do Site
 * Desenvolvido por Programador Especialista
 */

const CONFIG = {
    // Altere o número abaixo para mudar o destino de TODOS os botões
    whatsappNumber: "5571999999999", 
    defaultMessage: "Olá, gostaria de saber mais sobre o Clube Candeias!"
};

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Configuração Automática do WhatsApp
    const waButtons = document.querySelectorAll('.wa-trigger');
    waButtons.forEach(btn => {
        const msg = btn.getAttribute('data-msg') || CONFIG.defaultMessage;
        const encodedMsg = encodeURIComponent(msg);
        const waLink = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMsg}`;
        
        btn.setAttribute('href', waLink);
        btn.setAttribute('target', '_blank');
        btn.setAttribute('rel', 'noopener noreferrer');
    });

    // 2. Menu Mobile
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Fecha o menu ao clicar em um link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // 3. Efeito Scroll no Header
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    console.log("Sistema Carregado: Assets Locais Otimizados");
});