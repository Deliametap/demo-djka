/* perbaikan-uji.js */

var PU_ROWS = [];

var puFiltered = PU_ROWS.slice();
var puSortCol  = -1;
var puSortDir  = 'asc';
var puPage     = 1;
var puRpp      = 10;
var puCols     = ['idPerm','jenisPerm','jenisSarana','kodeSarana','depo','badanUsaha','tglPengujian','keteranganPerbaikan','namaPenguji','noSpt'];

var puTbody    = document.getElementById('puTbody');
var puInfo     = document.getElementById('puInfo');
var puPageBtns = document.getElementById('puPageBtns');
var puSearch   = document.getElementById('tblSearch');
var puRowsSel  = document.getElementById('rowsPerPage');

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

function puRender() {
  var start = (puPage-1)*puRpp;
  var end   = Math.min(start+puRpp, puFiltered.length);
  var slice = puFiltered.slice(start, end);
  var html  = '';

  if (slice.length === 0) {
    html = '<tr><td colspan="12" class="tbl-empty">No data available in table</td></tr>';
  } else {
    for (var i=0; i<slice.length; i++) {
      var r = slice[i];
      html += '<tr>' +
        '<td class="td-no">'+(start+i+1)+'.</td>' +
        '<td class="td-id-perm">'+escH(r.idPerm)+'</td>' +
        '<td style="font-size:13px;">'+escH(r.jenisPerm)+'</td>' +
        '<td style="font-size:13px;">'+escH(r.jenisSarana)+'</td>' +
        '<td class="td-kode-sarana">'+escH(r.kodeSarana)+'</td>' +
        '<td style="font-size:13px;white-space:nowrap;">'+escH(r.depo)+'</td>' +
        '<td style="font-size:13px;font-weight:500;min-width:140px;">'+escH(r.badanUsaha)+'</td>' +
        '<td class="td-spt">'+escH(r.tglPengujian)+'</td>' +
        '<td style="font-size:13px;max-width:180px;">'+escH(r.keteranganPerbaikan)+'</td>' +
        '<td style="font-size:13px;">'+escH(r.namaPenguji)+'</td>' +
        '<td class="td-spt">'+escH(r.noSpt)+'</td>' +
        '<td><div class="td-atur-group">' +
          '<button class="btn-act-atur" aria-label="Option '+escH(r.idPerm)+'">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>' +
          '</button>' +
        '</div></td>' +
      '</tr>';
    }
  }

  puTbody.innerHTML = html;

  puInfo.textContent = puFiltered.length === 0
    ? 'Showing 0 to 0 of 0 entries'
    : 'Showing '+(start+1)+' to '+end+' of '+puFiltered.length+' entries';

  puPageBtns.innerHTML = '';
  var tot = Math.max(1, Math.ceil(puFiltered.length/puRpp));
  puPageBtns.appendChild(mkBtn('Previous', puPage===1 || puFiltered.length===0, function(){ puPage--; puRender(); }));
  if (puFiltered.length > 0) {
    var range = mkPageRange(puPage, tot);
    for (var j=0; j<range.length; j++) {
      var p = range[j];
      if (p==='…') {
        var sp=document.createElement('span'); sp.textContent='…';
        sp.style.cssText='padding:0 4px;color:var(--color-muted);line-height:34px;';
        puPageBtns.appendChild(sp);
      } else {
        (function(pg){
          var b=mkBtn(pg,false,function(){ puPage=pg; puRender(); });
          if(pg===puPage) b.classList.add('active');
          puPageBtns.appendChild(b);
        })(p);
      }
    }
  }
  puPageBtns.appendChild(mkBtn('Next', puPage===tot || puFiltered.length===0, function(){ puPage++; puRender(); }));
}

/* Filter Cari */
document.getElementById('btnCari').addEventListener('click', function() {
  var bu  = document.getElementById('filterBadanUsaha').value.trim().toLowerCase();
  var jp  = document.getElementById('filterJenisPerm').value.trim().toLowerCase();
  var js  = document.getElementById('filterJenisSarana').value.trim().toLowerCase();
  var spt = document.getElementById('filterNoSpt').value.trim().toLowerCase();

  puFiltered = PU_ROWS.filter(function(r) {
    return (!bu  || String(r.badanUsaha).toLowerCase().indexOf(bu)>=0) &&
           (!jp  || String(r.jenisPerm).toLowerCase().indexOf(jp)>=0) &&
           (!js  || String(r.jenisSarana).toLowerCase().indexOf(js)>=0) &&
           (!spt || String(r.noSpt).toLowerCase().indexOf(spt)>=0);
  });
  puPage=1; puRender();
});

/* Search */
puSearch.addEventListener('input', function() {
  var q = puSearch.value.trim().toLowerCase();
  puFiltered = q ? PU_ROWS.filter(function(r){ return Object.values(r).some(function(v){ return String(v).toLowerCase().indexOf(q)>=0; }); }) : PU_ROWS.slice();
  puPage=1; puRender();
});

/* Rows per page */
puRowsSel.addEventListener('change', function() { puRpp=parseInt(puRowsSel.value,10); puPage=1; puRender(); });

/* Sort */
document.querySelectorAll('#puTable thead th.sortable').forEach(function(th, i) {
  th.addEventListener('click', function() {
    puSortDir = puSortCol===i ? (puSortDir==='asc'?'desc':'asc') : 'asc';
    puSortCol = i;
    puFiltered.sort(function(a,b){
      var va=String(a[puCols[i]]||'').toLowerCase(), vb=String(b[puCols[i]]||'').toLowerCase();
      return puSortDir==='asc' ? va.localeCompare(vb,'id') : vb.localeCompare(va,'id');
    });
    document.querySelectorAll('#puTable thead th.sortable').forEach(function(t,j){
      t.classList.remove('sort-asc','sort-desc');
      if(j===i) t.classList.add(puSortDir==='asc'?'sort-asc':'sort-desc');
    });
    puRender();
  });
});

/* Export */
document.getElementById('btnPdf').addEventListener('click', function(){ window.print(); });
document.getElementById('btnExcel').addEventListener('click', function(){
  var h=['No','ID Permohonan','Jenis Permohonan','Jenis Sarana','Kode Sarana','Depo','Badan Usaha','Tgl. Pengujian','Keterangan Perbaikan','Nama Penguji','No. SPT'];
  var rows=puFiltered.map(function(r,i){ return [i+1,r.idPerm,r.jenisPerm,r.jenisSarana,r.kodeSarana,r.depo,r.badanUsaha,r.tglPengujian,r.keteranganPerbaikan,r.namaPenguji,r.noSpt].map(function(v){ return '"'+String(v==null?'':v).replace(/"/g,'""')+'"'; }).join(','); });
  var blob=new Blob(['\uFEFF'+[h.join(',')].concat(rows).join('\n')],{type:'text/csv;charset=utf-8;'});
  var a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='perbaikan-uji.csv'; a.click();
});

puRender();
