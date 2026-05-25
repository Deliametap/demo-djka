/* laporan-permohonan-uji.js */

var LPU_DATA = [
  { id:"260506790", jenisSarana:"KRL", tglVerif:"12-05-2026", jenisPerm:"Permohonan Uji Berkala", depo:"DEPO KRL DEPOK",        badanUsaha:"PT KERETA COMMUTER INDONESIA", kodeSarana:"K112558", status:"BILLING", statusUji:"BELUM DIUJI" },
  { id:"260506789", jenisSarana:"KRL", tglVerif:"12-05-2026", jenisPerm:"Permohonan Uji Berkala", depo:"DEPO KRL MANGGARAI JKT", badanUsaha:"PT KERETA COMMUTER INDONESIA", kodeSarana:"K111760", status:"BILLING", statusUji:"BELUM DIUJI" },
  { id:"260506788", jenisSarana:"KRL", tglVerif:"12-05-2026", jenisPerm:"Permohonan Uji Berkala", depo:"DEPO KRL MANGGARAI JKT", badanUsaha:"PT KERETA COMMUTER INDONESIA", kodeSarana:"K111759", status:"BILLING", statusUji:"BELUM DIUJI" },
  { id:"260506787", jenisSarana:"KRL", tglVerif:"12-05-2026", jenisPerm:"Permohonan Uji Berkala", depo:"DEPO KRL MANGGARAI JKT", badanUsaha:"PT KERETA COMMUTER INDONESIA", kodeSarana:"K111758", status:"BILLING", statusUji:"BELUM DIUJI" },
  { id:"260506786", jenisSarana:"KRL", tglVerif:"12-05-2026", jenisPerm:"Permohonan Uji Berkala", depo:"DEPO KRL MANGGARAI JKT", badanUsaha:"PT KERETA COMMUTER INDONESIA", kodeSarana:"K111757", status:"BILLING", statusUji:"BELUM DIUJI" },
  { id:"260506785", jenisSarana:"KRL", tglVerif:"11-05-2026", jenisPerm:"Permohonan Uji Berkala", depo:"DEPO KRL BOGOR",         badanUsaha:"PT KERETA COMMUTER INDONESIA", kodeSarana:"K111756", status:"BILLING", statusUji:"BELUM DIUJI" },
  { id:"260506784", jenisSarana:"KRL", tglVerif:"11-05-2026", jenisPerm:"Permohonan Uji Berkala", depo:"DEPO KRL BOGOR",         badanUsaha:"PT KERETA COMMUTER INDONESIA", kodeSarana:"K111755", status:"BILLING", statusUji:"BELUM DIUJI" },
  { id:"260506783", jenisSarana:"Kereta", tglVerif:"10-05-2026", jenisPerm:"Permohonan Uji Berkala", depo:"DEPO KERETA JAKARTA", badanUsaha:"PT KERETA API INDONESIA (PERSERO)", kodeSarana:"B00701", status:"BILLING", statusUji:"LULUS" },
  { id:"260506782", jenisSarana:"Kereta", tglVerif:"10-05-2026", jenisPerm:"Permohonan Uji Berkala", depo:"DEPO KERETA JAKARTA", badanUsaha:"PT KERETA API INDONESIA (PERSERO)", kodeSarana:"B00702", status:"BILLING", statusUji:"LULUS" },
  { id:"260506781", jenisSarana:"Lokomotif", tglVerif:"09-05-2026", jenisPerm:"Permohonan Uji Berkala", depo:"DEPO LOKOMOTIF SEMARANG", badanUsaha:"PT KERETA API INDONESIA (PERSERO)", kodeSarana:"CC20101", status:"BILLING", statusUji:"LULUS" },
  { id:"260506780", jenisSarana:"Peralatan Khusus Berpenggerak Sendiri", tglVerif:"08-05-2026", jenisPerm:"Permohonan Uji Berkala", depo:"BTP JABAR", badanUsaha:"BALAI PERAWATAN PERKERETAAPIAN", kodeSarana:"SK21501", status:"BILLING", statusUji:"BELUM DIUJI" },
  { id:"260506779", jenisSarana:"Peralatan Khusus Berpenggerak Sendiri", tglVerif:"08-05-2026", jenisPerm:"Permohonan Uji Berkala", depo:"BTP JATENG", badanUsaha:"BALAI PERAWATAN PERKERETAAPIAN", kodeSarana:"SK21502", status:"BILLING", statusUji:"BELUM DIUJI" },
  { id:"260506778", jenisSarana:"KRD", tglVerif:"07-05-2026", jenisPerm:"Permohonan Uji Pertama", depo:"DEPO KRD BANDUNG", badanUsaha:"PT KERETA API INDONESIA (PERSERO)", kodeSarana:"KRD-001", status:"BILLING", statusUji:"BELUM DIUJI" },
  { id:"260506777", jenisSarana:"Peralatan Khusus Tanpa Penggerak", tglVerif:"06-05-2026", jenisPerm:"Permohonan Uji Berkala", depo:"BTP SULSEL", badanUsaha:"BALAI PENGELOLA KA SULAWESI SELATAN", kodeSarana:"SN01501", status:"BILLING", statusUji:"LULUS" },
  { id:"260506776", jenisSarana:"Gerbong", tglVerif:"05-05-2026", jenisPerm:"Permohonan Uji Berkala", depo:"DEPO GERBONG JAKARTA", badanUsaha:"PT KERETA API INDONESIA (PERSERO)", kodeSarana:"G-001", status:"BILLING", statusUji:"TIDAK LULUS" },
];

var lpuFiltered = LPU_DATA.slice();
var lpuSortCol  = -1;
var lpuSortDir  = 'asc';
var lpuPage     = 1;
var lpuRpp      = 10;
var lpuCols     = ['id','jenisSarana','tglVerif','jenisPerm','depo','badanUsaha','kodeSarana'];

var lpuTbody    = document.getElementById('lpuTbody');
var lpuInfo     = document.getElementById('lpuInfo');
var lpuPageBtns = document.getElementById('lpuPageBtns');
var lpuSearch   = document.getElementById('tblSearch');
var lpuRowsSel  = document.getElementById('rowsPerPage');

function escH(s) {
  return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function badgeStatus(s) {
  return '<span class="badge-billing">'+escH(s)+'</span>';
}

function badgeStatusUji(s) {
  if(s==='LULUS')        return '<span class="badge-lulus">'+escH(s)+'</span>';
  if(s==='TIDAK LULUS')  return '<span class="badge-tidak-lulus">'+escH(s)+'</span>';
  return '<span class="badge-belum-diuji">'+escH(s)+'</span>';
}

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

function lpuRender() {
  var start=(lpuPage-1)*lpuRpp;
  var end=Math.min(start+lpuRpp,lpuFiltered.length);
  var slice=lpuFiltered.slice(start,end);
  var html='';

  if(slice.length===0){
    html='<tr><td colspan="11" class="tbl-empty">Tidak ada data permohonan.</td></tr>';
  } else {
    for(var i=0;i<slice.length;i++){
      var r=slice[i];
      html+='<tr>'+
        '<td class="td-no">'+(start+i+1)+'.</td>'+
        '<td class="td-id-lpu">'+escH(r.id)+'</td>'+
        '<td style="font-size:13px;white-space:nowrap;">'+escH(r.jenisSarana)+'</td>'+
        '<td class="td-tgl-lpu">'+escH(r.tglVerif)+'</td>'+
        '<td style="font-size:13px;">'+escH(r.jenisPerm)+'</td>'+
        '<td style="font-size:13px;white-space:nowrap;">'+escH(r.depo)+'</td>'+
        '<td style="font-size:13px;font-weight:500;min-width:140px;">'+escH(r.badanUsaha)+'</td>'+
        '<td class="td-kode-lpu">'+escH(r.kodeSarana)+'</td>'+
        '<td class="td-status-col">'+badgeStatus(r.status)+'</td>'+
        '<td class="td-status-col">'+badgeStatusUji(r.statusUji)+'</td>'+
        '<td style="text-align:center;">'+
          '<button class="btn-detail-lpu" data-id="'+escH(r.id)+'" aria-label="Detail '+escH(r.id)+'">'+
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> Detail'+
          '</button>'+
        '</td>'+
      '</tr>';
    }
  }

  lpuTbody.innerHTML=html;
  lpuInfo.textContent=lpuFiltered.length===0
    ?'Showing 0 to 0 of 0 entries'
    :'Showing '+(start+1)+' to '+end+' of '+lpuFiltered.length+' entries';

  lpuPageBtns.innerHTML='';
  var tot=Math.max(1,Math.ceil(lpuFiltered.length/lpuRpp));
  lpuPageBtns.appendChild(mkBtn('Previous',lpuPage===1||lpuFiltered.length===0,function(){lpuPage--;lpuRender();}));
  if(lpuFiltered.length>0){
    var range=mkPageRange(lpuPage,tot);
    for(var j=0;j<range.length;j++){
      var p=range[j];
      if(p==='…'){var sp=document.createElement('span');sp.textContent='…';sp.style.cssText='padding:0 4px;color:var(--color-muted);line-height:34px;';lpuPageBtns.appendChild(sp);}
      else{(function(pg){var b=mkBtn(pg,false,function(){lpuPage=pg;lpuRender();});if(pg===lpuPage)b.classList.add('active');lpuPageBtns.appendChild(b);})(p);}
    }
  }
  lpuPageBtns.appendChild(mkBtn('Next',lpuPage===tot||lpuFiltered.length===0,function(){lpuPage++;lpuRender();}));
}

/* Filter */
document.getElementById('btnCari').addEventListener('click',function(){
  var bu  = document.getElementById('filterBadanUsaha').value;
  var jp  = document.getElementById('filterJenisPerm').value;
  var js  = document.getElementById('filterJenisSarana').value;
  var dep = document.getElementById('filterDepo').value;
  lpuFiltered=LPU_DATA.filter(function(r){
    return(!bu||r.badanUsaha===bu)&&(!jp||r.jenisPerm===jp)&&(!js||r.jenisSarana===js)&&(!dep||r.depo===dep);
  });
  lpuPage=1;lpuRender();
});

/* Search */
lpuSearch.addEventListener('input',function(){
  var q=lpuSearch.value.trim().toLowerCase();
  lpuFiltered=q?LPU_DATA.filter(function(r){return Object.values(r).some(function(v){return String(v).toLowerCase().indexOf(q)>=0;});}):LPU_DATA.slice();
  lpuPage=1;lpuRender();
});

/* Rows per page */
lpuRowsSel.addEventListener('change',function(){lpuRpp=parseInt(lpuRowsSel.value,10);lpuPage=1;lpuRender();});

/* Sort */
document.querySelectorAll('#lpuTable thead th.sortable').forEach(function(th,i){
  th.addEventListener('click',function(){
    lpuSortDir=lpuSortCol===i?(lpuSortDir==='asc'?'desc':'asc'):'asc';
    lpuSortCol=i;
    lpuFiltered.sort(function(a,b){
      var va=String(a[lpuCols[i]]||'').toLowerCase(),vb=String(b[lpuCols[i]]||'').toLowerCase();
      return lpuSortDir==='asc'?va.localeCompare(vb,'id'):vb.localeCompare(va,'id');
    });
    document.querySelectorAll('#lpuTable thead th.sortable').forEach(function(t,j){
      t.classList.remove('sort-asc','sort-desc');
      if(j===i)t.classList.add(lpuSortDir==='asc'?'sort-asc':'sort-desc');
    });
    lpuRender();
  });
});

/* Export */
document.getElementById('btnPdf').addEventListener('click',function(){window.print();});
document.getElementById('btnExcel').addEventListener('click',function(){
  var h=['No','ID Permohonan','Jenis Sarana','Tgl. Verifikasi','Jenis Permohonan','Depo','Badan Usaha','Kode Sarana','Status','Status Uji'];
  var rows=lpuFiltered.map(function(r,i){return[i+1,r.id,r.jenisSarana,r.tglVerif,r.jenisPerm,r.depo,r.badanUsaha,r.kodeSarana,r.status,r.statusUji].map(function(v){return'"'+String(v).replace(/"/g,'""')+'"';}).join(',');});
  var blob=new Blob(['\uFEFF'+[h.join(',')].concat(rows).join('\n')],{type:'text/csv;charset=utf-8;'});
  var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='laporan-permohonan-uji.csv';a.click();
});

/* Event delegation — tombol detail */
lpuTbody.addEventListener('click',function(e){
  var btn=e.target.closest('.btn-detail-lpu');
  if(btn){ window.location.href='laporan-permohonan-uji-detail.html?id='+btn.getAttribute('data-id'); }
});

lpuRender();
