// Language & Theme
const htmlTag = document.documentElement;

// Translations
const translations = {
    tr: {
        nav: { home: 'Ana Sayfa', about: 'Hakkımda', experience: 'Deneyim', skills: 'Beceriler', contact: 'İletişim' },
        hero: {
            title: 'Merhaba, Ben <span class="highlight">Bahadır Perveli</span>',
            subtitle: 'Yazılım Geliştirici',
            description: '5+ yıllık deneyime sahip bir yazılım geliştiriciyim. .NET teknolojileri, CRM sistemleri, API geliştirme ve veritabanı yönetimi konularında uzmanlaştım. 6 farklı şirkette 15+ başarılı proje teslim ederek işlevsel ve sürdürülebilir çözümler üretmeye odaklıyım.',
            ctaContact: 'İletişime Geç',
            ctaMore: 'Daha Fazla Bilgi',
            ctaProjects: 'Projeleri İncele'
        },
        about: {
            title: 'Hakkımda',
            p1: 'Yazılım geliştirme alanında tutkulu ve deneyimli bir profesyonelim. Özellikle CRM projelerinde sistem entegrasyonu, veri analizi ve modül geliştirme konularında aktif rol alıyorum.',
            p2: '.NET teknolojileri ile güçlü REST API\'ler geliştiriyor, veritabanı optimizasyonları yapıyor ve kurumsal süreçlerin dijitalleşmesine katkıda bulunuyorum.',
            statCompanies: 'Farklı Şirket',
            statYears: 'Yıl Deneyim',
            statProjects: 'Başarılı Proje',
            statDegrees: 'Üniversite Derecesi'
        },
        experience: {
            title: 'İş Deneyimi',
            currentDuration: 'Eki 2024 - Devam Ediyor',
            yoreDuration: 'Tem 2023 - Tem 2024',
            statActiveProjects: 'Aktif Proje',
            statTechnologies: 'Teknoloji',
            statMonths: 'Ay',
            yoreDesc: 'eBa Workflow modülünü sıfırdan geliştirdim ve CRM optimizasyon projeleri gerçekleştirdim.'
        },
        exp: {
            highlights: {
                penti: 'Penti CRM - SQL raporlama ve .NET geliştirme',
                koton: 'Koton CRM - Server-client optimizasyonu',
                ayakkabi: 'Ayakkabı Dünyası - Performans analizi'
            }
        },
        projects: {
            penti: { title: 'Penti CRM', desc: 'SQL raporlama, .NET geliştirme' },
            koton: { title: 'Koton CRM', desc: 'Server-client mimarisi optimizasyonu' },
            ayakkabi: { title: 'Ayakkabı Dünyası', desc: 'Performans analizi ve rapor otomasyonu' },
            ingage: { title: 'Ingage CRM', desc: 'Modül entegrasyonu ve geliştirme' },
            eba: { title: 'eBa Workflow', desc: 'Workflow modülü sıfırdan geliştirme' },
            m365: { title: 'Microsoft 365 Entegrasyonu', desc: 'CRM ve Office 365 entegrasyonu' },
            webapps: { title: 'Web Uygulamaları', desc: 'C# ve .NET ile özel çözümler' },
            barcode: { title: 'Barkod Sistemleri', desc: 'Satış ve pazarlama sistemleri' }
        },
        timeline: {
            afe: 'CRM & Microsoft 365 Entegrasyonu',
            gokbim: 'Barkod Sistemleri & Satış Pazarlama',
            sanca: 'İlk profesyonel deneyim - Web uygulamaları geliştirme'
        },
        tabs: { current: 'Güncel Deneyim', previous: 'Önceki Deneyimler', all: 'Tüm Projeler' },
        status: { active: 'Aktif', completed: 'Tamamlandı' },
        skills: {
            title: 'Teknik Beceriler',
            categories: {
                languages: 'Programlama Dilleri',
                frameworks: "Framework'ler",
                databases: 'Veritabanları',
                tech: 'Teknolojiler',
                tools: 'Araçlar',
                spoken: 'Diller'
            }
        },
        spoken: { turkish: 'Türkçe', english: 'İngilizce', german: 'Almanca', native: 'Anadil' },
        education: { title: 'Eğitim & Sertifikalar', education: 'Eğitim', certificates: 'Sertifikalar' },
        contact: { title: 'İletişim', email: 'Email', phone: 'Telefon', address: 'Adres' },
        form: { name: 'Adınız', email: 'Email Adresiniz', subject: 'Konu', message: 'Mesajınız', send: 'Mesaj Gönder', sending: 'Gönderiliyor...' },
        footer: { rights: '© 2024 Bahadır Perveli. Tüm hakları saklıdır.' },
        notify: { emailSent: 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.', copyEmail: 'Email adresi kopyalandı!', copyPhone: 'Telefon numarası kopyalandı!', emailOpening: 'Email istemcisi açılıyor... (SMTP servisi şu anda kullanılamıyor)' },
        featured: { title: 'Öne Çıkan Projeler' },
        services: {
            title: 'Hizmetlerim',
            api: { title: 'API Geliştirme', desc: 'Ölçeklenebilir REST API’ler ve entegrasyon çözümleri.' },
            crm: { title: 'CRM & Entegrasyon', desc: 'Kurumsal CRM süreçleri, modül geliştirme ve entegrasyonlar.' },
            data: { title: 'Veri & Raporlama', desc: 'SQL optimizasyonu, rapor otomasyonu ve veri analizi.' }
        }
    },
    en: {
        nav: { home: 'Home', about: 'About', experience: 'Experience', skills: 'Skills', contact: 'Contact' },
        hero: {
            title: 'Hi, I\'m <span class="highlight">Bahadır Perveli</span>',
            subtitle: 'Software Developer',
            description: 'I\'m a software developer with 5+ years of experience. I specialize in .NET technologies, CRM systems, API development, and database management. I delivered 15+ successful projects across 6 companies, focusing on functional and maintainable solutions.',
            ctaContact: 'Contact Me',
            ctaMore: 'Learn More',
            ctaProjects: 'View Projects'
        },
        about: {
            title: 'About Me',
            p1: 'I\'m a passionate and experienced professional in software development. I actively work on system integration, data analysis, and module development in CRM projects.',
            p2: 'I build robust REST APIs with .NET, optimize databases, and contribute to the digitalization of enterprise processes.',
            statCompanies: 'Companies',
            statYears: 'Years Experience',
            statProjects: 'Successful Projects',
            statDegrees: 'University Degrees'
        },
        experience: {
            title: 'Experience',
            currentDuration: 'Oct 2024 - Present',
            yoreDuration: 'Jul 2023 - Jul 2024',
            statActiveProjects: 'Active Projects',
            statTechnologies: 'Technologies',
            statMonths: 'Months',
            yoreDesc: 'Developed the eBa Workflow module from scratch and executed CRM optimization projects.'
        },
        exp: {
            highlights: {
                penti: 'Penti CRM - SQL reporting and .NET development',
                koton: 'Koton CRM - Server-client optimization',
                ayakkabi: 'Ayakkabı Dünyası - Performance analysis'
            }
        },
        projects: {
            penti: { title: 'Penti CRM', desc: 'SQL reporting, .NET development' },
            koton: { title: 'Koton CRM', desc: 'Server-client architecture optimization' },
            ayakkabi: { title: 'Ayakkabı Dünyası', desc: 'Performance analysis and report automation' },
            ingage: { title: 'Ingage CRM', desc: 'Module integration and development' },
            eba: { title: 'eBa Workflow', desc: 'Workflow module developed from scratch' },
            m365: { title: 'Microsoft 365 Integration', desc: 'CRM and Office 365 integration' },
            webapps: { title: 'Web Applications', desc: 'Custom solutions with C# and .NET' },
            barcode: { title: 'Barcode Systems', desc: 'Sales and marketing systems' }
        },
        timeline: {
            afe: 'CRM & Microsoft 365 Integration',
            gokbim: 'Barcode Systems & Sales Marketing',
            sanca: 'First professional experience - Web application development'
        },
        tabs: { current: 'Current Experience', previous: 'Previous Experience', all: 'All Projects' },
        status: { active: 'Active', completed: 'Completed' },
        skills: {
            title: 'Technical Skills',
            categories: {
                languages: 'Programming Languages',
                frameworks: 'Frameworks',
                databases: 'Databases',
                tech: 'Technologies',
                tools: 'Tools',
                spoken: 'Languages'
            }
        },
        spoken: { turkish: 'Turkish', english: 'English', german: 'German', native: 'Native' },
        education: { title: 'Education & Certificates', education: 'Education', certificates: 'Certificates' },
        contact: { title: 'Contact', email: 'Email', phone: 'Phone', address: 'Address' },
        form: { name: 'Your Name', email: 'Your Email', subject: 'Subject', message: 'Your Message', send: 'Send Message', sending: 'Sending...' },
        footer: { rights: '© 2024 Bahadır Perveli. All rights reserved.' },
        notify: { emailSent: 'Your message has been sent successfully! I will get back to you shortly.', copyEmail: 'Email address copied!', copyPhone: 'Phone number copied!', emailOpening: 'Opening email client... (SMTP service is not available right now)' },
        featured: { title: 'Featured Projects' },
        services: {
            title: 'Services',
            api: { title: 'API Development', desc: 'Scalable REST APIs and integration solutions.' },
            crm: { title: 'CRM & Integration', desc: 'Enterprise CRM processes, module development and integrations.' },
            data: { title: 'Data & Reporting', desc: 'SQL optimization, report automation and data analysis.' }
        }
    }
};

function applyTranslations(lang) {
    const dict = translations[lang] || translations.tr;
    // Elements with textContent
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const parts = key.split('.');
        let value = dict;
        parts.forEach(p => value = value ? value[p] : undefined);
        if (typeof value === 'string') {
            el.textContent = value;
        }
    });
    // Elements that expect HTML (e.g., hero title with span)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        const parts = key.split('.');
        let value = dict;
        parts.forEach(p => value = value ? value[p] : undefined);
        if (typeof value === 'string') {
            el.innerHTML = value;
        }
    });
    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const parts = key.split('.');
        let value = dict;
        parts.forEach(p => value = value ? value[p] : undefined);
        if (typeof value === 'string') {
            el.setAttribute('placeholder', value);
        }
    });
    // Update html lang and document title
    htmlTag.setAttribute('lang', lang);
    document.title = lang === 'en' ? 'Bahadır Perveli - Software Developer' : 'Bahadır Perveli - Yazılım Geliştirici';
    // Update language button label
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) langBtn.textContent = lang === 'en' ? 'TR' : 'EN';
}

function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    applyTranslations(lang);
}

function getCurrentLang() {
    return localStorage.getItem('lang') || 'tr';
}

function t(key) {
    const parts = key.split('.');
    let value = translations[getCurrentLang()];
    parts.forEach(p => value = value ? value[p] : undefined);
    return (typeof value === 'string') ? value : key;
}

// Initialize language on load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'tr';
    applyTranslations(savedLang);
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const current = localStorage.getItem('lang') || 'tr';
            setLanguage(current === 'tr' ? 'en' : 'tr');
        });
    }
});

// Featured carousel controls
document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('featuredTrack');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    if (!track || !prevBtn || !nextBtn) return;

    const getStep = () => {
        const firstCard = track.querySelector('.carousel-card');
        if (!firstCard) return 300;
        const cardWidth = firstCard.getBoundingClientRect().width;
        const styles = getComputedStyle(track);
        const gap = parseFloat(styles.columnGap || styles.gap || '16');
        return cardWidth + gap;
    };

    prevBtn.addEventListener('click', () => {
        track.scrollBy({ left: -getStep(), behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
        track.scrollBy({ left: getStep(), behavior: 'smooth' });
    });

    // Enable wheel horizontal scroll normalization
    track.addEventListener('wheel', (e) => {
        if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
            track.scrollLeft += e.deltaY;
            e.preventDefault();
        }
    }, { passive: false });
});

// Theme Toggle Functionality
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeBtn.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    
    // Update navbar immediately after theme change
    updateNavbarForTheme(newTheme);
});

function updateNavbarForTheme(theme) {
    const navbar = document.querySelector('.navbar');
    const scrollY = window.scrollY;
    
    if (scrollY > 50) {
        if (theme === 'dark') {
            navbar.style.background = 'rgba(17, 24, 39, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        }
    } else {
        if (theme === 'dark') {
            navbar.style.background = 'rgba(17, 24, 39, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'var(--background)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    }
}

function updateThemeIcon(theme) {
    const icon = themeBtn.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentTheme = document.body.getAttribute('data-theme');
    
    if (window.scrollY > 50) {
        if (currentTheme === 'dark') {
            navbar.style.background = 'rgba(17, 24, 39, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        }
        navbar.style.backdropFilter = 'blur(15px)';
    } else {
        if (currentTheme === 'dark') {
            navbar.style.background = 'rgba(17, 24, 39, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'var(--background)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe all elements that should animate
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.timeline-item, .skill-category, .education-item, .contact-item, .stat');
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
});

// Advanced scroll animations with stagger effect
document.addEventListener('DOMContentLoaded', () => {
    // Staggered fade-in animations for cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const staggerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const children = entry.target.querySelectorAll('.skill-item, .education-item, .company-card, .stat-item');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.style.opacity = '1';
                        child.style.transform = 'translateY(0)';
                    }, index * 150);
                });
            }
        });
    }, observerOptions);

    // Apply staggered animations to sections
    const sectionsToAnimate = ['.skills-grid', '.education-grid', '.about-stats', '.experience-tabs'];
    sectionsToAnimate.forEach(selector => {
        const section = document.querySelector(selector);
        if (section) {
            staggerObserver.observe(section);
            // Initially hide children for animation
            const children = section.querySelectorAll('.skill-item, .education-item, .company-card, .stat-item');
            children.forEach(child => {
                child.style.opacity = '0';
                child.style.transform = 'translateY(30px)';
                child.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            });
        }
    });
});

// Floating animation for hero elements
document.addEventListener('DOMContentLoaded', () => {
    const heroImage = document.querySelector('.hero-image');
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    if (heroImage) {
        heroImage.style.animation = 'float 6s ease-in-out infinite';
    }
    
    // Add pulse animation to CTA buttons
    const ctaButtons = document.querySelectorAll('.btn-primary');
    ctaButtons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.animation = 'pulse 0.6s ease-in-out';
        });
        
        btn.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    });
});

// Magnetic effect for buttons and cards
document.addEventListener('DOMContentLoaded', () => {
    const magneticElements = document.querySelectorAll('.btn, .skill-item, .company-card, .project-card');
    
    magneticElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const moveX = x * 0.1;
            const moveY = y * 0.1;
            
            element.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.02)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translate(0, 0) scale(1)';
        });
    });
});

// Typewriter effect for skill names
document.addEventListener('DOMContentLoaded', () => {
    const skillNames = document.querySelectorAll('.skill-name');
    
    const typewriterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const text = element.textContent;
                element.textContent = '';
                
                let index = 0;
                const typeInterval = setInterval(() => {
                    element.textContent += text[index];
                    index++;
                    
                    if (index >= text.length) {
                        clearInterval(typeInterval);
                    }
                }, 50);
                
                typewriterObserver.unobserve(element);
            }
        });
    }, { threshold: 0.5 });
    
    skillNames.forEach(skill => {
        typewriterObserver.observe(skill);
    });
});

// Ripple effect for buttons
document.addEventListener('DOMContentLoaded', () => {
    function createRipple(e) {
        const button = e.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
    
    const buttons = document.querySelectorAll('.btn, .tab-btn');
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
    });
});

// EmailJS Configuration
(function() {
    emailjs.init("your_public_key"); // EmailJS Public Key'inizi buraya ekleyin
})();

// Contact Form Handling with EmailJS
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('.btn-primary');
    const originalText = submitBtn.textContent;
    
    // Loading state
    submitBtn.textContent = t('form.sending');
    submitBtn.disabled = true;
    
    // Get form data
    const formData = new FormData(this);
    const templateParams = {
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        to_name: 'Bahadır Perveli',
        reply_to: formData.get('email')
    };
    
    // Send with EmailJS
    emailjs.send('your_service_id', 'your_template_id', templateParams)
        .then(function(response) {
            console.log('Email sent successfully:', response);
            showNotification(t('notify.emailSent'), 'success');
            form.reset();
        })
        .catch(function(error) {
            console.error('Email send error:', error);
            // Fallback to mailto
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            const mailtoLink = `mailto:bahadirperveli01@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`İsim: ${name}\nEmail: ${email}\n\nMesaj:\n${message}`)}`;
            window.location.href = mailtoLink;
            
            showNotification(t('notify.emailOpening'), 'info');
        })
        .finally(function() {
            // Reset button state
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
});

// Enhanced notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    const icon = type === 'success' ? 'fa-check-circle' : 
                 type === 'error' ? 'fa-exclamation-triangle' : 'fa-info-circle';
    
    const bgColor = type === 'success' ? '#10b981' : 
                   type === 'error' ? '#ef4444' : '#3b82f6';
    
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${icon}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.75rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 1001;
        transform: translateX(100%);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        max-width: 400px;
        min-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds (except for errors)
    if (type !== 'error') {
        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    if (notification.parentElement) {
                        notification.remove();
                    }
                }, 300);
            }
        }, 5000);
    }
}

// Add enhanced notification styles to the document
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        position: relative;
    }
    
    .notification-content i:first-child {
        font-size: 1.25rem;
        flex-shrink: 0;
    }
    
    .notification-content span {
        flex: 1;
        line-height: 1.4;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: rgba(255, 255, 255, 0.8);
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 50%;
        transition: all 0.2s ease;
        margin-left: 0.5rem;
        flex-shrink: 0;
    }
    
    .notification-close:hover {
        background: rgba(255, 255, 255, 0.2);
        color: white;
        transform: scale(1.1);
    }
    
    .notification-close i {
        font-size: 0.875rem;
    }
    
    @media (max-width: 768px) {
        .notification {
            right: 10px !important;
            left: 10px !important;
            max-width: none !important;
            min-width: auto !important;
        }
    }
`;
document.head.appendChild(notificationStyles);

// Typing animation for hero title
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    const text = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    
    let index = 0;
    function typeWriter() {
        if (index < text.length) {
            heroTitle.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }
    }
    
    // Start typing animation after a short delay
    setTimeout(typeWriter, 500);
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Combined scroll handler for better performance
const throttledScrollHandler = throttle(() => {
    const scrolled = window.pageYOffset;
    const navbar = document.querySelector('.navbar');
    const currentTheme = document.body.getAttribute('data-theme');
    
    // Navbar background on scroll
    if (scrolled > 50) {
        if (currentTheme === 'dark') {
            navbar.style.background = 'rgba(17, 24, 39, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        }
        navbar.style.backdropFilter = 'blur(15px)';
    } else {
        if (currentTheme === 'dark') {
            navbar.style.background = 'rgba(17, 24, 39, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'var(--background)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
        navbar.style.backdropFilter = 'blur(10px)';
    }
    
    // Hero parallax effect (only when hero is visible and on desktop)
    if (window.innerWidth > 768 && scrolled < window.innerHeight) {
        const heroImage = document.querySelector('.hero-image');
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrolled * 0.2}px)`;
        }
    }
}, 16);

window.addEventListener('scroll', throttledScrollHandler);

// Skill tags animation on hover
document.addEventListener('DOMContentLoaded', () => {
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Copy to clipboard functionality for contact info
document.addEventListener('DOMContentLoaded', () => {
    const emailLink = document.querySelector('a[href^="mailto:"]');
    const phoneLink = document.querySelector('a[href^="tel:"]');
    
    if (emailLink) {
        emailLink.addEventListener('click', (e) => {
            e.preventDefault();
            const email = emailLink.textContent;
            navigator.clipboard.writeText(email).then(() => {
                showNotification(t('notify.copyEmail'), 'success');
            });
        });
    }
    
    if (phoneLink) {
        phoneLink.addEventListener('click', (e) => {
            e.preventDefault();
            const phone = phoneLink.textContent;
            navigator.clipboard.writeText(phone).then(() => {
                showNotification(t('notify.copyPhone'), 'success');
            });
        });
    }
});

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.length === konamiSequence.length && 
        konamiCode.every((code, index) => code === konamiSequence[index])) {
        showNotification('🎉 Konami Code aktiviert! Gizli geliştirici modu açıldı!', 'success');
        document.body.style.filter = 'hue-rotate(180deg)';
        setTimeout(() => {
            document.body.style.filter = 'none';
        }, 3000);
        konamiCode = [];
    }
});

// Experience Tabs Functionality
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
            
            // Add animation class
            const activeContent = document.getElementById(targetTab);
            activeContent.style.animation = 'none';
            setTimeout(() => {
                activeContent.style.animation = 'fadeInUp 0.5s ease-out';
            }, 10);
        });
    });
});

// Enhanced project card interactions
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Company card hover effects
document.addEventListener('DOMContentLoaded', () => {
    const companyCards = document.querySelectorAll('.company-card');
    
    companyCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('featured')) {
                this.style.transform = 'translateY(-10px) scale(1.03)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('featured')) {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });
});

// Smooth scroll enhancement for experience section
document.addEventListener('DOMContentLoaded', () => {
    const experienceLink = document.querySelector('a[href="#experience"]');
    if (experienceLink) {
        experienceLink.addEventListener('click', (e) => {
            e.preventDefault();
            const experienceSection = document.getElementById('experience');
            const offsetTop = experienceSection.offsetTop - 80;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Highlight the experience section briefly
            setTimeout(() => {
                experienceSection.style.background = 'rgba(37, 99, 235, 0.05)';
                setTimeout(() => {
                    experienceSection.style.background = '';
                }, 2000);
            }, 500);
        });
    }
});

// Skills progress bar animation
document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.querySelector('#skills');
    let skillsAnimated = false;
    
    const animateSkills = () => {
        if (skillsAnimated) return;
        
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach((bar, index) => {
            const level = bar.getAttribute('data-level');
            setTimeout(() => {
                bar.style.width = level + '%';
            }, index * 100);
        });
        
        skillsAnimated = true;
    };
    
    // Intersection Observer for skills animation
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                animateSkills();
            }
        });
    }, {
        threshold: 0.3
    });
    
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }
});

// Enhanced mobile-friendly animations
document.addEventListener('DOMContentLoaded', () => {
    // Check if device is mobile
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth <= 1024 && window.innerWidth > 768;
    
    // Reduce motion for mobile devices for better performance
    if (isMobile) {
        document.body.classList.add('mobile-device');
        
        // Disable parallax on mobile completely
        const sectionTitles = document.querySelectorAll('.section-title');
        sectionTitles.forEach(title => {
            title.style.transform = 'none';
        });
    } else if (isTablet) {
        document.body.classList.add('tablet-device');
    }
    
    // Touch-friendly interactions for mobile
    if ('ontouchstart' in window) {
        const touchElements = document.querySelectorAll('.skill-item, .company-card, .btn');
        
        touchElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.classList.add('touch-active');
            });
            
            element.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.classList.remove('touch-active');
                }, 150);
            });
        });
    }
    
    // Fix mobile navigation overlay
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    // Ensure mobile menu closes when clicking outside
    document.addEventListener('click', (e) => {
        if (isMobile && navMenu && hamburger) {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });
    
    // Prevent scroll when mobile menu is open
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            if (isMobile) {
                document.body.style.overflow = navMenu.classList.contains('active') ? 'auto' : 'hidden';
            }
        });
    }
    
    // Re-enable scroll when menu closes
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isMobile) {
                document.body.style.overflow = 'auto';
            }
        });
    });
});

// Parallax scroll effects (disabled on mobile for performance)
document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth > 768) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            // Separate parallax for different elements
            const heroImage = document.querySelector('.hero-image');
            if (heroImage) {
                heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
            
            // Very subtle parallax for section titles (only within their own sections)
            const sectionTitles = document.querySelectorAll('.section-title');
            sectionTitles.forEach((title) => {
                const section = title.closest('section');
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.offsetHeight;
                    const viewportTop = scrolled;
                    const viewportBottom = scrolled + window.innerHeight;
                    
                    // Only apply parallax when section is in viewport
                    if (viewportBottom > sectionTop && viewportTop < sectionBottom) {
                        const relativeScroll = (scrolled - sectionTop) * 0.1;
                        // Limit the movement to prevent titles from moving too far
                        const limitedMovement = Math.max(-30, Math.min(30, relativeScroll));
                        title.style.transform = `translateY(${limitedMovement}px)`;
                    } else {
                        // Reset position when section is out of view
                        title.style.transform = 'translateY(0)';
                    }
                }
            });
        });
    }
});

// Counter animation for stats
document.addEventListener('DOMContentLoaded', () => {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stat = entry.target;
                const finalValue = parseInt(stat.dataset.count) || 0;
                const duration = 2000;
                const increment = finalValue / (duration / 16);
                let current = 0;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= finalValue) {
                        current = finalValue;
                        clearInterval(timer);
                    }
                    stat.textContent = Math.floor(current) + (stat.dataset.suffix || '');
                }, 16);
                
                statsObserver.unobserve(stat);
            }
        });
    }, { threshold: 0.5 });
    
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
});

// Scroll reveal for sections
document.addEventListener('DOMContentLoaded', () => {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // Add staggered animation to children
                const children = entry.target.querySelectorAll('.reveal-child');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('revealed');
                    }, index * 100);
                });
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    const revealElements = document.querySelectorAll('.reveal-section');
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
});

// Smooth scroll with mobile optimization
document.addEventListener('DOMContentLoaded', () => {
    // Override smooth scroll for better mobile performance
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 70;
                const isMobile = window.innerWidth <= 768;
                
                if (isMobile) {
                    // Instant scroll on mobile for better performance
                    window.scrollTo(0, offsetTop);
                } else {
                    // Smooth scroll on desktop
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
                
                // Close mobile menu if open
                const navMenu = document.querySelector('.nav-menu');
                const hamburger = document.querySelector('.hamburger');
                if (navMenu && hamburger) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });
    });
});

// Enhanced form animations
document.addEventListener('DOMContentLoaded', () => {
    const formInputs = document.querySelectorAll('input, textarea');
    
    formInputs.forEach(input => {
        const label = input.previousElementSibling || input.nextElementSibling;
        
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
            if (label && label.tagName === 'LABEL') {
                label.style.transform = 'translateY(-20px) scale(0.8)';
                label.style.color = 'var(--primary-color)';
            }
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
                if (label && label.tagName === 'LABEL') {
                    label.style.transform = 'translateY(0) scale(1)';
                    label.style.color = 'var(--text-secondary)';
                }
            }
        });
        
        // Check if input has value on load
        if (input.value) {
            input.parentElement.classList.add('focused');
            if (label && label.tagName === 'LABEL') {
                label.style.transform = 'translateY(-20px) scale(0.8)';
                label.style.color = 'var(--primary-color)';
            }
        }
    });
});

// Page transition animations
document.addEventListener('DOMContentLoaded', () => {
    // Add page load animation
    document.body.classList.add('page-loaded');
    
    // Loading spinner removal
    const loader = document.querySelector('.page-loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 1000);
    }
});
