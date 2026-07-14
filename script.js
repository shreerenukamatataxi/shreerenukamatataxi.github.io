// ============================================
// RENUKA MATA TOURS - MAIN JAVASCRIPT
// ============================================

// ============================================
// 1. MOBILE MENU TOGGLE
// ============================================
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.querySelector('.hamburger');
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
}

// Close menu when clicking a link
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('navLinks').classList.remove('open');
            document.querySelector('.hamburger').classList.remove('active');
        });
    });
});

// ============================================
// 2. QUICK BOOK FUNCTION
// ============================================
function quickBook() {
    const from = document.getElementById('qFrom').value;
    const to = document.getElementById('qTo').value;
    const dateInput = document.getElementById('qDate');
    const date = dateInput.value || 'Date to be confirmed';
    
    // Validation
    if (from === to) {
        showToast('⚠️ Please select different starting and destination locations!', 'warning');
        return;
    }
    
    if (!dateInput.value) {
        showToast('📅 Please select a travel date!', 'warning');
        return;
    }
    
    // Success message
    showToast('✅ Booking request sent! We will reply within 15 minutes on WhatsApp.', 'success');
    
    // WhatsApp message
    const msg = `Hello! I need a taxi booking.%0A%0A📍 From: ${from}%0A📍 To: ${to}%0A📅 Date: ${date}%0A%0APlease share the rate and confirm availability.`;
    
    // 🔴 APNA WHATSAPP NUMBER YAHAN DAALEIN (91 ke baad 10 digit)
    const phoneNumber = '9359511778'; // ← Isko apne number se replace karein
    
    window.open(`https://wa.me/${phoneNumber}?text=${msg}`, '_blank');
}

// ============================================
// 3. CONTACT FORM SUBMIT FUNCTION
// ============================================
function submitBooking() {
    const name = document.getElementById('cName').value.trim() || 'N/A';
    const phone = document.getElementById('cPhone').value.trim() || 'N/A';
    const from = document.getElementById('cFrom').value;
    const to = document.getElementById('cTo').value;
    const date = document.getElementById('cDate').value || 'N/A';
    const persons = document.getElementById('cPersons').value || 'N/A';
    const vehicle = document.getElementById('cVehicle').value;
    const msg = document.getElementById('cMsg').value.trim() || 'No special request';
    
    // Validation
    if (name === 'N/A' || name === '') {
        showToast('⚠️ Please enter your name!', 'warning');
        document.getElementById('cName').focus();
        return;
    }
    
    if (phone === 'N/A' || phone === '' || phone.length < 10) {
        showToast('⚠️ Please enter a valid mobile number!', 'warning');
        document.getElementById('cPhone').focus();
        return;
    }
    
    if (!document.getElementById('cDate').value) {
        showToast('📅 Please select a travel date!', 'warning');
        document.getElementById('cDate').focus();
        return;
    }
    
    // Success message
    showToast('✅ Booking request sent successfully! We will reply within 15 minutes.', 'success');
    
    // WhatsApp message
    const text = `🙏 Hello Renuka Mata Tours!%0A%0A👤 Name: ${name}%0A📞 Phone: ${phone}%0A%0A📍 From: ${from}%0A📍 To: ${to}%0A📅 Date: ${date}%0A👥 Passengers: ${persons}%0A🚗 Vehicle: ${vehicle}%0A%0A💬 Message: ${msg}%0A%0APlease confirm the booking.`;
    
    // 🔴 APNA WHATSAPP NUMBER YAHAN DAALEIN (91 ke baad 10 digit)
    const phoneNumber = '9359511778'; // ← Isko apne number se replace karein
    
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
}

// ============================================
// 4. TOAST NOTIFICATION SYSTEM
// ============================================
function showToast(message, type = 'info') {
    // Remove existing toast if any
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    
    // Set color based on type
    let bgColor = '#25D366'; // success - green
    let icon = '✅';
    
    if (type === 'warning') {
        bgColor = '#FF9800';
        icon = '⚠️';
    } else if (type === 'error') {
        bgColor = '#F44336';
        icon = '❌';
    } else if (type === 'info') {
        bgColor = '#2196F3';
        icon = 'ℹ️';
    }
    
    toast.style.cssText = `
        position: fixed;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        background: ${bgColor};
        color: #fff;
        padding: 14px 28px;
        border-radius: 12px;
        font-family: 'Inter', sans-serif;
        font-size: 15px;
        font-weight: 600;
        z-index: 99999;
        box-shadow: 0 8px 30px rgba(0,0,0,0.2);
        animation: slideDown 0.5s ease;
        max-width: 90%;
        text-align: center;
        display: flex;
        align-items: center;
        gap: 10px;
    `;
    
    toast.innerHTML = `${icon} ${message}`;
    
    document.body.appendChild(toast);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        toast.style.animation = 'slideUp 0.5s ease';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.remove();
            }
        }, 500);
    }, 4000);
}

// ============================================
// 5. ADD TOAST ANIMATIONS
// ============================================
// Add animation styles dynamically
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    
    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(-30px);
        }
    }
`;
document.head.appendChild(styleSheet);

// ============================================
// 6. AUTO CLOSE MOBILE MENU ON RESIZE
// ============================================
window.addEventListener('resize', function() {
    if (window.innerWidth > 640) {
        document.getElementById('navLinks').classList.remove('open');
        document.querySelector('.hamburger').classList.remove('active');
    }
});

// ============================================
// 7. SET DEFAULT DATE IN QUICK BOOK
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('qDate');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
        // Set default date to tomorrow
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        dateInput.value = tomorrow.toISOString().split('T')[0];
    }
    
    // Set default date in contact form
    const contactDate = document.getElementById('cDate');
    if (contactDate) {
        const today = new Date().toISOString().split('T')[0];
        contactDate.setAttribute('min', today);
    }
});

// ============================================
// 8. SMOOTH SCROLL FOR NAV LINKS
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ============================================
// 9. KEYBOARD SHORTCUT - PRESS ESC TO CLOSE MENU
// ============================================
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.getElementById('navLinks').classList.remove('open');
        document.querySelector('.hamburger').classList.remove('active');
    }
});

console.log('🚀 Renuka Mata Tours - Website Loaded Successfully!');
console.log('📞 WhatsApp Number: 919876543210 (Update this in script.js)');
