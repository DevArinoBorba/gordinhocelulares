/**
 * MAIN JAVASCRIPT — GRUPO GORDINHO
 * Interatividade da navegação, drawer mobile, modais e efeitos visuais
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initProgressBar();
  initMobileMenu();
  initWhatsAppModal();
  initContactTabs();
  highlightActiveNavLink();
  initScrollReveal();
  initCounters();
});

/**
 * Barra de progresso de leitura no topo da página
 */
function initProgressBar() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  // Cria a barra se não existir
  let progressBar = header.querySelector('.header-progress-bar');
  if (!progressBar) {
    progressBar = document.createElement('div');
    progressBar.className = 'header-progress-bar';
    header.appendChild(progressBar);
  }

  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${Math.min(progress, 100)}%`;
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

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
 * Modal de Seleção de WhatsApp para as Lojas Físicas / Setores
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

/**
 * Efeito Visual: Scroll Reveal Suave (IntersectionObserver)
 */
function initScrollReveal() {
  // Se usuário prefere movimento reduzido, pula animações
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-revealed'));
    return;
  }

  // Auto-adiciona .reveal em seções principais, cards e blocos de destaque se ainda não tiverem
  const targets = document.querySelectorAll(
    'section:not(.page-header):not(.hero-section), .card, .proof-strip, .story-box, .values-card, .footer-store-box'
  );

  targets.forEach((el, index) => {
    if (!el.classList.contains('reveal')) {
      el.classList.add('reveal');
      // Adiciona leve delay em cards dentro do mesmo grid
      if (el.classList.contains('card') || el.classList.contains('values-card') || el.classList.contains('footer-store-box')) {
        const siblingIndex = (index % 4) + 1;
        el.classList.add(`reveal-delay-${siblingIndex}`);
      }
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/**
 * Efeito Visual: Contadores Animados de Números
 */
function initCounters() {
  const counterElements = document.querySelectorAll('.proof-number');
  if (!counterElements.length) return;

  const animateCounter = (el) => {
    const rawText = el.textContent.trim();
    
    // Extrai prefixo, valor numérico e sufixo
    let targetNum = 0;
    let prefix = '';
    let suffix = '';

    if (rawText.includes('+10')) {
      prefix = '+';
      targetNum = 10;
      suffix = ' Anos';
    } else if (rawText.includes('250')) {
      prefix = '+';
      targetNum = 250;
      suffix = ' mil';
    } else if (rawText.includes('100%')) {
      prefix = '';
      targetNum = 100;
      suffix = '%';
    } else if (rawText.includes('20')) {
      prefix = '+';
      targetNum = 20;
      suffix = ' mil';
    } else {
      return; // Mantém texto estático se formato desconhecido
    }

    let current = 0;
    const duration = 1200; // ms
    const startTime = performance.now();

    const updateFrame = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing suave (easeOutExpo)
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      current = Math.floor(easeOut * targetNum);
      
      el.textContent = `${prefix}${current}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(updateFrame);
      } else {
        el.textContent = rawText; // Garante texto exato original no fim
      }
    };

    requestAnimationFrame(updateFrame);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counterElements.forEach(el => observer.observe(el));
}
