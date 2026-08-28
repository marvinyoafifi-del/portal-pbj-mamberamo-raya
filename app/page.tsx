"use client";

import { useMemo, useState } from "react";

const services = [
  { icon: "↗", title: "SPSE Mamberamo Raya", text: "Sistem pengadaan elektronik", color: "blue", href: "https://spse.inaproc.id/mamberamorayakab/" },
  { icon: "◎", title: "SiRUP Mamberamo Raya", text: "Rekap Rencana Umum Pengadaan", color: "teal", href: "https://sirup.inaproc.id/sirup/rekap/klpd/D350" },
  { icon: "◈", title: "SiKAP", text: "Sistem Informasi Kinerja Penyedia", color: "amber", href: "https://sikap.inaproc.id/" },
  { icon: "§", title: "JDIH LKPP", text: "Regulasi pengadaan nasional", color: "violet", href: "https://jdih.lkpp.go.id/regulation/index" },
  { icon: "◇", title: "Konsultasi PBJ", text: "Ajukan konsultasi dan pendampingan", color: "green", href: "#pengaduan" },
  { icon: "!", title: "Pengaduan", text: "Sampaikan dan lacak pengaduan", color: "red", href: "#pengaduan" },
];

const documents = [
  { type: "Laporan Kinerja", title: "Laporan Pencapaian Indikator Kinerja Utama UKPBJ", date: "2026", format: "PDF" },
  { type: "Perencanaan", title: "RENSTRA Lengkap Sekretariat Daerah 2026", date: "2026", format: "PDF" },
  { type: "Anggaran", title: "DPA Pengadaan Barang dan Jasa", date: "2026", format: "PDF" },
  { type: "Keuangan", title: "Realisasi Kegiatan PBJ per 29 Juli 2026", date: "29 Jul 2026", format: "PDF" },
  { type: "Organisasi", title: "Perbup Nomor 30 Tahun 2025 tentang SOTK Setda", date: "2025", format: "PDF" },
  { type: "Penetapan", title: "Surat Keputusan Kelompok Kerja Pemilihan", date: "2026", format: "PDF" },
];

const packages = [
  ["Peningkatan Jalan Ruas Dinas Otonom – Kali Batiwa", "Dinas PUPR", "Tender", "Selesai"],
  ["Penyusunan Kajian Risiko Bencana Kabupaten", "BPBD", "Seleksi", "Berlangsung"],
  ["Belanja Obat dan Bahan Medis Habis Pakai", "Dinas Kesehatan", "E-Purchasing", "Proses"],
  ["Penyusunan Dokumen KLHS", "Dinas Pertanahan & LH", "Seleksi", "Selesai"],
];

const navigation = ["Profil", "Layanan", "Informasi Pengadaan", "Edukasi", "Dokumen", "PPID", "Publikasi"];

export default function Home() {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return [];
    return [...documents.map((d) => d.title), ...services.map((s) => s.title), ...packages.map((p) => p[0])]
      .filter((item) => item.toLowerCase().includes(q)).slice(0, 6);
  }, [query]);

  const action = (name: string) => {
    setNotice(`${name} siap dihubungkan setelah URL resmi dikonfirmasi.`);
    window.setTimeout(() => setNotice(""), 4200);
  };

  return (
    <main>
      <a className="skip-link" href="#content">Lewati ke konten utama</a>
      <div className="utility-bar">
        <div className="container utility-inner">
          <span>Portal Resmi Pemerintah Kabupaten Mamberamo Raya</span>
          <div><span className="status-dot" /> Sistem layanan aktif <span className="utility-divider" /> WIT</div>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <a href="#beranda" className="brand" aria-label="Beranda Portal PBJ">
            <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
            <span><strong>PORTAL PBJ</strong><small>KABUPATEN MAMBERAMO RAYA</small></span>
          </a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Buka menu">{menuOpen ? "×" : "☰"}</button>
          <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Navigasi utama">
            <a className="active" href="#beranda">Beranda</a>
            {navigation.map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
          </nav>
          <button className="complaint-button" onClick={() => document.querySelector("#pengaduan")?.scrollIntoView({ behavior: "smooth" })}>Buat Pengaduan <span>→</span></button>
        </div>
      </header>

      <section className="hero" id="beranda">
        <div className="river-lines" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><span>◆</span> Pengadaan terbuka, layanan terhubung</span>
            <h1>Pengadaan transparan untuk <em>Mamberamo Raya</em> yang maju.</h1>
            <p>Akses informasi, layanan, dokumen, dan data pengadaan Pemerintah Kabupaten Mamberamo Raya dalam satu portal.</p>
            <div className="search-wrap" role="search">
              <span aria-hidden="true">⌕</span>
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Cari paket, dokumen, berita, atau layanan..." aria-label="Cari portal" />
              <button onClick={() => query && document.querySelector("#search-results")?.scrollIntoView({ behavior: "smooth" })}>Cari</button>
            </div>
            {query && <div id="search-results" className="search-results" aria-live="polite">
              {results.length ? results.map((r) => <button key={r} onClick={() => setNotice(`Membuka hasil: ${r}`)}>{r}<span>→</span></button>) : <p>Tidak ada hasil. Coba kata kunci lain.</p>}
            </div>}
            <div className="hero-links"><a href="#statistik">Lihat statistik pengadaan <span>↓</span></a><a href="#dokumen">Jelajahi dokumen <span>→</span></a></div>
          </div>

          <aside className="data-card" aria-label="Ringkasan data pengadaan">
            <div className="data-card-head"><div><span>DATA TERKINI</span><strong>Ringkasan PBJ 2026</strong></div><span className="live-pill">● Terverifikasi</span></div>
            <div className="primary-stat"><span>Total Pagu RUP</span><strong>Rp128,45 <small>miliar</small></strong><p>Data SiRUP yang dihimpun per 24 Juli 2026</p></div>
            <div className="mini-stats"><div><strong>408</strong><span>Paket RUP</span></div><div><strong>13</strong><span>OPD</span></div><div><strong>9</strong><span>Paket terealisasi</span></div></div>
            <div className="progress-block"><div><span>Pengadaan melalui penyedia</span><strong>56,9%</strong></div><div className="progress"><i style={{ width: "56.9%" }} /></div><small>232 penyedia · 176 swakelola</small></div>
            <a href="#statistik" className="card-link">Buka dashboard lengkap <span>↗</span></a>
          </aside>
        </div>
      </section>

      <section className="quick-section" id="layanan">
        <div className="container">
          <div className="section-heading"><div><span className="kicker">AKSES CEPAT</span><h2>Layanan utama dalam satu sentuhan</h2></div><p>Pilih layanan yang Anda perlukan. Tautan eksternal akan diberi penanda dan dibuka secara aman.</p></div>
          <div className="service-grid">{services.map((service) => <a key={service.title} className="service-card" href={service.href} target={service.href.startsWith("http") ? "_blank" : undefined} rel={service.href.startsWith("http") ? "noopener noreferrer" : undefined}>
            <span className={`service-icon ${service.color}`}>{service.icon}</span><span><strong>{service.title}</strong><small>{service.text}</small></span><b>→</b>
          </a>)}</div>
        </div>
      </section>

      <section className="dashboard-section" id="statistik">
        <div className="container dashboard-grid">
          <div className="dashboard-copy">
            <span className="kicker light">DASHBOARD TRANSPARANSI</span>
            <h2>Angka yang jelas.<br />Sumber yang dapat ditelusuri.</h2>
            <p>Ringkasan ini diolah dari dokumen audit PBJ Kabupaten Mamberamo Raya. Setiap indikator menampilkan periode dan sumber pembaruan.</p>
            <div className="metric-row"><div><span>Paket melalui penyedia</span><strong>232</strong></div><div><span>Paket swakelola</span><strong>176</strong></div><div><span>Komitmen PDN</span><strong>231</strong></div></div>
            <a href="#paket" className="outline-link">Telusuri paket pengadaan <span>→</span></a>
          </div>
          <div className="chart-card">
            <div className="chart-head"><div><strong>Komposisi RUP</strong><span>Menurut jenis pengadaan</span></div><button aria-label="Unduh data" onClick={() => setNotice("Ekspor data akan tersedia pada versi produksi.")}>↓</button></div>
            <div className="chart-body">
              <div className="donut" aria-label="Diagram komposisi paket"><div><strong>408</strong><span>paket</span></div></div>
              <div className="legend">
                <div><i className="c1" /><span>Swakelola</span><strong>176</strong></div>
                <div><i className="c2" /><span>Barang</span><strong>85</strong></div>
                <div><i className="c3" /><span>Konsultansi</span><strong>76</strong></div>
                <div><i className="c4" /><span>Konstruksi</span><strong>66</strong></div>
                <div><i className="c5" /><span>Jasa lainnya</span><strong>5</strong></div>
              </div>
            </div>
            <div className="chart-note"><span>i</span> Sumber: Data RUP Kabupaten Mamberamo Raya, 24 Juli 2026</div>
          </div>
        </div>
      </section>

      <section className="package-section" id="informasi-pengadaan">
        <div className="container" id="paket">
          <div className="section-heading compact"><div><span className="kicker">INFORMASI PENGADAAN</span><h2>Status paket terbaru</h2></div><a href="#paket">Lihat semua paket <span>→</span></a></div>
          <div className="table-wrap"><table><thead><tr><th>Nama paket</th><th>Perangkat daerah</th><th>Metode</th><th>Status</th><th /></tr></thead><tbody>{packages.map((p) => <tr key={p[0]}><td>{p[0]}</td><td>{p[1]}</td><td>{p[2]}</td><td><span className={`package-status ${p[3].toLowerCase()}`}>{p[3]}</span></td><td><button onClick={() => setNotice(`Detail ${p[0]} akan terhubung ke sumber resmi.`)} aria-label={`Lihat ${p[0]}`}>↗</button></td></tr>)}</tbody></table></div>
        </div>
      </section>

      <section className="documents-section" id="dokumen">
        <div className="container">
          <div className="section-heading compact"><div><span className="kicker">PUSAT DOKUMEN</span><h2>Dokumen publik terkini</h2></div><a href="#dokumen">Lihat perpustakaan <span>→</span></a></div>
          <div className="document-grid">{documents.map((doc) => <article key={doc.title} className="document-card"><div className="doc-icon">▤<span>{doc.format}</span></div><div><span>{doc.type}</span><h3>{doc.title}</h3><p>Diperbarui {doc.date}</p></div><button onClick={() => setNotice(`Pratinjau dokumen “${doc.title}” akan tersedia setelah dokumen disetujui untuk publikasi.`)} aria-label={`Lihat ${doc.title}`}>↓</button></article>)}</div>
        </div>
      </section>

      <section className="audience-section" id="edukasi">
        <div className="container audience-grid"><div><span className="kicker light">PUSAT EDUKASI PBJ</span><h2>Panduan sesuai peran Anda</h2><p>Temukan prosedur, video, template, dan jawaban praktis tanpa harus memahami seluruh istilah pengadaan.</p></div><div className="audience-links"><a href="#edukasi"><span>01</span><strong>Untuk OPD, PPK & Pejabat Pengadaan</strong><b>→</b></a><a href="#edukasi"><span>02</span><strong>Untuk Pokja Pemilihan</strong><b>→</b></a><a href="#edukasi"><span>03</span><strong>Untuk Penyedia</strong><b>→</b></a><a href="#edukasi"><span>04</span><strong>Untuk Masyarakat</strong><b>→</b></a></div></div>
      </section>

      <section className="trust-section" id="ppid">
        <div className="container trust-grid"><div className="trust-card"><span>PPID</span><h2>Informasi publik, mudah diminta dan dilacak.</h2><p>Ajukan permohonan informasi atau keberatan secara daring dengan nomor registrasi dan status yang jelas.</p><button onClick={() => action("Permohonan informasi PPID")}>Ajukan permohonan <span>→</span></button></div><div className="trust-card complaint" id="pengaduan"><span>PENGADUAN</span><h2>Suara Anda membantu layanan menjadi lebih baik.</h2><p>Sampaikan pengaduan secara aman. Portal akan memberi nomor tiket dan melindungi data pribadi Anda.</p><button onClick={() => action("Formulir pengaduan")}>Buat pengaduan <span>→</span></button></div></div>
      </section>

      <section className="profile-section" id="profil"><div className="container profile-grid"><div><span className="kicker">TENTANG KAMI</span><h2>Bagian Pengadaan Barang dan Jasa Kabupaten Mamberamo Raya</h2></div><p>Portal ini menjadi pusat transparansi, layanan, edukasi, dan dokumen pengadaan. Informasi organisasi, struktur, tugas dan fungsi akan dilengkapi setelah proses verifikasi dokumen resmi.</p></div></section>
      <section className="publication-anchor" id="publikasi" aria-label="Publikasi"><div className="container"><strong>Publikasi & pengumuman</strong><span>Modul berita, agenda, galeri, dan siaran pers siap dikelola melalui CMS pada tahap produksi.</span></div></section>

      <footer>
        <div className="container footer-grid"><div className="footer-brand"><a href="#beranda" className="brand light-brand"><span className="brand-mark"><i /><i /><i /></span><span><strong>PORTAL PBJ</strong><small>KABUPATEN MAMBERAMO RAYA</small></span></a><p>Pusat informasi dan layanan Pengadaan Barang/Jasa Pemerintah Kabupaten Mamberamo Raya.</p><span className="demo-label">PROTOTIPE · DATA AUDIT 2026</span></div><div><strong>Portal</strong><a href="#profil">Profil</a><a href="#layanan">Layanan</a><a href="#statistik">Statistik</a><a href="#dokumen">Dokumen</a></div><div><strong>Layanan publik</strong><a href="#ppid">PPID</a><a href="#pengaduan">Pengaduan</a><a href="#edukasi">FAQ & edukasi</a><a href="#beranda">Pencarian</a></div><div><strong>Informasi</strong><a href="#profil">Aksesibilitas</a><a href="#profil">Kebijakan privasi</a><a href="#profil">Syarat penggunaan</a><a href="#profil">Peta situs</a></div></div>
        <div className="container footer-bottom"><span>© 2026 Pemerintah Kabupaten Mamberamo Raya</span><span>Versi contoh · Konten publikasi menunggu persetujuan</span></div>
      </footer>
      {notice && <div className="toast" role="status"><span>✓</span>{notice}<button onClick={() => setNotice("")} aria-label="Tutup">×</button></div>}
    </main>
  );
}
