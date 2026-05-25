#!/usr/bin/env python3
"""
Restore all module headers - Quick version
Usage: python3 restore_all.py
"""

import os
import re

HEADER_TEMPLATE = '''        <div class="sdm-page-header">
          <h1 class="sdm-page-title">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">{icon}</svg>
            {title}
          </h1>
          <nav class="sdm-breadcrumb" aria-label="Lokasi halaman">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="13" height="13" style="color:var(--color-subtle)"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            <span class="sdm-breadcrumb-sep">*</span>
            <span>{parent}</span>
            <span class="sdm-breadcrumb-sep">•</span>
            <span class="sdm-breadcrumb-current">{current}</span>
          </nav>
        </div>

'''

DASHBOARD_HEADER = '''      <!-- Page Header -->
      <div class="page-header">
        <div>
          <nav class="breadcrumb" aria-label="Lokasi halaman">
            <span>Portal</span>
            <span class="breadcrumb-sep" aria-hidden="true">/</span>
            <span class="breadcrumb-current" aria-current="page">Dashboard</span>
          </nav>
          <h1 class="page-title">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
            Dashboard Portal
          </h1>
        </div>
        <div class="header-right">
          <div class="date-chip" aria-label="Data per tanggal 8 Mei 2026">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            8 Mei 2026
          </div>
          <button class="btn-tambah no-hover" aria-label="Muat ulang data">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="23 4 23 10 17 10"/>
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
            </svg>
            Perbarui Data
          </button>
        </div>
      </div>

'''

def insert_after_view(content, view_id, header):
    """Insert header after view div"""
    pattern = rf'(<div class="page-view[^"]*" id="{view_id}">\s*)'
    if re.search(pattern, content):
        return re.sub(pattern, r'\1\n' + header, content)
    return content

def main():
    files_restored = []
    
    # Process dashboard.html
    if os.path.exists('dashboard.html'):
        with open('dashboard.html', 'r') as f:
            content = f.read()
        
        original = content
        
        # Add dashboard header
        content = insert_after_view(content, 'view-dashboard', DASHBOARD_HEADER)
        
        # Add other module headers
        headers_map = [
            ('view-unit-kerja', 'Kelola Data Unit Kerja', '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>', 'SDM', 'Unit Kerja'),
            ('view-jabatan', 'Kelola Data Jabatan', '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>', 'SDM', 'Jabatan'),
            ('view-data-pegawai', 'Kelola Data Pegawai', '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>', 'SDM', 'Data Pegawai'),
            ('view-akses-sso', 'Kelola Data Akses SSO', '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>', 'Manajemen Portal', 'Akses SSO'),
            ('view-masterisasi-aplikasi', 'Kelola Data Master Aplikasi', '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>', 'Masterisasi', 'Aplikasi'),
            ('view-masterisasi-level-aplikasi', 'Kelola Data Level Aplikasi', '<path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2z"/><path d="M7 7h.01"/>', 'Masterisasi', 'Level Aplikasi'),
            ('view-pengelola-portal', 'Pengelolaan Portal', '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>', 'Manajemen Portal', 'Pengelola Portal'),
            ('view-sik-data-kantor', 'Data Kantor SIK', '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>', 'Data SIK', 'Data Kantor'),
            ('view-sik-pegawai-kantor', 'Data Pegawai Kantor', '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>', 'Data SIK', 'Pegawai Kantor'),
            ('view-sik-pegawai-honorer', 'Data Pegawai Honorer', '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>', 'Data SIK', 'Pegawai Honorer'),
            ('view-sik-cek-data-asn', 'Cek Data ASN', '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>', 'Data SIK', 'Cek Data ASN'),
            ('view-mp-banner', 'Kelola Banner', '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>', 'Manajemen Portal', 'Banner'),
        ]
        
        for view_id, title, icon, parent, current in headers_map:
            if view_id != 'view-dashboard':
                header = HEADER_TEMPLATE.format(icon=icon, title=title, parent=parent, current=current)
                content = insert_after_view(content, view_id, header)
        
        if content != original:
            with open('dashboard.html', 'w') as f:
                f.write(content)
            files_restored.append('dashboard.html')
            print('✅ dashboard.html')
    
    # Process data-sik.html
    if os.path.exists('data-sik.html'):
        with open('data-sik.html', 'r') as f:
            content = f.read()
        original = content
        
        sik_headers = [
            ('view-sik-data-kantor', 'Data Kantor SIK', '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>', 'Data SIK', 'Data Kantor'),
            ('view-sik-pegawai-kantor', 'Data Pegawai Kantor', '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>', 'Data SIK', 'Pegawai Kantor'),
            ('view-sik-pegawai-honorer', 'Data Pegawai Honorer', '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>', 'Data SIK', 'Pegawai Honorer'),
            ('view-sik-cek-data-asn', 'Cek Data ASN', '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>', 'Data SIK', 'Cek Data ASN'),
        ]
        
        for view_id, title, icon, parent, current in sik_headers:
            header = HEADER_TEMPLATE.format(icon=icon, title=title, parent=parent, current=current)
            content = insert_after_view(content, view_id, header)
        
        if content != original:
            with open('data-sik.html', 'w') as f:
                f.write(content)
            files_restored.append('data-sik.html')
            print('✅ data-sik.html')
    
    # Process manajemen-portal.html
    if os.path.exists('manajemen-portal.html'):
        with open('manajemen-portal.html', 'r') as f:
            content = f.read()
        original = content
        
        mp_headers = [
            ('view-pengelola-portal', 'Pengelolaan Portal', '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>', 'Manajemen Portal', 'Pengelola Portal'),
            ('view-mp-banner', 'Kelola Banner', '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>', 'Manajemen Portal', 'Banner'),
        ]
        
        for view_id, title, icon, parent, current in mp_headers:
            header = HEADER_TEMPLATE.format(icon=icon, title=title, parent=parent, current=current)
            content = insert_after_view(content, view_id, header)
        
        if content != original:
            with open('manajemen-portal.html', 'w') as f:
                f.write(content)
            files_restored.append('manajemen-portal.html')
            print('✅ manajemen-portal.html')
    
    # Process single-view files
    single_files = [
        ('akses-sso.html', 'Kelola Data Akses SSO', '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>', 'Manajemen Portal', 'Akses SSO'),
        ('api.html', 'Dokumentasi API', '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>', 'Portal', 'API'),
        ('pengelola-portal.html', 'Pengelolaan Portal', '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>', 'Manajemen Portal', 'Pengelola Portal'),
        ('website_info_view.html', 'Informasi Website', '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>', 'Portal', 'Website'),
    ]
    
    for filename, title, icon, parent, current in single_files:
        if os.path.exists(filename):
            with open(filename, 'r') as f:
                content = f.read()
            original = content
            
            # For single-view files, insert after page-view active
            pattern = r'(<div class="page-view active"[^>]*>\s*)'
            header = HEADER_TEMPLATE.format(icon=icon, title=title, parent=parent, current=current)
            content = re.sub(pattern, r'\1\n' + header, content)
            
            if content != original:
                with open(filename, 'w') as f:
                    f.write(content)
                files_restored.append(filename)
                print(f'✅ {filename}')
    
    print(f"\n📊 Total files restored: {len(files_restored)}")
    print("Done! 🎉")

if __name__ == '__main__':
    main()