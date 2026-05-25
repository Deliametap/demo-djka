#!/usr/bin/env python3
"""
Script untuk restore header modul di semua file HTML
Usage: python3 restore_headers.py
"""

import re
import os

def add_header_to_view(content, view_id, header_html):
    """Add header after view div opening tag"""
    pattern = rf'(<div class="page-view[^"]*" id="{view_id}">\s*)'
    replacement = r'\1\n' + header_html
    return re.sub(pattern, replacement, content)

def add_header_to_file(content, header_html):
    """Add header after page-view active tag for single-view files"""
    pattern = r'(<div class="page-view active"[^>]*>\s*)'
    replacement = r'\1\n' + header_html
    return re.sub(pattern, replacement, content)

# Header templates
def sdm_header(title, icon, parent, current):
    return f'''        <div class="sdm-page-header">
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

def dashboard_header():
    return '''      <!-- Page Header -->
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

def process_file(filepath, headers):
    """Process a single file"""
    if not os.path.exists(filepath):
        print(f"❌ File not found: {filepath}")
        return False
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    for header in headers:
        if header.get('type') == 'dashboard_page_header':
            # Special handling for dashboard header
            content = add_header_to_view(content, header['view_id'], dashboard_header())
        elif header.get('view_id'):
            content = add_header_to_view(content, header['view_id'], 
                sdm_header(header['title'], header.get('icon', ''), header.get('parent', ''), header.get('current', '')))
        else:
            content = add_header_to_file(content,
                sdm_header(header['title'], header.get('icon', ''), header.get('parent', ''), header.get('current', '')))
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✅ Restored: {filepath}")
        return True
    else:
        print(f"⚠️  No changes: {filepath}")
        return False

def main():
    # File configurations
    files_to_process = {
        'dashboard.html': [
            {'view_id': 'view-dashboard', 'type': 'dashboard_page_header'},
            {'view_id': 'view-unit-kerja', 'title': 'Kelola Data Unit Kerja', 'icon': '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>', 'parent': 'SDM', 'current': 'Unit Kerja'},
            {'view_id': 'view-jabatan', 'title': 'Kelola Data Jabatan', 'icon': '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>', 'parent': 'SDM', 'current': 'Jabatan'},
            {'view_id': 'view-data-pegawai', 'title': 'Kelola Data Pegawai', 'icon': '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>', 'parent': 'SDM', 'current': 'Data Pegawai'},
            {'view_id': 'view-akses-sso', 'title': 'Kelola Data Akses SSO', 'icon': '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>', 'parent': 'Manajemen Portal', 'current': 'Akses SSO'},
            {'view_id': 'view-masterisasi-aplikasi', 'title': 'Kelola Data Master Aplikasi', 'icon': '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>', 'parent': 'Masterisasi', 'current': 'Aplikasi'},
            {'view_id': 'view-masterisasi-level-aplikasi', 'title': 'Kelola Data Level Aplikasi', 'icon': '<path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2z"/><path d="M7 7h.01"/>', 'parent': 'Masterisasi', 'current': 'Level Aplikasi'},
            {'view_id': 'view-pengelola-portal', 'title': 'Pengelolaan Portal', 'icon': '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>', 'parent': 'Manajemen Portal', 'current': 'Pengelola Portal'},
            {'view_id': 'view-sik-data-kantor', 'title': 'Data Kantor SIK', 'icon': '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>', 'parent': 'Data SIK', 'current': 'Data Kantor'},
            {'view_id': 'view-sik-pegawai-kantor', 'title': 'Data Pegawai Kantor', 'icon': '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>', 'parent': 'Data SIK', 'current': 'Pegawai Kantor'},
            {'view_id': 'view-sik-pegawai-honorer', 'title': 'Data Pegawai Honorer', 'icon': '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>', 'parent': 'Data SIK', 'current': 'Pegawai Honorer'},
            {'view_id': 'view-sik-cek-data-asn', 'title': 'Cek Data ASN', 'icon': '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>', 'parent': 'Data SIK', 'current': 'Cek Data ASN'},
            {'view_id': 'view-mp-banner', 'title': 'Kelola Banner', 'icon': '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>', 'parent': 'Manajemen Portal', 'current': 'Banner'},
        ],
        'akses-sso.html': [
            {'title': 'Kelola Data Akses SSO', 'icon': '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>', 'parent': 'Manajemen Portal', 'current': 'Akses SSO'}
        ],
        'api.html': [
            {'title': 'Dokumentasi API', 'icon': '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>', 'parent': 'Portal', 'current': 'API'}
        ],
        'data-sik.html': [
            {'view_id': 'view-sik-data-kantor', 'title': 'Data Kantor SIK', 'icon': '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>', 'parent': 'Data SIK', 'current': 'Data Kantor'},
            {'view_id': 'view-sik-pegawai-kantor', 'title': 'Data Pegawai Kantor', 'icon': '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>', 'parent': 'Data SIK', 'current': 'Pegawai Kantor'},
            {'view_id': 'view-sik-pegawai-honorer', 'title': 'Data Pegawai Honorer', 'icon': '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>', 'parent': 'Data SIK', 'current': 'Pegawai Honorer'},
            {'view_id': 'view-sik-cek-data-asn', 'title': 'Cek Data ASN', 'icon': '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>', 'parent': 'Data SIK', 'current': 'Cek Data ASN'},
        ],
        'manajemen-portal.html': [
            {'view_id': 'view-pengelola-portal', 'title': 'Pengelolaan Portal', 'icon': '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>', 'parent': 'Manajemen Portal', 'current': 'Pengelola Portal'},
            {'view_id': 'view-mp-banner', 'title': 'Kelola Banner', 'icon': '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>', 'parent': 'Manajemen Portal', 'current': 'Banner'},
        ],
        'pengelola-portal.html': [
            {'title': 'Pengelolaan Portal', 'icon