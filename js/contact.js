// Gestion du formulaire de contact
function initContactForm() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulation d'envoi (en production, vous feriez un vrai appel API)
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Animation de soumission
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Envoi en cours...';
        submitBtn.disabled = true;
        
        // Simulation d'un délai d'envoi
        setTimeout(() => {
            // Réinitialiser le formulaire
            form.reset();
            
            // Afficher le message de succès
            successMessage.classList.add('show');
            
            // Masquer le message après 3 secondes
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 3000);
            
            // Réinitialiser le bouton
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            console.log('Données du formulaire:', data);
        }, 1500);
    });
}

// Effet de frappe sur les champs
function addTypingEffects() {
    const inputs = document.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', () => {
            input.style.transform = 'scale(1)';
        });
    });
}

// Animation des cartes d'information
function animateInfoCards() {
    const cards = document.querySelectorAll('.info-card');
    
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
}

// Animation d'apparition des éléments
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = '0.2s';
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
}

// Validation en temps réel
function initRealTimeValidation() {
    const emailInput = document.getElementById('email');
    
    emailInput.addEventListener('input', (e) => {
        const email = e.target.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email && !emailRegex.test(email)) {
            e.target.style.borderColor = '#ff0066';
            e.target.style.boxShadow = '0 0 20px rgba(255, 0, 102, 0.3)';
        } else {
            e.target.style.borderColor = 'rgba(0, 255, 255, 0.3)';
            e.target.style.boxShadow = 'none';
        }
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    initContactForm();
    addTypingEffects();
    animateInfoCards();
    animateOnScroll();
    initRealTimeValidation();
});