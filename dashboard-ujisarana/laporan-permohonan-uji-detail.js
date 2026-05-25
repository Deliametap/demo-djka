/* laporan-permohonan-uji-detail.js */

var DETAIL_DATA = {
  "260506790": {
    idPerm:"260506790", badanUsaha:"PT KERETA COMMUTER INDONESIA",
    noPerm:"008/CT.300/CU/KCI/V/2026", tglPerm:"08-05-2026",
    jenisPerm:"Permohonan Uji Berkala", jenisSarana:"KRL",
    depo:"DEPO KRL DEPOK", tglVerif:"12-05-2026", kodeSarana:"K112558",
    jadwal:{ tglJadwal:"—", tglAkhir:"—", filePenugasan:"—", keterangan:"—" },
    hasil:{ noBA:"—", tglBA:"—", tglUji:"—", statusUji:"BELUM DIUJI", fileBA:"—", fileCS:"—", fileSP:"—", keterangan:"—" },
    history:[
      { level:"Staff Verifikasi", tglProses:"12 Mei 2026", keterangan:"Mengambil permohonan dari aplikasi SISAKA", pengguna:"SANDY SABILILLAH, A.Md.T." },
      { level:"Staff Verifikasi", tglProses:"12 Mei 2026", keterangan:"Melakukan pembuatan/generate data pembayaran uji balai sarana dengan no. invoice: 2026054635192", pengguna:"SANDY SABILILLAH, A.Md.T." },
    ]
  },
  "260506789": {
    idPerm:"260506789", badanUsaha:"PT KERETA COMMUTER INDONESIA",
    noPerm:"007/CT.300/CU/KCI/V/2026", tglPerm:"08-05-2026",
    jenisPerm:"Permohonan Uji Berkala", jenisSarana:"KRL",
    depo:"DEPO KRL MANGGARAI JKT", tglVerif:"12-05-2026", kodeSarana:"K111760",
    jadwal:{ tglJadwal:"—", tglAkhir:"—", filePenugasan:"—", keterangan:"—" },
    hasil:{ noBA:"—", tglBA:"—", tglUji:"—", statusUji:"BELUM DIUJI", fileBA:"—", fileCS:"—", fileSP:"—", keterangan:"—" },
    history:[
      { level:"Staff Verifikasi", tglProses:"12 Mei 2026", keterangan:"Mengambil permohonan dari aplikasi SISAKA", pengguna:"SANDY SABILILLAH, A.Md.T." },
    ]
  },
};

/* Baca ID dari URL param */
function getParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

var id   = getParam('id') || '260506790';
var data = DETAIL_DATA[id] || DETAIL_DATA['260506790'];

function esc(s) {
  return String(s==null?'—':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* Isi section Detail */
document.getElementById('dIdPerm').textContent     = data.idPerm;
document.getElementById('dBadanUsaha').textContent = data.badanUsaha;
document.getElementById('dNoPerm').textContent     = data.noPerm;
document.getElementById('dTglPerm').textContent    = data.tglPerm;
document.getElementById('dJenisPerm').textContent  = data.jenisPerm;
document.getElementById('dJenisSarana').textContent= data.jenisSarana;
document.getElementById('dDepo').textContent       = data.depo;
document.getElementById('dTglVerif').textContent   = data.tglVerif;
document.getElementById('dKodeSarana').textContent = data.kodeSarana;

/* Isi section Penjadwalan */
document.getElementById('dTglJadwal').textContent    = data.jadwal.tglJadwal;
document.getElementById('dTglAkhir').textContent     = data.jadwal.tglAkhir;
document.getElementById('dFilePenugasan').textContent= data.jadwal.filePenugasan;
document.getElementById('dKetJadwal').textContent    = data.jadwal.keterangan;

/* Isi section Hasil Pengujian */
document.getElementById('dNoBA').textContent   = data.hasil.noBA;
document.getElementById('dTglBA').textContent  = data.hasil.tglBA;
document.getElementById('dTglUji').textContent = data.hasil.tglUji;
document.getElementById('dFileBA').textContent = data.hasil.fileBA;
document.getElementById('dFileCS').textContent = data.hasil.fileCS;
document.getElementById('dFileSP').textContent = data.hasil.fileSP;
document.getElementById('dKetHasil').textContent = data.hasil.keterangan;

/* Badge status uji */
var statusEl = document.getElementById('dStatusUji');
var s = data.hasil.statusUji;
if (s === 'LULUS')        statusEl.innerHTML = '<span class="dpd-badge-lulus">'+esc(s)+'</span>';
else if (s === 'TIDAK LULUS') statusEl.innerHTML = '<span class="dpd-badge-tidak">'+esc(s)+'</span>';
else if (s === 'BELUM DIUJI') statusEl.innerHTML = '<span class="dpd-badge-belum">'+esc(s)+'</span>';
else statusEl.textContent = s;

/* ── Tabel History ── */
var histAll      = data.history.slice();
var histFiltered = histAll.slice();
var histSortCol  = -1;
var histSortDir  = 'asc';
var histPage     = 1;
var histRpp      = 10;
var histCols     = ['level','tglProses','keterangan','pengguna'];

var histTbody    = document.getElementById('histTbody');
var histInfo     = document.getElementById('histInfo');
var histPageBtns = document.getElementById('histPageBtns');
var histSearch   = document.getElementById('histSearch');
var histRowsSel  = document.getElementById('histRowsPerPage');

function mkPageRange(cur,tot) {
  if(tot<=7){var a=[];for(var i=1;i<=tot;i++)a.push(i);return a;}
  if(cur<=4)return[1,2,3,4,5,'…',tot];
  if(cur>=tot-3)return[1,'…',tot-4,tot-3,tot-2,tot-1,tot];
  return[1,'…',cur-1,cur,cur+1,'…',tot];
}

function mkBtn(label,disabled,onClick){
  var b=document.createElement('button');
  b.className='page-btn'; b.textContent=label; b.disabled=disabled;
  if(!disabled)b.addEventListener('click',onClick);
  return b;
}

function histRender() {
  var start=(histPage-1)*histRpp;
  var end=Math.min(start+histRpp,histFiltered.length);
  var slice=histFiltered.slice(start,end);
  var html='';

  if(slice.length===0){
    html='<tr><td colspan="5" class="tbl-empty">Tidak ada history.</td></tr>';
  } else {
    for(var i=0;i<slice.length;i++){
      var r=slice[i];
      html+='<tr>'+
        '<td class="td-no">'+(start+i+1)+'.</td>'+
        '<td style="font-size:13px;font-weight:500;white-space:nowrap;">'+esc(r.level)+'</td>'+
        '<td style="font-family:var(--font-mono);font-size:12px;white-space:nowrap;color:var(--color-text-secondary);">'+esc(r.tglProses)+'</td>'+
        '<td style="font-size:13px;min-width:300px;">'+esc(r.keterangan)+'</td>'+
        '<td style="font-size:13px;font-weight:500;white-space:nowrap;">'+esc(r.pengguna)+'</td>'+
      '</tr>';
    }
  }

  histTbody.innerHTML=html;
  histInfo.textContent=histFiltered.length===0
    ?'Showing 0 to 0 of 0 entries'
    :'Showing '+(start+1)+' to '+end+' of '+histFiltered.length+' entries';

  histPageBtns.innerHTML='';
  var tot=Math.max(1,Math.ceil(histFiltered.length/histRpp));
  histPageBtns.appendChild(mkBtn('Previous',histPage===1||histFiltered.length===0,function(){histPage--;histRender();}));
  if(histFiltered.length>0){
    var range=mkPageRange(histPage,tot);
    for(var j=0;j<range.length;j++){
      var p=range[j];
      if(p==='…'){var sp=document.createElement('span');sp.textContent='…';sp.style.cssText='padding:0 4px;color:var(--color-muted);line-height:34px;';histPageBtns.appendChild(sp);}
      else{(function(pg){var b=mkBtn(pg,false,function(){histPage=pg;histRender();});if(pg===histPage)b.classList.add('active');histPageBtns.appendChild(b);})(p);}
    }
  }
  histPageBtns.appendChild(mkBtn('Next',histPage===tot||histFiltered.length===0,function(){histPage++;histRender();}));
}

histSearch.addEventListener('input',function(){
  var q=histSearch.value.trim().toLowerCase();
  histFiltered=q?histAll.filter(function(r){return Object.values(r).some(function(v){return String(v).toLowerCase().indexOf(q)>=0;});}):histAll.slice();
  histPage=1;histRender();
});

histRowsSel.addEventListener('change',function(){histRpp=parseInt(histRowsSel.value,10);histPage=1;histRender();});

document.querySelectorAll('#histTable thead th.sortable').forEach(function(th,i){
  th.addEventListener('click',function(){
    histSortDir=histSortCol===i?(histSortDir==='asc'?'desc':'asc'):'asc';
    histSortCol=i;
    histFiltered.sort(function(a,b){
      var va=String(a[histCols[i]]||'').toLowerCase(),vb=String(b[histCols[i]]||'').toLowerCase();
      return histSortDir==='asc'?va.localeCompare(vb,'id'):vb.localeCompare(va,'id');
    });
    document.querySelectorAll('#histTable thead th.sortable').forEach(function(t,j){
      t.classList.remove('sort-asc','sort-desc');
      if(j===i)t.classList.add(histSortDir==='asc'?'sort-asc':'sort-desc');
    });
    histRender();
  });
});

histRender();
