// =====================================================
// HELPERS I18N
// =====================================================

function tr(key) {
  return window.I18N ? window.I18N.t(key) : key;
}

// =====================================================
// CONFIGURATION GALERIE
// =====================================================

const images = [
  { thumb: 'Images/Carrousel/Thumb/Salon.avif',        src: 'Images/Carrousel/Full/Salon.avif',        titleKey: 'galleryImages.livingRoom' },
  { thumb: 'Images/Carrousel/Thumb/SalleAManger.avif', src: 'Images/Carrousel/Full/SalleAManger.avif', titleKey: 'galleryImages.diningRoom' },
  { thumb: 'Images/Carrousel/Thumb/SalleAManger2.avif',src: 'Images/Carrousel/Full/SalleAManger2.avif',titleKey: 'galleryImages.diningRoom' },
  { thumb: 'Images/Carrousel/Thumb/SalleAManger3.avif',src: 'Images/Carrousel/Full/SalleAManger3.avif',titleKey: 'galleryImages.diningRoom' },
  { thumb: 'Images/Carrousel/Thumb/Cuisine.avif',      src: 'Images/Carrousel/Full/Cuisine.avif',      titleKey: 'galleryImages.kitchen' },
  { thumb: 'Images/Carrousel/Thumb/Bar.avif',          src: 'Images/Carrousel/Full/Bar.avif',          titleKey: 'galleryImages.bar' },
  { thumb: 'Images/Carrousel/Thumb/Bar2.avif',         src: 'Images/Carrousel/Full/Bar2.avif',         titleKey: 'galleryImages.bar' },
  { thumb: 'Images/Carrousel/Thumb/SDJ.avif',          src: 'Images/Carrousel/Full/SDJ.avif',          titleKey: 'galleryImages.gameRoom' },
  { thumb: 'Images/Carrousel/Thumb/SDJ2.avif',         src: 'Images/Carrousel/Full/SDJ2.avif',         titleKey: 'galleryImages.gameRoom' },
  { thumb: 'Images/Carrousel/Thumb/SDB.avif',          src: 'Images/Carrousel/Full/SDB.avif',          titleKey: 'galleryImages.bathroom' },
  { thumb: 'Images/Carrousel/Thumb/Chambre1.avif',     src: 'Images/Carrousel/Full/Chambre1.avif',     titleKey: 'galleryImages.bedroom1' },
  { thumb: 'Images/Carrousel/Thumb/Chambre2.avif',     src: 'Images/Carrousel/Full/Chambre2.avif',     titleKey: 'galleryImages.bedroom2' },
  { thumb: 'Images/Carrousel/Thumb/Chambre3.avif',     src: 'Images/Carrousel/Full/Chambre3.avif',     titleKey: 'galleryImages.bedroom3' },
  { thumb: 'Images/Carrousel/Thumb/SDB2.avif',         src: 'Images/Carrousel/Full/SDB2.avif',         titleKey: 'galleryImages.bathroom' },
  { thumb: 'Images/Carrousel/Thumb/SDB3.avif',         src: 'Images/Carrousel/Full/SDB3.avif',         titleKey: 'galleryImages.bathroom' },
  { thumb: 'Images/Carrousel/Thumb/SDB4.avif',         src: 'Images/Carrousel/Full/SDB4.avif',         titleKey: 'galleryImages.bathroom' },
  { thumb: 'Images/Carrousel/Thumb/Chambre4.avif',     src: 'Images/Carrousel/Full/Chambre4.avif',     titleKey: 'galleryImages.bedroom4' },
  { thumb: 'Images/Carrousel/Thumb/Chambre4bis.avif',  src: 'Images/Carrousel/Full/Chambre4bis.avif',  titleKey: 'galleryImages.bedroom4' },
  { thumb: 'Images/Carrousel/Thumb/Chambre5.avif',     src: 'Images/Carrousel/Full/Chambre5.avif',     titleKey: 'galleryImages.bedroom5' },
  { thumb: 'Images/Carrousel/Thumb/Fenetre.avif',      src: 'Images/Carrousel/Full/Fenetre.avif',      titleKey: 'galleryImages.window' },
  { thumb: 'Images/Carrousel/Thumb/FacadeAV.avif',     src: 'Images/Carrousel/Full/FacadeAV.avif',     titleKey: 'galleryImages.frontFacade' },
  { thumb: 'Images/Carrousel/Thumb/FacadeCOTE.avif',   src: 'Images/Carrousel/Full/FacadeCOTE.avif',   titleKey: 'galleryImages.southFacade' },
  { thumb: 'Images/Carrousel/Thumb/Petanque.avif',     src: 'Images/Carrousel/Full/Petanque.avif',     titleKey: 'galleryImages.petanque' },
  { thumb: 'Images/Carrousel/Thumb/Terrasse.avif',     src: 'Images/Carrousel/Full/Terrasse.avif',     titleKey: 'galleryImages.terrace' }
];

const IMAGES_PER_PAGE = 6;
let currentPage = 0;
let lightbox = null;

// =====================================================
// GALERIE
// =====================================================

function getGalleryElements() {
  return {
    grid: document.getElementById('galleryGrid'),
    prevBtn: document.querySelector('.gallery-nav.prev'),
    nextBtn: document.querySelector('.gallery-nav.next'),
    dotsContainer: document.getElementById('galleryDots')
  };
}

function getTotalPages() {
  return Math.ceil(images.length / IMAGES_PER_PAGE);
}

function createDots() {
  const { dotsContainer } = getGalleryElements();
  if (!dotsContainer) return;

  dotsContainer.innerHTML = '';

  for (let i = 0; i < getTotalPages(); i++) {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.classList.add('gallery-dot');
    dot.setAttribute('aria-label', `${tr('gallery.title')} ${i + 1}`);

    if (i === currentPage) {
      dot.classList.add('active');
    }

    dot.addEventListener('click', () => {
      currentPage = i;
      renderGallery();
    });

    dotsContainer.appendChild(dot);
  }
}

function updateDots() {
  document.querySelectorAll('.gallery-dot').forEach((dot, index) => {
    dot.classList.toggle('active', index === currentPage);
  });
}

function renderGallery() {
  const { grid, prevBtn, nextBtn } = getGalleryElements();
  if (!grid) return;

  grid.innerHTML = '';

  const start = currentPage * IMAGES_PER_PAGE;
  const end = start + IMAGES_PER_PAGE;

  images.forEach((imgObj, index) => {
    const title = tr(imgObj.titleKey);

    const a = document.createElement('a');
    a.href = imgObj.src;
    a.className = 'glightbox';
    a.dataset.gallery = 'gite';
    a.dataset.title = title;
    a.dataset.index = String(index);

    if (index < start || index >= end) {
      a.classList.add('is-hidden');
      a.setAttribute('aria-hidden', 'true');
      a.tabIndex = -1;
    }

    const img = document.createElement('img');
    img.src = imgObj.src;
    img.alt = title || tr('gallery.defaultAlt');
    img.loading = 'lazy';

    img.addEventListener('load', () => {
      img.classList.add('is-loaded');
    });

    if (img.complete) {
      img.classList.add('is-loaded');
    }

    a.appendChild(img);
    grid.appendChild(a);
  });

  if (prevBtn) {
    prevBtn.disabled = currentPage === 0;
    prevBtn.setAttribute('aria-label', tr('gallery.prev'));
  }

  if (nextBtn) {
    nextBtn.disabled = (currentPage + 1) * IMAGES_PER_PAGE >= images.length;
    nextBtn.setAttribute('aria-label', tr('gallery.next'));
  }

  if (lightbox) {
    lightbox.reload();
  }

  updateDots();
}

function initGallery() {
  const { prevBtn, nextBtn } = getGalleryElements();

  if (window.GLightbox) {
    lightbox = GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true,
      closeButton: true,
      zoomable: true,
      draggable: true,
      keyboardNavigation: true
    });
  }

  createDots();
  renderGallery();

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentPage > 0) {
        currentPage--;
        renderGallery();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if ((currentPage + 1) * IMAGES_PER_PAGE < images.length) {
        currentPage++;
        renderGallery();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (document.querySelector('.glightbox-open')) return;

    if (e.key === 'ArrowLeft' && currentPage > 0) {
      currentPage--;
      renderGallery();
    } else if (e.key === 'ArrowRight' && (currentPage + 1) * IMAGES_PER_PAGE < images.length) {
      currentPage++;
      renderGallery();
    }
  });
}

// =====================================================
// SMOOTH SCROLL POUR NAVIGATION
// =====================================================

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;

      const navbarHeight = document.querySelector('.site-header')?.offsetHeight || 0;
      const targetPosition = targetElement.offsetTop - navbarHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
}

// =====================================================
// ANIMATIONS AU SCROLL
// =====================================================

function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  document.querySelectorAll('.activity-card').forEach((card) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
}

// =====================================================
// MOBILE MENU HAMBURGER
// =====================================================

function closeMobileMenu() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!menuToggle || !navLinks) return;

  menuToggle.classList.remove('active');
  navLinks.classList.remove('active');
  document.body.classList.remove('menu-open');
}

function initMobileMenu() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
  });

  navLinks.addEventListener('click', (e) => {
    if (e.target === navLinks) {
      closeMobileMenu();
    }
  });

  function handleResize() {
    if (window.innerWidth > 768) {
      menuToggle.style.display = 'none';
      closeMobileMenu();
    } else {
      menuToggle.style.display = 'flex';
    }
  }

  handleResize();
  window.addEventListener('resize', handleResize);
}

// =====================================================
// CALENDRIER CUSTOM (synchronisé avec Google Calendar iCal)
// =====================================================

const ICAL_URL = 'https://calendar.google.com/calendar/ical/gite.augrandcerf.grandvoir%40gmail.com/public/basic.ics';
const NETLIFY_FUNCTION = '/api/calendar';

const CORS_PROXIES = [
  'https://api.allorigins.win/raw?url=',
  'https://corsproxy.io/?url=',
  'https://api.codetabs.com/v1/proxy/?quest='
];

let bookedDates = new Set();
let currentCalendarDate = new Date();
currentCalendarDate.setDate(1);

function getCalendarMonths() {
  const months = tr('calendar.months');
  return Array.isArray(months) ? months : [];
}

function parseICalDate(dateStr) {
  const year = parseInt(dateStr.substring(0, 4), 10);
  const month = parseInt(dateStr.substring(4, 6), 10) - 1;
  const day = parseInt(dateStr.substring(6, 8), 10);
  return new Date(year, month, day);
}

function formatDateKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function parseICalData(icalText) {
  const dates = new Set();
  const events = icalText.split('BEGIN:VEVENT');

  events.forEach((event, index) => {
    if (index === 0) return;

    const startMatch = event.match(/DTSTART[^:]*:(\d{8})/);
    const endMatch = event.match(/DTEND[^:]*:(\d{8})/);

    if (startMatch && endMatch) {
      const startDate = parseICalDate(startMatch[1]);
      const endDate = parseICalDate(endMatch[1]);

      const current = new Date(startDate);
      while (current < endDate) {
        dates.add(formatDateKey(current));
        current.setDate(current.getDate() + 1);
      }
    }
  });

  return dates;
}

async function fetchICal(url) {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'text/calendar, text/plain, */*'
    }
  });

  if (!response.ok) {
    throw new Error('HTTP ' + response.status);
  }

  const text = await response.text();

  if (!text.includes('BEGIN:VCALENDAR')) {
    throw new Error('Contenu non valide (pas un iCal)');
  }

  return text;
}

async function loadCalendarEvents() {
  const statusEl = document.getElementById('calendarStatus');

  if (statusEl) {
    statusEl.textContent = tr('calendar.loading');
    statusEl.className = 'calendar-status loading';
  }

  let icalText = null;

  try {
    icalText = await fetchICal(NETLIFY_FUNCTION);
  } catch (error) {
    console.warn('Netlify Function indisponible:', error.message);
  }

  if (!icalText) {
    for (const proxy of CORS_PROXIES) {
      try {
        icalText = await fetchICal(proxy + encodeURIComponent(ICAL_URL));
        break;
      } catch (error) {
        console.warn('Échec proxy', proxy, ':', error.message);
      }
    }
  }

  if (icalText) {
    bookedDates = parseICalData(icalText);

    if (statusEl) {
      statusEl.textContent = '';
      statusEl.className = 'calendar-status';
    }

    renderCalendar();
    return;
  }

  console.error('Impossible de charger le calendrier');

  if (statusEl) {
    statusEl.textContent = tr('calendar.error');
    statusEl.className = 'calendar-status error';
  }

  renderCalendar();
}

function renderCalendar() {
  const titleEl = document.getElementById('calendarTitle');
  const daysEl = document.getElementById('calendarDays');

  if (!titleEl || !daysEl) return;

  const year = currentCalendarDate.getFullYear();
  const month = currentCalendarDate.getMonth();
  const months = getCalendarMonths();

  titleEl.textContent = `${months[month] || month + 1} ${year}`;

  const firstDay = new Date(year, month, 1);
  let firstDayOfWeek = firstDay.getDay();
  firstDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;

  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  daysEl.innerHTML = '';

  for (let i = 0; i < firstDayOfWeek; i++) {
    const empty = document.createElement('div');
    empty.className = 'calendar-day empty';
    daysEl.appendChild(empty);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayEl = document.createElement('div');
    dayEl.className = 'calendar-day';
    dayEl.textContent = day;

    const currentDate = new Date(year, month, day);
    const dateKey = formatDateKey(currentDate);

    if (currentDate < today) {
      dayEl.classList.add('past');
      dayEl.title = tr('calendar.past');
    } else if (bookedDates.has(dateKey)) {
      dayEl.classList.add('booked');
      dayEl.title = tr('calendar.booked');
    } else {
      dayEl.classList.add('available');
      dayEl.title = tr('calendar.available');
    }

    if (currentDate.getTime() === today.getTime()) {
      dayEl.classList.add('today');
    }

    daysEl.appendChild(dayEl);
  }

  const prevBtn = document.getElementById('calendarPrev');
  const nextBtn = document.getElementById('calendarNext');

  if (prevBtn) {
    const prevMonth = new Date(year, month - 1, 1);
    const todayMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    prevBtn.disabled = prevMonth < todayMonth;
    prevBtn.setAttribute('aria-label', tr('calendar.prevMonth'));
  }

  if (nextBtn) {
    nextBtn.setAttribute('aria-label', tr('calendar.nextMonth'));
  }
}

function initCalendar() {
  const prevBtn = document.getElementById('calendarPrev');
  const nextBtn = document.getElementById('calendarNext');

  if (!prevBtn || !nextBtn) return;

  prevBtn.addEventListener('click', () => {
    currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);
    renderCalendar();
  });

  nextBtn.addEventListener('click', () => {
    currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);
    renderCalendar();
  });

  loadCalendarEvents();
}

// =====================================================
// LANGUAGE CHANGE
// =====================================================

function initLanguageEvents() {
  window.addEventListener('languagechange', () => {
    createDots();
    renderGallery();
    renderCalendar();

    const statusEl = document.getElementById('calendarStatus');
    if (statusEl?.classList.contains('error')) {
      statusEl.textContent = tr('calendar.error');
    } else if (statusEl?.classList.contains('loading')) {
      statusEl.textContent = tr('calendar.loading');
    }
  });
}

// =====================================================
// PERFORMANCE - DEBOUNCE RESIZE
// =====================================================

function initResizeHandler() {
  let resizeTimer;

  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (lightbox) {
        lightbox.reload();
      }
    }, 250);
  });
}

// =====================================================
// INITIALISATION
// =====================================================

function initSite() {
  initGallery();
  initSmoothScroll();
  initScrollAnimations();
  initMobileMenu();
  initCalendar();
  initLanguageEvents();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSite);
} else {
  initSite();
}
