# Dashboard Design Guidelines
**v1.2 · 2026 · Berdasarkan UIX Design Guidelines Portal DJKA Kemenhub**

Panduan desain resmi untuk komponen Dashboard. Dokumen ini mencakup fondasi visual, sistem komponen, aturan layout, tipografi, dan standar interaksi yang harus diikuti oleh seluruh tim desain dan pengembangan.

---

## Daftar Isi

1. [Fondasi Desain](#1-fondasi-desain)
2. [Tipografi](#2-tipografi)
3. [Sistem Warna](#3-sistem-warna)
4. [UX Writing](#4-ux-writing)
5. [Layout & Struktur Halaman](#5-layout--struktur-halaman)
6. [Sistem Ikon](#6-sistem-ikon)
7. [Spacing & Jarak Antar Elemen](#7-spacing--jarak-antar-elemen)
8. [Border Radius](#8-border-radius)
9. [Komponen Atom](#9-komponen-atom)
10. [Komponen Molekul](#10-komponen-molekul)
11. [Komponen Organisme](#11-komponen-organisme)
12. [Template & Halaman](#12-template--halaman)
13. [Aksesibilitas & Interaksi](#13-aksesibilitas--interaksi)

---

## 1. Fondasi Desain

Portal menggunakan pendekatan desain yang mengutamakan kejelasan informasi, efisiensi navigasi, dan konsistensi visual di seluruh halaman. Sistem desain ini mengadaptasi prinsip-prinsip **Google Material Design 3** yang disesuaikan dengan kebutuhan portal pemerintah Indonesia.

### 4 Prinsip Utama

| Prinsip | Deskripsi |
|---|---|
| **Clarity (Kejelasan)** | Setiap elemen antarmuka harus memiliki tujuan yang jelas dan dapat dipahami tanpa penjelasan tambahan. Hindari dekorasi yang tidak memberikan nilai informasi. |
| **Efficiency (Efisiensi)** | Pengguna harus dapat menyelesaikan tugasnya dengan langkah yang paling minimal. Desain yang baik adalah desain yang mengurangi beban kognitif pengguna. |
| **Consistency (Konsistensi)** | Komponen yang identik harus tampil dan berperilaku sama di seluruh halaman portal. Konsistensi membangun kepercayaan dan mengurangi waktu belajar pengguna. |
| **Accessibility (Aksesibilitas)** | Desain harus dapat digunakan oleh semua pegawai, termasuk pengguna dengan keterbatasan visual atau motorik. Penuhi standar **WCAG 2.1 Level AA** minimum. |

---

## 2. Tipografi

### Font Resmi

| Font | Fungsi | Import |
|---|---|---|
| **Plus Jakarta Sans** | Font antarmuka utama: judul, isi, label, tombol, navigasi | Google Fonts |
| **JetBrains Mono** | Khusus untuk ID permohonan, nomor referensi, kode sistem, dan data teknis berformat tetap | Google Fonts |

```css
/* Impor via Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap');

/* CSS Variables */
--font-ui:   'Plus Jakarta Sans', sans-serif;
--font-mono: 'JetBrains Mono', monospace;

/* Penggunaan */
body    { font-family: var(--font-ui); }
.id-ref { font-family: var(--font-mono); }
```

### Skala Tipografi

| Kategori | Contoh | Size | Weight | Line Height | Penggunaan |
|---|---|---|---|---|---|
| Display / H1 | Portal DJKA | 32px | 800 | 1.1 | Judul halaman landing / hero |
| H2 | Data Permohonan | 28px | 700 | 1.2 | Judul halaman utama konten |
| H3 | Sertifikasi Sarana | 22px | 700 | 1.3 | Sub judul bagian |
| H4 | Breakdown | 18px | 600 | 1.4 | Judul card |
| H5 | Filter Tabel | 15px | 600 | 1.4 | Label grup, judul kecil |
| Subtitle 1 | Layanan Data Perkeretaapian | 15px | 500 | 1.5 | Subtitle medium emphasis |
| Subtitle 2 | Menunggu Approval | 13.5px | 600 | 1.5 | Label status, subtitle kecil |
| Body 1 | *(teks paragraf)* | 14px | 400 | 1.6 | Paragraf teks utama |
| Body 2 | *(teks deskripsi)* | 13px | 400 | 1.6 | Teks pendukung, deskripsi |
| Button | Simpan Data | 13.5px | 600 | 1 | Label tombol — Title Case |
| Caption | Menampilkan 1 sampai 6 dari 6 data | 12px | 400 | 1.5 | Keterangan tabel, caption |
| Overline | LAYANAN DATA | 11px | 700 | 1.5 | Label grup navigasi, overline |
| Mono | 260303499 · TKT-2026-0001 | 13px | 400–500 | 1.6 | ID, kode referensi, data teknis |

### Aturan Penggunaan Tipografi

1. **Teks tombol**: gunakan Title Case. Contoh: `"Simpan Data"`, bukan `"SIMPAN DATA"` atau `"simpan data"`.
2. **Label overline / grup menu**: gunakan UPPERCASE dengan `letter-spacing: 0.8px`. Ini satu-satunya penggunaan uppercase yang diizinkan.
3. Maksimum **3 ukuran font** dalam satu komponen/card. Hindari variasi ukuran yang terlalu banyak dalam satu area kecil.
4. **ID dan nomor referensi** wajib menggunakan font monospace JetBrains Mono.
5. **Angka statistik besar** (seperti di dashboard) gunakan ukuran **28–36px** dengan bobot 700–800 dan warna yang mengindikasikan status.

---

## 3. Sistem Warna

Sistem warna terdiri dari warna primer biru (navy), warna semantik (status), dan warna netral. Setiap warna didefinisikan sebagai CSS custom property untuk memastikan konsistensi.

### Warna Primer & Brand

| Token | Hex | Kegunaan |
|---|---|---|
| Sidebar BG | `#131A35` | Latar belakang sidebar |
| Nav | `#1E293B` | Latar navigasi |
| Blue Primary | `#1D4ED8` | Warna primer utama (Blue 700) |
| Blue Hover | `#2563EB` | Warna hover state |
| Blue 400 | `#3B82F6` | Aksen primer |
| Blue 300 | `#60A5FA` | Teks ikon aktif navigasi |
| Blue Border | `#BFDBFE` | Border elemen primer |
| Blue BG | `#EFF6FF` | Latar belakang elemen primer |

### Warna Semantik / Status

| Token | Hex | Kegunaan |
|---|---|---|
| Success | `#16A34A` | Status berhasil, on time |
| Success BG | `#DCFCE7` | Latar badge success |
| Warning | `#D97706` | Butuh perhatian |
| Warning BG | `#FEF3C7` | Latar badge warning |
| Danger | `#DC2626` | Error, ditolak, kritis |
| Danger BG | `#FEE2E2` | Latar badge danger |
| Info | `#0284C7` | Informasi sistem |
| Purple | `#7C3AED` | Proses khusus / hukum |
| Teal | `#0D9488` | Aksen sekunder |
| Pink | `#DB2777` | Penanda khusus |

> **Penting:** Jangan menggunakan warna semantik untuk tujuan dekoratif.

### Warna Netral

| Token | Skala |
|---|---|
| Gray 50–900 | Skala abu dari terang ke gelap untuk teks, border, dan surface |

### Token CSS Warna (Wajib Digunakan)

```css
/* :root CSS variables — wajib digunakan, jangan hardcode hex */
:root {
  /* Primary */
  --color-primary:        #1D4ED8;
  --color-primary-hover:  #2563EB;
  --color-primary-light:  #EFF6FF;
  --color-primary-border: #BFDBFE;

  /* Semantic */
  --color-success: #16A34A;
  --color-warning: #D97706;
  --color-danger:  #DC2626;
  --color-info:    #0284C7;

  /* Surface */
  --color-surface: #FFFFFF;
  --color-bg:      #F8FAFC;
  --color-border:  #E2E8F0;
  --color-text:    #0F172A;
  --color-muted:   #64748B;

  /* Topbar */
  --topbar-bg:     #0F172A;
  --topbar-date-bg: rgba(255,255,255,0.08);
  --topbar-date-text: #ffffff;
}
```

### Panduan Kontras Warna

| ✓ Lakukan | ✕ Hindari |
|---|---|
| Teks putih di atas navy — rasio 8:1 ✓ | Teks biru muda di atas biru muda — kontras rendah ✗ |
| Teks putih di atas biru — rasio 4.7:1 ✓ | Teks abu muda di atas putih — sulit dibaca ✗ |

Selalu pastikan rasio kontras minimal **4.5:1** untuk teks body dan **3:1** untuk heading besar (WCAG AA).

---

## 4. UX Writing

Portal mengikuti kaidah Bahasa Indonesia yang baik dan benar sesuai KBBI Edisi V dan Pedoman Umum Ejaan Bahasa Indonesia (PUEBI). Bahasa yang digunakan bersifat **formal, lugas, dan tidak ambigu**.

### Prinsip UX Writing

- **Formal namun Jelas**: gunakan bahasa resmi pemerintahan tetapi hindari kalimat yang terlalu panjang atau berbelit.
- **Aktif bukan Pasif**: preferensi kalimat aktif untuk instruksi pengguna.
- **Spesifik**: sebutkan objek yang dimaksud secara eksplisit.
- **Konsisten**: satu istilah untuk satu konsep, tidak boleh berganti-ganti.

### Kosakata Status Internal Alur Permohonan

| Status Benar | Jangan Gunakan |
|---|---|
| **Ditindaklanjuti** | "Follow Up", "Difollow Up", "On Progress", "Diproses" |
| **Dikoordinasikan** | "Dikordinir", "Dikoordinir", "Koordinasi", "Di-koordinasi" |
| **Selesai** | "Completed", "Done", "Finish", "Closed", "Resolved" |
| **Perlu Perbaikan** | "Revisi", "Need Revision", "Rejected (Partial)", "Incomplete" |
| **Menunggu Persetujuan Direktur** | "Waiting Director Approval", "Pending Direktur", "Waiting Approval" |
| **Ditolak** | "Rejected", "Decline", "Tidak Disetujui" |
| **Permohonan Uji Pertama / Uji Berkala / Uji Ulang** | "First Test", "Periodic Test", "Re-test", "Initial Inspection" |

### Panduan Penulisan Teks UI

1. **Judul halaman**: gunakan kalimat nominal (kata benda), bukan kalimat imperatif. Contoh: `"Data Permohonan Sertifikasi Sarana"`, bukan `"Lihat Data Permohonan"`.
2. **Label tombol**: gunakan kalimat imperatif singkat dalam Title Case. Contoh: `"Simpan Data"`, `"Ajukan Permohonan"`, `"Ekspor Laporan"`. Maksimum 3 kata.
3. **Placeholder input**: jelaskan format atau contoh nilai yang diharapkan. Contoh: `"Contoh: PT Kereta Api Indonesia (Persero)"`, bukan hanya `"Masukkan nama..."`.
4. **Pesan error**: tulis dalam kalimat aktif dan sebutkan cara memperbaiki. Contoh: `"Nomor Induk Pegawai tidak ditemukan. Periksa kembali NIP yang Anda masukkan."`, bukan hanya `"NIP salah"`.
5. **Konfirmasi dialog**: judul menggunakan kalimat tanya atau pernyataan tegas. Contoh: `"Hapus permohonan ini secara permanen?"` dengan dua tombol: `"Ya, Hapus"` (danger) dan `"Batalkan"` (ghost).
6. Jangan menggunakan singkatan yang tidak baku. `"ID Permohonan"` tidak boleh disingkat `"ID Perm."` atau `"No. Perm."`.
7. **Angka dan tanggal**: gunakan format `"26 Maret 2026"` untuk tampilan. Format ISO (`2026-03-26`) hanya digunakan di atribut HTML dan API.

---

## 5. Layout & Struktur Halaman

Portal menggunakan **layout tiga kolom + topbar penuh** yang terdiri dari: topbar global (full-width), sidebar navigasi ikon (rail), panel sub-navigasi kontekstual, dan area konten utama.

### Struktur Layout Utama

```
┌──────────────────────────────────────────────────────────┐
│              Topbar (56px, full-width, sticky)            │
├──────────┬─────────────────┬────────────────────────────┤
│ Sidebar  │  Panel Sub-Nav  │                            │
│  Rail    │  (260px)        │     Area Konten            │
│  (72px)  │  [hidden/open]  │                            │
└──────────┴─────────────────┴────────────────────────────┘
```

| Area | Lebar | Fungsi |
|---|---|---|
| **Topbar** | Full (100%) | Header global: logo, search, datetime, notifikasi, user. Selalu di atas semua kolom. |
| **Sidebar Rail** | Selalu 72px | Navigasi menu utama. **Ikon saja tanpa label**. Ikon aktif: blue rounded square. |
| **Panel Sub-Nav** | 0px (tersembunyi) / 260px (terbuka) | Menu kontekstual sesuai modul yang dipilih di sidebar. Dapat di-collapse. |
| **Area Konten** | Sisa ruang (full) | Konten utama halaman. |

### Aturan Sidebar Rail

1. Lebar: **selalu tetap 72px**. Tidak boleh diubah.
2. Background: warna `#131A35` (navy gelap). Tidak boleh menggunakan warna lain.
3. Item navigasi: **ikon saja**, tanpa label teks yang terlihat.
4. Item aktif: ikon dibungkus dalam rounded square `background: rgba(37,99,235,0.25); border-radius: 10px; width: 44px; height: 44px`. Warna ikon: `#93C5FD`.
5. **Tidak ada** garis kiri (left-border) pada item aktif. Gunakan icon-box saja.
6. Klik item sidebar → membuka Panel Sub-Nav dengan konten kontekstual modul tersebut.

### Aturan Panel Sub-Navigasi

1. Lebar: **0px** (tersembunyi) default, **260px** saat terbuka. Transisi: `width 0.25s ease`.
2. Background: `#FFFFFF` dengan `border-right: 1px solid var(--color-border)`.
3. Tombol collapse (`<`) diposisikan di tepi kanan panel, tengah vertikal, berbentuk lingkaran `26px`.
4. Setiap section dimulai dengan label overline (11px, uppercase, 0.8px letter-spacing).
5. Item sub-nav aktif: `background: #EFF6FF; color: #1D4ED8; font-weight: 600; border-radius: 8px`.
6. Item sub-nav biasa: `color: #334155`, hover: `background: #F8FAFC`.

### Aturan Topbar

1. Tinggi Topbar: **selalu 56px**, `position: sticky; top: 0; z-index: 90`.
2. Background Topbar: warna `#0F172A` (navy primer). Melebar **full-width** termasuk melewati sidebar dan panel sub-nav.
3. Urutan elemen (kiri ke kanan): **Ikon Modul Aktif → Logo/Brand → Separator → Search Bar → Spacer → Tanggal → Separator → Ikon Notifikasi → Separator → Avatar Pengguna**.
4. **Ikon Modul Aktif** (elemen pertama, flush-left):
   - Lebar: `72px` (sama persis dengan sidebar rail), tinggi: `56px` (penuh topbar).
   - Background: `#1D4ED8` (biru primer). **Tidak ada border-radius** — kotak penuh flush ke tepi kiri.
   - Ikon di dalam: `22px`, `stroke-width: 2`, warna `white`.
   - Ikon berubah sesuai modul yang sedang aktif di sidebar.
   - `padding-left: 0` pada topbar — elemen ini menyentuh tepi kiri langsung.
5. Search bar:
   - Lebar minimum: `420px` (agar teks tidak numpuk/truncated).
   - Gunakan `max-width: 100%` untuk responsif.
   - Teks placeholder menggunakan `white-space: nowrap`, `overflow: hidden`, `text-overflow: ellipsis`.
   - Shortcut keyboard **Ctrl + K** wajib ditampilkan sebagai badge monospace.
6. **Tanggal** (sebelum notifikasi):
   - Format: `DD Bulan YYYY` (contoh: "13 Mei 2026").
   - Menggunakan bahasa Indonesia, nama bulan lengkap (Januari, Februari, dst).
   - Background: `rgba(255,255,255,0.08)`, border-radius: `8px`.
   - Font size: `13px`, font weight: `500`, color: `#ffffff` (putih).
   - Ikon kalender di kiri teks, ukuran `16px`, color: `rgba(255,255,255,0.7)`.
   - Update otomatis via JavaScript saat halaman dimuat.
   - CSS Class: `.topbar-date`

### Aturan Konten Halaman

1. **Padding konten**: `24px` di semua sisi.
2. **Maksimum lebar konten**: tidak ada batasan — melebar penuh mengisi sisa ruang.
3. **Card stat** di bagian atas: selalu dalam grid **3 kolom atau 4 kolom** sesuai jumlah metrik, dengan jarak `16px`.
4. **Breadcrumb/judul halaman**: wajib menggunakan ikon dan judul yang konsisten dengan nama menu di sidebar.

---

## 6. Sistem Ikon

Portal mengadopsi pendekatan *open-source icon system + design constraint internal*. Penggunaan ikon tetap harus mengikuti gaya visual dan standar desain portal, sehingga identitas visual institusi tetap terjaga.

### Pustaka Ikon Resmi yang Direkomendasikan

| Pustaka | Lisensi | Jumlah | Keterangan |
|---|---|---|---|
| **Lucide Icons** `lucide.dev` | MIT | 1.400+ ikon | **Rekomendasi Utama.** Ikon stroke bersih dan konsisten. Tersedia sebagai paket NPM `lucide-react`, `lucide-vue`, dan CDN SVG. |
| **Heroicons** `heroicons.com` | MIT | 292 ikon | Alternatif resmi. |
| **Tabler Icons** `tabler.io/icons` | MIT | 5.400+ ikon | Pilihan saat dibutuhkan ikon domain spesifik. |
| **Phosphor Icons** `phosphoricons.com` | MIT | 9.000+ ikon | Pilihan Koleksi Terbesar. Berguna untuk ikon domain perkeretaapian (kereta, stasiun, jalur rel). |

### Aturan Penggunaan Ikon

1. **Gaya**: selalu gunakan ikon **outline/stroke**. Dilarang menggunakan ikon filled/solid kecuali untuk status aktif yang sangat spesifik.
2. **Ketebalan garis**: `stroke-width="2"` untuk semua ikon. Gunakan `stroke-linecap="round"` dan `stroke-linejoin="round"`.
3. **Ukuran standar**:
   - Navigasi: `20px`
   - Topbar: `18px`
   - Dalam tombol: `14–16px`
   - Dalam input: `15px`
   - Jangan gunakan ukuran di luar skema ini.
4. **Warna**: ikuti warna teks parent menggunakan `currentColor`. Ikon navigasi aktif: `#93C5FD`. Ikon navigasi normal: `rgba(255,255,255,.4)`.
5. **Aksesibilitas**: ikon dekoratif wajib diberi `aria-hidden="true"`. Ikon fungsional tanpa teks label wajib diberi `aria-label` yang deskriptif.
6. **Konsistensi sumber**: seluruh ikon dalam satu proyek wajib berasal dari **satu pustaka yang sama**. Jangan mencampur ikon dari Lucide dan Heroicons dalam halaman yang sama.
7. Jangan gunakan ikon tanpa label kecuali di dalam tombol ikon yang memiliki tooltip penjelasan.

### Do's & Don'ts Ikon

| ✓ Lakukan | ✕ Hindari |
|---|---|
| Gunakan ikon outline (stroke) | Jangan gunakan filled icon (kecuali sangat spesifik) |
| Gunakan ukuran standar | Jangan gunakan ukuran bebas |
| Gunakan `currentColor` | Jangan warna bebas |
| Berikan label aksesibilitas | Jangan tanpa label (jika fungsional) |
| Konsisten satu pustaka ikon | Jangan campur pustaka ikon |

---

## 7. Spacing & Jarak Antar Elemen

Sistem spacing menggunakan basis kelipatan **4px**. Seluruh jarak — baik padding, margin, maupun gap — harus merupakan kelipatan 4px.

### Tabel Token Spacing

| Token | Nilai | Kegunaan |
|---|---|---|
| `sp-1` | 4px | Jarak mikro: ikon–teks, dot label dalam badge |
| `sp-2` | 8px | Jarak kecil: padding dalam badge, gap antara item kompak |
| `sp-3` | 12px | Padding dalam chip, input padding vertikal kecil |
| `sp-4` | 16px | Padding standar card, gap kolom tabel, padding tombol |
| `sp-5` | 20px | Padding card besar, jarak antar section dalam form |
| `sp-6` | 24px | Padding konten halaman, gap kartu dashboard |
| `sp-8` | 32px | Jarak antar section besar, margin bawah heading |
| `sp-10` | 40px | Padding hero section, jarak antar grup konten |
| `sp-12` | 48px | Padding halaman landing |
| `sp-16` | 64px | Jarak besar antar modul / section utama |

### Prinsip Spacing

1. **Selalu gunakan kelipatan 4px**. Tidak boleh menggunakan nilai seperti `7px`, `11px`, atau `18px`.
2. Elemen yang **berkaitan erat** menggunakan spacing kecil (4–8px). Elemen yang **berbeda kelompok** menggunakan spacing besar (24–32px).
3. **Konsistensi padding card**: semua card menggunakan padding 16–20px. Tidak boleh ada card dengan padding `10px` di satu halaman dan `25px` di halaman lain.

---

## 8. Border Radius

Kelengkungan sudut diatur secara konsisten berdasarkan ukuran dan jenis elemen. Gunakan radius yang lebih kecil untuk elemen yang lebih kecil.

| Radius | Elemen |
|---|---|
| `2px` | Input micro |
| `4px` | Tag, chip kecil |
| `6px` | Button, input (standar) |
| `8px` | Dropdown, tooltip |
| `10px` | Card standar |
| `12px` | Card besar |
| `16px` | Modal, panel |
| `9999px` | Badge, pill |

---

## 9. Komponen Atom

Atom adalah satuan terkecil dalam sistem desain. Atom hanya mendapatkan makna ketika digabungkan menjadi molekul.

### Atom: Tombol (Button)

#### Ukuran Tombol

| Ukuran | Tinggi |
|---|---|
| XS | 28px |
| Small | 32px |
| Medium *(default)* | 38px |
| Large | 44px |
| Extra Large | 52px |

#### Varian Tombol

| Varian | Class | Penggunaan |
|---|---|---|
| **Primary** | `.btn-primary`, `.btn-tambah` | Tindakan paling penting di halaman. **Maksimal 1 tombol primary per halaman/form.** |
| **Secondary** | `.btn-secondary` | Aksi penting namun tidak sepenting primary. Boleh muncul lebih dari satu kali. |
| **Secondary Outline** | `.btn-secondary-outline` | Aksi sekunder yang berdampingan dengan primary. Background transparan dengan border biru. Digunakan untuk aksi seperti "Sinkronisasi", "Reset", "Refresh". |
| **Outline** | `.btn-outline` | Aksi sekunder berdampak rendah, atau saat ingin pilihan yang tidak terlalu menonjol. |
| **Ghost** | `.btn-ghost` | Aksi paling rendah prioritasnya, seperti `"Batal"` atau `"Kembali"`. |
| **Danger** | `.btn-danger` | Tindakan berbahaya/destruktif (hapus, tolak). Selalu sertakan dialog konfirmasi. |
| **Success** | `.btn-success` | Tindakan konfirmasi positif (setujui, selesai). |
| **Warning** | `.btn-warning` | Tindakan yang memerlukan perhatian. |
| **Dark** | `.btn-dark` | Tindakan netral/sistem (ekspor, unduh). |

#### Kapan Menggunakan Setiap Varian

- **Primary**: satu tindakan utama per halaman atau per form. Contoh: `"Simpan Data"`, `"Kirim Permohonan"`, `"Konfirmasi Pembayaran"`, `"Tambah"`.
- **Secondary**: tindakan penting namun tidak seutama Primary. Contoh: `"Lihat Detail"`, `"Pratinjau Dokumen"`.
- **Secondary Outline**: tindakan sekunder yang berdampingan dengan tombol primary. Contoh: `"Sinkronisasi"`, `"Reset"`, `"Refresh"`. Gunakan ketika ada 2 tombol berdampingan dan salah satunya bukan aksi utama.
- **Ghost**: tindakan ketiga yang paling rendah prioritasnya, terutama pembatalan atau navigasi mundur. Contoh: `"Batalkan"`, `"Kembali"`.
- **Danger**: tindakan destruktif yang tidak dapat dibatalkan. Contoh: `"Hapus Permanen"`, `"Tolak Permohonan"`. **Selalu sertakan dialog konfirmasi sebelum menjalankan.**

#### Aturan Penggunaan Varian

> **⚠️ ATURAN PENTING: Maximum Satu Tombol Primary**
> 
> Setiap halaman atau form **hanya boleh memiliki 1 tombol primary** (`.btn-primary` atau `.btn-tambah`). 
> 
> Jika ada 2 tombol berdampingan dalam satu grup (contoh: "Tambah" dan "Sinkronisasi"), maka:
> - Tombol aksi utama tetap **Primary** (contoh: "Tambah")
> - Tombol sekunder menjadi **Secondary Outline** (contoh: "Sinkronisasi")
>
> **Contoh Implementasi:**
> ```html
> <!-- ❌ Salah: Dua tombol primary berdampingan -->
> <button class="btn-tambah">Sinkronisasi</button>
> <button class="btn-tambah">Tambah</button>
> 
> <!-- ✅ Benar: Primary + Secondary Outline -->
> <button class="btn-secondary-outline">Sinkronisasi</button>
> <button class="btn-tambah">Tambah</button>
> ```

#### Aturan Ikon pada Tombol

- Ikon pada tombol menggunakan stroke SVG dengan `stroke-width: 2.5`.
- Jarak antara ikon dan teks adalah `6px`.
- Ikon selalu berada di **kiri** teks label.

#### CSS State Transitions

```css
/* Primary Button */
.btn-primary {
  transition: background 0.18s, transform 0.18s, box-shadow 0.18s;
}
.btn-primary:hover {
  background: #2563EB;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(37,99,235,.35);
}
.btn-primary:active {
  background: #1D4ED8;
  transform: translateY(0);
  box-shadow: none;
}

/* Secondary Outline Button */
.btn-secondary-outline {
  display: flex; align-items: center; gap: 6px;
  padding: 8px 16px; background: transparent; color: var(--color-primary);
  border: 1.5px solid var(--color-primary-border); border-radius: 6px;
  font-size: 13.5px; font-weight: 600;
  cursor: pointer; transition: all 0.15s;
}
.btn-secondary-outline:hover {
  background: var(--color-primary-light);
  border-color: var(--color-primary);
}

/* Disabled State */
.btn:disabled {
  background: #E2E8F0;
  color: #94A3B8;
  cursor: not-allowed;
  pointer-events: none;
}
```

---

### Atom: Input Teks

| Properti | Nilai |
|---|---|
| Tinggi | `40px` (default). Gunakan tinggi lain hanya jika ada kebutuhan spesifik. |
| Border radius | `6px` |
| Border default | `1.5px solid #CBD5E1` |
| Border fokus | `1.5px solid #1D4ED8` + `box-shadow: 0 0 0 3px rgba(37,99,235,.12)` |
| Input disabled | background `#F1F5F9`, teks `#94A3B8`, cursor `not-allowed` |

#### Aturan Input

1. **Label wajib**: tambahkan tanda `*` berwarna merah di sebelah kanan label. Tidak boleh diletakkan di dalam placeholder.
2. **Pesan error**: tampilkan di bawah input dengan warna `#DC2626` dan ikon `!`. Ubah border input menjadi merah.
3. **Hint / helper text**: tampilkan di bawah input dengan ukuran `12px` warna `#64748B`.
4. **Pesan error harus spesifik per field** dan menjelaskan cara memperbaikinya. Jangan tampilkan pesan error generik di bagian atas form.

---

### Atom: Badge & Status Pill

Badge status adalah elemen yang paling sering digunakan di seluruh portal. Konsistensi warna dan makna badge sangat penting.

#### Standar Warna Status Badge

| Warna | Hex | Konteks Penggunaan |
|---|---|---|
| Hijau | `#16A34A` | Disetujui / Completed — status berhasil, on time |
| Biru | `#1D4ED8` | Menunggu Approval Dirjen — dalam proses, menunggu tindakan pihak lain |
| Oranye | `#D97706` | Menunggu Approval Direktur — butuh perhatian, perlu tindakan segera |
| Merah | `#DC2626` | Ditolak — gagal, ditolak, error kritis |
| Ungu | `#7C3AED` | Dalam Proses Bagian Hukum — proses khusus |
| Kuning | `#CA8A04` | Perlu Perbaikan — butuh perbaikan dari pemohon |
| Abu | `#64748B` | Draf / Belum Dikonfirmasi — status netral, belum diproses |

#### Aturan Badge

| ✓ Lakukan | ✕ Hindari |
|---|---|
| Gunakan dot bulat + teks Title Case | Jangan buat warna badge baru |
| Satu warna untuk satu makna status di seluruh portal | Jangan pakai teks UPPERCASE |
| | Jangan pakai gradient |
| | Jangan pakai bentuk sudut kotak |

---

### Atom: Topbar Date (Tanggal di Header)

Komponen tanggal yang ditampilkan di topbar, menunjukkan tanggal saat ini dalam format Indonesia.

#### Spesifikasi Visual

| Properti | Nilai |
|---|---|
| Background | `rgba(255,255,255,0.08)` |
| Border radius | `8px` |
| Padding | `6px 12px` |
| Font size | `13px` |
| Font weight | `500` |
| Color | `#ffffff` (putih) |
| Gap (ikon-teks) | `8px` |

#### Ikon
- Ikon kalender (outline)
- Ukuran: `16px`
- Warna: `rgba(255,255,255,0.7)` (putih 70% opacity)

#### HTML Structure

```html
<div class="topbar-date" id="topbarDate">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
  <span id="currentDate"></span>
</div>
```

#### JavaScript Update

```javascript
function updateCurrentDate() {
  const dateElement = document.getElementById('currentDate');
  if (dateElement) {
    const now = new Date();
    const bulanIndo = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 
                       'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const hari = now.getDate();
    const bulan = bulanIndo[now.getMonth()];
    const tahun = now.getFullYear();
    dateElement.textContent = `${hari} ${bulan} ${tahun}`;
  }
}
updateCurrentDate();
```

#### Format Output
- Format: `DD Bulan YYYY`
- Contoh: `13 Mei 2026`
- Bahasa: Indonesia (nama bulan lengkap)

#### Posisi dalam Topbar
Urutan: **Ikon Modul Aktif → Logo → Search → Spacer → Tanggal → Separator → Notifikasi → Separator → Avatar**

---

## 10. Komponen Molekul

Molekul adalah gabungan dua atau lebih atom yang membentuk satu unit dengan fungsi spesifik yang dapat digunakan kembali.

### Molekul: Search Bar

```
[ 🔍  Cari data permohonan...              Ctrl K ]
```

- **Shortcut Ctrl + K** wajib ditampilkan untuk aksesibilitas keyboard.
- Placeholder wajib menjelaskan objek yang dicari: `"Cari data permohonan..."`, bukan hanya `"Cari..."`.
- Search bar tanpa tombol Cari terpisah digunakan untuk pencarian *real-time* pada tabel data yang memiliki lebih dari 10 baris.

---

### Molekul: Filter Tabel + Aksi

```
[ Jenis Permohonan ▼ ]  [ Semua Status ▼ ]  [ Jun 2026 ▼ ]  [ Terapkan Filter ]  [ Atur Ulang ]
```

---

### Molekul: Stat Card (Kartu Statistik)

Digunakan di bagian atas halaman dashboard atau halaman ringkasan data.

**Aturan Stat Card:**
- Tampilkan **maksimum 4 metrik utama**.
- Setiap kartu hanya menampilkan **satu angka kunci** beserta labelnya.
- Warna angka harus mengikuti warna semantik: hijau = baik, merah = buruk.
- Angka statistik menggunakan ukuran **28–36px**, bobot **700–800**.
- Selalu dalam grid **3 atau 4 kolom**, dengan gap `16px`.

```
┌────────────────┐  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐
│ Total Permohonan│  │ Disetujui      │  │ Dalam Antrian  │  │ Ditolak        │
│                │  │                │  │                │  │                │
│    2.881       │  │    2.285       │  │      56        │  │      9         │
└────────────────┘  └────────────────┘  └────────────────┘  └────────────────┘
```

---

## 11. Komponen Organisme

Organisme adalah bagian antarmuka yang cukup besar untuk berfungsi secara mandiri dengan konteks bisnis yang jelas.

### Organisme: Tabel Data dengan Filter dan Pagination

Tabel data digunakan untuk menampilkan data tabular terstruktur dengan **lebih dari 5 baris**.

#### Struktur Komponen Tabel

```
┌─────────────────────────────────────────────────────────────┐
│  .tbl-filters: [ Filter ▼ ]  [ 🔍 Cari... ]  Tampilkan [10▼] entri  │
├─────────────────────────────────────────────────────────────┤
│  .data-table thead: NO  |  NAMA  |  STATUS  |  JENIS  |  AKSI │  ← light, gray
├─────────────────────────────────────────────────────────────┤
│  tbody rows...                                              │
├─────────────────────────────────────────────────────────────┤
│  .tbl-pagination: "Menampilkan 1 sampai 10 dari 50 data"  [‹][1][2][›] │
└─────────────────────────────────────────────────────────────┘
```

#### Aturan Tabel

| No. | Aturan |
|---|---|
| 1 | **Header tabel**: `background: transparent`, teks UPPERCASE 11px dengan `letter-spacing: 0.6px`, warna `var(--color-muted)` (#64748B), `border-bottom: 1.5px solid var(--color-border)`. Tidak boleh menggunakan background gelap. |
| 2 | Zebra striping: baris ganjil putih, baris genap `#F8FAFC`. Tambahkan hover background `#F8FAFC`. |
| 3 | Nomor ID/referensi: wajib menggunakan font monospace JetBrains Mono dengan warna biru untuk mudah dibedakan. |
| 4 | Kolom aksi: selalu di kolom **paling kanan**. Gunakan tombol `.btn-detail` (outlined, biru) agar tidak memakan terlalu banyak ruang. |
| 5 | Pagination: tampilkan info `"Menampilkan X sampai Y dari Z data"` di kiri. Tombol navigasi halaman di kanan. |
| 6 | Filter & pencarian: letakkan di atas tabel, sejajar secara horizontal. Filter menggunakan dropdown rounded, pencarian menggunakan search input, kontrol "Tampilkan N entri" di sisi kanan. |

#### Filter Row (`.tbl-filters`)

```css
.tbl-filters {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 20px;
  border-bottom: 1px solid var(--color-border-light);
  flex-wrap: wrap;
}

/* Dropdown filter */
.tbl-filter-select {
  padding: 9px 32px 9px 14px;
  border: 1.5px solid var(--color-border);
  border-radius: 10px;  /* rounded pill */
  font-size: 13.5px;
  background: white;
}

/* Search input */
.tbl-search {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 14px;
  border: 1.5px solid var(--color-border);
  border-radius: 10px;
  height: 42px;
}
.tbl-search input { border: none; outline: none; font-size: 13.5px; }

/* Show N entries */
.tbl-show {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--color-muted);
}
```

#### Header Tabel

```css
.data-table thead tr { background: transparent; }
.data-table thead th {
  padding: 12px 16px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: var(--color-muted);  /* #64748B */
  border-bottom: 1.5px solid var(--color-border);
  white-space: nowrap;
}
```

#### Pagination (`.tbl-pagination`)

```css
.tbl-pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  border-top: 1px solid var(--color-border-light);
  font-size: 13px;
  color: var(--color-muted);
}
.page-btns { display: flex; gap: 6px; }
.page-btn {
  min-width: 34px;
  height: 34px;
  border: 1.5px solid var(--color-border);
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  color: var(--color-text);
  background: white;
}
.page-btn.active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: white;
}
```

#### Badge Status Dot (`.sdot-badge`)

Digunakan untuk menampilkan status dengan titik berwarna di depan teks. Badge berbentuk pill dengan latar warna transparan.

```css
.sdot-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 12.5px;
  font-weight: 600;
}
.sdot-badge .sdot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
}

/* Varian warna */
.sdot-badge.s-blue  { background: #EFF6FF; color: #1D4ED8; } .sdot-badge.s-blue  .sdot { background: #1D4ED8; }
.sdot-badge.s-green { background: #DCFCE7; color: #16A34A; } .sdot-badge.s-green .sdot { background: #16A34A; }
.sdot-badge.s-amber { background: #FEF3C7; color: #D97706; } .sdot-badge.s-amber .sdot { background: #D97706; }
.sdot-badge.s-red   { background: #FEE2E2; color: #DC2626; } .sdot-badge.s-red   .sdot { background: #DC2626; }
.sdot-badge.s-gray  { background: #F1F5F9; color: #64748B; } .sdot-badge.s-gray  .sdot { background: #64748B; }
```

#### Type Pill (`.type-pill`)

Digunakan untuk menampilkan jenis/kategori data (bukan status). Tanpa dot, hanya pill berwarna.

```css
.type-pill {
  display: inline-flex;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
}

/* Varian */
.type-pill.t-blue   { background: #EFF6FF; color: #1D4ED8; }
.type-pill.t-teal   { background: #F0FDFA; color: #0D9488; }
.type-pill.t-purple { background: #F5F3FF; color: #7C3AED; }
.type-pill.t-amber  { background: #FEF3C7; color: #D97706; }
```

#### Tombol Detail (`.btn-detail`)

Tombol aksi pada kolom paling kanan tabel. Menggunakan outlined biru dengan ikon eye.

```css
.btn-detail {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border: 1.5px solid var(--color-primary-border);  /* #BFDBFE */
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  color: var(--color-primary);
  background: var(--color-primary-light);  /* #EFF6FF — selalu filled, bukan transparent */
  cursor: pointer;
  transition: all 0.13s;
}
.btn-detail:hover { background: #DBEAFE; border-color: #93C5FD; }
.btn-detail svg { width: 15px; height: 15px; stroke-width: 2; }
```

#### Tombol Aksi Ganda (`.btn-act`)

Digunakan pada tabel yang memiliki lebih dari satu aksi per baris (contoh: Edit + Sync). Menggantikan tombol ikon bulat/circular.

```css
.btn-act {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 7px 12px; border-radius: 8px;
  font-size: 12px; font-weight: 600; cursor: pointer;
  transition: all 0.13s; font-family: var(--font-ui);
  white-space: nowrap;
}
.btn-act svg { width: 13px; height: 13px; stroke-width: 2.2; }

/* Varian Edit — biru muda (sama dengan btn-detail) */
.btn-act-edit {
  background: var(--color-primary-light); color: var(--color-primary);
  border: 1.5px solid var(--color-primary-border);
}
.btn-act-edit:hover { background: #DBEAFE; border-color: #93C5FD; }

/* Varian Sync/Warning — kuning amber */
.btn-act-sync {
  background: #FFFBEB; color: #B45309;
  border: 1.5px solid #FDE68A;
}
.btn-act-sync:hover { background: #FEF3C7; border-color: #FCD34D; }
```

```html
<div class="action-cell">
  <button class="btn-act btn-act-edit">
    <svg><!-- pencil icon --></svg> Edit
  </button>
  <button class="btn-act btn-act-sync">
    <svg><!-- refresh icon --></svg> Sync
  </button>
</div>
```

#### HTML Template Tabel Lengkap

```html
<div class="card">
  <!-- Filter Row -->
  <div class="tbl-filters">
    <div class="tbl-filter-group">
      <!-- Opsional: dropdown filter kategori/jenis -->
      <select class="tbl-filter-select">
        <option>Semua Jenis</option>
        <option>ASN</option>
        <option>PPPK</option>
      </select>
      <!-- Search input -->
      <div class="tbl-search">
        <svg><!-- ikon search 15px --></svg>
        <input type="text" placeholder="Cari data...">
      </div>
    </div>
    <!-- Tampilkan N entri (margin-left: auto) -->
    <div class="tbl-show">
      Tampilkan
      <select><option>10</option><option>25</option><option>50</option><option>100</option></select>
      entri
    </div>
  </div>

  <!-- Tabel -->
  <div class="table-wrapper">
    <table class="data-table">
      <thead>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Status</th>
          <th>Jenis</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="mono">001</td>
          <td>Nama Pegawai</td>
          <td><span class="sdot-badge s-blue"><span class="sdot"></span>Aktif</span></td>
          <td><span class="type-pill t-blue">ASN</span></td>
          <td><button class="btn-detail"><svg><!-- eye icon --></svg> Detail</button></td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Pagination -->
  <div class="tbl-pagination">
    <span>Menampilkan 1 sampai 10 dari 50 data</span>
    <div class="page-btns">
      <button class="page-btn">‹</button>
      <button class="page-btn active">1</button>
      <button class="page-btn">2</button>
      <button class="page-btn">3</button>
      <span style="padding: 0 4px; color: var(--color-muted);">...</span>
      <button class="page-btn">5</button>
      <button class="page-btn">›</button>
    </div>
  </div>
</div>
```

---

### Organisme: Modal Dialog

Modal digunakan untuk aksi yang memerlukan fokus pengguna: tambah data, edit data, konfirmasi hapus.

#### Struktur Modal

```
┌──────────────────────────────────────────┐
│  ┌──┐  Judul Modal                    ✕  │  ← modal-header
│  └──┘                                    │     icon-box + title + close-btn
├──────────────────────────────────────────┤
│                                          │
│  Label Field *                           │  ← modal-body
│  [ Input teks...               ]         │
│                                          │
├──────────────────────────────────────────┤
│  [ Hapus ]         [ Batal ] [ Simpan ]  │  ← modal-footer
└──────────────────────────────────────────┘
```

#### Spesifikasi Modal

| Properti | Nilai |
|---|---|
| Lebar | `480px` (max-width: 100%) |
| Border radius | `16px` |
| Box shadow | `0 4px 6px rgba(0,0,0,.04), 0 24px 64px rgba(0,0,0,.14)` |
| Overlay bg | `rgba(15,23,42,0.5)` + `backdrop-filter: blur(2px)` |
| Animasi masuk | `scale(0.96) translateY(10px)` → `scale(1) translateY(0)`, durasi `0.22s`, easing `cubic-bezier(0.16,1,0.3,1)` |

#### Elemen Modal

**Header** (`padding: 20px 24px 16px`, `border-bottom: 1px solid var(--color-border)`):
- `modal-title-icon`: kotak `34×34px`, `border-radius: 9px`, `background: var(--color-primary-light)`, ikon `17px` biru
- Judul: `15px`, `font-weight: 700`
- Tombol close: `32×32px`, `border-radius: 8px`, abu muted, hover background `#F8FAFC`

**Body** (`padding: 24px`, `gap: 20px`):
- Label: `13px`, `font-weight: 600`, warna `var(--color-text-secondary)`
- Tanda wajib `*`: merah `var(--color-danger)`, class `.req`
- Input: `height: 40px`, `border: 1.5px solid var(--color-border)`, `border-radius: 6px`, background `var(--color-bg)` (slightly darker), focus ring `3px rgba(37,99,235,.12)`

**Footer** (`padding: 16px 24px`, `border-top: 1px solid var(--color-border)`, `justify-content: flex-end`):
- **Simpan** (`.btn-modal-primary`): biru primer, ikon save kiri
- **Batal** (`.btn-modal-ghost`): outlined abu, tanpa ikon
- **Hapus** (`.btn-modal-danger`): `margin-right: auto` (flush kiri), outlined merah, ikon trash

#### Perilaku

1. Overlay klik → tutup modal
2. `Escape` → tutup semua modal yang terbuka
3. Buka modal → fokus otomatis ke input pertama
4. Modal tambah: kosongkan field saat dibuka
5. Modal detail/edit: isi field dengan data baris yang diklik

#### CSS

```css
.modal-overlay {
  position: fixed; inset: 0;
  background: rgba(15,23,42,0.5);
  backdrop-filter: blur(2px);
  z-index: 200;
  display: flex; align-items: center; justify-content: center;
  padding: 24px;
  opacity: 0; pointer-events: none;
  transition: opacity 0.2s ease;
}
.modal-overlay.open { opacity: 1; pointer-events: all; }
.modal {
  background: var(--color-surface);
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0,0,0,.04), 0 24px 64px rgba(0,0,0,.14);
  width: 480px; max-width: 100%;
  transform: scale(0.96) translateY(10px); opacity: 0;
  transition: transform 0.22s cubic-bezier(0.16,1,0.3,1), opacity 0.18s ease;
}
.modal-overlay.open .modal { transform: scale(1) translateY(0); opacity: 1; }
```

---

### Organisme: Sistem Alert Bertingkat

Alert diletakkan di bagian paling atas konten halaman, sebelum form atau tabel yang berkaitan.

| Tipe | Warna | Kegunaan |
|---|---|---|
| Info | Biru | Informasi sistem, panduan penggunaan |
| Success | Hijau | Permohonan berhasil disetujui, aksi berhasil |
| Warning | Oranye/Kuning | Sertifikat akan kedaluwarsa, butuh perhatian |
| Danger | Merah | Permohonan ditolak, error kritis |

#### Aturan Alert

1. Selalu sertakan **judul yang jelas** (`alert-title`) dan **deskripsi yang actionable** (`alert-text`).
2. Letakkan alert di bagian **paling atas** konten halaman, sebelum form atau tabel yang berkaitan.
3. Jangan tampilkan **lebih dari 2 alert** sekaligus. Jika ada banyak pesan, gunakan komponen notifikasi list.
4. **Alert error** harus menjelaskan apa yang terjadi dan langkah yang harus diambil pengguna untuk memperbaikinya.

---

## 12. Template & Halaman

### Atomic Design Hierarchy

```
Atom → Molekul → Organisme → Template → Halaman
```

| Level | Deskripsi |
|---|---|
| **Atom** | Elemen UI terkecil yang tidak dapat dibagi lagi (token warna, tombol, input, badge). |
| **Molekul** | Gabungan atom yang membentuk satu unit dengan fungsi spesifik (search bar, stat card, filter bar). |
| **Organisme** | Kumpulan molekul dan atom yang membentuk bagian antarmuka mandiri (tabel + filter + pagination, sistem alert). |
| **Template** | Kerangka tata letak yang mendefinisikan di mana setiap organisme diletakkan tanpa data nyata. |
| **Halaman** | Implementasi template yang diisi dengan data sesungguhnya dari sistem. |

### Struktur Halaman Standar (Urutan Wajib)

Setiap halaman portal wajib mengikuti urutan berikut:

1. **Topbar global** (termasuk tanggal, notifikasi, dan avatar pengguna)
2. **Info Card** (opsional - penjelasan singkat fungsi halaman)
3. **Alert** (jika ada)
4. **Kartu statistik** (opsional, maks. 4)
5. **Filter & pencarian**
6. **Tabel / konten utama**
7. **Pagination**

> **Note:** Header modul dengan breadcrumb dan judul halaman telah dihapus. Navigasi dan identifikasi halaman cukup dari topbar global dan menu aktif di sidebar.

> **Catatan:** Jangan mengubah struktur template tanpa koordinasi dengan tim desainer. Tim desainer menyerahkan Template kepada pengembang, dan pengembang mengisinya dengan data dari API.

---

### Komponen Pendukung Lainnya

#### Tab Bar
Gunakan untuk menampilkan dua atau lebih tampilan data yang saling berkaitan dalam satu halaman yang sama.

#### Form Controls Lanjutan

- **Checkbox**: untuk pilihan yang dapat dipilih lebih dari satu (contoh: `"Tampilkan data yang sudah diarsipkan"`).
- **Toggle Switch**: untuk mengaktifkan/menonaktifkan fitur (contoh: `"Aktifkan notifikasi pengingat permohonan"`).
- **Radio Button**: untuk pilihan yang hanya boleh satu (contoh: memilih jenis uji).

#### Loading & Empty State

| State | Teks | Deskripsi |
|---|---|---|
| **Loading** | "Memuat Data..." | "Sedang mengambil data dari server. Mohon tunggu sebentar." |
| **Empty** | "Tidak Ada Data" | "Belum ada permohonan yang sesuai dengan filter yang diterapkan." + tombol `"Atur Ulang Filter"` |

---

## 13. Aksesibilitas & Interaksi

Portal wajib memenuhi standar aksesibilitas **WCAG 2.1 Level AA** sesuai Peraturan Menteri PANRB tentang SPBE.

### Focus State / Navigasi Keyboard

```css
/* Focus ring standar — WAJIB ada di semua elemen interaktif */
*:focus-visible {
  outline: 2px solid #2563EB;
  outline-offset: 3px;
  border-radius: 4px;
}

/* Untuk input field, gunakan box-shadow agar tidak mengganggu border */
.form-input:focus {
  border-color: #2563EB;
  box-shadow: 0 0 0 3px rgba(37,99,235,.12);
}
```

### Checklist Aksesibilitas

| # | Checklist |
|---|---|
| ✓ | Rasio kontras minimum **4.5:1** untuk teks body (≤ 18px) dan **3:1** untuk teks besar (≥ 18px bold atau ≥ 24px regular). |
| ✓ | Semua input form harus memiliki atribut `for`/`id` atau `aria-label`. |
| ✓ | Ikon dekoratif: gunakan `aria-hidden="true"`. |
| ✓ | Ikon fungsional: sertakan `aria-label` yang deskriptif pada HTML. |
| ✓ | Status badge: jangan hanya mengandalkan warna — selalu sertakan teks status yang jelas agar dapat dibaca screen reader. |
| ✓ | Tombol disabled: gunakan atribut `disabled` pada HTML (bukan hanya CSS) agar tidak dapat difokus melalui keyboard. |
| ✓ | Urutan fokus keyboard: tab order harus logis (kiri ke kanan, atas ke bawah). Jangan pernah menggunakan `tabindex > 0`. |
| ✓ | Animasi: hormati preferensi pengguna dengan `@media (prefers-reduced-motion: reduce)` untuk mematikan animasi bagi pengguna yang sensitif terhadap gerakan. |

---

*Dashboard Design Guidelines · v1.2 · 2026 · Direktorat Jenderal Perkeretaapian · Kementerian Perhubungan Republik Indonesia*
*Diperbarui sesuai kebutuhan sistem dan regulasi yang berlaku.*

---

# Spec Modul: Permohonan Uji Sarana
**Tanggal:** 19 Juni 2026

## Ringkasan

Portal **self-service untuk pemohon eksternal** (badan usaha / operator perkeretaapian) untuk mengajukan pengujian sarana dan memantau status permohonan.

**Pendekatan:** C + A — halaman utama adalah tracking dashboard, pengajuan baru via multi-step wizard.

---

## Struktur File

```
permohonan-uji/
├── index.html          ← Tracking Dashboard
├── form-wizard.html    ← Form pengajuan baru (5-step wizard)
├── style.css
└── app.js
```

---

## Halaman 1 — Tracking Dashboard (`index.html`)

### Sidebar & Sub-Nav
- Ikon modul: clipboard/document
- Sub-nav: **Permohonan Saya** (aktif) · **Ajukan Permohonan Baru**

### Stat Cards (4 kolom)
| Card | Warna Angka |
|---|---|
| Total Permohonan | Netral |
| Dalam Proses | Biru `#1D4ED8` |
| Perlu Perbaikan | Kuning `#D97706` |
| Selesai | Hijau `#16A34A` |

### Tabel Permohonan
Kolom: **No · ID Permohonan · Jenis Uji · Nomor Sarana · Tanggal Pengajuan · Status · Aksi**

- `ID Permohonan`: JetBrains Mono, warna biru
- `Jenis Uji`: type-pill (Uji Pertama = t-blue, Uji Berkala = t-teal, Uji Ulang = t-amber)
- `Nomor Sarana`: JetBrains Mono
- `Status`: sdot-badge sesuai tabel di bawah
- `Aksi`: btn-detail → halaman detail permohonan

### Status & Warna Badge

| Status | Badge Class | Makna |
|---|---|---|
| Draf | `s-gray` | Disimpan, belum dikirim |
| Menunggu Verifikasi | `s-blue` | Sudah dikirim, belum diproses |
| Perlu Perbaikan | `s-amber` | Dikembalikan, pemohon harus revisi |
| Disetujui | `s-green` | Disetujui, lanjut ke pembayaran |
| Menunggu Pembayaran | `s-amber` | Sudah disetujui, belum bayar |
| Terjadwal | `s-teal` | Bayar lunas, jadwal ditetapkan |
| Selesai | `s-green` | Pengujian selesai |
| Ditolak | `s-red` | Permohonan ditolak |

### Filter
- Dropdown: Jenis Uji · Status
- Search: ID permohonan / nomor sarana
- Tampilkan N entri

### Tombol Utama
`+ Ajukan Permohonan Baru` (btn-primary, kanan atas) → `form-wizard.html`

---

## Halaman 2 — Form Wizard (`form-wizard.html`)

### Stepper (5 langkah)
```
① Data Pemohon → ② Referensi Sarana → ③ Jenis & Jadwal → ④ Upload Dokumen → ⑤ Review & Kirim
```
- Aktif: lingkaran biru · Selesai: lingkaran hijau + centang · Belum: abu

### Navigasi
- `Sebelumnya` (btn-ghost) · `Selanjutnya` (btn-primary)
- Validasi per-step sebelum lanjut
- Data tersimpan di memori saat navigasi mundur

---

### Step 1 — Data Pemohon

| Field | Tipe | Wajib |
|---|---|---|
| Nama Badan Usaha | Text | ✓ |
| Nomor Izin Usaha | Text (mono) | ✓ |
| Nama Penanggung Jawab | Text | ✓ |
| Jabatan | Text | ✓ |
| Nomor Telepon | Tel | ✓ |
| Email | Email | ✓ |
| Alamat Kantor | Textarea | ✓ |

### Step 2 — Referensi Sarana

> Info box biru: "Data teknis lengkap sarana diambil dari sistem registrasi sarana. Pastikan nomor registrasi yang dimasukkan sudah benar."

| Field | Tipe | Wajib |
|---|---|---|
| Nomor Registrasi Sarana | Text (mono) | ✓ |
| Jenis Sarana | Dropdown | ✓ |
| Nama / Tipe Sarana | Text | ✓ |
| Tahun Pembuatan | Number (YYYY) | ✓ |
| Catatan Tambahan | Textarea | — |

### Step 3 — Jenis & Jadwal Uji

> Info box warning: "Jadwal final ditentukan oleh petugas setelah permohonan disetujui. Tanggal preferensi bersifat tidak mengikat."

| Field | Tipe | Wajib |
|---|---|---|
| Jenis Permohonan Uji | Radio (Uji Pertama / Berkala / Ulang) | ✓ |
| Lokasi Uji Preferensi | Dropdown | ✓ |
| Tanggal Preferensi Mulai | Date picker | ✓ |
| Tanggal Preferensi Selesai | Date picker | ✓ |
| Keterangan Khusus | Textarea | — |

### Step 4 — Upload Dokumen

| Dokumen | Format | Maks | Wajib |
|---|---|---|---|
| Surat Permohonan Resmi | PDF | 5 MB | ✓ |
| Dokumen Teknis Sarana | PDF / ZIP | 20 MB | ✓ |
| Surat Kuasa (jika dikuasakan) | PDF | 5 MB | — |
| Dokumen Pendukung Lainnya | PDF / JPG / PNG | 10 MB | — |

Setiap item: drag-and-drop area + tombol `Pilih File` + tampilkan nama file & ukuran setelah upload + tombol hapus (×).

### Step 5 — Review & Kirim

- Summary read-only per section + tombol `Edit` per section untuk kembali ke step terkait
- Checkbox konfirmasi (wajib): *"Saya menyatakan bahwa seluruh data dan dokumen yang dilampirkan adalah benar dan dapat dipertanggungjawabkan secara hukum."*
- `Simpan sebagai Draf` (btn-secondary-outline) · `Kirim Permohonan` (btn-primary)

---

## Alur End-to-End

```
Pemohon isi wizard (5 step)
    ↓
Kirim → Menunggu Verifikasi
    ↓
Petugas verifikasi
    ├── Perlu Perbaikan → Pemohon revisi & kirim ulang
    └── Disetujui
          ↓
        Menunggu Pembayaran → bayar via payment-blu
          ↓
        Terjadwal → jadwal uji ditetapkan petugas
          ↓
        Selesai
```

## Di Luar Scope
- Halaman detail/timeline per permohonan
- Integrasi API sistem registrasi sarana
- Modul payment (sudah ada di `payment-blu/`)
- Notifikasi email/sistem
