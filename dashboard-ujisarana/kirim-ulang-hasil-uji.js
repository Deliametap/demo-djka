/* kirim-ulang-hasil-uji.js */

/* Data dummy untuk simulasi pencarian */
var KU_DATA = [
  { idPerm: "250304223", noPerm: "KA.608/1/14/BPWKA/2025", jenisPerm: "Permohonan Uji Berkala", jenisSarana: "Peralatan Khusus Berpenggerak Sendiri", kodeSarana: "SK21501", depo: "BTP JABAR", badanUsaha: "BALAI PERAWATAN PERKERETAAPIAN", tglUji: "27-03-2025", statusSinkron: "Gagal" },
  { idPerm: "250304224", noPerm: "KA.608/1/15/BPWKA/2025", jenisPerm: "Permohonan Uji Berkala", jenisSarana: "Peralatan Khusus Berpenggerak Sendiri", kodeSarana: "SK21502", depo: "BTP JATENG", badanUsaha: "BALAI PERAWATAN PERKERETAAPIAN", tglUji: "27-03-2025", statusSinkron: "Gagal" },
  { idPerm: "241114010", noPerm: "KCI/UJI/2024/0010", jenisPerm: "Permohonan Uji Berkala", jenisSarana: "KRL", kodeSarana: "KRL-001", depo: "DEPO KRL DEPOK", badanUsaha: "PT KERETA COMMUTER INDONESIA", tglUji: "03-12-2024", statusSinkron: "Gagal" },
];

function escH(s) {
  return String(s == null ? '' : s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

var inputEl  = document.getElementById('filterIdPerm');
var btnCari  = document.getElementById('btnCariKu');
var resultEl = document.getElementById('kuResult');

function doSearch() {
  var q = inputEl.value.trim();

  if (!q) {
    resultEl.innerHTML = '<div class="ku-empty">' +
      '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>' +
      'Masukkan ID Permohonan untuk mencari data.' +
    '</div>';
    return;
  }

  var found = KU_DATA.filter(function(r) {
    return r.idPerm.toLowerCase().indexOf(q.toLowerCase()) >= 0;
  });

  if (found.length === 0) {
    resultEl.innerHTML = '<div class="ku-empty">' +
      '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>' +
      'Tidak ada data permohonan dengan ID <strong>' + escH(q) + '</strong>.' +
    '</div>';
    return;
  }

  var html = '';
  for (var i = 0; i < found.length; i++) {
    var r = found[i];
    html += '<div class="ku-result-card" style="margin-bottom:12px;">' +
      '<div class="ku-result-header">' +
        '<span class="ku-result-title">ID Permohonan: <span style="font-family:var(--font-mono);color:var(--color-primary);">' + escH(r.idPerm) + '</span></span>' +
        '<button class="btn-kirim-ulang" data-id="' + escH(r.idPerm) + '" aria-label="Kirim ulang hasil uji ' + escH(r.idPerm) + '">' +
          '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.5"/></svg>' +
          'Kirim Ulang' +
        '</button>' +
      '</div>' +
      '<dl class="ku-result-dl">' +
        kuRow('No. Permohonan',  '<span class="ku-val-mono">' + escH(r.noPerm) + '</span>') +
        kuRow('Jenis Permohonan', escH(r.jenisPerm)) +
        kuRow('Jenis Sarana',     escH(r.jenisSarana)) +
        kuRow('Kode Sarana',      '<span class="ku-val-mono">' + escH(r.kodeSarana) + '</span>') +
        kuRow('Depo',             escH(r.depo)) +
        kuRow('Badan Usaha',      '<strong>' + escH(r.badanUsaha) + '</strong>') +
        kuRow('Tgl. Pengujian',   escH(r.tglUji)) +
        kuRow('Status Sinkron',   '<span class="sdot-badge s-red"><span class="sdot"></span>' + escH(r.statusSinkron) + '</span>') +
      '</dl>' +
    '</div>';
  }

  resultEl.innerHTML = html;

  /* Event listener tombol Kirim Ulang */
  resultEl.querySelectorAll('.btn-kirim-ulang').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var id = btn.getAttribute('data-id');
      btn.disabled = true;
      btn.textContent = 'Mengirim...';
      setTimeout(function() {
        btn.textContent = '✓ Terkirim';
        btn.style.background = '#64748B';
        btn.disabled = true;
      }, 1500);
    });
  });
}

function kuRow(label, value) {
  return '<div class="ku-result-row">' +
    '<dt>' + label + '</dt>' +
    '<span class="ku-result-sep" aria-hidden="true">:</span>' +
    '<dd>' + value + '</dd>' +
  '</div>';
}

btnCari.addEventListener('click', doSearch);

inputEl.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') doSearch();
});
