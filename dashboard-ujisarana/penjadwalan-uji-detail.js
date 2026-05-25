/* ═══════════════════════════════════════════════════════════
   penjadwalan-uji-detail.js
═══════════════════════════════════════════════════════════ */

/* ── Data penjadwalan (index sesuai penjadwalan-uji.js) ── */
const PJ_DATA = [
  {
    noInvoice:    "2025036529871",
    noSurat:      "KA.605/00305/K4/DJKA/2025",
    wajibBayar:   "BALAI PERAWATAN PERKERETAAPIAN",
    kodePP:       "1202",
    trxId:        "0",
    kodeBilling:  "0",
    tglBilling:   "27-03-2025",
    nominal:      "Rp. 0",
    tglBayar:     "27-03-2025",
    permohonan: [
      { id: "250304223", noPerm: "KA.608/1/14/BPWKA/2025", jenisPerm: "Permohonan Uji Berkala", jenisSarana: "Peralatan Khusus Berpenggerak Sendiri", depo: "BTP JABAR", badanUsaha: "BALAI PERAWATAN PERKERETAAPIAN", kodeSarana: "SK21501" }
    ]
  },
  {
    noInvoice:    "2025030846397",
    noSurat:      "KA.605/00306/K4/DJKA/2025",
    wajibBayar:   "BALAI PERAWATAN PERKERETAAPIAN",
    kodePP:       "1202",
    trxId:        "0",
    kodeBilling:  "0",
    tglBilling:   "27-03-2025",
    nominal:      "Rp. 0",
    tglBayar:     "27-03-2025",
    permohonan: [
      { id: "250304224", noPerm: "KA.608/1/15/BPWKA/2025", jenisPerm: "Permohonan Uji Berkala", jenisSarana: "Peralatan Khusus Berpenggerak Sendiri", depo: "BTP JATENG", badanUsaha: "BALAI PERAWATAN PERKERETAAPIAN", kodeSarana: "SK21502" }
    ]
  },
  {
    noInvoice:    "2025031263954",
    noSurat:      "KA.605/00307/K4/DJKA/2025",
    wajibBayar:   "BALAI PERAWATAN PERKERETAAPIAN",
    kodePP:       "1202",
    trxId:        "0",
    kodeBilling:  "0",
    tglBilling:   "28-03-2025",
    nominal:      "Rp. 0",
    tglBayar:     "28-03-2025",
    permohonan: [
      { id: "250304225", noPerm: "KA.608/1/16/BPWKA/2025", jenisPerm: "Permohonan Uji Berkala", jenisSarana: "Peralatan Khusus Berpenggerak Sendiri", depo: "BTP JATIM", badanUsaha: "BALAI PERAWATAN PERKERETAAPIAN", kodeSarana: "SK21503" }
    ]
  },
  {
    noInvoice:    "2025068127653",
    noSurat:      "KA.605/00625/K4/DJKA/2025",
    wajibBayar:   "PT KERETA COMMUTER INDONESIA",
    kodePP:       "4230",
    trxId:        "9885267924123390",
    kodeBilling:  "9885267924123390",
    tglBilling:   "15-06-2025",
    nominal:      "Rp. 2.500.000",
    tglBayar:     "15-06-2025",
    permohonan: [
      { id: "250601001", noPerm: "KCI/UJI/2025/0001", jenisPerm: "Permohonan Uji Berkala", jenisSarana: "KRL", depo: "DEPO KRL DEPOK", badanUsaha: "PT KERETA COMMUTER INDONESIA", kodeSarana: "KRL-001" },
      { id: "250601002", noPerm: "KCI/UJI/2025/0002", jenisPerm: "Permohonan Uji Berkala", jenisSarana: "KRL", depo: "DEPO KRL DEPOK", badanUsaha: "PT KERETA COMMUTER INDONESIA", kodeSarana: "KRL-002" }
    ]
  },
];

/* ── Baca index dari URL param ── */
function getParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

const idx = parseInt(getParam('idx') ?? '0', 10);
const pj  = PJ_DATA[idx] ?? PJ_DATA[0];

/* ── Escape HTML ── */
function esc(s) {
  return String(s ?? '—')
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ── Isi info card ── */
document.getElementById('infInvoice').textContent   = pj.noInvoice;
document.getElementById('infSurat').textContent     = pj.noSurat;
document.getElementById('infWajibBayar').textContent = pj.wajibBayar;
document.getElementById('infKodePP').textContent    = pj.kodePP;
document.getElementById('infTrxId').textContent     = pj.trxId;
document.getElementById('infBilling').textContent   = pj.kodeBilling;
document.getElementById('infTglBilling').textContent = pj.tglBilling;
document.getElementById('infNominal').textContent   = pj.nominal;

/* Tgl. Bayar — badge hijau */
const tglBayarEl = document.getElementById('infTglBayar');
tglBayarEl.innerHTML = `<span class="badge-tgl-bayar">${esc(pj.tglBayar)}</span>`;

/* File surat — link PDF */
const fileEl = document.getElementById('infFileSurat');
fileEl.href  = `#`;
fileEl.setAttribute('aria-label', `Unduh surat penugasan ${pj.noSurat}`);

/* ── Render tabel permohonan ── */
const tbody   = document.getElementById('permBody');
let sortCol   = null;
let sortDir   = 'asc';
let permData  = [...pj.permohonan];

function renderPerm() {
  if (permData.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" class="tbl-empty">Tidak ada data permohonan.</td></tr>`;
    return;
  }

  tbody.innerHTML = permData.map(r => `
    <tr>
      <td class="td-check">
        <input type="checkbox" aria-label="Pilih permohonan ${esc(r.id)}" />
      </td>
      <td class="td-id-perm">${esc(r.id)}</td>
      <td class="td-no-perm">${esc(r.noPerm)}</td>
      <td style="font-size:13px;">${esc(r.jenisPerm)}</td>
      <td style="font-size:13px;">${esc(r.jenisSarana)}</td>
      <td style="font-size:13px;white-space:nowrap;">${esc(r.depo)}</td>
      <td style="font-size:13px;font-weight:500;">${esc(r.badanUsaha)}</td>
      <td class="td-kode-sarana">${esc(r.kodeSarana)}</td>
    </tr>`).join('');
}

/* Sort header */
const COLS = ['id','noPerm','jenisPerm','jenisSarana','depo','badanUsaha','kodeSarana'];

document.querySelectorAll('.pjd-table thead th.sortable').forEach((th, i) => {
  th.addEventListener('click', () => {
    if (sortCol === i) {
      sortDir = sortDir === 'asc' ? 'desc' : 'asc';
    } else {
      sortCol = i;
      sortDir = 'asc';
    }
    const key = COLS[i];
    permData.sort((a, b) => {
      const va = String(a[key] ?? '').toLowerCase();
      const vb = String(b[key] ?? '').toLowerCase();
      return sortDir === 'asc' ? va.localeCompare(vb,'id') : vb.localeCompare(va,'id');
    });
    document.querySelectorAll('.pjd-table thead th.sortable').forEach((t, j) => {
      t.classList.remove('sort-asc','sort-desc');
      if (j === i) t.classList.add(sortDir === 'asc' ? 'sort-asc' : 'sort-desc');
    });
    renderPerm();
  });
});

/* Check all */
document.getElementById('checkAll').addEventListener('change', e => {
  document.querySelectorAll('#permBody input[type="checkbox"]')
    .forEach(cb => { cb.checked = e.target.checked; });
});

/* ── Init ── */
renderPerm();
