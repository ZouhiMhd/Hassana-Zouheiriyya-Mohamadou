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

        // Animation des barres de compétences
        function animateSkillBars() {
            const skillBars = document.querySelectorAll('.skill-level');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = 'fillBar 2s ease-out forwards';
                    }
                });
            }, { threshold: 0.5 });

            skillBars.forEach(bar => observer.observe(bar));
        }

        // Initialisation
        document.addEventListener('DOMContentLoaded', () => {
            animateOnScroll();
            animateSkillBars();
        });