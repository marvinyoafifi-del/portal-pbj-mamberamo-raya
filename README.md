# Portal PBJ Kabupaten Mamberamo Raya

Prototipe portal informasi dan layanan Pengadaan Barang/Jasa Pemerintah Kabupaten Mamberamo Raya.

## Fitur

- Dashboard ringkasan data RUP 2026
- Informasi paket dan status realisasi
- Akses resmi ke SPSE, SiRUP, SiKAP, dan JDIH LKPP
- Pusat dokumen, edukasi PBJ, PPID, dan pengaduan
- Pencarian konten
- Tampilan responsif dan aksesibel

Data statistik contoh diolah dari dokumen audit PBJ Kabupaten Mamberamo Raya per 24 Juli 2026. Konten organisasi, kontak, dokumen publik, dan formulir layanan masih memerlukan verifikasi sebelum digunakan sebagai portal produksi.

## Menjalankan secara lokal

Persyaratan: Node.js 22.13 atau versi lebih baru.

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Pemeriksaan produksi

```bash
npm run build
```

## Struktur utama

- `app/page.tsx` — halaman dan interaksi portal
- `app/globals.css` — sistem visual dan tampilan responsif
- `app/layout.tsx` — metadata dan struktur dokumen
- `public/og.png` — kartu pratinjau sosial
- `.openai/hosting.json` — konfigurasi OpenAI Sites

## Status

Versi ini merupakan prototipe tampilan publik. Panel admin/CMS, basis data produksi, autentikasi petugas, unggahan dokumen, dan alur persetujuan konten belum diaktifkan.
