import React from 'react';
import './Experience.css';

interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Website Administrator Intern',
    organization: 'Filkom Universitas Pamulang',
    period: 'Agu 2025 – Feb 2026',
    type: 'Internship',
    description: [
      'Mengelola dan melakukan pemeliharaan rutin pada sistem serta konten situs web fakultas.',
      'Memastikan performa situs web berjalan optimal dan responsif untuk pengguna.',
    ],
  },
  {
    id: 'exp-2',
    role: 'Bendahara Umum',
    organization: 'HIMTIF (Himpunan Mahasiswa Teknik Informatika)',
    period: '2026 – Sekarang',
    type: 'Organisasi',
    description: [
      'Bertanggung jawab atas pengelolaan aliran kas dan penyusunan laporan keuangan organisasi.',
      'Menyusun anggaran untuk berbagai program kerja kegiatan kemahasiswaan.',
    ],
  },
];

export const Experience: React.FC = () => {
  return (
    <div className="experience-wrapper">
      {/* Outer Shell Ungu Tua */}
      <div className="experience-outer-card">
        <div className="canvas-header-pill">
          <span>EXPERIENCE</span>
        </div>

        {/* Inner Receipt/Struk Paper */}
        <div className="receipt-paper">
          {/* Header Struk */}
          <div className="receipt-header">
            <span className="section-label">• SECTION 02</span>
            <h2 className="receipt-title">
              MY <span className="highlight">EXPERIENCE</span>
            </h2>
            <p className="receipt-subtitle">
              [PAGES]: Record of roles, internships, and organizational activities.
            </p>
          </div>

          <div className="receipt-divider"></div>

          {/* List Ringkasan Pengalaman */}
          <div className="experience-list">
            {experiences.map((exp) => (
              <div key={exp.id} className="receipt-entry">
                <div className="entry-header">
                  <div className="role-group">
                    <h3 className="exp-role">{exp.role}</h3>
                    <span className="exp-org">@ {exp.organization}</span>
                  </div>
                  <div className="badge-group">
                    <span className="type-badge">[{exp.type}]</span>
                    <span className="period-badge">{exp.period}</span>
                  </div>
                </div>

                <ul className="entry-details">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer Struk & Barcode */}
          <div className="receipt-footer">
            <div className="receipt-divider"></div>
            <div className="barcode-wrapper">
              <div className="css-barcode"></div>
              <span className="barcode-text">EXP-LOG-VERIFIED-2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;