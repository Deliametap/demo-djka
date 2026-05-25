/* laporan-payment-blu.js */

var BLU_DATA = [
  { jenisPerm:"Permohonan Uji Berkala", jenisSarana:"Lokomotif", noInvoice:"2026057592168", kodeBilling:"9885267924124269", wajibBayar:"PT KERETA API INDONESIA (PERSERO)", totalBilling:22400000,  tglBayar:"12-05-2026", jmlSarana:4  },
  { jenisPerm:"Permohonan Uji Berkala", jenisSarana:"Kereta",    noInvoice:"2026050418759", kodeBilling:"9885267924124268", wajibBayar:"PT KERETA API INDONESIA (PERSERO)", totalBilling:7600000,   tglBayar:"12-05-2026", jmlSarana:2  },
  { jenisPerm:"Permohonan Uji Berkala", jenisSarana:"Kereta",    noInvoice:"2026053697450", kodeBilling:"9885267924124267", wajibBayar:"PT KERETA API INDONESIA (PERSERO)", totalBilling:3800000,   tglBayar:"12-05-2026", jmlSarana:1  },
  { jenisPerm:"Permohonan Uji Berkala", jenisSarana:"Kereta",    noInvoice:"2026052649357", kodeBilling:"9885267924124266", wajibBayar:"PT KERETA API INDONESIA (PERSERO)", totalBilling:22800000,  tglBayar:"12-05-2026", jmlSarana:6  },
  { jenisPerm:"Permohonan Uji Berkala", jenisSarana:"Gerbong",   noInvoice:"2026057063154", kodeBilling:"9885267924124265", wajibBayar:"PT KERETA API INDONESIA (PERSERO)", totalBilling:61750000,  tglBayar:"12-05-2026", jmlSarana:19 },
  { jenisPerm:"Permohonan Uji Berkala", jenisSarana:"Gerbong",   noInvoice:"2026055987321", kodeBilling:"9885267924124264", wajibBayar:"PT KERETA API INDONESIA (PERSERO)", totalBilling:65000000,  tglBayar:"12-05-2026", jmlSarana:20 },
  { jenisPerm:"Permohonan Uji Berkala", jenisSarana:"Gerbong",   noInvoice:"2026056584170", kodeBilling:"9885267924124263", wajibBayar:"PT KERETA API INDONESIA (PERSERO)", totalBilling:65000000,  tglBayar:"12-05-2026", jmlSarana:20 },
  { jenisPerm:"Permohonan Uji Berkala", jenisSarana:"Gerbong",   noInvoice:"2026050321475", kodeBilling:"9885267924124262", wajibBayar:"PT KERETA API INDONESIA (PERSERO)", totalBilling:65000000,  tglBayar:"12-05-2026", jmlSarana:20 },
  { jenisPerm:"Permohonan Uji Berkala", jenisSarana:"Gerbong",   noInvoice:"2026056321985", kodeBilling:"9885267924124261", wajibBayar:"PT KERETA API INDONESIA (PERSERO)", totalBilling:65000000,  tglBayar:"12-05-2026", jmlSarana:20 },
  { jenisPerm:"Permohonan Uji Berkala", jenisSarana:"Gerbong",   noInvoice:"2026056478930", kodeBilling:"9885267924124260", wajibBayar:"PT KERETA API INDONESIA (PERSERO)", totalBilling:65000000,  tglBayar:"12-05-2026", jmlSarana:20 },
  { jenisPerm:"Permohonan Uji Berkala", jenisSarana:"KRL",       noInvoice:"2026054635192", kodeBilling:"9885267924124259", wajibBayar:"PT KERETA COMMUTER INDONESIA",       totalBilling:2500000,   tglBayar:"11-05-2026", jmlSarana:1  },
  { jenisPerm:"Permohonan Uji Berkala", jenisSarana:"KRL",       noInvoice:"2026054635193", kodeBilling:"9885267924124258", wajibBayar:"PT KERETA COMMUTER INDONESIA",       totalBilling:2500000,   tglBayar:"11-05-2026", jmlSarana:1  },
  { jenisPerm:"Permohonan Uji Berkala", jenisSarana:"KRL",       noInvoice:"2026054635194", kodeBilling:"9885267924124257", wajibBayar:"PT KERETA COMMUTER INDONESIA",       totalBilling:2500000,   tglBayar:"11-05-2026", jmlSarana:1  },
  { jenisPerm:"Permohonan Uji Berkala", jenisSarana:"Lokomotif", noInvoice:"2026051234567", kodeBilling:"9885267924124256", wajibBayar:"PT KERETA API INDONESIA (PERSERO)", totalBilling:5600000,   tglBayar:"10-05-2026", jmlSarana:1  },
  { jenisPerm:"Permohonan Uji Berkala", jenisSarana:"Lokomotif", noInvoice:"2026051234568", kodeBilling:"9885267924124255", wajibBayar:"PT KERETA API INDONESIA (PERSERO)", totalBilling:5600000,   tglBayar:"10-05-2026", jmlSarana:1  },
  { jenisPerm:"Permohonan Uji Berkala", jenisSarana:"Kereta",    noInvoice:"2026049876543", kodeBilling:"9885267924124254", wajibBayar:"PT KERETA API INDONESIA (PERSERO)", totalBilling:3800000,   tglBayar:"09-05-2026", jmlSarana:1  },
  { jenisPerm:"Permohonan Uji Berkala", jenisSarana:"Gerbong",   noInvoice:"2026048765432", kodeBilling:"9885267924124253", wajibBayar:"PT KERETA API INDONESIA (PERSERO)", totalBilling:65000000,  tglBayar:"08-05-2026", jmlSarana:20 },
  { jenisPerm:"Permohonan Uji Pertama", jenisSarana:"KRL",       noInvoice:"2026047654321", kodeBilling:"9885267924124252", wajibBayar:"PT KERETA COMMUTER INDONESIA",       totalBilling:10000000,  tglBayar:"07-05-2026", jmlSarana:4  },
  { jenisPerm:"Permohonan Uji Berkala", jenisSarana:"KRD",       noInvoice:"2026046543210", kodeBilling:"9885267924124251", wajibBayar:"PT KERETA API INDONESIA (PERSERO)", totalBilling:4200000,   tglBayar:"06-05-2026", jmlSarana:1  },
  { jenisPerm:"Permohonan Uji Berkala", jenisSarana:"Gerbong",   noInvoice:"2026045432109", kodeBilling:"9885267924124250", wajibBayar:"PT KERETA API INDONESIA (PERSERO)", totalBilling:65000000,  tglBayar:"05-05-2026", jmlSarana:20 },
];

/* ── Util ── */
function escH(s) {
  return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function formatRupiah(n) {
  return n.toLocaleString('id-ID');
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

/* ── State ── */
var bluFiltered = BLU_DATA.slice();
var bluSortCol  = -1;
var bluSortDir  = 'asc';
var bluPage     = 1;
var bluRpp      = 10;
var bluCols     = ['jenisPerm','jenisSarana','noInvoice','kodeBilling','wajibBayar','totalBilling','tglBayar','jmlSarana'];

var bluTbody    = document.getElementById('bluTbody');
var bluInfo     = document.getElementById('bluInfo');
var bluPageBtns = document.getElementById('bluPageBtns');
var bluSearch   = document.getElementById('tblSearch');
var bluRowsSel  = document.getElementById('rowsPerPage');
var bluTotalVal = document.getElementById('bluTotalVal');

/* ── Hitung total ── */
function updateTotal() {
  var total = bluFiltered.reduce(function(sum,r){ return sum + r.totalBilling; }, 0);
  bluTotalVal.textContent = 'Rp. ' + formatRupiah(total);
}

/* ── Render ── */
function bluRender() {
  var start=(bluPage-1)*bluRpp;
  var end=Math.min(start+bluRpp,bluFiltered.length);
  var slice=bluFiltered.slice(start,end);
  var html='';

  if(slice.length===0){
    html='<tr><td colspan="10" class="tbl-empty">Tidak ada data payment BLU.</td></tr>';
  } else {
    for(var i=0;i<slice.length;i++){
      var r=slice[i];
      html+='<tr>'+
        '<td class="td-no">'+(start+i+1)+'.</td>'+
        '<td style="font-size:13px;">'+escH(r.jenisPerm)+'</td>'+
        '<td style="font-size:13px;white-space:nowrap;">'+escH(r.jenisSarana)+'</td>'+
        '<td class="td-blu-mono">'+escH(r.noInvoice)+'</td>'+
        '<td class="td-blu-mono">'+escH(r.kodeBilling)+'</td>'+
        '<td style="font-size:13px;font-weight:500;min-width:160px;">'+escH(r.wajibBayar)+'</td>'+
        '<td class="td-blu-nominal">'+formatRupiah(r.totalBilling)+'</td>'+
        '<td class="td-blu-tgl">'+escH(r.tglBayar)+'</td>'+
        '<td class="td-blu-jml">'+escH(r.jmlSarana)+'</td>'+
        '<td class="td-kwitansi">'+
          '<button class="btn-kwitansi" aria-label="Unduh kwitansi '+escH(r.noInvoice)+'">'+
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+
              '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>'+
              '<polyline points="14 2 14 8 20 8"/>'+
              '<line x1="9" y1="15" x2="15" y2="15"/>'+
            '</svg>'+
          '</button>'+
        '</td>'+
      '</tr>';
    }
  }

  bluTbody.innerHTML=html;
  bluInfo.textContent=bluFiltered.length===0
    ?'Showing 0 to 0 of 0 entries'
    :'Showing '+(start+1)+' to '+end+' of '+bluFiltered.length+' entries';

  bluPageBtns.innerHTML='';
  var tot=Math.max(1,Math.ceil(bluFiltered.length/bluRpp));
  bluPageBtns.appendChild(mkBtn('Previous',bluPage===1||bluFiltered.length===0,function(){bluPage--;bluRender();}));
  if(bluFiltered.length>0){
    var range=mkPageRange(bluPage,tot);
    for(var j=0;j<range.length;j++){
      var p=range[j];
      if(p==='…'){var sp=document.createElement('span');sp.textContent='…';sp.style.cssText='padding:0 4px;color:var(--color-muted);line-height:34px;';bluPageBtns.appendChild(sp);}
      else{(function(pg){var b=mkBtn(pg,false,function(){bluPage=pg;bluRender();});if(pg===bluPage)b.classList.add('active');bluPageBtns.appendChild(b);})(p);}
    }
  }
  bluPageBtns.appendChild(mkBtn('Next',bluPage===tot||bluFiltered.length===0,function(){bluPage++;bluRender();}));

  updateTotal();
}

/* ── Search ── */
bluSearch.addEventListener('input',function(){
  var q=bluSearch.value.trim().toLowerCase();
  bluFiltered=q?BLU_DATA.filter(function(r){return Object.values(r).some(function(v){return String(v).toLowerCase().indexOf(q)>=0;});}):BLU_DATA.slice();
  bluPage=1;bluRender();
});

/* ── Rows per page ── */
bluRowsSel.addEventListener('change',function(){bluRpp=parseInt(bluRowsSel.value,10);bluPage=1;bluRender();});

/* ── Sort ── */
document.querySelectorAll('#bluTable thead th.sortable').forEach(function(th,i){
  th.addEventListener('click',function(){
    bluSortDir=bluSortCol===i?(bluSortDir==='asc'?'desc':'asc'):'asc';
    bluSortCol=i;
    bluFiltered.sort(function(a,b){
      var col=bluCols[i];
      if(col==='totalBilling'||col==='jmlSarana'){
        return bluSortDir==='asc'?a[col]-b[col]:b[col]-a[col];
      }
      var va=String(a[col]||'').toLowerCase(),vb=String(b[col]||'').toLowerCase();
      return bluSortDir==='asc'?va.localeCompare(vb,'id'):vb.localeCompare(va,'id');
    });
    document.querySelectorAll('#bluTable thead th.sortable').forEach(function(t,j){
      t.classList.remove('sort-asc','sort-desc');
      if(j===i)t.classList.add(bluSortDir==='asc'?'sort-asc':'sort-desc');
    });
    bluRender();
  });
});

/* ── Export Excel ── */
document.getElementById('btnExcel').addEventListener('click',function(){
  var h=['No','Jenis Permohonan','Jenis Sarana','No. Invoice','Kode Billing BLU','Nama Wajib Bayar','Total Billing (IDR)','Tgl. Bayar','Jml. Sarana'];
  var rows=bluFiltered.map(function(r,i){return[i+1,r.jenisPerm,r.jenisSarana,r.noInvoice,r.kodeBilling,r.wajibBayar,r.totalBilling,r.tglBayar,r.jmlSarana].map(function(v){return'"'+String(v).replace(/"/g,'""')+'"';}).join(',');});
  var blob=new Blob(['\uFEFF'+[h.join(',')].concat(rows).join('\n')],{type:'text/csv;charset=utf-8;'});
  var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='payment-blu.csv';a.click();
});

bluRender();
