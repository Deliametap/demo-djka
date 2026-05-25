/* penjadwalan-uji.js */

/* ── Data ── */
var PJ_ROWS = [
  { jenisPerm:"Permohonan Uji Berkala", jenisSarana:"Peralatan Khusus Berpenggerak Sendiri", noSurat:"KA.605/00305/K4/DJKA/2025", noInvoice:"2025036529871",  kodeBilling:"0",                depo:"BTP JABAR",               badanUsaha:"BALAI PERAWATAN PERKERETAAPIAN",       jmlSarana:1 },
  { jenisPerm:"Permohonan Uji Berkala", jenisSarana:"Peralatan Khusus Berpenggerak Sendiri", noSurat:"KA.605/00306/K4/DJKA/2025", noInvoice:"2025030846397",  kodeBilling:"0",                depo:"BTP JATENG",              badanUsaha:"BALAI PERAWATAN PERKERETAAPIAN",       jmlSarana:1 },
  { jenisPerm:"Permohonan Uji Berkala", jenisSarana:"Peralatan Khusus Berpenggerak Sendiri", noSurat:"KA.605/00307/K4/DJKA/2025", noInvoice:"2025031263954",  kodeBilling:"0",                depo:"BTP JATIM",               badanUsaha:"BALAI PERAWATAN PERKERETAAPIAN",       jmlSarana:1 },
  { jenisPerm:"Permohonan Uji Berkala", jenisSarana:"KRL",                                   noSurat:"KA.605/00625/K4/DJKA/2025", noInvoice:"2025068127653",  kodeBilling:"9885267924123390", depo:"DEPO KRL DEPOK",          badanUsaha:"PT KERETA COMMUTER INDONESIA",         jmlSarana:1 },
  { jenisPerm:"Permohonan Uji Berkala", jenisSarana:"KRL",                                   noSurat:"KA.605/00626/K4/DJKA/2025", noInvoice:"2025068194706",  kodeBilling:"9885267924123391", depo:"DEPO KRL DEPOK",          badanUsaha:"PT KERETA COMMUTER INDONESIA",         jmlSarana:1 },
  { jenisPerm:"Permohonan Uji Berkala", jenisSarana:"KRL",                                   noSurat:"KA.605/00627/K4/DJKA/2025", noInvoice:"2025068201445",  kodeBilling:"9885267924123392", depo:"DEPO KRL DEPOK",          badanUsaha:"PT KERETA COMMUTER INDONESIA",         jmlSarana:1 },
  { jenisPerm:"Permohonan Uji Berkala", jenisSarana:"KRL",                                   noSurat:"KA.605/00628/K4/DJKA/2025", noInvoice:"2025068215890",  kodeBilling:"9885267924123393", depo:"DEPO KRL BOGOR",          badanUsaha:"PT KERETA COMMUTER INDONESIA",         jmlSarana:1 },
  { jenisPerm:"Permohonan Uji Berkala", jenisSarana:"Kereta",                                noSurat:"KA.605/00412/K4/DJKA/2025", noInvoice:"2025045678901",  kodeBilling:"0",                depo:"DEPO KERETA JAKARTA",     badanUsaha:"PT KERETA API INDONESIA (PERSERO)",   jmlSarana:2 },
  { jenisPerm:"Permohonan Uji Berkala", jenisSarana:"Kereta",                                noSurat:"KA.605/00413/K4/DJKA/2025", noInvoice:"2025045689012",  kodeBilling:"0",                depo:"DEPO KERETA BANDUNG",     badanUsaha:"PT KERETA API INDONESIA (PERSERO)",   jmlSarana:2 },
  { jenisPerm:"Permohonan Uji Berkala", jenisSarana:"Lokomotif",                             noSurat:"KA.605/00501/K4/DJKA/2025", noInvoice:"2025056789123",  kodeBilling:"0",                depo:"DEPO LOKOMOTIF SEMARANG", badanUsaha:"PT KERETA API INDONESIA (PERSERO)",   jmlSarana:1 },
  { jenisPerm:"Permohonan Uji Berkala", jenisSarana:"Lokomotif",                             noSurat:"KA.605/00502/K4/DJKA/2025", noInvoice:"2025056790234",  kodeBilling:"0",                depo:"DEPO LOKOMOTIF SURABAYA", badanUsaha:"PT KERETA API INDONESIA (PERSERO)",   jmlSarana:1 },
  { jenisPerm:"Permohonan Uji Pertama", jenisSarana:"KRL",                                   noSurat:"KA.605/00701/K4/DJKA/2025", noInvoice:"2025078901234",  kodeBilling:"9885267924123400", depo:"DEPO KRL DEPOK",          badanUsaha:"PT KERETA COMMUTER INDONESIA",         jmlSarana:4 },
  { jenisPerm:"Permohonan Uji Pertama", jenisSarana:"KRD",                                   noSurat:"KA.605/00801/K4/DJKA/2025", noInvoice:"2025089012345",  kodeBilling:"0",                depo:"DEPO KRD BANDUNG",        badanUsaha:"PT KERETA API INDONESIA (PERSERO)",   jmlSarana:1 },
  { jenisPerm:"Permohonan Uji Berkala", jenisSarana:"Peralatan Khusus Tanpa Penggerak",      noSurat:"KA.605/00901/K4/DJKA/2025", noInvoice:"2025090123456",  kodeBilling:"0",                depo:"BTP SULSEL",              badanUsaha:"BALAI PENGELOLA KA SULAWESI SELATAN",  jmlSarana:1 },
  { jenisPerm:"Permohonan Uji Berkala", jenisSarana:"Gerbong",                               noSurat:"KA.605/01001/K4/DJKA/2025", noInvoice:"2025101234567",  kodeBilling:"0",                depo:"DEPO GERBONG JAKARTA",    badanUsaha:"PT KERETA API INDONESIA (PERSERO)",   jmlSarana:5 },
];

var SARANA_LIST = [
  [{ kode:"SK21501",  pemilik:"DITJEN PERKERETAAPIAN" }],
  [{ kode:"SK21502",  pemilik:"DITJEN PERKERETAAPIAN" }],
  [{ kode:"SK21503",  pemilik:"DITJEN PERKERETAAPIAN" }],
  [{ kode:"KRL-001",  pemilik:"PT KAI COMMUTER" }, { kode:"KRL-002", pemilik:"PT KAI COMMUTER" }],
  [{ kode:"KRL-003",  pemilik:"PT KAI COMMUTER" }],
  [{ kode:"KRL-004",  pemilik:"PT KAI COMMUTER" }],
  [{ kode:"KRL-005",  pemilik:"PT KAI COMMUTER" }],
  [{ kode:"B00701",   pemilik:"PT KERETA API INDONESIA" }, { kode:"B00702", pemilik:"PT KERETA API INDONESIA" }],
  [{ kode:"K1-97001", pemilik:"PT KERETA API INDONESIA" }, { kode:"K1-97002", pemilik:"PT KERETA API INDONESIA" }],
  [{ kode:"CC20101",  pemilik:"PT KERETA API INDONESIA" }],
  [{ kode:"CC20102",  pemilik:"PT KERETA API INDONESIA" }],
  [{ kode:"KRL-006",  pemilik:"PT KAI COMMUTER" }, { kode:"KRL-007", pemilik:"PT KAI COMMUTER" }, { kode:"KRL-008", pemilik:"PT KAI COMMUTER" }, { kode:"KRL-009", pemilik:"PT KAI COMMUTER" }],
  [{ kode:"KRD-001",  pemilik:"PT KERETA API INDONESIA" }],
  [{ kode:"SN01501",  pemilik:"DITJEN PERKERETAAPIAN" }],
  [{ kode:"G-001",    pemilik:"PT KERETA API INDONESIA" }, { kode:"G-002", pemilik:"PT KERETA API INDONESIA" }, { kode:"G-003", pemilik:"PT KERETA API INDONESIA" }, { kode:"G-004", pemilik:"PT KERETA API INDONESIA" }, { kode:"G-005", pemilik:"PT KERETA API INDONESIA" }],
];

/* ── Util ── */
function escH(s) {
  return String(s == null ? '' : s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function mkPageRange(cur, tot) {
  if (tot <= 7) { var a=[]; for(var i=1;i<=tot;i++) a.push(i); return a; }
  if (cur <= 4) return [1,2,3,4,5,'…',tot];
  if (cur >= tot-3) return [1,'…',tot-4,tot-3,tot-2,tot-1,tot];
  return [1,'…',cur-1,cur,cur+1,'…',tot];
}

function mkBtn(label, disabled, onClick) {
  var b = document.createElement('button');
  b.className = 'page-btn';
  b.textContent = label;
  b.disabled = disabled;
  if (!disabled) b.addEventListener('click', onClick);
  return b;
}

/* ════════════════════════════════════════════════
   TABEL UTAMA
════════════════════════════════════════════════ */
var tFiltered = PJ_ROWS.slice();
var tSortCol  = -1;
var tSortDir  = 'asc';
var tPage     = 1;
var tRpp      = 10;
var tCols     = ['jenisPerm','jenisSarana','noSurat','noInvoice','kodeBilling','depo','badanUsaha','jmlSarana'];

var tTbody    = document.getElementById('tblBody');
var tInfo     = document.getElementById('tblInfo');
var tPageBtns = document.getElementById('pageBtns');
var tSearch   = document.getElementById('tblSearch');
var tRowsSel  = document.getElementById('rowsPerPage');

function tRender() {
  var start = (tPage-1)*tRpp;
  var end   = Math.min(start+tRpp, tFiltered.length);
  var slice = tFiltered.slice(start, end);
  var html  = '';

  if (slice.length === 0) {
    html = '<tr><td colspan="10" class="tbl-empty">Tidak ada data.</td></tr>';
  } else {
    for (var i=0; i<slice.length; i++) {
      var r   = slice[i];
      var idx = PJ_ROWS.indexOf(r);
      html += '<tr>' +
        '<td class="td-no">'+(start+i+1)+'.</td>' +
        '<td style="font-size:13px;">'+escH(r.jenisPerm)+'</td>' +
        '<td style="font-size:13px;">'+escH(r.jenisSarana)+'</td>' +
        '<td class="td-surat">'+escH(r.noSurat)+'</td>' +
        '<td class="td-invoice">'+escH(r.noInvoice)+'</td>' +
        '<td class="td-billing">'+escH(r.kodeBilling)+'</td>' +
        '<td style="font-size:13px;white-space:nowrap;">'+escH(r.depo)+'</td>' +
        '<td style="font-size:13px;font-weight:500;min-width:160px;">'+escH(r.badanUsaha)+'</td>' +
        '<td class="td-jml">'+escH(r.jmlSarana)+'</td>' +
        '<td><div class="td-aksi-group">' +
          '<button class="btn-act btn-act-edit" data-row="'+idx+'" aria-label="Detail '+escH(r.noInvoice)+'">' +
            '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>' +
            'Detail' +
          '</button>' +
          '<button class="btn-act btn-act-sync" data-row="'+idx+'" aria-label="Daftar sarana '+escH(r.noInvoice)+'">' +
            '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>' +
            'Sarana' +
          '</button>' +
        '</div></td>' +
      '</tr>';
    }
  }

  tTbody.innerHTML = html;

  tInfo.textContent = tFiltered.length === 0
    ? 'Tidak ada data'
    : 'Menampilkan '+(start+1)+' sampai '+end+' dari '+tFiltered.length+' data';

  tPageBtns.innerHTML = '';
  var tot = Math.max(1, Math.ceil(tFiltered.length/tRpp));
  tPageBtns.appendChild(mkBtn('‹', tPage===1, function(){ tPage--; tRender(); }));
  var range = mkPageRange(tPage, tot);
  for (var j=0; j<range.length; j++) {
    var p = range[j];
    if (p==='…') {
      var sp=document.createElement('span'); sp.textContent='…';
      sp.style.cssText='padding:0 4px;color:var(--color-muted);line-height:34px;';
      tPageBtns.appendChild(sp);
    } else {
      (function(pg){
        var b=mkBtn(pg, false, function(){ tPage=pg; tRender(); });
        if(pg===tPage) b.classList.add('active');
        tPageBtns.appendChild(b);
      })(p);
    }
  }
  tPageBtns.appendChild(mkBtn('›', tPage===tot, function(){ tPage++; tRender(); }));
}

tSearch.addEventListener('input', function() {
  var q = tSearch.value.trim().toLowerCase();
  tFiltered = q ? PJ_ROWS.filter(function(r){ return Object.values(r).some(function(v){ return String(v).toLowerCase().indexOf(q)>=0; }); }) : PJ_ROWS.slice();
  tPage=1; tRender();
});

tRowsSel.addEventListener('change', function() { tRpp=parseInt(tRowsSel.value,10); tPage=1; tRender(); });

document.querySelectorAll('#pjTable thead th.sortable').forEach(function(th, i) {
  th.addEventListener('click', function() {
    tSortDir = tSortCol===i ? (tSortDir==='asc'?'desc':'asc') : 'asc';
    tSortCol = i;
    tFiltered.sort(function(a,b){
      var va=String(a[tCols[i]]||'').toLowerCase(), vb=String(b[tCols[i]]||'').toLowerCase();
      return tSortDir==='asc' ? va.localeCompare(vb,'id') : vb.localeCompare(va,'id');
    });
    document.querySelectorAll('#pjTable thead th.sortable').forEach(function(t,j){
      t.classList.remove('sort-asc','sort-desc');
      if(j===i) t.classList.add(tSortDir==='asc'?'sort-asc':'sort-desc');
    });
    tRender();
  });
});

document.getElementById('btnPdf').addEventListener('click', function(){ window.print(); });
document.getElementById('btnExcel').addEventListener('click', function(){
  var h=['No','Jenis Permohonan','Jenis Sarana','No. Surat Penugasan','No. Invoice','Kode Billing BLU','Depo','Nama Badan Usaha','Jml. Sarana'];
  var rows=tFiltered.map(function(r,i){ return [i+1,r.jenisPerm,r.jenisSarana,r.noSurat,r.noInvoice,r.kodeBilling,r.depo,r.badanUsaha,r.jmlSarana].map(function(v){ return '"'+String(v).replace(/"/g,'""')+'"'; }).join(','); });
  var blob=new Blob(['\uFEFF'+[h.join(',')].concat(rows).join('\n')],{type:'text/csv;charset=utf-8;'});
  var a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='penjadwalan-uji.csv'; a.click();
});

/* event delegation — klik tombol di tbody */
tTbody.addEventListener('click', function(e) {
  var vBtn = e.target.closest('.btn-act-sync');
  var dBtn = e.target.closest('.btn-act-edit');
  if (vBtn) { mOpen(parseInt(vBtn.getAttribute('data-row'), 10)); }
  if (dBtn) { window.location.href = 'penjadwalan-uji-detail.html?idx='+dBtn.getAttribute('data-row'); }
});

tRender();

/* ════════════════════════════════════════════════
   MODAL DAFTAR SARANA
════════════════════════════════════════════════ */
var mOverlay  = document.getElementById('saranOverlay');
var mBody     = document.getElementById('saranaModalBody');
var mInfo     = document.getElementById('saranaInfo');
var mPagEl    = document.getElementById('saranaPagination');
var mSearch   = document.getElementById('saranaSearch');
var mRowsSel  = document.getElementById('saranaRowsPerPage');

var mAll  = [];
var mFilt = [];
var mPage = 1;
var mRpp  = 10;

function mOpen(idx) {
  mAll  = SARANA_LIST[idx] || [];
  mFilt = mAll.slice();
  mPage = 1;
  mRpp  = parseInt(mRowsSel.value, 10);
  mSearch.value = '';
  mRender();
  mOverlay.classList.add('open');
}

function mClose() {
  mOverlay.classList.remove('open');
}

function mRender() {
  var start = (mPage-1)*mRpp;
  var end   = Math.min(start+mRpp, mFilt.length);
  var slice = mFilt.slice(start, end);
  var html  = '';

  if (slice.length === 0) {
    html = '<tr><td colspan="3" class="tbl-empty">Tidak ada data.</td></tr>';
  } else {
    for (var i=0; i<slice.length; i++) {
      var r = slice[i];
      html += '<tr>' +
        '<td class="td-no">'+(start+i+1)+'.</td>' +
        '<td style="font-family:var(--font-mono);font-size:13px;font-weight:600;color:var(--color-primary);">'+escH(r.kode)+'</td>' +
        '<td style="font-size:13px;font-weight:500;">'+escH(r.pemilik)+'</td>' +
      '</tr>';
    }
  }

  mBody.innerHTML = html;
  mInfo.textContent = mFilt.length===0 ? 'Tidak ada data' : 'Showing '+(start+1)+' to '+end+' of '+mFilt.length+' entries';

  mPagEl.innerHTML = '';
  var tot = Math.max(1, Math.ceil(mFilt.length/mRpp));
  mPagEl.appendChild(mkBtn('Previous', mPage===1, function(){ mPage--; mRender(); }));
  var range = mkPageRange(mPage, tot);
  for (var j=0; j<range.length; j++) {
    var p = range[j];
    if (p==='…') {
      var sp=document.createElement('span'); sp.textContent='…';
      sp.style.cssText='padding:0 4px;color:var(--color-muted);line-height:34px;';
      mPagEl.appendChild(sp);
    } else {
      (function(pg){
        var b=mkBtn(pg, false, function(){ mPage=pg; mRender(); });
        if(pg===mPage) b.classList.add('active');
        mPagEl.appendChild(b);
      })(p);
    }
  }
  mPagEl.appendChild(mkBtn('Next', mPage===tot, function(){ mPage++; mRender(); }));
}

mSearch.addEventListener('input', function() {
  var q = mSearch.value.trim().toLowerCase();
  mFilt = q ? mAll.filter(function(r){ return r.kode.toLowerCase().indexOf(q)>=0 || r.pemilik.toLowerCase().indexOf(q)>=0; }) : mAll.slice();
  mPage=1; mRender();
});

mRowsSel.addEventListener('change', function() { mRpp=parseInt(mRowsSel.value,10); mPage=1; mRender(); });

document.querySelectorAll('#saranaModalTable thead th.sortable').forEach(function(th, i) {
  th.addEventListener('click', function() {
    var key = i===0 ? 'kode' : 'pemilik';
    var dir = th.dataset.dir === 'asc' ? 'desc' : 'asc';
    th.dataset.dir = dir;
    mFilt.sort(function(a,b){ return dir==='asc' ? a[key].localeCompare(b[key],'id') : b[key].localeCompare(a[key],'id'); });
    document.querySelectorAll('#saranaModalTable thead th.sortable').forEach(function(t,j){
      t.classList.remove('sort-asc','sort-desc');
      if(j===i) t.classList.add(dir==='asc'?'sort-asc':'sort-desc');
    });
    mPage=1; mRender();
  });
});

document.getElementById('modalSaranaClose').addEventListener('click', mClose);
mOverlay.addEventListener('click', function(e){ if(e.target===mOverlay) mClose(); });
document.addEventListener('keydown', function(e){ if(e.key==='Escape') mClose(); });
