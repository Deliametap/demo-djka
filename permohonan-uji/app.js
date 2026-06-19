/* ═══════════════════════════════════════════════════════════
   app.js — Permohonan Uji Sarana
   Handles: wizard navigation, validation, file upload, review,
            dashboard table render
═══════════════════════════════════════════════════════════ */

/* ── Wizard State ── */
let currentStep = 1;
const TOTAL_STEPS = 5;

const uploadedFiles = {
  'surat-permohonan': null,
  'dok-teknis': null,
  'surat-kuasa': null,
  'dok-lainnya': null,
};

const jenisUjiSelected = { value: '' };

/* ── Stepper Update ── */
function updateStepper(step) {
  document.querySelectorAll('.wizard-step').forEach((el, i) => {
    const n = i + 1;
    el.classList.remove('active', 'done');
    if (n < step)       el.classList.add('done');
    else if (n === step) el.classList.add('active');

    const circle = el.querySelector('.wizard-step-circle');
    if (n < step) {
      circle.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>';
    } else {
      circle.textContent = n;
    }
  });
}

/* ── Panel Switch ── */
function showPanel(step) {
  document.querySelectorAll('.wizard-panel').forEach(p => p.classList.remove('active'));
  const panel = document.getElementById('panel-' + step);
  if (panel) {
    panel.classList.add('active');
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  updateStepper(step);
  currentStep = step;
}

/* ── Validation ── */
function validateStep(step) {
  let valid = true;

  function check(id, errId, condition) {
    const errEl = document.getElementById(errId);
    const inputEl = document.getElementById(id);
    if (!errEl) return;
    if (!condition) {
      errEl.classList.add('show');
      if (inputEl) inputEl.classList.add('error');
      valid = false;
    } else {
      errEl.classList.remove('show');
      if (inputEl) inputEl.classList.remove('error');
    }
  }

  if (step === 1) {
    check('namaBadanUsaha', 'err-namaBadanUsaha', v('namaBadanUsaha').trim().length > 0);
    check('nomorIzinUsaha', 'err-nomorIzinUsaha', v('nomorIzinUsaha').trim().length > 0);
    check('namaPJ',          'err-namaPJ',          v('namaPJ').trim().length > 0);
    check('jabatan',         'err-jabatan',         v('jabatan').trim().length > 0);
    check('noTelepon',       'err-noTelepon',       v('noTelepon').trim().length > 0);
    const emailVal = v('email').trim();
    check('email', 'err-email', emailVal.length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal));
    check('alamatKantor',    'err-alamatKantor',    v('alamatKantor').trim().length > 0);
  }

  if (step === 2) {
    check('nomorRegistrasi', 'err-nomorRegistrasi', v('nomorRegistrasi').trim().length > 0);
    check('jenisSarana',     'err-jenisSarana',     v('jenisSarana') !== '');
    check('namaTipeSarana',  'err-namaTipeSarana',  v('namaTipeSarana').trim().length > 0);
    const thn = parseInt(v('tahunPembuatan'));
    check('tahunPembuatan',  'err-tahunPembuatan',  !isNaN(thn) && thn >= 1900 && thn <= new Date().getFullYear());
  }

  if (step === 3) {
    const errJenis = document.getElementById('err-jenisUji');
    if (!jenisUjiSelected.value) {
      if (errJenis) errJenis.classList.add('show');
      valid = false;
    } else {
      if (errJenis) errJenis.classList.remove('show');
    }
    check('lokasiUji', 'err-lokasiUji', v('lokasiUji') !== '');
    check('tglMulai',  'err-tglMulai',  v('tglMulai') !== '');
    const mulai = v('tglMulai');
    const selesai = v('tglSelesai');
    check('tglSelesai', 'err-tglSelesai', selesai !== '' && (!mulai || selesai >= mulai));
  }

  if (step === 4) {
    const errSurat = document.getElementById('err-surat-permohonan');
    const errTeknis = document.getElementById('err-dok-teknis');
    if (!uploadedFiles['surat-permohonan']) {
      if (errSurat) { errSurat.textContent = 'Surat permohonan resmi wajib dilampirkan.'; errSurat.classList.add('show'); }
      valid = false;
    } else {
      if (errSurat) errSurat.classList.remove('show');
    }
    if (!uploadedFiles['dok-teknis']) {
      if (errTeknis) { errTeknis.textContent = 'Dokumen teknis sarana wajib dilampirkan.'; errTeknis.classList.add('show'); }
      valid = false;
    } else {
      if (errTeknis) errTeknis.classList.remove('show');
    }
  }

  return valid;
}

function v(id) {
  const el = document.getElementById(id);
  return el ? el.value : '';
}

/* ── Navigation ── */
function wizardNext(fromStep) {
  if (!validateStep(fromStep)) return;
  if (fromStep === 4) buildReview();
  showPanel(fromStep + 1);
}

function wizardPrev(fromStep) {
  showPanel(fromStep - 1);
}

/* ── Radio Card Selection ── */
function selectRadioCard(labelEl, name, value) {
  document.querySelectorAll(`input[name="${name}"]`).forEach(r => {
    r.closest('.radio-card').classList.remove('selected');
  });
  labelEl.classList.add('selected');
  const radio = labelEl.querySelector('input[type="radio"]');
  if (radio) radio.checked = true;
  jenisUjiSelected.value = value;
}

/* ── File Upload ── */
function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / 1048576).toFixed(1) + ' MB';
}

function setFileInfo(key, file) {
  uploadedFiles[key] = file;
  document.getElementById('dz-' + key).style.display = 'none';
  const info = document.getElementById('info-' + key);
  info.style.display = 'flex';
  document.getElementById('fname-' + key).textContent = file.name;
  document.getElementById('fsize-' + key).textContent = formatBytes(file.size);
}

function removeFile(key) {
  uploadedFiles[key] = null;
  document.getElementById('dz-' + key).style.display = 'flex';
  document.getElementById('info-' + key).style.display = 'none';
  document.getElementById('file-' + key).value = '';
}

function handleFileSelect(input, key, allowedTypes, maxMB) {
  const file = input.files[0];
  if (!file) return;
  const errEl = document.getElementById('err-' + key);
  if (maxMB && file.size > maxMB * 1024 * 1024) {
    if (errEl) { errEl.textContent = `Ukuran file melebihi batas maksimum ${maxMB} MB.`; errEl.classList.add('show'); }
    input.value = '';
    return;
  }
  if (errEl) errEl.classList.remove('show');
  setFileInfo(key, file);
}

function handleDragOver(event, dzId) {
  event.preventDefault();
  document.getElementById(dzId).classList.add('dragover');
}

function handleDragLeave(dzId) {
  document.getElementById(dzId).classList.remove('dragover');
}

function handleDrop(event, key, allowedTypes, maxMB) {
  event.preventDefault();
  const dzId = 'dz-' + key;
  document.getElementById(dzId).classList.remove('dragover');
  const file = event.dataTransfer.files[0];
  if (!file) return;
  const errEl = document.getElementById('err-' + key);
  if (maxMB && file.size > maxMB * 1024 * 1024) {
    if (errEl) { errEl.textContent = `Ukuran file melebihi batas maksimum ${maxMB} MB.`; errEl.classList.add('show'); }
    return;
  }
  if (errEl) errEl.classList.remove('show');
  setFileInfo(key, file);
}

/* ── Review Builder (Step 5) ── */
function buildReview() {
  const jenisUjiLabel = { 'uji-pertama': 'Uji Pertama', 'uji-berkala': 'Uji Berkala', 'uji-ulang': 'Uji Ulang' };
  const lokasiMap = {
    'jakarta': 'Balai Pengujian Jakarta',
    'bandung': 'Balai Pengujian Bandung',
    'surabaya': 'Balai Pengujian Surabaya',
    'medan': 'Balai Pengujian Medan',
  };

  function formatTgl(iso) {
    if (!iso) return '—';
    const bulan = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
    const d = new Date(iso);
    return `${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}`;
  }

  function section(title, stepNum, fields) {
    const rows = fields.map(([label, value, mono]) =>
      `<div class="review-field">
        <div class="review-field-label">${label}</div>
        <div class="review-field-value${mono ? ' mono' : ''}">${value || '—'}</div>
      </div>`
    ).join('');
    return `
      <div class="review-section">
        <div class="review-section-header">
          <span class="review-section-title">${title}</span>
          <button class="btn btn-ghost" style="height:30px;padding:0 12px;font-size:12px;" onclick="showPanel(${stepNum})">Edit</button>
        </div>
        <div class="review-grid">${rows}</div>
      </div>`;
  }

  const jenisSaranaEl = document.getElementById('jenisSarana');
  const jenisSaranaText = jenisSaranaEl ? jenisSaranaEl.options[jenisSaranaEl.selectedIndex]?.text : '—';

  const docsUploaded = Object.entries(uploadedFiles)
    .filter(([, f]) => f)
    .map(([k, f]) => `<div style="font-family:var(--font-mono);font-size:12.5px;color:var(--color-text);margin-bottom:4px;">✓ ${f.name} (${formatBytes(f.size)})</div>`)
    .join('') || '<span style="color:var(--color-muted);">—</span>';

  document.getElementById('reviewSections').innerHTML = [
    section('Data Pemohon', 1, [
      ['Nama Badan Usaha', v('namaBadanUsaha')],
      ['Nomor Izin Usaha', v('nomorIzinUsaha'), true],
      ['Nama Penanggung Jawab', v('namaPJ')],
      ['Jabatan', v('jabatan')],
      ['Nomor Telepon', v('noTelepon')],
      ['Email', v('email')],
      ['Alamat Kantor', v('alamatKantor')],
    ]),
    section('Referensi Sarana', 2, [
      ['Nomor Registrasi Sarana', v('nomorRegistrasi'), true],
      ['Jenis Sarana', jenisSaranaText],
      ['Nama / Tipe Sarana', v('namaTipeSarana')],
      ['Tahun Pembuatan', v('tahunPembuatan')],
      ['Catatan Tambahan', v('catatanSarana')],
    ]),
    section('Jenis & Jadwal', 3, [
      ['Jenis Permohonan Uji', jenisUjiLabel[jenisUjiSelected.value] || '—'],
      ['Lokasi Uji Preferensi', lokasiMap[v('lokasiUji')] || v('lokasiUji')],
      ['Tanggal Preferensi Mulai', formatTgl(v('tglMulai'))],
      ['Tanggal Preferensi Selesai', formatTgl(v('tglSelesai'))],
      ['Keterangan Khusus', v('keteranganKhusus') || 'Tidak ada'],
    ]),
    `<div class="review-section">
      <div class="review-section-header">
        <span class="review-section-title">Dokumen Terlampir</span>
        <button class="btn btn-ghost" style="height:30px;padding:0 12px;font-size:12px;" onclick="showPanel(4)">Edit</button>
      </div>
      <div style="padding:16px;">${docsUploaded}</div>
    </div>`,
  ].join('');
}

/* ── Submit & Draft ── */
function saveDraft() {
  alert('Permohonan berhasil disimpan sebagai Draf. Anda dapat melanjutkan pengisian kapan saja.');
}

function submitPermohonan() {
  const confirmCheck = document.getElementById('confirmCheck');
  if (!confirmCheck || !confirmCheck.checked) {
    alert('Harap centang pernyataan konfirmasi sebelum mengirimkan permohonan.');
    return;
  }
  alert('Permohonan berhasil dikirim! Status: Menunggu Verifikasi.\nAnda akan diarahkan ke halaman Permohonan Saya.');
  window.location.href = 'index.html';
}

/* ═══════════════════════════════════════════════════════════
   DASHBOARD — index.html
═══════════════════════════════════════════════════════════ */
const DUMMY_DATA = [
  { id: 'PRU-2026-0012', jenis: 'uji-pertama',  sarana: 'SR-2024-001234', tgl: '2026-06-15', status: 'menunggu-verifikasi' },
  { id: 'PRU-2026-0011', jenis: 'uji-berkala',  sarana: 'SR-2023-000892', tgl: '2026-06-10', status: 'perlu-perbaikan' },
  { id: 'PRU-2026-0010', jenis: 'uji-ulang',    sarana: 'SR-2022-000411', tgl: '2026-05-28', status: 'disetujui' },
  { id: 'PRU-2026-0009', jenis: 'uji-pertama',  sarana: 'SR-2024-001100', tgl: '2026-05-20', status: 'terjadwal' },
  { id: 'PRU-2026-0008', jenis: 'uji-berkala',  sarana: 'SR-2021-000655', tgl: '2026-05-01', status: 'selesai' },
  { id: 'PRU-2026-0007', jenis: 'uji-berkala',  sarana: 'SR-2020-000399', tgl: '2026-04-18', status: 'selesai' },
  { id: 'PRU-2026-0006', jenis: 'uji-pertama',  sarana: 'SR-2023-000780', tgl: '2026-04-05', status: 'ditolak' },
  { id: 'PRU-2026-0005', jenis: 'uji-ulang',    sarana: 'SR-2022-000300', tgl: '2026-03-22', status: 'selesai' },
  { id: 'PRU-2026-0004', jenis: 'uji-berkala',  sarana: 'SR-2021-000210', tgl: '2026-03-10', status: 'selesai' },
  { id: 'PRU-2026-0003', jenis: 'uji-pertama',  sarana: 'SR-2023-000651', tgl: '2026-02-25', status: 'selesai' },
  { id: 'PRU-2026-0002', jenis: 'uji-berkala',  sarana: 'SR-2020-000188', tgl: '2026-02-10', status: 'selesai' },
  { id: 'PRU-2026-0001', jenis: 'uji-pertama',  sarana: 'SR-2022-000050', tgl: '2026-01-15', status: 'menunggu-pembayaran' },
];

const JENIS_LABEL = { 'uji-pertama': 'Uji Pertama', 'uji-berkala': 'Uji Berkala', 'uji-ulang': 'Uji Ulang' };
const JENIS_PILL  = { 'uji-pertama': 't-blue', 'uji-berkala': 't-teal', 'uji-ulang': 't-amber' };

const STATUS_LABEL = {
  'draf': 'Draf',
  'menunggu-verifikasi': 'Menunggu Verifikasi',
  'perlu-perbaikan': 'Perlu Perbaikan',
  'disetujui': 'Disetujui',
  'menunggu-pembayaran': 'Menunggu Pembayaran',
  'terjadwal': 'Terjadwal',
  'selesai': 'Selesai',
  'ditolak': 'Ditolak',
};

const STATUS_BADGE = {
  'draf': 's-gray',
  'menunggu-verifikasi': 's-blue',
  'perlu-perbaikan': 's-amber',
  'disetujui': 's-green',
  'menunggu-pembayaran': 's-amber',
  'terjadwal': 's-green',
  'selesai': 's-green',
  'ditolak': 's-red',
};

function formatTglIndo(iso) {
  const bulan = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
  const d = new Date(iso);
  return `${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}`;
}

function renderTable(data) {
  const tbody = document.getElementById('tableBody');
  if (!tbody) return;
  if (data.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="padding:40px;text-align:center;color:var(--color-muted);">Tidak Ada Data</td></tr>`;
    return;
  }
  tbody.innerHTML = data.map((row, i) => `
    <tr style="background:${i % 2 === 0 ? 'var(--color-surface)' : 'var(--color-bg)'};">
      <td style="padding:12px 16px;font-size:13px;">${i + 1}</td>
      <td style="padding:12px 16px;font-family:var(--font-mono);font-size:13px;color:var(--color-primary);font-weight:600;">${row.id}</td>
      <td style="padding:12px 16px;"><span class="type-pill ${JENIS_PILL[row.jenis]}">${JENIS_LABEL[row.jenis]}</span></td>
      <td style="padding:12px 16px;font-family:var(--font-mono);font-size:13px;">${row.sarana}</td>
      <td style="padding:12px 16px;font-size:13px;color:var(--color-muted);">${formatTglIndo(row.tgl)}</td>
      <td style="padding:12px 16px;"><span class="sdot-badge ${STATUS_BADGE[row.status]}"><span class="sdot"></span>${STATUS_LABEL[row.status]}</span></td>
      <td style="padding:12px 16px;"><button class="btn-detail" onclick="alert('Detail ${row.id}')"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> Detail</button></td>
    </tr>
  `).join('');
}

function initDashboard() {
  let filtered = [...DUMMY_DATA];

  function applyFilters() {
    const jenis   = document.getElementById('filterJenis')?.value || '';
    const status  = document.getElementById('filterStatus')?.value || '';
    const search  = (document.getElementById('searchInput')?.value || '').toLowerCase();
    filtered = DUMMY_DATA.filter(r =>
      (!jenis  || r.jenis === jenis) &&
      (!status || r.status === status) &&
      (!search || r.id.toLowerCase().includes(search) || r.sarana.toLowerCase().includes(search))
    );
    const info = document.getElementById('paginationInfo');
    if (info) info.textContent = `Menampilkan 1 sampai ${Math.min(10, filtered.length)} dari ${filtered.length} data`;
    renderTable(filtered.slice(0, 10));
  }

  document.getElementById('filterJenis')?.addEventListener('change', applyFilters);
  document.getElementById('filterStatus')?.addEventListener('change', applyFilters);
  document.getElementById('searchInput')?.addEventListener('input', applyFilters);

  applyFilters();
}
