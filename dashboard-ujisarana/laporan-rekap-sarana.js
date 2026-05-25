/* laporan-rekap-sarana.js */

var RS_DATA = [
  { badanUsaha: "BALAI PENGELOLA KERETA API SULAWESI SELATAN",          jenisSarana: "Peralatan Khusus Berpenggerak Sendiri", jumlah: 7 },
  { badanUsaha: "BALAI PENGELOLA KERETA API SULAWESI SELATAN",          jenisSarana: "Peralatan Khusus Tanpa Penggerak",       jumlah: 1 },
  { badanUsaha: "BALAI PERAWATAN PERKERETAAPIAN",                       jenisSarana: "Gerbong",                               jumlah: 97 },
  { badanUsaha: "BALAI PERAWATAN PERKERETAAPIAN",                       jenisSarana: "Lokomotif",                             jumlah: 5 },
  { badanUsaha: "BALAI PERAWATAN PERKERETAAPIAN",                       jenisSarana: "Peralatan Khusus Berpenggerak Sendiri", jumlah: 27 },
  { badanUsaha: "BANDARA INTERNASIONAL SOEKARNO-HATTA - PT ANGKASA PURA II", jenisSarana: "KRL",                             jumlah: 12 },
  { badanUsaha: "BANDARA INTERNASIONAL SOEKARNO-HATTA - PT ANGKASA PURA II", jenisSarana: "Peralatan Khusus Berpenggerak Sendiri", jumlah: 1 },
  { badanUsaha: "BTP SUMBAGUT",                                         jenisSarana: "KRD",                                  jumlah: 2 },
  { badanUsaha: "PEMPROV SUMATERA SELATAN",                             jenisSarana: "Railbus",                              jumlah: 3 },
  { badanUsaha: "PT KERETA API INDONESIA (PERSERO)",                    jenisSarana: "Gerbong",                              jumlah: 1875 },
  { badanUsaha: "PT KERETA API INDONESIA (PERSERO)",                    jenisSarana: "Kereta",                               jumlah: 2288 },
  { badanUsaha: "PT KERETA API INDONESIA (PERSERO)",                    jenisSarana: "KRD",                                  jumlah: 118 },
  { badanUsaha: "PT KERETA API INDONESIA (PERSERO)",                    jenisSarana: "Lokomotif",                            jumlah: 563 },
  { badanUsaha: "PT KERETA API INDONESIA (PERSERO)",                    jenisSarana: "Peralatan Khusus Berpenggerak Sendiri", jumlah: 164 },
  { badanUsaha: "PT KERETA API INDONESIA (PERSERO)",                    jenisSarana: "Peralatan Khusus Tanpa Penggerak",     jumlah: 62 },
  { badanUsaha: "PT KERETA API INDONESIA (PERSERO)",                    jenisSarana: "Railbus",                              jumlah: 0 },
  { badanUsaha: "PT KERETA API INDONESIA (PERSERO) - KAI COMMUTER",    jenisSarana: "KRL",                                  jumlah: 1716 },
  { badanUsaha: "PT KERETA API INDONESIA (PERSERO) - KAI COMMUTER",    jenisSarana: "Peralatan Khusus Berpenggerak Sendiri", jumlah: 2 },
  { badanUsaha: "PT KERETA API INDONESIA (PERSERO) - LRT JABO",        jenisSarana: "KRL",                                  jumlah: 12 },
  { badanUsaha: "PT KERETA CEPAT INDONESIA CHINA",                     jenisSarana: "KRL",                                  jumlah: 18 },
  { badanUsaha: "PT MRT JAKARTA",                                       jenisSarana: "KRL",                                  jumlah: 112 },
  { badanUsaha: "PT LRT JAKARTA",                                       jenisSarana: "KRL",                                  jumlah: 12 },
  { badanUsaha: "PT RAILINK",                                           jenisSarana: "KRL",                                  jumlah: 10 },
  { badanUsaha: "PT KERETA API LOGISTIK",                               jenisSarana: "Gerbong",                              jumlah: 45 },
  { badanUsaha: "PT KERETA API PARIWISATA",                             jenisSarana: "Kereta",                               jumlah: 32 },
  { badanUsaha: "PT RESKA MULTI USAHA",                                 jenisSarana: "Gerbong",                              jumlah: 18 },
  { badanUsaha: "PT KERETA API PROPERTI MANAJEMEN",                     jenisSarana: "Gerbong",                              jumlah: 8 },
  { badanUsaha: "PT PILAR SINERGI BUMN INDONESIA",                      jenisSarana: "KRL",                                  jumlah: 6 },
  { badanUsaha: "DINAS PERHUBUNGAN DKI JAKARTA",                        jenisSarana: "KRL",                                  jumlah: 24 },
  { badanUsaha: "DINAS PERHUBUNGAN JAWA BARAT",                         jenisSarana: "KRD",                                  jumlah: 4 },
  { badanUsaha: "DINAS PERHUBUNGAN JAWA TENGAH",                        jenisSarana: "KRD",                                  jumlah: 3 },
  { badanUsaha: "DINAS PERHUBUNGAN JAWA TIMUR",                         jenisSarana: "KRD",                                  jumlah: 2 },
  { badanUsaha: "DINAS PERHUBUNGAN SULAWESI SELATAN",                   jenisSarana: "KRD",                                  jumlah: 1 },
  { badanUsaha: "DIREKTORAT SARANA",                                    jenisSarana: "Peralatan Khusus Berpenggerak Sendiri", jumlah: 8 },
  { badanUsaha: "DIREKTORAT SARANA",                                    jenisSarana: "Peralatan Khusus Tanpa Penggerak",     jumlah: 1 },
  { badanUsaha: "PT JAKARTA PROPERTINDO (PERSERODA)",                   jenisSarana: "KRL",                                  jumlah: 8 },
  { badanUsaha: "PT JAKARTA PROPERTINDO (PERSERODA)",                   jenisSarana: "Peralatan Khusus Berpenggerak Sendiri", jumlah: 1 },
  { badanUsaha: "BTP JABAR",                                            jenisSarana: "Peralatan Khusus Berpenggerak Sendiri", jumlah: 14 },
  { badanUsaha: "BTP JATENG",                                           jenisSarana: "Peralatan Khusus Berpenggerak Sendiri", jumlah: 11 },
  { badanUsaha: "BTP JATIM",                                            jenisSarana: "Peralatan Khusus Berpenggerak Sendiri", jumlah: 9 },
  { badanUsaha: "BTP SULSEL",                                           jenisSarana: "Peralatan Khusus Berpenggerak Sendiri", jumlah: 8 },
  { badanUsaha: "BTP SULSEL",                                           jenisSarana: "Peralatan Khusus Tanpa Penggerak",     jumlah: 1 },
  { badanUsaha: "PEMPROV JAWA BARAT",                                   jenisSarana: "KRD",                                  jumlah: 2 },
  { badanUsaha: "PEMPROV JAWA TENGAH",                                  jenisSarana: "KRD",                                  jumlah: 1 },
  { badanUsaha: "PEMPROV DKI JAKARTA",                                  jenisSarana: "KRL",                                  jumlah: 6 },
  { badanUsaha: "PEMPROV SULAWESI SELATAN",                             jenisSarana: "KRD",                                  jumlah: 1 }
];

var rsFiltered  = RS_DATA.slice();
var rsSortCol   = -1;
var rsSortDir   = 'asc';
var rsPage      = 1;
var rsRpp       = 10;
var rsCols      = ['badanUsaha', 'jenisSarana', 'jumlah'];

var rsTbody     = document.getElementById('rsTbody');
var rsInfo      = document.getElementById('rsInfo');
var rsPageBtns  = document.getElementById('rsPageBtns');
var rsSearch    = document.getElementById('tblSearch');
var rsRowsSel   = document.getElementById('rowsPerPage');

function escH(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function mkPageRange(cur, tot) {
  if (tot <= 7) {
    var a = [];
    for (var i = 1; i <= tot; i++) a.push(i);
    return a;
  }
  if (cur <= 4) return [1, 2, 3, 4, 5, '…', tot];
  if (cur >= tot - 3) return [1, '…', tot - 4, tot - 3, tot - 2, tot - 1, tot];
  return [1, '…', cur - 1, cur, cur + 1, '…', tot];
}

function mkBtn(label, disabled, onClick) {
  var b = document.createElement('button');
  b.className = 'page-btn';
  b.textContent = label;
  b.disabled = disabled;
  if (!disabled) b.addEventListener('click', onClick);
  return b;
}

function rsRender() {
  var start = (rsPage - 1) * rsRpp;
  var end   = Math.min(start + rsRpp, rsFiltered.length);
  var slice = rsFiltered.slice(start, end);
  var html  = '';

  if (slice.length === 0) {
    html = '<tr><td colspan="4" class="tbl-empty">Tidak ada data rekap sarana.</td></tr>';
  } else {
    for (var i = 0; i < slice.length; i++) {
      var r = slice[i];
      html += '<tr>' +
        '<td class="td-no">' + (start + i + 1) + '.</td>' +
        '<td class="td-rs-bu">' + escH(r.badanUsaha) + '</td>' +
        '<td class="td-rs-js">' + escH(r.jenisSarana) + '</td>' +
        '<td class="td-rs-jml">' + escH(r.jumlah) + '</td>' +
        '</tr>';
    }
  }

  rsTbody.innerHTML = html;

  rsInfo.textContent = rsFiltered.length === 0
    ? 'Showing 0 to 0 of 0 entries'
    : 'Showing ' + (start + 1) + ' to ' + end + ' of ' + rsFiltered.length + ' entries';

  rsPageBtns.innerHTML = '';
  var tot = Math.max(1, Math.ceil(rsFiltered.length / rsRpp));

  rsPageBtns.appendChild(mkBtn('Previous', rsPage === 1 || rsFiltered.length === 0, function () {
    rsPage--;
    rsRender();
  }));

  if (rsFiltered.length > 0) {
    var range = mkPageRange(rsPage, tot);
    for (var j = 0; j < range.length; j++) {
      var p = range[j];
      if (p === '…') {
        var sp = document.createElement('span');
        sp.textContent = '…';
        sp.style.cssText = 'padding:0 4px;color:var(--color-muted);line-height:34px;';
        rsPageBtns.appendChild(sp);
      } else {
        (function (pg) {
          var b = mkBtn(pg, false, function () { rsPage = pg; rsRender(); });
          if (pg === rsPage) b.classList.add('active');
          rsPageBtns.appendChild(b);
        })(p);
      }
    }
  }

  rsPageBtns.appendChild(mkBtn('Next', rsPage === tot || rsFiltered.length === 0, function () {
    rsPage++;
    rsRender();
  }));
}

/* Search real-time */
rsSearch.addEventListener('input', function () {
  var q = rsSearch.value.trim().toLowerCase();
  rsFiltered = q
    ? RS_DATA.filter(function (r) {
        return (
          r.badanUsaha.toLowerCase().indexOf(q) >= 0 ||
          r.jenisSarana.toLowerCase().indexOf(q) >= 0 ||
          String(r.jumlah).indexOf(q) >= 0
        );
      })
    : RS_DATA.slice();
  rsPage = 1;
  rsRender();
});

/* Rows per page */
rsRowsSel.addEventListener('change', function () {
  rsRpp = parseInt(rsRowsSel.value, 10);
  rsPage = 1;
  rsRender();
});

/* Sort */
document.querySelectorAll('#rsTable thead th.sortable').forEach(function (th, i) {
  th.addEventListener('click', function () {
    rsSortDir = rsSortCol === i ? (rsSortDir === 'asc' ? 'desc' : 'asc') : 'asc';
    rsSortCol = i;

    rsFiltered.sort(function (a, b) {
      var col = rsCols[i];
      var va = a[col];
      var vb = b[col];
      /* Kolom JUMLAH — sort numerik */
      if (col === 'jumlah') {
        return rsSortDir === 'asc' ? va - vb : vb - va;
      }
      va = String(va || '').toLowerCase();
      vb = String(vb || '').toLowerCase();
      return rsSortDir === 'asc' ? va.localeCompare(vb, 'id') : vb.localeCompare(va, 'id');
    });

    document.querySelectorAll('#rsTable thead th.sortable').forEach(function (t, j) {
      t.classList.remove('sort-asc', 'sort-desc');
      if (j === i) t.classList.add(rsSortDir === 'asc' ? 'sort-asc' : 'sort-desc');
    });

    rsRender();
  });
});

/* Export PDF */
document.getElementById('btnPdf').addEventListener('click', function () {
  window.print();
});

/* Export Excel (CSV) */
document.getElementById('btnExcel').addEventListener('click', function () {
  var header = ['No', 'Badan Usaha', 'Jenis Sarana', 'Jumlah'];
  var rows = rsFiltered.map(function (r, i) {
    return [i + 1, r.badanUsaha, r.jenisSarana, r.jumlah].map(function (v) {
      return '"' + String(v).replace(/"/g, '""') + '"';
    }).join(',');
  });
  var blob = new Blob(
    ['\uFEFF' + [header.join(',')].concat(rows).join('\n')],
    { type: 'text/csv;charset=utf-8;' }
  );
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'rekap-sarana.csv';
  a.click();
});

/* Tanggal topbar */
function updateDate() {
  var el = document.getElementById('currentDate');
  if (!el) return;
  var now = new Date();
  var days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
                'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  el.textContent = days[now.getDay()] + ', ' + now.getDate() + ' ' + months[now.getMonth()] + ' ' + now.getFullYear();
}

updateDate();
rsRender();
