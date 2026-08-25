/**
 * MAIN JAVASCRIPT — GRUPO GORDINHO
 * Interatividade da navegação, drawer mobile e modais
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileMenu();
  initWhatsAppModal();
  initContactTabs();
  highlightActiveNavLink();
});

/**
 * Efeito de cabeçalho ao rolar a página
 */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const checkScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', checkScroll, { passive: true });
  checkScroll();
}

/**
 * Menu Drawer Mobile
 */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle-btn');
  const drawer = document.querySelector('.mobile-drawer');
  const backdrop = document.querySelector('.mobile-drawer-backdrop');

  if (!toggleBtn || !drawer) return;

  const openDrawer = () => {
    toggleBtn.classList.add('open');
    drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    toggleBtn.classList.remove('open');
    drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (backdrop) {
    backdrop.addEventListener('click', closeDrawer);
  }

  // Fechar ao clicar em link interno
  drawer.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Fechar no Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

/**
 * Modal de Seleção de WhatsApp para as 2 Lojas Físicas
 */
function initWhatsAppModal() {
  const modalBackdrop = document.getElementById('whatsappModal');
  const openButtons = document.querySelectorAll('[data-open-whatsapp-modal]');
  const closeButtons = document.querySelectorAll('[data-close-whatsapp-modal]');

  if (!modalBackdrop) return;

  const openModal = () => {
    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  };

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });
}

/**
 * Alternância de abas na página de Contato (Mobile)
 */
function initContactTabs() {
  const tabButtons = document.querySelectorAll('.contact-tab-btn');
  const storeColumns = document.querySelectorAll('.store-contact-column');

  if (!tabButtons.length || !storeColumns.length) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetStore = btn.getAttribute('data-target-store');
      
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      storeColumns.forEach(col => {
        if (col.getAttribute('data-store') === targetStore) {
          col.style.display = 'flex';
        } else {
          // Oculta apenas em telas menores que 992px via JS inline ou classe
          if (window.innerWidth < 992) {
            col.style.display = 'none';
          } else {
            col.style.display = 'flex';
          }
        }
      });
    });
  });

  const handleResize = () => {
    if (window.innerWidth >= 992) {
      storeColumns.forEach(col => col.style.display = 'flex');
    } else {
      const activeTab = document.querySelector('.contact-tab-btn.active');
      if (activeTab) {
        const targetStore = activeTab.getAttribute('data-target-store');
        storeColumns.forEach(col => {
          col.style.display = col.getAttribute('data-store') === targetStore ? 'flex' : 'none';
        });
      }
    }
  };

  window.addEventListener('resize', handleResize);
  handleResize();
}

/**
 * Destaca o link ativo na barra de navegação
 */
function highlightActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
