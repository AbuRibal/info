// تفعيل القائمة المتحركة على الهواتف
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.querySelector('i').classList.toggle('fa-bars');
    menuToggle.querySelector('i').classList.toggle('fa-times');
});

// إغلاق القائمة عند النقر على رابط
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.querySelector('i').classList.add('fa-bars');
        menuToggle.querySelector('i').classList.remove('fa-times');
    });
});

// تغيير النافبار عند التمرير
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // زر العودة للأعلى
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

// تفعيل الروابط النشطة عند التمرير
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-link[href*="${sectionId}"]`).classList.add('active');
        } else {
            document.querySelector(`.nav-link[href*="${sectionId}"]`).classList.remove('active');
        }
    });
});

// إضافة السنة الحالية في الفوتر
document.getElementById('currentYear').textContent = new Date().getFullYear();

// تحريك أشرطة المهارات عند الظهور
const skills = document.querySelectorAll('.skill-level');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillLevel = entry.target;
            const width = skillLevel.style.width;
            skillLevel.style.width = '0';
            setTimeout(() => {
                skillLevel.style.width = width;
            }, 300);
        }
    });
}, { threshold: 0.5 });

skills.forEach(skill => observer.observe(skill));

// نموذج الاتصال
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // هنا يمكنك إضافة كود إرسال النموذج إلى الخادم
        alert('شكراً على رسالتك! سأتواصل معك قريباً.');
        contactForm.reset();
    });
}

// نموذج النشرة البريدية
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        
        // هنا يمكنك إضافة كود الإشتراك في النشرة البريدية
        alert(`شكراً على اشتراكك في النشرة البريدية! تم إرسال تأكيد إلى ${emailInput.value}`);
        emailInput.value = '';
    });
}
