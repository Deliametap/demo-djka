/* input-hasil-uji.js */

/* ── Data (kosong — empty state) ── */
var IHU_ROWS = [];

/* ── State ── */
var ihuFiltered = IHU_ROWS.slice();
var ihuSortCol  = -1;
var ihuSortDir  = 'asc';
var ihuPage     = 1;
var ihuRpp      = 10;
var ihuCols     = ['idPerm', 'kodeSarana', 'jenisPerm', 'jenisSarana', 'depo', 'badanUsaha', 'noSpt'];

/* ── DOM refs ── */
var ihuTbody    = document.getElementById('ihuTbody');
var ihuInfo     = document.getElementById('ihuInfo');
var ihuPageBtns = document.getElementById('ihuPageBtns');
var ihuSearch   = document.getElementById('tblSearch');
var ihuRowsSel  = document.getElementById('rowsPerPage');

var filterBadanUsaha  = document.getElementById('filterBadanUsaha');
var filterJenisPerm   = document.getElementById('filterJenisPerm');
var filterJenisSarana = document.getElementById('filterJenisSarana');
var filterBilling     = document.getElementById('filterBilling');
var btnCari           = document.getElementById('btnCari');

/* ── Util ── */
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

/* ── Render tabel ── */
function ihuRender() {
  var start = (ihuPage - 1) * ihuRpp;
  var end   = Math.min(start + ihuRpp, ihuFiltered.length);
  var slice = ihuFiltered.slice(start, end);
  var html  = '';

  if (slice.length === 0) {
    html = '<tr><td colspan="9" class="tbl-empty">No data available in table</td></tr>';
  } else {
    for (var i = 0; i < slice.length; i++) {
      var r = slice[i];
      html += '<tr>' +
        '<td class="td-no">' + (start + i + 1) + '.</td>' +
        '<td class="td-id-perm">' + escH(r.idPerm) + '</td>' +
        '<td class="td-kode-sarana">' + escH(r.kodeSarana) + '</td>' +
        '<td style="font-size:13px;">' + escH(r.jenisPerm) + '</td>' +
        '<td style="font-size:13px;">' + escH(r.jenisSarana) + '</td>' +
        '<td style="font-size:13px;white-space:nowrap;">' + escH(r.depo) + '</td>' +
        '<td style="font-size:13px;font-weight:500;min-width:160px;">' + escH(r.badanUsaha) + '</td>' +
        '<td class="td-spt">' + escH(r.noSpt) + '</td>' +
        '<td>' +
          '<div class="td-atur-group">' +
            '<button class="btn-act-atur" data-row="' + i + '" aria-label="Atur ulang jadwal ' + escH(r.idPerm) + '">' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
                '<polyline points="1 4 1 10 7 10"/>' +
                '<path d="M3.51 15a9 9 0 1 0 .49-4.5"/>' +
              '</svg>' +
            '</button>' +
          '</div>' +
        '</td>' +
      '</tr>';
    }
  }

  ihuTbody.innerHTML = html;

  /* Info text */
  if (ihuFiltered.length === 0) {
    ihuInfo.textContent = 'Showing 0 to 0 of 0 entries';
  } else {
    ihuInfo.textContent = 'Showing ' + (start + 1) + ' to ' + end + ' of ' + ihuFiltered.length + ' entries';
  }

  /* Pagination buttons */
  ihuPageBtns.innerHTML = '';
  var tot = Math.max(1, Math.ceil(ihuFiltered.length / ihuRpp));

  ihuPageBtns.appendChild(mkBtn('Previous', ihuPage === 1 || ihuFiltered.length === 0, function () {
    ihuPage--;
    ihuRender();
  }));

  if (ihuFiltered.length > 0) {
    var range = mkPageRange(ihuPage, tot);
    for (var j = 0; j < range.length; j++) {
      var p = range[j];
      if (p === '…') {
        var sp = document.createElement('span');
        sp.textContent = '…';
        sp.style.cssText = 'padding:0 4px;color:var(--color-muted);line-height:34px;';
        ihuPageBtns.appendChild(sp);
      } else {
        (function (pg) {
          var b = mkBtn(pg, false, function () { ihuPage = pg; ihuRender(); });
          if (pg === ihuPage) b.classList.add('active');
          ihuPageBtns.appendChild(b);
        })(p);
      }
    }
  }

  ihuPageBtns.appendChild(mkBtn('Next', ihuPage === tot || ihuFiltered.length === 0, function () {
    ihuPage++;
    ihuRender();
  }));
}

/* ── Filter: klik Cari ── */
btnCari.addEventListener('click', function () {
  var bu      = filterBadanUsaha.value.trim().toLowerCase();
  var jp      = filterJenisPerm.value.trim().toLowerCase();
  var js      = filterJenisSarana.value.trim().toLowerCase();
  var billing = filterBilling.value.trim().toLowerCase();

  ihuFiltered = IHU_ROWS.filter(function (r) {
    var matchBu      = !bu      || String(r.badanUsaha).toLowerCase().indexOf(bu) >= 0;
    var matchJp      = !jp      || String(r.jenisPerm).toLowerCase().indexOf(jp) >= 0;
    var matchJs      = !js      || String(r.jenisSarana).toLowerCase().indexOf(js) >= 0;
    var matchBilling = !billing || String(r.noSpt).toLowerCase().indexOf(billing) >= 0;
    return matchBu && matchJp && matchJs && matchBilling;
  });

  ihuPage = 1;
  ihuRender();
});

/* ── Search real-time ── */
ihuSearch.addEventListener('input', function () {
  var q = ihuSearch.value.trim().toLowerCase();
  ihuFiltered = q
    ? IHU_ROWS.filter(function (r) {
        return Object.values(r).some(function (v) {
          return String(v).toLowerCase().indexOf(q) >= 0;
        });
      })
    : IHU_ROWS.slice();
  ihuPage = 1;
  ihuRender();
});

/* ── Show rows ── */
ihuRowsSel.addEventListener('change', function () {
  ihuRpp = parseInt(ihuRowsSel.value, 10);
  ihuPage = 1;
  ihuRender();
});

/* ── Sort header ── */
document.querySelectorAll('#ihuTable thead th.sortable').forEach(function (th, i) {
  th.addEventListener('click', function () {
    ihuSortDir = ihuSortCol === i ? (ihuSortDir === 'asc' ? 'desc' : 'asc') : 'asc';
    ihuSortCol = i;

    ihuFiltered.sort(function (a, b) {
      var va = String(a[ihuCols[i]] || '').toLowerCase();
      var vb = String(b[ihuCols[i]] || '').toLowerCase();
      return ihuSortDir === 'asc' ? va.localeCompare(vb, 'id') : vb.localeCompare(va, 'id');
    });

    document.querySelectorAll('#ihuTable thead th.sortable').forEach(function (t, j) {
      t.classList.remove('sort-asc', 'sort-desc');
      if (j === i) t.classList.add(ihuSortDir === 'asc' ? 'sort-asc' : 'sort-desc');
    });

    ihuRender();
  });
});

/* ── Export PDF ── */
document.getElementById('btnPdf').addEventListener('click', function () {
  window.print();
});

/* ── Export Excel (dark button) — CSV dari data yang ada ── */
document.getElementById('btnExcel').addEventListener('click', function () {
  var headers = ['No', 'ID Permohonan', 'Kode Sarana', 'Jenis Permohonan', 'Jenis Sarana', 'Depo', 'Badan Usaha', 'No. SPT'];
  var rows = ihuFiltered.map(function (r, i) {
    return [i + 1, r.idPerm, r.kodeSarana, r.jenisPerm, r.jenisSarana, r.depo, r.badanUsaha, r.noSpt]
      .map(function (v) { return '"' + String(v == null ? '' : v).replace(/"/g, '""') + '"'; })
      .join(',');
  });
  var csv = '\uFEFF' + [headers.join(',')].concat(rows).join('\n');
  var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'input-hasil-uji.csv';
  a.click();
});

/* ── Export hijau (alert) — CSV data yang ada ── */
document.getElementById('btnExportGreen').addEventListener('click', function () {
  var headers = ['No', 'ID Permohonan', 'Kode Sarana', 'Jenis Permohonan', 'Jenis Sarana', 'Depo', 'Badan Usaha', 'No. SPT'];
  var rows = IHU_ROWS.map(function (r, i) {
    return [i + 1, r.idPerm, r.kodeSarana, r.jenisPerm, r.jenisSarana, r.depo, r.badanUsaha, r.noSpt]
      .map(function (v) { return '"' + String(v == null ? '' : v).replace(/"/g, '""') + '"'; })
      .join(',');
  });
  var csv = '\uFEFF' + [headers.join(',')].concat(rows).join('\n');
  var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'export-sarana-menunggu-hasil-uji.csv';
  a.click();
});

/* ── Initial render ── */
ihuRender();

/* ── Filter dropdown panel toggle ── */
(function() {
  var fd     = document.getElementById('filterDropdown');
  var toggle = document.getElementById('btnFilterToggle');
  var reset  = document.getElementById('btnFilterReset');
  if (!fd || !toggle) return;

  toggle.addEventListener('click', function(e) {
    e.stopPropagation();
    var open = fd.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  document.addEventListener('click', function() {
    fd.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });

  fd.addEventListener('click', function(e) { e.stopPropagation(); });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') { fd.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); }
  });

  if (reset) {
    reset.addEventListener('click', function() {
      document.getElementById('filterBadanUsaha').value = '';
      document.getElementById('filterJenisPerm').value  = '';
      document.getElementById('filterJenisSarana').value = '';
      document.getElementById('filterBilling').value    = '';
      ihuFiltered = IHU_ROWS.slice();
      ihuPage = 1;
      ihuRender();
      fd.classList.remove('open');
      toggle.setAttribute('aria-expanded','false');
    });
  }
})();
