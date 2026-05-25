/* repository.js */

var REPO_DATA = [
  { id:1, jenis:"CHECK SHEET",      nama:"162 CHECKSHEET LOKOMOTIF SURABAYA" },
  { id:2, jenis:"SURAT PENYAMPAIAN",nama:"KA.605/6/16/BP-UJI/2024" },
  { id:3, jenis:"SURAT PENYAMPAIAN",nama:"KA.605/4/25/BP-UJI/2024" },
  { id:4, jenis:"CHECK SHEET",      nama:"113 CHECKSHEET GERBONG LAMPUNG" },
  { id:5, jenis:"BERITA ACARA",     nama:"113 BERITA ACARA LAMPUNG" },
  { id:6, jenis:"BERITA ACARA",     nama:"146 BERITA ACARA PK (SR) DIVRE 1 MEDAN (ST.274)" },
  { id:7, jenis:"CHECK SHEET",      nama:"201 CHECKSHEET KRL DEPOK" },
  { id:8, jenis:"SURAT PENYAMPAIAN",nama:"KA.605/8/31/BP-UJI/2024" },
  { id:9, jenis:"BERITA ACARA",     nama:"201 BERITA ACARA KRL DEPOK" },
  { id:10,jenis:"SERTIFIKAT",       nama:"SERTIFIKAT UJI BERKALA CC20101 2024" },
  { id:11,jenis:"LAPORAN",          nama:"LAPORAN HASIL UJI SARANA Q3 2024" },
  { id:12,jenis:"CHECK SHEET",      nama:"175 CHECKSHEET KERETA BANDUNG" },
];

var nextId = 13;

var rFiltered = REPO_DATA.slice();
var rSortCol  = -1;
var rSortDir  = 'asc';
var rPage     = 1;
var rRpp      = 10;
var rCols     = ['jenis','nama'];

var rTbody    = document.getElementById('repoTbody');
var rInfo     = document.getElementById('repoInfo');
var rPageBtns = document.getElementById('repoPageBtns');
var rSearch   = document.getElementById('tblSearch');
var rRowsSel  = document.getElementById('rowsPerPage');

function escH(s) {
  return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
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

function rRender() {
  var start=(rPage-1)*rRpp;
  var end=Math.min(start+rRpp,rFiltered.length);
  var slice=rFiltered.slice(start,end);
  var html='';

  if(slice.length===0){
    html='<tr><td colspan="5" class="tbl-empty">Tidak ada dokumen ditemukan.</td></tr>';
  } else {
    for(var i=0;i<slice.length;i++){
      var r=slice[i];
      html+='<tr>'+
        '<td class="td-no">'+(start+i+1)+'.</td>'+
        '<td style="font-size:13px;font-weight:600;white-space:nowrap;">'+escH(r.jenis)+'</td>'+
        '<td style="font-size:13px;">'+escH(r.nama)+'</td>'+
        '<td class="td-file">'+
          '<button class="btn-pdf-icon" data-id="'+r.id+'" aria-label="Lihat file PDF '+escH(r.nama)+'">'+
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+
              '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>'+
              '<polyline points="14 2 14 8 20 8"/>'+
              '<line x1="9" y1="15" x2="15" y2="15"/>'+
            '</svg>'+
          '</button>'+
        '</td>'+
        '<td class="td-options">'+
          '<div class="repo-options">'+
            '<button class="btn-repo-edit" data-id="'+r.id+'" aria-label="Edit '+escH(r.nama)+'">'+
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+
                '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>'+
                '<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>'+
              '</svg>'+
            '</button>'+
            '<button class="btn-repo-del" data-id="'+r.id+'" aria-label="Hapus '+escH(r.nama)+'">'+
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+
                '<polyline points="3 6 5 6 21 6"/>'+
                '<path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>'+
                '<path d="M10 11v6"/><path d="M14 11v6"/>'+
                '<path d="M9 6V4h6v2"/>'+
              '</svg>'+
            '</button>'+
          '</div>'+
        '</td>'+
      '</tr>';
    }
  }

  rTbody.innerHTML=html;
  rInfo.textContent=rFiltered.length===0
    ?'Showing 0 to 0 of 0 entries'
    :'Showing '+(start+1)+' to '+end+' of '+rFiltered.length+' entries';

  rPageBtns.innerHTML='';
  var tot=Math.max(1,Math.ceil(rFiltered.length/rRpp));
  rPageBtns.appendChild(mkBtn('Previous',rPage===1||rFiltered.length===0,function(){rPage--;rRender();}));
  if(rFiltered.length>0){
    var range=mkPageRange(rPage,tot);
    for(var j=0;j<range.length;j++){
      var p=range[j];
      if(p==='…'){var sp=document.createElement('span');sp.textContent='…';sp.style.cssText='padding:0 4px;color:var(--color-muted);line-height:34px;';rPageBtns.appendChild(sp);}
      else{(function(pg){var b=mkBtn(pg,false,function(){rPage=pg;rRender();});if(pg===rPage)b.classList.add('active');rPageBtns.appendChild(b);})(p);}
    }
  }
  rPageBtns.appendChild(mkBtn('Next',rPage===tot||rFiltered.length===0,function(){rPage++;rRender();}));
}

/* Filter */
document.getElementById('btnFilter').addEventListener('click',function(){
  var jenis=document.getElementById('filterJenisDok').value;
  rFiltered=jenis?REPO_DATA.filter(function(r){return r.jenis===jenis;}):REPO_DATA.slice();
  rPage=1;rRender();
});

/* Search */
rSearch.addEventListener('input',function(){
  var q=rSearch.value.trim().toLowerCase();
  rFiltered=q?REPO_DATA.filter(function(r){return r.jenis.toLowerCase().indexOf(q)>=0||r.nama.toLowerCase().indexOf(q)>=0;}):REPO_DATA.slice();
  rPage=1;rRender();
});

/* Rows per page */
rRowsSel.addEventListener('change',function(){rRpp=parseInt(rRowsSel.value,10);rPage=1;rRender();});

/* Sort */
document.querySelectorAll('#repoTable thead th.sortable').forEach(function(th,i){
  th.addEventListener('click',function(){
    rSortDir=rSortCol===i?(rSortDir==='asc'?'desc':'asc'):'asc';
    rSortCol=i;
    rFiltered.sort(function(a,b){
      var va=String(a[rCols[i]]||'').toLowerCase(),vb=String(b[rCols[i]]||'').toLowerCase();
      return rSortDir==='asc'?va.localeCompare(vb,'id'):vb.localeCompare(va,'id');
    });
    document.querySelectorAll('#repoTable thead th.sortable').forEach(function(t,j){
      t.classList.remove('sort-asc','sort-desc');
      if(j===i)t.classList.add(rSortDir==='asc'?'sort-asc':'sort-desc');
    });
    rRender();
  });
});

/* Event delegation — edit & delete */
rTbody.addEventListener('click',function(e){
  var editBtn=e.target.closest('.btn-repo-edit');
  var delBtn=e.target.closest('.btn-repo-del');

  if(editBtn){
    var id=parseInt(editBtn.getAttribute('data-id'),10);
    var row=REPO_DATA.find(function(r){return r.id===id;});
    if(row){
      document.getElementById('repoModalTitle').textContent='Edit Dokumen';
      document.getElementById('inputJenisDok').value=row.jenis;
      document.getElementById('inputNamaDok').value=row.nama;
      document.getElementById('repoModalSimpan')._editId=id;
      openModal();
    }
  }

  if(delBtn){
    var id=parseInt(delBtn.getAttribute('data-id'),10);
    var row=REPO_DATA.find(function(r){return r.id===id;});
    if(row){ openDeleteModal(id, row.nama, row.jenis); }
  }
});

/* Modal Hapus */
var deleteOverlay = document.getElementById('repoDeleteOverlay');
var pendingDeleteId = null;

function openDeleteModal(id, nama, jenis) {
  pendingDeleteId = id;
  document.getElementById('deleteDocName').textContent = nama;
  document.getElementById('deleteDocJenis').textContent = jenis;
  deleteOverlay.classList.add('open');
  document.getElementById('deleteModalConfirm').focus();
}

function closeDeleteModal() {
  deleteOverlay.classList.remove('open');
  pendingDeleteId = null;
}

document.getElementById('deleteModalClose').addEventListener('click', closeDeleteModal);
document.getElementById('deleteModalBatal').addEventListener('click', closeDeleteModal);
deleteOverlay.addEventListener('click', function(e){ if(e.target===deleteOverlay) closeDeleteModal(); });

document.getElementById('deleteModalConfirm').addEventListener('click', function(){
  if(pendingDeleteId===null) return;
  var idx = REPO_DATA.findIndex(function(r){ return r.id===pendingDeleteId; });
  if(idx>=0) REPO_DATA.splice(idx,1);
  rFiltered = rFiltered.filter(function(r){ return r.id!==pendingDeleteId; });
  closeDeleteModal();
  rRender();
});

/* Modal */
var modalOverlay=document.getElementById('repoModalOverlay');

function openModal(){
  modalOverlay.classList.add('open');
  document.getElementById('inputJenisDok').focus();
}

function closeModal(){
  modalOverlay.classList.remove('open');
  document.getElementById('inputJenisDok').value='';
  document.getElementById('inputNamaDok').value='';
  document.getElementById('inputFile').value='';
  document.getElementById('repoModalTitle').textContent='Tambah Dokumen';
  document.getElementById('repoModalSimpan')._editId=null;
}

document.getElementById('btnBaru').addEventListener('click',function(){
  document.getElementById('repoModalTitle').textContent='Tambah Dokumen';
  openModal();
});

document.getElementById('repoModalClose').addEventListener('click',closeModal);
document.getElementById('repoModalBatal').addEventListener('click',closeModal);
modalOverlay.addEventListener('click',function(e){if(e.target===modalOverlay)closeModal();});
document.addEventListener('keydown',function(e){
  if(e.key==='Escape'){
    closeModal();
    closeDeleteModal();
  }
});

document.getElementById('repoModalSimpan').addEventListener('click',function(){
  var jenis=document.getElementById('inputJenisDok').value.trim();
  var nama=document.getElementById('inputNamaDok').value.trim();
  if(!jenis||!nama){alert('Jenis Dokumen dan Nama Dokumen wajib diisi.');return;}

  var editId=document.getElementById('repoModalSimpan')._editId;
  if(editId){
    var row=REPO_DATA.find(function(r){return r.id===editId;});
    if(row){row.jenis=jenis;row.nama=nama;}
  } else {
    REPO_DATA.push({id:nextId++,jenis:jenis,nama:nama});
  }

  rFiltered=REPO_DATA.slice();
  rRender();
  closeModal();
});

rRender();
