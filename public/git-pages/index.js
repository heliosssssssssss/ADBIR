// Show popup message on load
document.addEventListener('DOMContentLoaded', () => {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `
        <div class="popup-content">
            <p>Hi, this is just example document data. Proper documentation for ADBIR will be made later on in the future.. All documentation data is just for placeholders and is not the final version or result of ADBIR</p>
            <button class="popup-close">OK</button>
        </div>
    `;
    document.body.appendChild(popup);

    // Close popup when clicking the button
    const closeButton = popup.querySelector('.popup-close');
    closeButton.addEventListener('click', () => {
        popup.remove();
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Handle section highlighting and animations
const sections = document.querySelectorAll('.doc-section');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.5
});

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.5s ease';
    sectionObserver.observe(section);
});

// Simple search functionality
const searchInput = document.querySelector('.search-box input');
const navItems = document.querySelectorAll('.nav-item');

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    navItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

// Add copy button to code blocks
document.querySelectorAll('.code-block').forEach(block => {
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.textContent = 'Copy';
    
    copyButton.addEventListener('click', () => {
        const code = block.querySelector('code').textContent;
        navigator.clipboard.writeText(code).then(() => {
            copyButton.textContent = 'Copied!';
            setTimeout(() => {
                copyButton.textContent = 'Copy';
            }, 2000);
        });
    });
    
    block.appendChild(copyButton);
});

// Add animation to feature cards when they come into view
const featureCards = document.querySelectorAll('.feature-card');

const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.borderColor = 'var(--secondary-color)';
        }
    });
}, observerOptions);

featureCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
    observer.observe(card);
});

// Add mobile menu functionality
const createMobileMenu = () => {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    
    // Create mobile menu button
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    
    // Insert mobile menu button before nav links
    nav.insertBefore(mobileMenuBtn, navLinks);
    
    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
};

// Initialize mobile menu
if (window.innerWidth <= 768) {
    createMobileMenu();
}

// Add animation to hero section
const hero = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content');

hero.style.opacity = '0';
heroContent.style.opacity = '0';
heroContent.style.transform = 'translateY(20px)';
heroContent.style.transition = 'all 1s ease';

setTimeout(() => {
    hero.style.opacity = '1';
    heroContent.style.opacity = '1';
    heroContent.style.transform = 'translateY(0)';
}, 100);

// Add hover effect to social links
const socialLinks = document.querySelectorAll('.social-link');
socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'scale(1.2) translateY(-5px)';
        link.style.textShadow = '0 0 15px var(--secondary-color)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'scale(1) translateY(0)';
        link.style.textShadow = '0 0 10px rgba(0, 255, 0, 0.3)';
    });
});

// Add scroll-based animations
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.5s ease';
    scrollObserver.observe(section);
}); 