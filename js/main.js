/**
 * MAIN JAVASCRIPT — GRUPO GORDINHO
 * Interatividade da navegação, drawer mobile, modais e efeitos visuais
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initProgressBar();
  initMobileMenu();
  highlightActiveNavLink();
  initScrollReveal();
  initCounters();
});

/**
 * Prende o foco (Tab/Shift+Tab) dentro de um contêiner enquanto ele estiver aberto,
 * e devolve o foco ao elemento que abriu o contêiner quando ele fecha.
 */
function trapFocus(container, triggerEl) {
  const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

  const handleKeydown = (e) => {
    if (e.key !== 'Tab') return;
    const focusable = Array.from(container.querySelectorAll(focusableSelector)).filter(el => el.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  container.addEventListener('keydown', handleKeydown);

  const focusable = container.querySelector(focusableSelector);
  if (focusable) focusable.focus();

  return () => {
    container.removeEventListener('keydown', handleKeydown);
    if (triggerEl) triggerEl.focus();
  };
}

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

  let releaseFocusTrap = null;

  const openDrawer = () => {
    toggleBtn.classList.add('open');
    drawer.classList.add('open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    if (backdrop) backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    releaseFocusTrap = trapFocus(drawer, toggleBtn);
  };

  const closeDrawer = () => {
    toggleBtn.classList.remove('open');
    drawer.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    if (backdrop) backdrop.classList.remove('open');
    document.body.style.overflow = '';
    if (releaseFocusTrap) {
      releaseFocusTrap();
      releaseFocusTrap = null;
    }
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
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const targets = document.querySelectorAll(
    'section:not(.page-header):not(.hero-section), .card, .proof-strip, .story-box, .value-card, .footer-store-box'
  );

  targets.forEach((el, index) => {
    if (!el.classList.contains('reveal')) {
      el.classList.add('reveal');
      if (el.classList.contains('card') || el.classList.contains('value-card') || el.classList.contains('footer-store-box')) {
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
      suffix = ' Mil';
    } else if (rawText.includes('98')) {
      prefix = '+';
      targetNum = 98;
      suffix = '%';
    } else if (rawText.includes('100%')) {
      prefix = '';
      targetNum = 100;
      suffix = '%';
    } else if (rawText.includes('20')) {
      prefix = '+';
      targetNum = 20;
      suffix = ' Mil';
    } else {
      return;
    }

    let current = 0;
    const duration = 1200;
    const startTime = performance.now();

    const updateFrame = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      current = Math.floor(easeOut * targetNum);
      
      el.textContent = `${prefix}${current}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(updateFrame);
      } else {
        el.textContent = rawText;
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
