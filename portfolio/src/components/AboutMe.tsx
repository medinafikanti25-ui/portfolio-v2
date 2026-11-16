import React from 'react';

export const AboutMe: React.FC = () => {
  return (
    <div className="rc-section">
      <div className="rc-divider" />
      <div className="rc-sh">
        <span className="rc-label">• SECTION 01</span>
        <span>STATEMENT #01 // HELLO WORLD!</span>
      </div>

      <div className="rc-about">
        <div className="rc-photo">
          <span className="rc-badge">INFORMATICS ENGINEER</span>
          <div className="rc-photo-frame">
            <img src="/foto-profile.jpg" alt="Medina Fikanti" />
          </div>
          <strong>Medina Fikanti</strong>
          <span className="rc-mute">Informatics Student</span>
          <span className="rc-active">• Active Student</span>
        </div>

        <div className="rc-about-body">
          <h2 className="rc-title">
            hi, I'm <span className="rc-purple">Medina Fikanti</span>
          </h2>
          <h3 className="rc-subtitle">Informatics Engineering Student</h3>

          <p className="rc-bio">
            I am an Informatics student passionate about data and software development. I enjoy building web
            applications, analyzing data, and turning numbers into clear, interactive dashboards. Currently
            sharpening my skills in Power BI, SQL, Python, and modern web technologies.
          </p>

          <div className="rc-lines">
            <div className="rc-ln"><span>UNIVERSITY</span><i /><b>Pamulang University</b></div>
            <div className="rc-ln"><span>MAJOR</span><i /><b>Informatics Engineering</b></div>
            <div className="rc-ln"><span>FOCUS</span><i /><b>Data Analyst</b></div>
          </div>

          <div className="rc-tech">
            <span className="rc-mute">CORE TECHNOLOGIES &amp; TOOLS // my daily driver</span>
            <div className="rc-tags">
              <span className="rc-tag">Power BI</span>
              <span className="rc-tag">Python</span>
              <span className="rc-tag">Data Visualization</span>
              <span className="rc-tag">Git</span>
              <span className="rc-tag">SQL</span>
            </div>
          </div>

          <div className="rc-actions">
            <a href="#hide-see" className="rc-btn primary">View Projects &amp; Works &rsaquo;</a>
            <a href="#contact" className="rc-btn">Contact Me</a>
            <a href="/CV-Medina.pdf" target="_blank" rel="noopener noreferrer" className="rc-btn">Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
