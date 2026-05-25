/* ═══════════════════════════════════════════════════════════
   badan-usaha-detail.js
═══════════════════════════════════════════════════════════ */

/* ── Data badan usaha (sama dengan badan-usaha.js) ── */
const BU_DATA = [
  { id: 0, nama: "Balai Pengelola Kereta Api Sulawesi Selatan", email: "bpka_sulsel@dephub.go.id", wa: "0895322292196", pimpinan: "DEBY HOSPITAL", nib: "4249688088010000", alamat: "Kompleks Depo Kereta Api Maros Jl. Palantikang, Kelurahan Palantikang Kecamatan Maros Baru" },
  { id: 1, nama: "Balai Perawatan Perkeretaapian", email: "balaipwka@gmail.com", wa: "087764725959", pimpinan: "PRAYUDI", nib: "1112333335588778899", alamat: "Jl. Raya Purwodadi - Solo KM. 7 Desa Depok Kecamatan Toroh Kabupaten Grobogan 58171" },
  { id: 2, nama: "Bandara Internasional Soekarno-Hatta - PT Angkasa Pura II", email: "arif.irawan@angkasapura2.co.id", wa: "081282614634", pimpinan: "DWI ANANDA", nib: "8120017051057", alamat: "Gedung 601 Bandara Internasional Soekarno Hatta PO BOX 1245 Jakarta 19110" },
  { id: 3, nama: "BTP Sumbagut", email: "lsksumbagut@gmail.com", wa: "0", pimpinan: "DEDIK TRI ISTIANTARA", nib: "597322197531000", alamat: "Jalan Kenanga Raya No.37B Medan Selayang 20132 Sumatera Utara" },
  { id: 4, nama: "Direktorat Sarana", email: "jo.sitohang@gmail.com", wa: "082113406646", pimpinan: "—", nib: "1994111520201210", alamat: "Jl. Perintis Kemerdekaan Nomor 1 Bandung" },
  { id: 5, nama: "Pemprov Sumatera Selatan", email: "helenafitri.nendriawan@gmail.com", wa: "0", pimpinan: "—", nib: "0", alamat: "Jl Perintis Kemerdekaan Nomor 1 Bandung" },
  { id: 6, nama: "PT Jakarta Propertindo (Perseroda)", email: "corporate.secretary@jakarta-propertindo.com", wa: "0", pimpinan: "IWAN TAKWIN", nib: "0", alamat: "Gedung Thamrin City lantai 1, Lobby Timur, Jalan Thamrin Boulevard" },
  { id: 7, nama: "PT Kereta Api Indonesia (Persero)", email: "pnbp.rta@gmail.com", wa: "0", pimpinan: "DIDIEK HARTANTYO", nib: "01.000.016.4-093.000", alamat: "Jl. Perintis Kemerdekaan no. 1 Bandung" },
];

/* ── Data Sarana per badan usaha ── */
const SARANA_DATA = {
  0: [
    { kode: "SN01501", jenis: "Peralatan Khusus Tanpa Penggerak", pemilik: "DITJEN PERKERETAAPIAN", tahun: "", daop: "BTP SULSEL", depo: "BTP SULSEL", sertifikasi: "KA.405/8b-00046/DJKA/11/XII-2025", berlaku: "31-12-2026", status: "Aktif" },
    { kode: "SR31602", jenis: "Peralatan Khusus Berpenggerak Sendiri", pemilik: "DITJEN PERKERETAAPIAN", tahun: "", daop: "BTP SULSEL", depo: "BTP SULSEL", sertifikasi: "—", berlaku: "—", status: "Aktif" },
    { kode: "SU31701", jenis: "Peralatan Khusus Berpenggerak Sendiri", pemilik: "DITJEN PERKERETAAPIAN", tahun: "", daop: "BTP SULSEL", depo: "BTP SULSEL", sertifikasi: "KA.405/6b-00058/DJKA/11/XII-2024", berlaku: "21-12-2024", status: "Aktif" },
    { kode: "SI31701", jenis: "Peralatan Khusus Berpenggerak Sendiri", pemilik: "DITJEN PERKERETAAPIAN", tahun: "", daop: "BTP SULSEL", depo: "BTP SULSEL", sertifikasi: "KA.405/6b-00053/DJKA/11/XII-2024", berlaku: "21-12-2024", status: "Aktif" },
    { kode: "SI31702", jenis: "Peralatan Khusus Berpenggerak Sendiri", pemilik: "DITJEN PERKERETAAPIAN", tahun: "", daop: "BTP SULSEL", depo: "BTP SULSEL", sertifikasi: "KA.405/6b-00054/DJKA/11/XII-2024", berlaku: "21-12-2024", status: "Aktif" },
    { kode: "SR31801", jenis: "Peralatan Khusus Berpenggerak Sendiri", pemilik: "DITJEN PERKERETAAPIAN", tahun: "", daop: "BTP SULSEL", depo: "BTP SULSEL", sertifikasi: "KA.405/6b-00055/DJKA/11/XII-2024", berlaku: "21-12-2024", status: "Aktif" },
    { kode: "SR31802", jenis: "Peralatan Khusus Berpenggerak Sendiri", pemilik: "DITJEN PERKERETAAPIAN", tahun: "", daop: "BTP SULSEL", depo: "BTP SULSEL", sertifikasi: "KA.405/6b-00056/DJKA/11/XII-2024", berlaku: "21-12-2024", status: "Aktif" },
    { kode: "SU31801", jenis: "Peralatan Khusus Berpenggerak Sendiri", pemilik: "DITJEN PERKERETAAPIAN", tahun: "", daop: "BTP SULSEL", depo: "BTP SULSEL", sertifikasi: "KA.405/6b-00057/DJKA/11/XII-2024", berlaku: "21-12-2024", status: "Aktif" },
  ],
};

/* ── Data Permohonan per badan usaha ── */
const PERM_DATA = {
  0: [
    { id: "231114727", jenisPerm: "Permohonan Uji Berkala", jenisSarana: "Peralatan Khusus Berpenggerak Sendiri", kodeSarana: "SR31802", tglVerif: "08-11-2023", statusUji: "Lulus", statusPerm: "Dalam Proses" },
    { id: "241114010", jenisPerm: "Permohonan Uji Berkala", jenisSarana: "Peralatan Khusus Berpenggerak Sendiri", kodeSarana: "SU31701", tglVerif: "03-12-2024", statusUji: "Lulus", statusPerm: "Dalam Proses" },
    { id: "241114011", jenisPerm: "Permohonan Uji Berkala", jenisSarana: "Peralatan Khusus Berpenggerak Sendiri", kodeSarana: "SR31801", tglVerif: "03-12-2024", statusUji: "Lulus", statusPerm: "Dalam Proses" },
    { id: "241114017", jenisPerm: "Permohonan Uji Berkala", jenisSarana: "Peralatan Khusus Berpenggerak Sendiri", kodeSarana: "SR31501A", tglVerif: "03-12-2024", statusUji: "Lulus", statusPerm: "Dalam Proses" },
    { id: "251114599", jenisPerm: "Permohonan Uji Berkala", jenisSarana: "Peralatan Khusus Berpenggerak Sendiri", kodeSarana: "SU31701", tglVerif: "28-11-2025", statusUji: "Lulus", statusPerm: "Dalam Proses" },
    { id: "251114600", jenisPerm: "Permohonan Uji Berkala", jenisSarana: "Peralatan Khusus Berpenggerak Sendiri", kodeSarana: "SR31602", tglVerif: "28-11-2025", statusUji: "Lulus", statusPerm: "Dalam Proses" },
    { id: "251114601", jenisPerm: "Permohonan Uji Berkala", jenisSarana: "Peralatan Khusus Tanpa Penggerak", kodeSarana: "SN01501", tglVerif: "01-12-2025", statusUji: "Lulus", statusPerm: "Dalam Proses" },
  ],
};

/* ── Baca ID dari URL param ── */
function getParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

const buId = parseInt(getParam('id') ?? '0', 10);
const bu   = BU_DATA.find(r => r.id === buId) ?? BU_DATA[0];

/* ── Isi info card ── */
document.getElementById('infNama').textContent     = bu.nama;
document.getElementById('infAlamat').textContent   = bu.alamat;
document.getElementById('infEmail').textContent    = bu.email;
document.getElementById('infEmail').href           = `mailto:${bu.email}`;
document.getElementById('infPimpinan').textContent = bu.pimpinan;
document.getElementById('infNib').textContent      = bu.nib;
document.getElementById('infWa').textContent       = bu.wa;

/* ── Helper: escape HTML ── */
function esc(s) {
  return String(s ?? '—')
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ── Helper: badge status uji ── */
function badgeUji(status) {
  const map = { 'Lulus': 's-green', 'Tidak Lulus': 's-red', 'Proses': 's-amber' };
  const cls = map[status] ?? 's-gray';
  return `<span class="sdot-badge ${cls}"><span class="sdot"></span>${esc(status)}</span>`;
}

/* ── Helper: badge status permohonan ── */
function badgePerm(status) {
  const map = {
    'Dalam Proses': 's-blue', 'Selesai': 's-green',
    'Ditolak': 's-red', 'Perlu Perbaikan': 's-amber',
    'Menunggu Persetujuan Direktur': 's-amber',
  };
  const cls = map[status] ?? 's-gray';
  return `<span class="sdot-badge ${cls}"><span class="sdot"></span>${esc(status)}</span>`;
}

/* ── Helper: badge status sarana ── */
function badgeSarana(status) {
  return status === 'Aktif'
    ? `<span class="sdot-badge s-teal"><span class="sdot"></span>Aktif</span>`
    : `<span class="sdot-badge s-gray"><span class="sdot"></span>${esc(status)}</span>`;
}

/* ════════════════════════════════════════════════
   GENERIC TABLE ENGINE
   Dipakai untuk tabel Sarana dan tabel Permohonan
════════════════════════════════════════════════ */
function createTableEngine({ data, tbodyId, infoId, paginationId, rowsSelectId, searchId, sortCols, renderRow }) {
  let filtered    = [...data];
  let sortCol     = null;
  let sortDir     = 'asc';
  let currentPage = 1;
  let rowsPerPage = 10;

  const tbody      = document.getElementById(tbodyId);
  const infoEl     = document.getElementById(infoId);
  const pageEl     = document.getElementById(paginationId);
  const rowsSel    = document.getElementById(rowsSelectId);
  const searchEl   = document.getElementById(searchId);

  function render() {
    const start = (currentPage - 1) * rowsPerPage;
    const end   = Math.min(start + rowsPerPage, filtered.length);
    const slice = filtered.slice(start, end);

    if (slice.length === 0) {
      tbody.innerHTML = `<tr><td colspan="20" class="tbl-empty">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        Tidak ada data ditemukan.
      </td></tr>`;
    } else {
      tbody.innerHTML = slice.map((row, i) => renderRow(row, start + i)).join('');
    }

    infoEl.textContent = filtered.length === 0
      ? 'Tidak ada data ditemukan'
      : `Showing ${start + 1} to ${end} of ${filtered.length} entries`;

    renderPagination();
  }

  function renderPagination() {
    const total = Math.max(1, Math.ceil(filtered.length / rowsPerPage));
    pageEl.innerHTML = '';

    const prev = makeBtn('Previous', currentPage === 1, () => { currentPage--; render(); });
    pageEl.appendChild(prev);

    pageRange(currentPage, total).forEach(p => {
      if (p === '…') {
        const s = document.createElement('span');
        s.textContent = '…';
        s.style.cssText = 'padding:0 4px;color:var(--color-muted);line-height:34px;';
        pageEl.appendChild(s);
      } else {
        const btn = makeBtn(p, false, () => { currentPage = p; render(); });
        if (p === currentPage) btn.classList.add('active');
        pageEl.appendChild(btn);
      }
    });

    const next = makeBtn('Next', currentPage === total, () => { currentPage++; render(); });
    pageEl.appendChild(next);
  }

  function makeBtn(label, disabled, onClick) {
    const b = document.createElement('button');
    b.className = 'page-btn';
    b.textContent = label;
    b.disabled = disabled;
    if (!disabled) b.addEventListener('click', onClick);
    return b;
  }

  function pageRange(cur, tot) {
    if (tot <= 7) return Array.from({ length: tot }, (_, i) => i + 1);
    if (cur <= 4) return [1, 2, 3, 4, 5, '…', tot];
    if (cur >= tot - 3) return [1, '…', tot-4, tot-3, tot-2, tot-1, tot];
    return [1, '…', cur-1, cur, cur+1, '…', tot];
  }

  function applySearch(q) {
    const lq = q.trim().toLowerCase();
    filtered = lq
      ? data.filter(r => Object.values(r).some(v => String(v).toLowerCase().includes(lq)))
      : [...data];
    if (sortCol !== null) doSort(false);
    currentPage = 1;
    render();
  }

  function doSort(toggle = true) {
    if (toggle) {
      sortDir = sortCol === null ? 'asc' : (sortDir === 'asc' ? 'desc' : 'asc');
    }
    const key = sortCols[sortCol];
    filtered.sort((a, b) => {
      const va = String(a[key] ?? '').toLowerCase();
      const vb = String(b[key] ?? '').toLowerCase();
      return sortDir === 'asc' ? va.localeCompare(vb,'id') : vb.localeCompare(va,'id');
    });
  }

  /* Events */
  searchEl.addEventListener('input', e => applySearch(e.target.value));
  rowsSel.addEventListener('change', e => { rowsPerPage = parseInt(e.target.value,10); currentPage = 1; render(); });

  /* Sort headers — scoped to this table */
  const table = tbody.closest('table');
  table.querySelectorAll('thead th.sortable').forEach((th, i) => {
    th.addEventListener('click', () => {
      sortCol = i;
      doSort(true);
      table.querySelectorAll('thead th.sortable').forEach((t, j) => {
        t.classList.remove('sort-asc','sort-desc');
        if (j === i) t.classList.add(sortDir === 'asc' ? 'sort-asc' : 'sort-desc');
      });
      render();
    });
  });

  render();
}

/* ── Init tabel Sarana ── */
const saranaRows = SARANA_DATA[buId] ?? [];
createTableEngine({
  data:          saranaRows,
  tbodyId:       'saranaBody',
  infoId:        'saranaInfo',
  paginationId:  'saranaPagination',
  rowsSelectId:  'saranaRowsPerPage',
  searchId:      'saranaSearch',
  sortCols:      ['kode','jenis','pemilik','tahun','daop','depo','sertifikasi','berlaku'],
  renderRow: (r, i) => `
    <tr>
      <td class="td-no">${i + 1}</td>
      <td class="td-mono">${esc(r.kode)}</td>
      <td style="font-size:13px;">${esc(r.jenis)}</td>
      <td style="font-size:13px;font-weight:500;">${esc(r.pemilik)}</td>
      <td class="td-mono" style="text-align:center;">${esc(r.tahun) || '—'}</td>
      <td style="font-size:13px;">${esc(r.daop)}</td>
      <td style="font-size:13px;">${esc(r.depo)}</td>
      <td class="td-mono" style="font-size:12px;">${esc(r.sertifikasi)}</td>
      <td class="td-mono" style="text-align:center;">${esc(r.berlaku)}</td>
      <td class="td-status">${badgeSarana(r.status)}</td>
    </tr>`
});

/* ── Init tabel Permohonan ── */
const permRows = PERM_DATA[buId] ?? [];
createTableEngine({
  data:          permRows,
  tbodyId:       'permBody',
  infoId:        'permInfo',
  paginationId:  'permPagination',
  rowsSelectId:  'permRowsPerPage',
  searchId:      'permSearch',
  sortCols:      ['id','jenisPerm','jenisSarana','kodeSarana','tglVerif'],
  renderRow: (r, i) => `
    <tr>
      <td class="td-no">${i + 1}</td>
      <td class="td-mono" style="color:var(--color-primary);font-weight:600;">${esc(r.id)}</td>
      <td style="font-size:13px;">${esc(r.jenisPerm)}</td>
      <td style="font-size:13px;">${esc(r.jenisSarana)}</td>
      <td class="td-mono">${esc(r.kodeSarana)}</td>
      <td class="td-mono">${esc(r.tglVerif)}</td>
      <td class="td-status">${badgeUji(r.statusUji)}</td>
      <td class="td-status">${badgePerm(r.statusPerm)}</td>
    </tr>`
});
