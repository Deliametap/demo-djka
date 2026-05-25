/* ═══════════════════════════════════════════════════════════
   badan-usaha.js — Data, Search, Sort, Pagination
═══════════════════════════════════════════════════════════ */

const DATA = [
  {
    nama: "Balai Pengelola Kereta Api Sulawesi Selatan",
    email: "bpka_sulsel@dephub.go.id",
    wa: "0895322292196",
    pimpinan: "DEBY HOSPITAL",
    nib: "4249688088010000",
    alamat: "Kompleks Depo Kereta Api Maros Jl. Palantikang, Kelurahan Palantikang Kecamatan Maros Baru"
  },
  {
    nama: "Balai Perawatan Perkeretaapian",
    email: "balaipwka@gmail.com",
    wa: "087764725959",
    pimpinan: "PRAYUDI",
    nib: "1112333335588778899",
    alamat: "Jl. Raya Purwodadi - Solo KM. 7 Desa Depok Kecamatan Toroh Kabupaten Grobogan 58171"
  },
  {
    nama: "Bandara Internasional Soekarno-Hatta - PT Angkasa Pura II",
    email: "arif.irawan@angkasapura2.co.id",
    wa: "081282614634",
    pimpinan: "DWI ANANDA",
    nib: "8120017051057",
    alamat: "Gedung 601 Bandara Internasional Soekarno Hatta PO BOX 1245 Jakarta 19110"
  },
  {
    nama: "BTP Sumbagut",
    email: "lsksumbagut@gmail.com",
    wa: "0",
    pimpinan: "DEDIK TRI ISTIANTARA",
    nib: "597322197531000",
    alamat: "Jalan Kenanga Raya No.37B Medan Selayang 20132 Sumatera Utara"
  },
  {
    nama: "Direktorat Sarana",
    email: "jo.sitohang@gmail.com",
    wa: "082113406646",
    pimpinan: "—",
    nib: "1994111520201210",
    alamat: "Jl. Perintis Kemerdekaan Nomor 1 Bandung"
  },
  {
    nama: "Pemprov Sumatera Selatan",
    email: "helenafitri.nendriawan@gmail.com",
    wa: "0",
    pimpinan: "—",
    nib: "0",
    alamat: "Jl Perintis Kemerdekaan Nomor 1 Bandung"
  },
  {
    nama: "PT Jakarta Propertindo (Perseroda)",
    email: "corporate.secretary@jakarta-propertindo.com",
    wa: "0",
    pimpinan: "IWAN TAKWIN",
    nib: "0",
    alamat: "Gedung Thamrin City lantai 1, Lobby Timur, Jalan Thamrin Boulevard"
  },
  {
    nama: "PT Kereta Api Indonesia (Persero)",
    email: "pnbp.rta@gmail.com",
    wa: "0",
    pimpinan: "DIDIEK HARTANTYO",
    nib: "01.000.016.4-093.000",
    alamat: "Jl. Perintis Kemerdekaan no. 1 Bandung"
  },
  {
    nama: "PT Kereta Api Indonesia (Persero) - LRT Jabo",
    email: "rollingstock.lrtjabodebek02@gmail.com",
    wa: "0112233445561",
    pimpinan: "DIDIEK HARTANTYO",
    nib: "9120004201095",
    alamat: "Jl. Perintis Kemerdekaan No.1, Babakan Ciamis, Kec. Sumur Bandung, Kota Bandung, Jawa Barat"
  },
  {
    nama: "PT Kereta Api Indonesia (Persero) - KAI Commuter",
    email: "kaicommuter@kai.id",
    wa: "0215678901",
    pimpinan: "ASDO ARTRIVIYANTO",
    nib: "9120004201096",
    alamat: "Jl. Ir. H. Juanda No.1, Bekasi, Jawa Barat"
  },
  {
    nama: "PT Kereta Cepat Indonesia China",
    email: "info@kcic.co.id",
    wa: "0217890123",
    pimpinan: "DWIYANA SLAMET RIYADI",
    nib: "8120017051058",
    alamat: "Jl. Halim Perdanakusuma No.1, Jakarta Timur"
  },
  {
    nama: "PT MRT Jakarta",
    email: "info@jakartamrt.co.id",
    wa: "0215551234",
    pimpinan: "WILLIAM SABANDAR",
    nib: "8120017051059",
    alamat: "Jl. Lebak Bulus No.2, Jakarta Selatan 12310"
  },
  {
    nama: "PT LRT Jakarta",
    email: "info@lrtjakarta.co.id",
    wa: "0215559876",
    pimpinan: "HENDRI SAPUTRA",
    nib: "8120017051060",
    alamat: "Jl. Pemuda No.66, Rawamangun, Jakarta Timur"
  },
  {
    nama: "PT Railink",
    email: "info@railink.co.id",
    wa: "0216789012",
    pimpinan: "PORWANTO",
    nib: "8120017051061",
    alamat: "Bandara Internasional Kualanamu, Deli Serdang, Sumatera Utara"
  },
  {
    nama: "PT Kereta Api Logistik",
    email: "info@kalog.co.id",
    wa: "0226789012",
    pimpinan: "HENDY HELMY",
    nib: "8120017051062",
    alamat: "Jl. Perintis Kemerdekaan No.1, Bandung, Jawa Barat"
  },
  {
    nama: "PT Kereta Api Pariwisata",
    email: "info@kapariwisata.co.id",
    wa: "0227890123",
    pimpinan: "SUMARSONO",
    nib: "8120017051063",
    alamat: "Jl. Perintis Kemerdekaan No.1, Bandung, Jawa Barat"
  },
  {
    nama: "PT Reska Multi Usaha",
    email: "info@reska.co.id",
    wa: "0228901234",
    pimpinan: "CANDRA PURNAMA",
    nib: "8120017051064",
    alamat: "Jl. Perintis Kemerdekaan No.1, Bandung, Jawa Barat"
  },
  {
    nama: "PT Kereta Api Properti Manajemen",
    email: "info@kapm.co.id",
    wa: "0229012345",
    pimpinan: "BAMBANG IRIANTO",
    nib: "8120017051065",
    alamat: "Jl. Perintis Kemerdekaan No.1, Bandung, Jawa Barat"
  },
  {
    nama: "PT Pilar Sinergi BUMN Indonesia",
    email: "info@psbi.co.id",
    wa: "0210123456",
    pimpinan: "FARIED INDRA NUGRAHA",
    nib: "8120017051066",
    alamat: "Jl. Medan Merdeka Barat No.8, Jakarta Pusat"
  },
  {
    nama: "Dinas Perhubungan DKI Jakarta",
    email: "dishub@jakarta.go.id",
    wa: "0211234567",
    pimpinan: "SYAFRIN LIPUTO",
    nib: "0",
    alamat: "Jl. Taman Jatibaru No.1, Cideng, Jakarta Pusat"
  },
  {
    nama: "Dinas Perhubungan Jawa Barat",
    email: "dishub@jabarprov.go.id",
    wa: "0222345678",
    pimpinan: "A. KOSWARA",
    nib: "0",
    alamat: "Jl. Sukabumi No.1, Bandung, Jawa Barat"
  },
  {
    nama: "Dinas Perhubungan Jawa Tengah",
    email: "dishub@jatengprov.go.id",
    wa: "0243456789",
    pimpinan: "HENGGAR BUDI ANGGORO",
    nib: "0",
    alamat: "Jl. Siliwangi No.10, Semarang, Jawa Tengah"
  },
  {
    nama: "Dinas Perhubungan Jawa Timur",
    email: "dishub@jatimprov.go.id",
    wa: "0314567890",
    pimpinan: "NYONO",
    nib: "0",
    alamat: "Jl. Ahmad Yani No.268, Surabaya, Jawa Timur"
  },
  {
    nama: "Dinas Perhubungan Sulawesi Selatan",
    email: "dishub@sulselprov.go.id",
    wa: "0415678901",
    pimpinan: "ILHAM GAZALING",
    nib: "0",
    alamat: "Jl. A.P. Pettarani No.1, Makassar, Sulawesi Selatan"
  }
];

/* ── State ── */
let filtered   = [...DATA];
let sortCol    = null;
let sortDir    = 'asc';
let currentPage = 1;
let rowsPerPage = 10;

/* ── DOM refs ── */
const tbody       = document.getElementById('tblBody');
const tblInfo     = document.getElementById('tblInfo');
const pageBtns    = document.getElementById('pageBtns');
const searchInput = document.getElementById('tblSearch');
const rowsSelect  = document.getElementById('rowsPerPage');

/* ── Render tabel ── */
function renderTable() {
  const start = (currentPage - 1) * rowsPerPage;
  const end   = Math.min(start + rowsPerPage, filtered.length);
  const slice = filtered.slice(start, end);

  if (slice.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" class="tbl-empty">
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
        <td class="td-nama">${escHtml(row.nama)}</td>
        <td class="td-email">
          <a href="mailto:${escHtml(row.email)}" style="color:var(--color-primary);text-decoration:none;"
             onmouseover="this.style.textDecoration='underline'"
             onmouseout="this.style.textDecoration='none'">
            ${escHtml(row.email)}
          </a>
        </td>
        <td class="td-mono">${escHtml(row.wa)}</td>
        <td style="font-size:13px;font-weight:500;">${escHtml(row.pimpinan)}</td>
        <td class="td-mono">${escHtml(row.nib)}</td>
        <td class="td-alamat">${escHtml(row.alamat)}</td>
        <td class="td-aksi">
          <button class="btn-detail" aria-label="Detail ${escHtml(row.nama)}" onclick="window.location.href='badan-usaha-detail.html?id=${DATA.indexOf(row)}'">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> Detail
          </button>
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

  /* Prev */
  const prev = makePageBtn('‹', currentPage === 1, () => {
    currentPage--; renderTable();
  });
  prev.setAttribute('aria-label', 'Halaman sebelumnya');
  pageBtns.appendChild(prev);

  /* Nomor halaman — tampilkan maks 5 */
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

  /* Next */
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
  filtered = q
    ? DATA.filter(r =>
        r.nama.toLowerCase().includes(q)     ||
        r.email.toLowerCase().includes(q)    ||
        r.pimpinan.toLowerCase().includes(q) ||
        r.nib.toLowerCase().includes(q)      ||
        r.alamat.toLowerCase().includes(q)
      )
    : [...DATA];

  if (sortCol !== null) applySort(sortCol, false);
  currentPage = 1;
  renderTable();
}

/* ── Sort ── */
const COLS = ['nama', 'email', 'wa', 'pimpinan', 'nib', 'alamat'];

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
  filtered.sort((a, b) => {
    const va = a[key].toLowerCase();
    const vb = b[key].toLowerCase();
    return sortDir === 'asc'
      ? va.localeCompare(vb, 'id')
      : vb.localeCompare(va, 'id');
  });

  /* Update header visual */
  document.querySelectorAll('.data-table thead th.sortable').forEach((th, i) => {
    th.classList.remove('sort-asc', 'sort-desc');
    if (i === sortCol) th.classList.add(sortDir === 'asc' ? 'sort-asc' : 'sort-desc');
  });
}

/* ── Escape HTML ── */
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ── Modal Detail ── */
function showDetail(idx) {
  const row = DATA[idx];
  const overlay = document.getElementById('detailOverlay');
  document.getElementById('detailNama').textContent     = row.nama;
  document.getElementById('detailEmail').textContent    = row.email;
  document.getElementById('detailEmail').href           = `mailto:${row.email}`;
  document.getElementById('detailWa').textContent       = row.wa;
  document.getElementById('detailPimpinan').textContent = row.pimpinan;
  document.getElementById('detailNib').textContent      = row.nib;
  document.getElementById('detailAlamat').textContent   = row.alamat;
  overlay.classList.add('open');
  document.getElementById('modalClose').focus();
}

function closeDetail() {
  document.getElementById('detailOverlay').classList.remove('open');
}

/* ── Ekspor PDF (print) ── */
document.getElementById('btnPdf').addEventListener('click', () => {
  window.print();
});

/* ── Ekspor Excel (CSV download) ── */
document.getElementById('btnExcel').addEventListener('click', () => {
  const headers = ['No', 'Nama Badan Usaha', 'Email', 'No WhatsApp',
                   'Nama Pimpinan', 'No. NIB', 'Alamat'];
  const rows = filtered.map((r, i) =>
    [i + 1, r.nama, r.email, r.wa, r.pimpinan, r.nib, r.alamat]
      .map(v => `"${String(v).replace(/"/g, '""')}"`)
      .join(',')
  );
  const csv  = [headers.join(','), ...rows].join('\n');
  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = 'badan-usaha.csv'; a.click();
  URL.revokeObjectURL(url);
});

/* ── Event listeners ── */
searchInput.addEventListener('input', e => applySearch(e.target.value));

rowsSelect.addEventListener('change', e => {
  rowsPerPage = parseInt(e.target.value, 10);
  currentPage = 1;
  renderTable();
});

document.querySelectorAll('.data-table thead th.sortable').forEach((th, i) => {
  th.addEventListener('click', () => { applySort(i); renderTable(); });
});

document.getElementById('modalClose').addEventListener('click', closeDetail);
document.getElementById('detailOverlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeDetail();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeDetail();
});

/* ── Init ── */
renderTable();
