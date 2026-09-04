import React, { useState } from 'react';
import './Achievements.css';

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
];

export const Achievements: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryType>('SEMUA');

  const filteredItems = itemsData.filter((item) => {
    if (activeFilter === 'SEMUA') return true;
    return item.category === activeFilter;
  });

  return (
    <div className="achievements-wrapper" id="achievements">
      <div className="receipt-container">
        {/* Header Struk */}
        <div className="receipt-top-info">
          <span className="receipt-code">RECEIPT #2026-ACH</span>
          <span className="receipt-owner">MEDINA</span>
        </div>

        <div className="receipt-title-wrapper">
          <h2 className="receipt-big-title">
            <span className="title-gray">HONORS &amp;</span> <span className="title-purple">PUBLICATIONS</span>
          </h2>
          <p className="receipt-subtitle">
            [RECORDS]: Selected IP registrations, journal articles, and press publications.
          </p>
        </div>

        <div className="receipt-dashed-line"></div>

        {/* Filter Bar */}
        <div className="receipt-filter-bar">
          <span className="filter-label">FILTER BY:</span>
          <div className="filter-buttons">
            <button
              className={`filter-btn ${activeFilter === 'SEMUA' ? 'active' : ''}`}
              onClick={() => setActiveFilter('SEMUA')}
            >
              [SEMUA]
            </button>
            <button
              className={`filter-btn ${activeFilter === 'DJKI' ? 'active' : ''}`}
              onClick={() => setActiveFilter('DJKI')}
            >
              [DJKI / HKI]
            </button>
            <button
              className={`filter-btn ${activeFilter === 'JURNAL' ? 'active' : ''}`}
              onClick={() => setActiveFilter('JURNAL')}
            >
              [JURNAL ILMIAH]
            </button>
            <button
              className={`filter-btn ${activeFilter === 'MEDIA' ? 'active' : ''}`}
              onClick={() => setActiveFilter('MEDIA')}
            >
              [MEDIA MASSA]
            </button>
          </div>
        </div>

        <div className="receipt-dashed-line"></div>

        {/* Cards Grid Standard */}
        <div className="cards-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="receipt-item-card">
              <div className="card-top-bar">
                <span className="item-code">{item.code}</span>
                <span className="type-badge">[{item.badgeLabel}]</span>
              </div>

              <div className="card-body">
                <h3 className="item-title">{item.title}</h3>
                <span className="publisher-tag">@ {item.publisherOrOrg}</span>
                {item.description && <p className="item-desc">{item.description}</p>}
              </div>

              <div className="card-footer-bar">
                <span className="item-date">{item.dateOrYear}</span>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="receipt-action-btn"
                  >
                    VIEW &rsaquo;
                  </a>
                )}
              </div>

              <div className="card-barcode-strip"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;