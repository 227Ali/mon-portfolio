// MODALE pour le document du mémoire
const modal = document.getElementById('documentModal');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.querySelector('.modal-close');

if (openBtn) {
    openBtn.onclick = function() {
        modal.style.display = 'flex';
    }
}

if (closeBtn) {
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Animation au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section, .skill-card, .timeline-item, .formation-card, .pro-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ==================== FONCTION POUR OUVRIR LES ATTESTATIONS ====================
function openAttestation(pdfPath) {
    // Ouvre le PDF dans un nouvel onglet
    window.open(pdfPath, '_blank');
}
// ==================== LIGHTBOX POUR LES IMAGES ====================
// Récupération des éléments
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');

// Fonction pour ouvrir la lightbox
function openLightbox(imgElement) {
    lightbox.style.display = 'flex';
    lightboxImg.src = imgElement.src;
    lightboxImg.alt = imgElement.alt;
    
    // Récupérer le texte en dessous de l'image (span)
    const parentDiv = imgElement.parentElement;
    const captionSpan = parentDiv.querySelector('span');
    if (captionSpan) {
        lightboxCaption.textContent = captionSpan.textContent;
    } else {
        lightboxCaption.textContent = imgElement.alt || 'Image';
    }
}

// Fonction pour fermer la lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Ajouter l'événement de clic sur toutes les images de la galerie
document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery-img img');
    
    galleryImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function(event) {
            event.stopPropagation();
            openLightbox(this);
        });
    });
});

// Fermer avec la touche Echap
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && lightbox.style.display === 'flex') {
        closeLightbox();
    }
});