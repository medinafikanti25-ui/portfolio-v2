import React, { useState } from 'react';

type CategoryType = 'SEMUA' | 'DJKI' | 'JURNAL' | 'MEDIA';

interface Item {
  id: string;
  code: string;
  category: CategoryType;
  badgeLabel: string;
  title: string;
  publisherOrOrg: string;
  description?: string;
  dateOrYear: string;
  link?: string;
}

const itemsData: Item[] = [
  /* --- HKI / DJKI --- */
  {
    id: 'hki-1',
    code: 'HKI-001298453',
    category: 'DJKI',
    badgeLabel: 'Hak Cipta (HKI)',
    title: 'Program Komputer: Kost Nuansa',
    publisherOrOrg: 'DJKI Kementerian Hukum RI',
    description: 'Pencatatan resmi Hak Cipta Perangkat Lunak (Program Komputer) oleh Direktorat Jenderal Kekayaan Intelektual.',
    dateOrYear: 'Juni 2026',
    link: '/sertifikat-djki.pdf', // File disimpan di folder public/sertifikat-djki.pdf
  },

  /* --- JURNAL ILMIAH --- */
  {
    id: 'jurnal-1',
    code: 'PUB-JUTECH',
    category: 'JURNAL',
    badgeLabel: 'Jurnal Ilmiah',
    title: 'Publikasi Jurnal JUTECH - Universitas Pamulang',
    publisherOrOrg: 'JUTECH (STKIP Persada)',
    description: 'Penelitian akademis dan artikel ilmiah bidang teknologi oleh Medina Fikanti.',
    dateOrYear: 'Jurnal Ilmiah',
    link: 'https://jurnal.stkippersada.ac.id/jurnal/index.php/jutech/search/authors/view?firstName=Medina&middleName=&lastName=Fikanti&affiliation=Universitas%20Pamulang&country=ID',
  },
  {
    id: 'jurnal-2',
    code: 'PUB-INOTERA',
    category: 'JURNAL',
    badgeLabel: 'Jurnal Ilmiah',
    title: 'Artikel Jurnal INOTERA',
    publisherOrOrg: 'INOTERA (Poltas)',
    description: 'Publikasi hasil riset dan penerapan teknologi pada Jurnal INOTERA.',
    dateOrYear: 'Jurnal Ilmiah',
    link: 'https://inotera.poltas.ac.id/index.php/inotera/article/view/596',
  },

  /* --- MEDIA MASSA --- */
  {
    id: 'media-1',
    code: 'MED-KUMP-01',
    category: 'MEDIA',
    badgeLabel: 'Media Massa',
    title: 'Nini Thowong: Tradisi Bertanya Sebelum Teknologi Mengambil Alih Peradaban',
    publisherOrOrg: 'Kumparan',
    description: 'Opini mengenai perbandingan antara tradisi budaya lokal dan perkembangan peradaban teknologi.',
    dateOrYear: 'Kumparan',
    link: 'https://kumparan.com/medina-fikanti/nini-thowong-tradisi-bertanya-sebelum-teknologi-mengambil-alih-peradaban-2837hWtDSca',
  },
  {
    id: 'media-2',
    code: 'MED-KUMP-02',
    category: 'MEDIA',
    badgeLabel: 'Media Massa',
    title: 'Tari Seblang Olehsari di Era Digital: Pelestarian Budaya atau Sekadar Komoditas',
    publisherOrOrg: 'Kumparan',
    description: 'Ulasan kritis mengenai pelestarian tarian tradisional Seblang Olehsari di tengah arus digitalisasi.',
    dateOrYear: 'Kumparan',
    link: 'https://kumparan.com/medina-fikanti/tari-seblang-olehsari-di-era-digital-pelestarian-budaya-atau-sekadar-komoditas-275KWzryX60',
  },
  {
    id: 'media-3',
    code: 'MED-MS-01',
    category: 'MEDIA',
    badgeLabel: 'Media Massa',
    title: 'Bahaya Penyalahgunaan Penerapan Artificial Intelligence dalam Kehidupan Sehari-hari',
    publisherOrOrg: 'Media Sembilan',
    description: 'Artikel opini mengenai potensi risiko dan dampak negatif etika penggunaan AI di masyarakat.',
    dateOrYear: '8 Des 2024',
    link: 'https://mediasembilan.com/2024/12/08/bahaya-penyalahgunaan-penerapan-artificial-intelligence-dalam-kehidupan-sehari-hari/',
  },
  {
    id: 'media-4',
    code: 'MED-MS-02',
    category: 'MEDIA',
    badgeLabel: 'Media Massa',
    title: 'Manfaat Teknologi dalam Dunia Kesehatan',
    publisherOrOrg: 'Media Sembilan',
    description: 'Pembahasan mengenai kontribusi dan peranan penting teknologi mutakhir dalam dunia medis.',
    dateOrYear: '7 Des 2025',
    link: 'https://mediasembilan.com/2025/12/07/manfaat-teknologi-dalam-dunia-kesehatan/',
  },
    {
    id: 'media-5',
    code: 'MED-KP-01',
    category: 'MEDIA',
    badgeLabel: 'Media Massa',
    title: 'Pengabdian kepada Masyarakat (PKM) Universitas Pamulang di SMP Muhammadiyah 44 Tangerang Selatan',
    publisherOrOrg: 'kumparan',
    description: 'Liputan kegiatan PKM Teknik Informatika UNPAM yang memperkenalkan SIABSEN, sistem absensi berbasis website dan kode QR untuk siswa dan guru SMP Muhammadiyah 44 Tangerang Selatan.',
    dateOrYear: '13 Nov 2026',
    link: 'https://kumparan.com/medina-fikanti/pengabdian-kepada-masyarakat-pkm-universitas-pamulang-di-smp-muhammadiyah-44-tangerang-selatan-28Ylb1pJrNI',
  },
];

const filters: { value: CategoryType; label: string }[] = [
  { value: 'SEMUA', label: '[SEMUA]' },
  { value: 'DJKI', label: '[DJKI / HKI]' },
  { value: 'JURNAL', label: '[JURNAL ILMIAH]' },
  { value: 'MEDIA', label: '[MEDIA MASSA]' },
];

export const Achievements: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryType>('SEMUA');

  const filteredItems = itemsData.filter((item) => {
    if (activeFilter === 'SEMUA') return true;
    return item.category === activeFilter;
  });

  return (
    <div className="rc-section">
      <div className="rc-divider" />
      <div className="rc-sh">
        <span className="rc-label">• SECTION 04</span>
        <span>RECEIPT #2026-ACH // HONORS &amp; PUBLICATIONS</span>
      </div>
      <p className="rc-sub">[RECORDS]: Selected IP registrations, journal articles, and press publications.</p>

      <div className="rc-fl">
        <span className="rc-fl-label">FILTER BY:</span>
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            aria-pressed={activeFilter === f.value}
            className={`rc-fl-btn ${activeFilter === f.value ? 'active' : ''}`}
            onClick={() => setActiveFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="rc-items">
        {filteredItems.map((item) => (
          <article key={item.id} className="rc-item">
            <div className="rc-item-top">
              <span className="rc-code">{item.code}</span>
              <span className="rc-purple rc-badge-txt">[{item.badgeLabel}]</span>
            </div>
            <h3 className="rc-item-title">{item.title}</h3>
            <span className="rc-org">@ {item.publisherOrOrg}</span>
            {item.description && <p className="rc-item-desc">{item.description}</p>}

            <div className="rc-item-foot">
              <span className="rc-mute">{item.dateOrYear}</span>
              {item.link && (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="rc-btn primary sm">
                  VIEW &rsaquo;
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
