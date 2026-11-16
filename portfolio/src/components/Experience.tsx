import React from 'react';

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
    <div className="rc-section">
      <div className="rc-divider" />
      <div className="rc-sh">
        <span className="rc-label">• SECTION 02</span>
        <span>MY EXPERIENCE</span>
      </div>
      <p className="rc-sub">[PAGES]: Record of roles, internships, and organizational activities.</p>

      <div className="rc-cols">
        {experiences.map((exp) => (
          <div key={exp.id} className="rc-xp">
            <div className="rc-xp-meta">
              <span className="rc-purple">[{exp.type}]</span>
              <span className="rc-mute">{exp.period}</span>
            </div>
            <h3 className="rc-item-title">{exp.role}</h3>
            <span className="rc-org">@ {exp.organization}</span>
            <ul>
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
