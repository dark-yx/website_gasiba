document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = document.querySelector('.main-header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navMenu = document.querySelector('.nav-menu');
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            const isOpened = mainNav.classList.toggle('nav-open');
            navToggle.setAttribute('aria-expanded', isOpened);
        });
    }

    // Close mobile menu when a link is clicked
    const navMenuLinks = document.querySelectorAll('.nav-menu-link');
    navMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('nav-open')) {
                mainNav.classList.remove('nav-open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Active link highlighting on scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 150;
            let sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active');
            } else {
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active');
            }
        });
    });

    // Animation on scroll
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } 
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Counter animation
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200; 

    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const updateCount = () => {
            const count = +counter.innerText.replace('+','');
            const inc = target / speed;
            if (count < target) {
                counter.innerText = '+' + Math.ceil(count + inc);
                setTimeout(updateCount, 15);
            } else {
                counter.innerText = '+' + target;
            }
        };
        updateCount();
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.8 });

    counters.forEach(counter => {
        counter.innerText = '0';
        counterObserver.observe(counter);
    });

    // Form validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        const formStatus = document.getElementById('form-status');

        const validateField = (field) => {
            const parent = field.parentElement;
            const errorMsg = parent.querySelector('.error-message');
            let isValid = true;

            if (field.hasAttribute('required') && !field.value.trim()) {
                parent.classList.add('error');
                errorMsg.textContent = 'Este campo es obligatorio.';
                isValid = false;
            } else if (field.type === 'email' && field.value.trim() && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(field.value)) {
                parent.classList.add('error');
                errorMsg.textContent = 'Por favor, introduce un correo electrónico válido.';
                isValid = false;
            } else {
                parent.classList.remove('error');
                errorMsg.textContent = '';
            }
            return isValid;
        };

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isFormValid = true;
            const fieldsToValidate = this.querySelectorAll('[required], input[type="email"]');
            
            fieldsToValidate.forEach(field => {
                if (!validateField(field)) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                formStatus.textContent = 'Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.';
                formStatus.style.color = 'var(--color-primary-green)';
                contactForm.reset();
                setTimeout(() => formStatus.textContent = '', 5000);
            } else {
                formStatus.textContent = 'Por favor, corrige los errores en el formulario.';
                formStatus.style.color = 'var(--color-accent-orange)';
            }
        });

        const fieldsToValidate = contactForm.querySelectorAll('[required], input[type="email"]');
        fieldsToValidate.forEach(field => {
            field.addEventListener('input', () => validateField(field));
        });
    }
});
