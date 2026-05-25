/* ═══════════════════════════════════════════════════════════
   sarana.js — Data, Search, Sort, Pagination, Filter, Export
═══════════════════════════════════════════════════════════ */

const DATA = [
  {
    kode: "B00701",
    badanUsaha: "PT Kereta Api Indonesia",
    tahun: "2007",
    daops: "DAOP 07 MADIUN",
    depo: "DEPO KERETA BLITAR",
    jenis: "Kereta",
    masaBerlaku: "27-10-2024",
    noSertifikasi: "KA.405/4b-00050/DJKA/12/X-2024",
    pemilik: "PT KERETA API INDONESIA",
    status: "AKTIF"
  },
  {
    kode: "B00702",
    badanUsaha: "PT Kereta Api Indonesia",
    tahun: "2007",
    daops: "DAOP 07 MADIUN",
    depo: "DEPO KERETA BLITAR",
    jenis: "Kereta",
    masaBerlaku: "27-10-2024",
    noSertifikasi: "KA.405/4b-00051/DJKA/12/X-2024",
    pemilik: "PT KERETA API INDONESIA",
    status: "AKTIF"
  },
  {
    kode: "B00703",
    badanUsaha: "PT Kereta Api Indonesia",
    tahun: "2007",
    daops: "DAOP 08 SURABAYA",
    depo: "DEPO KERETA SURABAYA",
    jenis: "Kereta",
    masaBerlaku: "15-11-2024",
    noSertifikasi: "KA.405/4b-00052/DJKA/11/XI-2024",
    pemilik: "PT KERETA API INDONESIA",
    status: "AKTIF"
  },
  {
    kode: "K1-97001",
    badanUsaha: "PT Kereta Api Indonesia",
    tahun: "1997",
    daops: "DAOP 01 JAKARTA",
    depo: "DEPO KERETA JAKARTA",
    jenis: "Kereta",
    masaBerlaku: "20-12-2024",
    noSertifikasi: "KA.405/4b-00053/DJKA/12/XII-2024",
    pemilik: "PT KERETA API INDONESIA",
    status: "AKTIF"
  },
  {
    kode: "K1-97002",
    badanUsaha: "PT Kereta Api Indonesia",
    tahun: "1997",
    daops: "DAOP 02 BANDUNG",
    depo: "DEPO KERETA BANDUNG",
    jenis: "Kereta",
    masaBerlaku: "20-12-2024",
    noSertifikasi: "KA.405/4b-00054/DJKA/12/XII-2024",
    pemilik: "PT KERETA API INDONESIA",
    status: "AKTIF"
  },
  {
    kode: "CC20101",
    badanUsaha: "PT Kereta Api Indonesia",
    tahun: "2001",
    daops: "DAOP 04 SEMARANG",
    depo: "DEPO LOKOMOTIF SEMARANG",
    jenis: "Lokomotif",
    masaBerlaku: "05-01-2025",
    noSertifikasi: "KA.405/1a-00001/DJKA/01/I-2025",
    pemilik: "PT KERETA API INDONESIA",
    status: "AKTIF"
  },
  {
    kode: "CC20102",
    badanUsaha: "PT Kereta Api Indonesia",
    tahun: "2001",
    daops: "DAOP 05 PURWOKERTO",
    depo: "DEPO LOKOMOTIF PURWOKERTO",
    jenis: "Lokomotif",
    masaBerlaku: "05-01-2025",
    noSertifikasi: "KA.405/1a-00002/DJKA/01/I-2025",
    pemilik: "PT KERETA API INDONESIA",
    status: "AKTIF"
  },
  {
    kode: "KRL-001",
    badanUsaha: "PT KAI Commuter",
    tahun: "2010",
    daops: "DAOP 01 JAKARTA",
    depo: "DEPO KRL DEPOK",
    jenis: "KRL",
    masaBerlaku: "10-02-2025",
    noSertifikasi: "KA.405/2a-00010/DJKA/02/II-2025",
    pemilik: "PT KAI COMMUTER",
    status: "AKTIF"
  },
  {
    kode: "KRL-002",
    badanUsaha: "PT KAI Commuter",
    tahun: "2010",
    daops: "DAOP 01 JAKARTA",
    depo: "DEPO KRL DEPOK",
    jenis: "KRL",
    masaBerlaku: "10-02-2025",
    noSertifikasi: "KA.405/2a-00011/DJKA/02/II-2025",
    pemilik: "PT KAI COMMUTER",
    status: "AKTIF"
  },
  {
    kode: "SR31602",
    badanUsaha: "Balai Pengelola KA Sulsel",
    tahun: "2016",
    daops: "BTP SULSEL",
    depo: "BTP SULSEL",
    jenis: "Peralatan Khusus Berpenggerak Sendiri",
    masaBerlaku: "21-12-2024",
    noSertifikasi: "KA.405/6b-00058/DJKA/11/XII-2024",
    pemilik: "DITJEN PERKERETAAPIAN",
    status: "AKTIF"
  }
];

/* ── State ── */
let filtered    = [...DATA];
let sortCol     = null;
let sortDir     = 'asc';
let currentPage = 1;
let rowsPerPage = 10;

/* ── DOM refs ── */
const tbody       = document.getElementById('tblBody');
const tblInfo     = document.getElementById('tblInfo');
const pageBtns    = document.getElementById('pageBtns');
const searchInput = document.getElementById('tblSearch');
const rowsSelect  = document.getElementById('rowsPerPage');

/* ── Escape HTML ── */
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ── Render tabel ── */
function renderTable() {
  const start = (currentPage - 1) * rowsPerPage;
  const end   = Math.min(start + rowsPerPage, filtered.length);
  const slice = filtered.slice(start, end);

  if (slice.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="11" class="tbl-empty">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          Tidak ada data yang sesuai dengan pencarian.
        </td>
      </tr>`;
  } else {
    tbody.innerHTML = slice.map((row, i) => `
      <tr>
        <td class="td-no">${start + i + 1}.</td>
        <td class="td-kode">${escHtml(row.kode)}</td>
        <td style="font-size:12.5px;font-weight:500;min-width:140px;">${escHtml(row.badanUsaha)}</td>
        <td class="td-tahun">${escHtml(row.tahun)}</td>
        <td style="font-size:12.5px;white-space:nowrap;">${escHtml(row.daops)}</td>
        <td style="font-size:12.5px;min-width:140px;">${escHtml(row.depo)}</td>
        <td class="td-jenis">${escHtml(row.jenis)}</td>
        <td class="td-masa-berlaku">${escHtml(row.masaBerlaku)}</td>
        <td class="td-sertifikasi" title="${escHtml(row.noSertifikasi)}">${escHtml(row.noSertifikasi)}</td>
        <td class="td-pemilik">${escHtml(row.pemilik)}</td>
        <td class="td-status">
          <span class="sdot-badge s-teal">
            <span class="sdot" aria-hidden="true"></span>
            ${escHtml(row.status)}
          </span>
        </td>
      </tr>`).join('');
  }

  /* Info teks */
  if (filtered.length === 0) {
    tblInfo.textContent = 'Tidak ada data ditemukan';
  } else {
    tblInfo.textContent =
      `Menampilkan ${start + 1} sampai ${end} dari ${filtered.length} data`;
  }

  renderPagination();
}

/* ── Render pagination ── */
function renderPagination() {
  const totalPages = Math.max(1, Math.ceil(filtered.length / rowsPerPage));
  pageBtns.innerHTML = '';

  const prev = makePageBtn('‹', currentPage === 1, () => {
    currentPage--; renderTable();
  });
  prev.setAttribute('aria-label', 'Halaman sebelumnya');
  pageBtns.appendChild(prev);

  const range = pageRange(currentPage, totalPages);
  range.forEach(p => {
    if (p === '…') {
      const dots = document.createElement('span');
      dots.textContent = '…';
      dots.style.cssText = 'padding:0 4px;color:var(--color-muted);line-height:34px;';
      pageBtns.appendChild(dots);
    } else {
      const btn = makePageBtn(p, false, () => {
        currentPage = p; renderTable();
      });
      if (p === currentPage) btn.classList.add('active');
      btn.setAttribute('aria-label', `Halaman ${p}`);
      if (p === currentPage) btn.setAttribute('aria-current', 'page');
      pageBtns.appendChild(btn);
    }
  });

  const next = makePageBtn('›', currentPage === totalPages, () => {
    currentPage++; renderTable();
  });
  next.setAttribute('aria-label', 'Halaman berikutnya');
  pageBtns.appendChild(next);
}

function makePageBtn(label, disabled, onClick) {
  const btn = document.createElement('button');
  btn.className = 'page-btn';
  btn.textContent = label;
  btn.disabled = disabled;
  if (!disabled) btn.addEventListener('click', onClick);
  return btn;
}

function pageRange(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 4) return [1, 2, 3, 4, 5, '…', total];
  if (current >= total - 3) return [1, '…', total-4, total-3, total-2, total-1, total];
  return [1, '…', current-1, current, current+1, '…', total];
}

/* ── Search ── */
function applySearch(query) {
  const q = query.trim().toLowerCase();
  const base = getFilteredBase();
  filtered = q
    ? base.filter(r =>
        r.kode.toLowerCase().includes(q)         ||
        r.badanUsaha.toLowerCase().includes(q)   ||
        r.daops.toLowerCase().includes(q)        ||
        r.depo.toLowerCase().includes(q)         ||
        r.jenis.toLowerCase().includes(q)        ||
        r.noSertifikasi.toLowerCase().includes(q)||
        r.pemilik.toLowerCase().includes(q)      ||
        r.status.toLowerCase().includes(q)
      )
    : base;

  if (sortCol !== null) applySort(sortCol, false);
  currentPage = 1;
  renderTable();
}

/* ── Filter dropdown ── */
function getFilteredBase() {
  const pemilik = document.getElementById('filterPemilik').value;
  const jenis   = document.getElementById('filterJenis').value;
  return DATA.filter(r => {
    const matchPemilik = !pemilik || r.badanUsaha === pemilik || r.pemilik === pemilik;
    const matchJenis   = !jenis   || r.jenis === jenis;
    return matchPemilik && matchJenis;
  });
}

function applyFilter() {
  filtered = getFilteredBase();
  const q = searchInput.value.trim().toLowerCase();
  if (q) {
    filtered = filtered.filter(r =>
      r.kode.toLowerCase().includes(q)         ||
      r.badanUsaha.toLowerCase().includes(q)   ||
      r.daops.toLowerCase().includes(q)        ||
      r.depo.toLowerCase().includes(q)         ||
      r.jenis.toLowerCase().includes(q)        ||
      r.noSertifikasi.toLowerCase().includes(q)||
      r.pemilik.toLowerCase().includes(q)      ||
      r.status.toLowerCase().includes(q)
    );
  }
  if (sortCol !== null) applySort(sortCol, false);
  currentPage = 1;
  renderTable();
}

/* ── Sort ── */
const COLS = ['kode', 'badanUsaha', 'tahun', 'daops', 'depo', 'jenis', 'masaBerlaku', 'noSertifikasi', 'pemilik'];

function applySort(colIdx, toggleDir = true) {
  if (toggleDir) {
    if (sortCol === colIdx) {
      sortDir = sortDir === 'asc' ? 'desc' : 'asc';
    } else {
      sortCol = colIdx;
      sortDir = 'asc';
    }
  }

  const key = COLS[colIdx];
  if (!key) return;

  filtered.sort((a, b) => {
    const va = String(a[key]).toLowerCase();
    const vb = String(b[key]).toLowerCase();
    return sortDir === 'asc'
      ? va.localeCompare(vb, 'id')
      : vb.localeCompare(va, 'id');
  });

  document.querySelectorAll('.data-table thead th.sortable').forEach((th, i) => {
    th.classList.remove('sort-asc', 'sort-desc');
    if (i === sortCol) th.classList.add(sortDir === 'asc' ? 'sort-asc' : 'sort-desc');
  });
}

/* ── Ekspor PDF (print) ── */
document.getElementById('btnPdf').addEventListener('click', () => {
  window.print();
});

/* ── Ekspor Excel (CSV download) ── */
document.getElementById('btnExcel').addEventListener('click', () => {
  const headers = ['No', 'Kode Sarana', 'Badan Usaha', 'Tahun Dinas', 'DAOPS', 'Depo',
                   'Jenis Sarana', 'Masa Berlaku Sertifikasi', 'No. Sertifikasi', 'Pemilik', 'Status'];
  const rows = filtered.map((r, i) =>
    [i + 1, r.kode, r.badanUsaha, r.tahun, r.daops, r.depo,
     r.jenis, r.masaBerlaku, r.noSertifikasi, r.pemilik, r.status]
      .map(v => `"${String(v).replace(/"/g, '""')}"`)
      .join(',')
  );
  const csv  = [headers.join(','), ...rows].join('\n');
  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = 'sarana.csv'; a.click();
  URL.revokeObjectURL(url);
});

/* ── Sinkronisasi ── */
document.getElementById('btnSinkronisasi').addEventListener('click', () => {
  const btn = document.getElementById('btnSinkronisasi');
  btn.disabled = true;
  btn.textContent = 'Menyinkronkan...';
  setTimeout(() => {
    btn.disabled = false;
    btn.innerHTML = `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <polyline points="23 4 23 10 17 10"/>
        <polyline points="1 20 1 14 7 14"/>
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
      </svg>
      Sinkronisasi`;
  }, 2000);
});

/* ── Event listeners ── */
searchInput.addEventListener('input', e => applySearch(e.target.value));

rowsSelect.addEventListener('change', e => {
  rowsPerPage = parseInt(e.target.value, 10);
  currentPage = 1;
  renderTable();
});

document.getElementById('btnFilter').addEventListener('click', applyFilter);

document.querySelectorAll('.data-table thead th.sortable').forEach((th, i) => {
  th.addEventListener('click', () => { applySort(i); renderTable(); });
});

/* ── Init ── */
renderTable();

/* ── Filter dropdown panel toggle ── */
(function() {
  var filterDropdown = document.getElementById('filterDropdown');
  var filterToggle   = document.getElementById('btnFilterToggle');
  var btnApply       = document.getElementById('btnFilter');
  var btnReset       = document.getElementById('btnFilterReset');
  if (!filterDropdown || !filterToggle) return;

  filterToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    var isOpen = filterDropdown.classList.toggle('open');
    filterToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  document.addEventListener('click', function() {
    filterDropdown.classList.remove('open');
    filterToggle.setAttribute('aria-expanded', 'false');
  });

  filterDropdown.addEventListener('click', function(e) {
    e.stopPropagation();
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      filterDropdown.classList.remove('open');
      filterToggle.setAttribute('aria-expanded', 'false');
    }
  });

  if (btnReset) {
    btnReset.addEventListener('click', function() {
      document.getElementById('filterPemilik').value = '';
      document.getElementById('filterJenis').value = '';
      applyFilter();
      filterDropdown.classList.remove('open');
      filterToggle.setAttribute('aria-expanded', 'false');
    });
  }

  if (btnApply) {
    btnApply.addEventListener('click', function() {
      applyFilter();
      filterDropdown.classList.remove('open');
      filterToggle.setAttribute('aria-expanded', 'false');
    });
  }
})();
