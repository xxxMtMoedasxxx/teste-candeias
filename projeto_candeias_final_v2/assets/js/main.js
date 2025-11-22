
const CONFIG = {
    whatsappNumber: "5571999999999", // ALTERE AQUI
    defaultMessage: "Olá! Vi o site novo e gostaria de informações sobre o título vitalício."
};

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. WhatsApp Links
    document.querySelectorAll('.wa-trigger').forEach(btn => {
        const waLink = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.defaultMessage)}`;
        btn.setAttribute('href', waLink);
        btn.setAttribute('target', '_blank');
    });

    // 2. Mobile Menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Fechar ao clicar em link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // 3. Scroll Header Effect
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
        } else {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
        }
    });
    
    console.log("Site Enterprise V2 Carregado");
});
