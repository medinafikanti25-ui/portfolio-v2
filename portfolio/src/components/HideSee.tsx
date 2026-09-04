import React, { useState } from 'react';
import './HideSee.css';

type ProjectType = 'REAL PROJECT' | 'MINI PROJECT';

interface Project {
  id: string;
  tagNo: string;
  title: string;
  category: string;
  projectType: ProjectType;
  description: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  date: string;
}

const projectsData: Project[] = [
  {
    id: '1',
    tagNo: 'PRJ-2026-KF01',
    title: 'KampusFind',
    category: 'Full Stack Web App',
    projectType: 'REAL PROJECT',
    description:
      'A comprehensive campus information system designed to help prospective engineering students find and explore private and public universities in Indonesia with ease. It features detailed campus profiles, programs, and comparisons.',
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vercel',
      'Prisma',
      'MongoDB',
    ],
    demoUrl: 'https://kampusfind.vercel.app/',
    githubUrl: 'https://github.com/medinafikanti/kampusfind.git',
    date: 'AUG 2026',
  },
  {
    id: '2',
    tagNo: 'PRJ-2026-NET02',
    title: 'Cisco Router Simulation',
    category: 'Network Engineering',
    projectType: 'MINI PROJECT',
    description:
      'Simulated multi-router network layout configured with DHCP, DNS, and HTTP services using Cisco Packet Tracer to model a complete enterprise local network.',
    techStack: ['Cisco Packet Tracer', 'DHCP', 'DNS', 'HTTP'],
    demoUrl: '#',
    date: 'JAN 2026',
  },
  {
    id: '3',
    tagNo: 'PRJ-2026-DMN03',
    title: 'Lung Cancer Analytics',
    category: 'Data Mining',
    projectType: 'MINI PROJECT',
    description:
      'Data classification and accuracy evaluation using Confusion Matrix analysis on medical lung cancer datasets to predict patient risk levels.',
    techStack: ['Python', 'Pandas', 'Scikit-learn', 'Confusion Matrix'],
    githubUrl: '#',
    date: 'MAR 2026',
  },
];

type FilterCategory = 'SEMUA' | 'REAL PROJECT' | 'MINI PROJECT';

export const HideSee: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState<FilterCategory>('SEMUA');

  const categories: FilterCategory[] = [
    'SEMUA',
    'REAL PROJECT',
    'MINI PROJECT',
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'SEMUA') return true;
    return project.projectType === activeCategory;
  });

  return (
    <div className="hidesee-wrapper">
      {/* Container Utama Penghubung Struk Header & Filter */}
      <div className="receipt-header-banner">
        <div className="receipt-header-content">
          <div className="receipt-meta-top">
            <span>RECEIPT #2026-LOG</span>
            <span>MEDINA </span>
          </div>

          <h2 className="section-title">
            <span className="highlight"> Hide n SEE</span>
          </h2>
          <p className="section-subtitle">
            [CART ITEMS]: Selected projects, experiments, and tech builds.
          </p>

          {/* Lines Separator Struk */}
          <div className="receipt-dash-line"></div>

          {/* Filter Tabs Menyatu dalam Struk Top Banner */}
          <div className="receipt-tabs-wrapper">
            <span className="tabs-label">FILTER BY:</span>
            <div className="category-tabs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  [{cat}]
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bergerigi Bawah Struk (Perforated Edge) */}
        <div className="receipt-zigzag-bottom"></div>
      </div>

      {/* Grid Project Cards */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-slip-card">
            <div className="tag-hole"></div>

            <div className="slip-top-bar">
              <span className="tag-number">{project.tagNo}</span>
              <span className="stamp-status">COMPLETED</span>
            </div>

            <div className="slip-body">
              <span className="project-cat">{project.category}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="tech-pills">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-pill">
                    #{tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="slip-divider"></div>

            <div className="slip-footer">
              <div className="barcode-box">
                <div className="barcode-lines"></div>
                <span>
                  ITEM #{project.id} • {project.date}
                </span>
              </div>

              <div className="action-links">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-view"
                  >
                    Live Demo &rsaquo;
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-code"
                  >
                    GitHub Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HideSee;