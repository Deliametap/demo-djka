/* ═══════════════════════════════════════════════════════════
   app.js — Dashboard Payment BLU
═══════════════════════════════════════════════════════════ */

// ─── Update tanggal di topbar ───
function updateCurrentDate() {
  const el = document.getElementById('currentDate');
  if (!el) return;
  const bulanIndo = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];
  const now   = new Date();
  el.textContent = `${now.getDate()} ${bulanIndo[now.getMonth()]} ${now.getFullYear()}`;
}
updateCurrentDate();

// ─── Keyboard shortcut Ctrl+K → fokus search ───
document.addEventListener('keydown', function(e) {
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

  var EXPANDED_WIDTH = 240;

  function setCollapsed(collapsed) {
    if (collapsed) {
      sidebar.classList.add('collapsed');
      icon.innerHTML = '<polyline points="9 18 15 12 9 6"/>';
      btn.style.left = (72 - 14) + 'px';
    } else {
      sidebar.classList.remove('collapsed');
      icon.innerHTML = '<polyline points="15 18 9 12 15 6"/>';
      btn.style.left = (EXPANDED_WIDTH - 14) + 'px';
    }
    localStorage.setItem('paymentBluSidebarCollapsed', collapsed ? '1' : '0');
  }

  setCollapsed(localStorage.getItem('paymentBluSidebarCollapsed') === '1');

  btn.addEventListener('click', function() {
    setCollapsed(!sidebar.classList.contains('collapsed'));
  });
})();

// ─── Monitoring accordion ───
(function() {
  var accordionBtn = document.getElementById('menuMonitoring');
  var submenu      = document.getElementById('subMonitoring');
  if (!accordionBtn || !submenu) return;

  function setExpanded(expanded) {
    if (expanded) {
      accordionBtn.setAttribute('aria-expanded', 'true');
      submenu.classList.remove('collapsed');
    } else {
      accordionBtn.setAttribute('aria-expanded', 'false');
      submenu.classList.add('collapsed');
    }
  }

  setExpanded(true);

  accordionBtn.addEventListener('click', function() {
    var isExpanded = accordionBtn.getAttribute('aria-expanded') === 'true';
    setExpanded(!isExpanded);
  });
})();

// ─── More dropdown — teleport ke <body> agar lepas dari semua overflow context ───
(function() {
  // Pindahkan semua .opt-more-menu ke body saat halaman load
  function teleportMenus() {
    document.querySelectorAll('.opt-more-wrap').forEach(function(wrap, i) {
      var btn  = wrap.querySelector('.opt-more');
      var menu = wrap.querySelector('.opt-more-menu');
      if (!btn || !menu) return;

      // tandai relasi btn ↔ menu via data attribute
      var uid = 'omenu-' + i;
      btn.setAttribute('data-menu-id', uid);
      menu.setAttribute('id', uid);

      // pindahkan menu ke body
      document.body.appendChild(menu);
    });
  }

  function closeAllMoreMenus() {
    document.querySelectorAll('.opt-more-menu.open').forEach(function(m) {
      m.classList.remove('open');
    });
    document.querySelectorAll('.opt-more[aria-expanded="true"]').forEach(function(b) {
      b.setAttribute('aria-expanded', 'false');
    });
  }

  function positionMenu(menu, btn) {
    var rect = btn.getBoundingClientRect();
    menu.style.position = 'fixed';
    menu.style.top      = (rect.bottom + 6) + 'px';
    menu.style.right    = (window.innerWidth - rect.right) + 'px';
    menu.style.left     = 'auto';
    menu.style.zIndex   = '9999';
  }

  // jalankan setelah DOM siap
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', teleportMenus);
  } else {
    teleportMenus();
  }

  document.addEventListener('click', function(e) {
    // klik tombol ⋮
    var btn = e.target.closest('.opt-more');
    if (btn) {
      e.stopPropagation();
      var menuId = btn.getAttribute('data-menu-id');
      var menu   = document.getElementById(menuId);
      if (!menu) return;

      var isOpen = menu.classList.contains('open');
      closeAllMoreMenus();

      if (!isOpen) {
        positionMenu(menu, btn);
        menu.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
      return;
    }

    // klik item di dalam menu → tutup lalu jalankan aksi
    var item = e.target.closest('.opt-more-item');
    if (item) {
      closeAllMoreMenus();
      if (item.classList.contains('item-delete')) {
        openHapusModal();
      }
      return;
    }

    // klik di luar → tutup
    if (!e.target.closest('.opt-more-menu')) {
      closeAllMoreMenus();
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeAllMoreMenus();
  });

  // tutup saat scroll
  document.addEventListener('scroll', closeAllMoreMenus, true);
})();

// ─── Modal: Konfirmasi Hapus Billing ───
(function() {
  var overlay = document.getElementById('modalHapusBilling');
  var btnClose   = document.getElementById('btnModalHapusClose');
  var btnCancel  = document.getElementById('btnModalHapusCancel');
  var btnConfirm = document.getElementById('btnModalHapusConfirm');
  if (!overlay) return;

  window.openHapusModal = function() {
    overlay.classList.add('open');
    overlay.removeAttribute('aria-hidden');
    setTimeout(function() {
      if (btnConfirm) btnConfirm.focus();
    }, 50);
  };

  function closeModal() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
  }

  if (btnClose)   btnClose.addEventListener('click', closeModal);
  if (btnCancel)  btnCancel.addEventListener('click', closeModal);
  if (btnConfirm) btnConfirm.addEventListener('click', function() {
    closeModal();
    // TODO: jalankan aksi hapus data
  });

  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
  });
})();

// ─── Modal: Konfirmasi Hapus Tarif ───
(function() {
  var overlay    = document.getElementById('modalHapusTarif');
  var btnClose   = document.getElementById('btnModalHapusTarifClose');
  var btnCancel  = document.getElementById('btnModalHapusTarifCancel');
  var btnConfirm = document.getElementById('btnModalHapusTarifConfirm');
  if (!overlay) return;

  window.openHapusTarifModal = function() {
    overlay.classList.add('open');
    overlay.removeAttribute('aria-hidden');
    setTimeout(function() { if (btnConfirm) btnConfirm.focus(); }, 50);
  };

  function closeModal() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
  }

  if (btnClose)   btnClose.addEventListener('click', closeModal);
  if (btnCancel)  btnCancel.addEventListener('click', closeModal);
  if (btnConfirm) btnConfirm.addEventListener('click', closeModal);
  overlay.addEventListener('click', function(e) { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
  });
})();

// Trigger hapus tarif dari tombol di tabel
document.addEventListener('click', function(e) {
  if (e.target.closest('.btn-tarif-hapus')) {
    if (typeof window.openHapusTarifModal === 'function') window.openHapusTarifModal();
  }
});

// ─── Modal: Tambah / Edit Tarif Pelayanan ───
(function() {
  var overlay   = document.getElementById('modalTarifPelayanan');
  var btnOpen   = document.getElementById('btnTambahTarif');
  var btnClose  = document.getElementById('btnModalTarifClose');
  var btnCancel = document.getElementById('btnModalTarifCancel');
  var modalTitle = document.getElementById('modalTarifTitle');
  var modalIcon  = document.getElementById('modalTarifIcon');
  if (!overlay) return;

  var SVG_TAMBAH = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>';
  var SVG_EDIT   = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>';

  // Elemen form
  var fBidang    = document.getElementById('tarifBidangPelayanan');
  var fKodeAkun  = document.getElementById('tarifKodeAkun');
  var fKodeTarif = document.getElementById('tarifKodeTarif');
  var fSubJenis  = document.getElementById('tarifSubJenis');
  var fNama      = document.getElementById('tarifNama');
  var fNominal   = document.getElementById('tarifNominal');
  var fSatuan    = document.getElementById('tarifSatuan');
  var fKet       = document.getElementById('tarifKeterangan');

  function resetForm() {
    if (fBidang)    fBidang.value    = '';
    if (fKodeAkun)  fKodeAkun.value  = '';
    if (fKodeTarif) fKodeTarif.value = '';
    if (fSubJenis)  fSubJenis.value  = '';
    if (fNama)      fNama.value      = '';
    if (fNominal)   fNominal.value   = '';
    if (fSatuan)    fSatuan.value    = '';
    if (fKet)       fKet.value       = '';
  }

  function openModal(mode, data) {
    if (mode === 'edit' && data) {
      if (modalTitle) modalTitle.textContent = 'Edit Tarif Pelayanan';
      if (modalIcon)  modalIcon.innerHTML    = SVG_EDIT;
      if (fBidang)    fBidang.value    = data.bidang    || '';
      if (fKodeAkun)  fKodeAkun.value  = data.kodeAkun  || '';
      if (fKodeTarif) fKodeTarif.value = data.kodeTarif || '';
      if (fSubJenis)  fSubJenis.value  = data.subJenis  || '';
      if (fNama)      fNama.value      = data.nama      || '';
      if (fNominal)   fNominal.value   = data.nominal   || '';
      if (fSatuan)    fSatuan.value    = data.satuan    || '';
      if (fKet)       fKet.value       = data.keterangan || '';
    } else {
      if (modalTitle) modalTitle.textContent = 'Tambah Tarif Pelayanan';
      if (modalIcon)  modalIcon.innerHTML    = SVG_TAMBAH;
      resetForm();
    }
    overlay.classList.add('open');
    overlay.removeAttribute('aria-hidden');
    setTimeout(function() {
      var first = overlay.querySelector('select, input, textarea');
      if (first) first.focus();
    }, 50);
  }

  function closeModal() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
  }

  // Tombol Tambah → mode tambah
  if (btnOpen) btnOpen.addEventListener('click', function() { openModal('tambah'); });
  if (btnClose)  btnClose.addEventListener('click', closeModal);
  if (btnCancel) btnCancel.addEventListener('click', closeModal);

  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
  });

  // Tombol edit di tabel → mode edit dengan data dari baris
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.btn-tarif-edit');
    if (!btn) return;
    var d = btn.dataset;
    openModal('edit', {
      bidang:     d.bidang     || '',
      kodeAkun:   d.kodeAkun   || '',
      kodeTarif:  d.kodeTarif  || '',
      subJenis:   d.subJenis   || '',
      nama:       d.nama       || '',
      nominal:    d.nominal    || '',
      satuan:     d.satuan     || '',
      keterangan: d.keterangan || ''
    });
  });
})();

// ─── Modal: Create Billing BLU ───
(function() {
  var overlay   = document.getElementById('modalCreateBilling');
  var modal     = document.getElementById('modalCreateBillingBox');
  var btnOpen   = document.getElementById('btnOpenCreateBilling');
  var btnClose  = document.getElementById('btnModalCreateBillingClose');
  var btnCancel = document.getElementById('btnModalCreateBillingCancel');
  if (!overlay) return;

  function openModal() {
    overlay.classList.add('open');
    overlay.removeAttribute('aria-hidden');
    // fokus ke field pertama
    setTimeout(function() {
      var first = overlay.querySelector('select, input, textarea');
      if (first) first.focus();
    }, 50);
  }

  function closeModal() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    if (btnOpen) btnOpen.focus();
  }

  if (btnOpen)   btnOpen.addEventListener('click', openModal);
  if (btnClose)  btnClose.addEventListener('click', closeModal);
  if (btnCancel) btnCancel.addEventListener('click', closeModal);

  // klik overlay (bukan modal) → tutup
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeModal();
  });

  // Escape → tutup
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
  });
})();

// ─── Export dropdown ───
(function() {
  var wrap   = document.getElementById('exportDropdown');
  var toggle = document.getElementById('btnExportToggle');
  if (!wrap || !toggle) return;

  toggle.addEventListener('click', function(e) {
    e.stopPropagation();
    var isOpen = wrap.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  document.addEventListener('click', function() {
    wrap.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      wrap.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();

// ─── Show rows dropdown ───
(function() {
  var btn      = document.getElementById('btnShowRows');
  var dropdown = document.getElementById('showRowsDropdown');
  if (!btn || !dropdown) return;

  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    var isOpen = dropdown.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  dropdown.querySelectorAll('li').forEach(function(item) {
    item.addEventListener('click', function() {
      dropdown.querySelectorAll('li').forEach(function(i) { i.classList.remove('active'); });
      item.classList.add('active');
      btn.childNodes[0].textContent = 'Show ' + item.textContent + ' rows ';
      dropdown.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', function() {
    dropdown.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  });
})();

// ─── Monitoring Billing — Export dropdown ───
(function() {
  var wrap   = document.getElementById('mblExportDropdown');
  var toggle = document.getElementById('btnMblExportToggle');
  if (!wrap || !toggle) return;

  toggle.addEventListener('click', function(e) {
    e.stopPropagation();
    // tutup show rows jika terbuka
    var showWrap = document.getElementById('mblShowDropdown');
    if (showWrap && showWrap !== wrap) {
      showWrap.classList.remove('open');
      var showToggle = document.getElementById('btnMblShowRows');
      if (showToggle) showToggle.setAttribute('aria-expanded', 'false');
    }
    var isOpen = wrap.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  document.addEventListener('click', function() {
    wrap.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') { wrap.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
  });
})();

// ─── Monitoring Billing — Show rows dropdown ───
(function() {
  var wrap   = document.getElementById('mblShowDropdown');
  var toggle = document.getElementById('btnMblShowRows');
  if (!wrap || !toggle) return;

  toggle.addEventListener('click', function(e) {
    e.stopPropagation();
    // tutup export jika terbuka
    var exportWrap = document.getElementById('mblExportDropdown');
    if (exportWrap && exportWrap !== wrap) {
      exportWrap.classList.remove('open');
      var exportToggle = document.getElementById('btnMblExportToggle');
      if (exportToggle) exportToggle.setAttribute('aria-expanded', 'false');
    }
    var isOpen = wrap.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // klik item → update label
  wrap.querySelectorAll('.export-menu-item').forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.stopPropagation();
      toggle.childNodes[0].textContent = item.textContent.trim() + ' ';
      wrap.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', function() {
    wrap.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') { wrap.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
  });
})();

// ─── Sidebar item active state ───
document.querySelectorAll('.sidebar-item:not(.sidebar-accordion)').forEach(function(item) {
  item.addEventListener('click', function() {
    document.querySelectorAll('.sidebar-item').forEach(function(i) {
      i.classList.remove('active');
      i.removeAttribute('aria-current');
    });
    item.classList.add('active');
    item.setAttribute('aria-current', 'page');
  });
});

// ─── Chart: Tren Penerimaan BLU ───
(function() {
  var ctx = document.getElementById('chartTrenBLU');
  if (!ctx || typeof Chart === 'undefined') return;

  var bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
               'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

  var data = [5950000000, 5200000000, 1380000000, 3650000000, 6700000000,
              280000000, 50000000, 30000000, 20000000, 10000000, 10000000, 10000000];

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: bulan,
      datasets: [{
        data: data,
        borderColor: '#22C55E',
        backgroundColor: 'rgba(34,197,94,0.08)',
        borderWidth: 2.5,
        pointBackgroundColor: '#22C55E',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
        fill: false,
        tension: 0.35
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function(ctx) {
              var val = ctx.parsed.y;
              return ' Rp ' + val.toLocaleString('id-ID');
            }
          }
        }
      },
      scales: {
        x: {
          grid: { color: '#F1F5F9', drawBorder: false },
          ticks: {
            font: { family: "'Plus Jakarta Sans', sans-serif", size: 12 },
            color: '#94A3B8'
          }
        },
        y: {
          grid: { color: '#F1F5F9', drawBorder: false },
          ticks: {
            font: { family: "'Plus Jakarta Sans', sans-serif", size: 11 },
            color: '#94A3B8',
            callback: function(val) {
              if (val === 0) return 'Rp 0';
              if (val >= 1e9) return 'Rp ' + (val / 1e9).toFixed(0) + '.000.000.000';
              if (val >= 1e6) return 'Rp ' + (val / 1e6).toFixed(0) + '.000.000';
              return 'Rp ' + val.toLocaleString('id-ID');
            }
          }
        }
      }
    }
  });
})();

// ─── Chart: Tren Penerimaan BLU Non Core ───
(function() {
  var ctx = document.getElementById('chartTrenNonCore');
  if (!ctx || typeof Chart === 'undefined') return;

  var bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
               'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

  var data = [111000000, 49500000, 17000000, 57000000, 76000000,
              1500000, 500000, 300000, 200000, 100000, 100000, 100000];

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: bulan,
      datasets: [{
        data: data,
        borderColor: '#22C55E',
        backgroundColor: 'rgba(34,197,94,0.08)',
        borderWidth: 2.5,
        pointBackgroundColor: '#22C55E',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
        fill: false,
        tension: 0.35
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function(ctx) {
              var val = ctx.parsed.y;
              return ' Rp ' + val.toLocaleString('id-ID');
            }
          }
        }
      },
      scales: {
        x: {
          grid: { color: '#F1F5F9', drawBorder: false },
          ticks: {
            font: { family: "'Plus Jakarta Sans', sans-serif", size: 12 },
            color: '#94A3B8'
          }
        },
        y: {
          grid: { color: '#F1F5F9', drawBorder: false },
          ticks: {
            font: { family: "'Plus Jakarta Sans', sans-serif", size: 11 },
            color: '#94A3B8',
            callback: function(val) {
              if (val === 0) return 'Rp 0';
              if (val >= 1e6) return 'Rp ' + val.toLocaleString('id-ID');
              return 'Rp ' + val.toLocaleString('id-ID');
            }
          }
        }
      }
    }
  });
})();
