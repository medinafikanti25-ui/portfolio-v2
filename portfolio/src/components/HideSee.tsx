import React, { useState } from 'react';

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
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Prisma', 'MongoDB'],
    demoUrl: 'https://kampusfind.vercel.app/',
    githubUrl: 'https://github.com/medinafikanti/kampusfind.git',
    date: 'AUG 2026',
  },
  {
    id: '2',
    tagNo: 'PRJ-2026-DA02',
    title: 'BRImo Reviews Sentiment Dashboard',
    category: 'Data Analytics',
    projectType: 'MINI PROJECT',
    description: 'Power BI dashboard analyzing 17,685 BRImo mobile banking reviews from Google Play and App Store, covering sentiment, rating trends, user complaints, key insights, and recommendations.',
    techStack: ['Power BI', 'Power Query', 'DAX', 'Sentiment Analysis'],
    demoUrl: 'https://github.com/medinafikanti25-ui/brimo-reviews-sentiment-dashboard',
    date: 'NOV 2026',
  },
  {
    id: '3',
    tagNo: 'PRJ-2026-BI03',
    title: 'Credit Portfolio Analysis',
    category: 'Data Analytics',
    projectType: 'MINI PROJECT',
    description:
      'Interactive Power BI dashboard analyzing credit risk across 10,000 loan records. Covers loan purpose, term, home ownership, credit score, and income, with a credit problem rate analysis to identify the highest-risk segments.',
    techStack: ['Power BI', 'DAX', 'Data Visualization', 'Credit Risk'],
    demoUrl: 'https://github.com/medinafikanti25-ui/credit-portfolio-analysis-powerbi/blob/main/Credit%20Portfolio%20Analysis.pdf',
    githubUrl: 'https://github.com/medinafikanti25-ui/credit-portfolio-analysis-powerbi',
    date: 'NOV 2026',
  },
    {
    id: '4',
    tagNo: 'PRJ-2026-BI04',
    title: 'Indonesia Monthly Inflation Dashboard 2025',
    category: 'Data Analytics',
    projectType: 'MINI PROJECT',
    description:
      'Interactive Power BI dashboard analyzing monthly food, beverage, and tobacco inflation (M-to-M, 2022=100) across 38 Indonesian provinces in 2025. Features KPI cards, monthly trend, cumulative inflation calculated with DAX, and a province ranking to highlight regional price pressure.',
    techStack: ['Power BI', 'DAX', 'Data Visualization', 'Economic Analysis'],
    demoUrl: 'https://github.com/medinafikanti25-ui/dashboard-inflasi-2025/blob/main/Inflasi%20Bulanan%20Tahun%202025.pdf',
    githubUrl: 'https://github.com/medinafikanti25-ui/dashboard-inflasi-2025',
    date: 'NOV 2026',
  },
];

type FilterCategory = 'SEMUA' | 'REAL PROJECT' | 'MINI PROJECT';

export const HideSee: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('SEMUA');

  const categories: FilterCategory[] = ['SEMUA', 'REAL PROJECT', 'MINI PROJECT'];

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'SEMUA') return true;
    return project.projectType === activeCategory;
  });

  return (
    <div className="rc-section">
      <div className="rc-divider" />
      <div className="rc-sh">
        <span className="rc-label">• SECTION 03</span>
        <span>
          RECEIPT #2026-LOG // HIDE N <b className="rc-see">SEE</b>
        </span>
      </div>
      <p className="rc-sub">[CART ITEMS]: Selected projects, experiments, and tech builds.</p>

      <div className="rc-fl">
        <span className="rc-fl-label">FILTER BY:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            aria-pressed={activeCategory === cat}
            className={`rc-fl-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            [{cat}]
          </button>
        ))}
      </div>

      <div className="rc-items">
        {filteredProjects.map((project) => (
          <article key={project.id} className="rc-item">
            <div className="rc-item-top">
              <span className="rc-code">{project.tagNo}</span>
              <span className="rc-mark">COMPLETED</span>
            </div>
            <span className="rc-cat">{project.category}</span>
            <h3 className="rc-item-title">{project.title}</h3>
            <p className="rc-item-desc">{project.description}</p>

            <div className="rc-tags">
              {project.techStack.map((tech, index) => (
                <span key={index} className="rc-tag small">
                  #{tech}
                </span>
              ))}
            </div>

            <div className="rc-item-foot">
              <span className="rc-mute">
                ITEM #{project.id} • {project.date}
              </span>
              <div className="rc-links">
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noreferrer" className="rc-btn primary sm">
                    Live Demo &rsaquo;
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="rc-btn sm">
                    GitHub Code
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default HideSee;
