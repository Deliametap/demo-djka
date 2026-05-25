/* ═══════════════════════════════════════════════════════════
   app.js — Dashboard Uji Sarana BLU
═══════════════════════════════════════════════════════════ */

// ─── Update tanggal di topbar ───
function updateCurrentDate() {
  const el = document.getElementById('currentDate');
  if (!el) return;

  const bulanIndo = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];

  const now  = new Date();
  const hari  = now.getDate();
  const bulan = bulanIndo[now.getMonth()];
  const tahun = now.getFullYear();

  el.textContent = `${hari} ${bulan} ${tahun}`;
}

updateCurrentDate();

// ─── Keyboard shortcut Ctrl+K → fokus search ───
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    const searchInput = document.querySelector('.topbar-search input');
    if (searchInput) searchInput.focus();
  }
});

// ─── Sidebar collapse toggle ───
(function() {
  var sidebar = document.querySelector('.sidebar');
  var btn     = document.getElementById('sidebarCollapseBtn');
  var icon    = document.getElementById('sidebarCollapseIcon');
  if (!sidebar || !btn) return;

  function setCollapsed(collapsed) {
    if (collapsed) {
      sidebar.classList.add('collapsed');
      icon.innerHTML = '<polyline points="9 18 15 12 9 6"/>';
      btn.style.left = (72 - 14) + 'px';
    } else {
      sidebar.classList.remove('collapsed');
      icon.innerHTML = '<polyline points="15 18 9 12 15 6"/>';
      btn.style.left = (220 - 14) + 'px';
    }
    localStorage.setItem('sidebarCollapsed', collapsed ? '1' : '0');
  }

  // Restore state
  setCollapsed(localStorage.getItem('sidebarCollapsed') === '1');

  btn.addEventListener('click', function() {
    setCollapsed(!sidebar.classList.contains('collapsed'));
  });
})();
document.querySelectorAll('.sidebar-item').forEach(function(item) {
  item.addEventListener('click', function(e) {
    var href = item.getAttribute('href');
    if (!href || href === '#') {
      e.preventDefault();
    }
    document.querySelectorAll('.sidebar-item').forEach(function(i) {
      i.classList.remove('active');
      i.removeAttribute('aria-current');
    });
    item.classList.add('active');
    item.setAttribute('aria-current', 'page');
  });
});

// ─── Export dropdown toggle ───
(function() {
  var dropdown = document.getElementById('exportDropdown');
  var toggle   = document.getElementById('btnExportToggle');
  if (!dropdown || !toggle) return;

  toggle.addEventListener('click', function(e) {
    e.stopPropagation();
    var isOpen = dropdown.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Tutup saat klik di luar
  document.addEventListener('click', function() {
    dropdown.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });

  // Tutup saat item dipilih
  dropdown.querySelectorAll('.export-menu-item').forEach(function(item) {
    item.addEventListener('click', function() {
      dropdown.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Tutup dengan Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      dropdown.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();
