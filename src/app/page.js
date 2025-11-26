import Link from "next/link";

export default function Home() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
      {/* Banner Image */}
      <div className="banner" style={{ marginBottom: '1rem' }}></div>

      {/* Two Column Layout */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1.1fr', 
        gap: '1rem',
        alignItems: 'start'
      }}>
        
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          
          {/* Profile Section */}
          <div className="panel">
            <div className="panel-header">
              <h1 style={{ fontSize: '1rem' }}>Sienna</h1>
            </div>
            <div className="panel-body">
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {/* Profile Picture with CD effect */}
                <div className="profile-pic-container" style={{ flexShrink: 0 }}>
                  {/* Replace this with your actual profile image */}
                  <img 
                    src="https://img.freepik.com/free-vector/pixelated-earth-planet-clouds_603843-979.jpg" 
                    alt="Sienna's profile picture"
                    className="profile-pic"
                  />
                </div>
                
                {/* Bio/Tagline */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <p style={{ fontWeight: 'bold', fontSize: '0.875rem' }}>Welcome to my site!</p>
                  <p style={{ fontSize: '0.75rem', color: '#666' }}>CS + Linguistics @ UCLA</p>
                  {/* MSN Buddy Icon */}
                  <img 
                    src="https://www.flava.co.nz/media/1772223/giphy.gif" 
                    alt="MSN icon"
                    className="msn-icon"
                    style={{ marginTop: '0.5rem' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="panel">
            <div className="panel-header">
              <h2 style={{ fontSize: '0.875rem' }}>Contact</h2>
            </div>
            <div className="panel-body" style={{ fontSize: '0.875rem' }}>
              <p>
                <strong>View my:</strong>{" "}
                <a href="mailto:siennacurry@ucla.edu">Email</a>
                {" | "}
                <a href="https://linkedin.com/in/siennacurry/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                {" | "}
                <a href="https://github.com/siennacurry" target="_blank" rel="noopener noreferrer">
                  Github
                </a>
                {" | "}
                <a href="https://drive.google.com/file/d/18Chx0UFUg4pNwSe1dQ77PY9fhdDAA8mH/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="panel">
            <div className="panel-header">
              <h2 style={{ fontSize: '0.875rem' }}>Skills</h2>
            </div>
            <div className="panel-body-beige" style={{ fontSize: '0.875rem' }}>
              <div className="skill-category">Languages</div>
              <p style={{ marginBottom: '0.5rem', fontSize: '0.75rem' }}>C++, Python, JavaScript, HTML/CSS, SQL</p>
              
              <div className="skill-category">Frameworks</div>
              <p style={{ marginBottom: '0.5rem', fontSize: '0.75rem' }}>React, Next.js, Node.js, TailwindCSS</p>
              
              <div className="skill-category">Design</div>
              <p style={{ marginBottom: '0.5rem', fontSize: '0.75rem' }}>Figma, Adobe Creative Suite, UI/UX</p>
              
              <div className="skill-category">Tools</div>
              <p style={{ fontSize: '0.75rem' }}>Git, VS Code, GitHub Copilot</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          
          {/* About Me Section */}
          <div className="panel">
            <div className="panel-header">
              <h2 style={{ fontSize: '0.875rem' }}>About Me</h2>
            </div>
            <div className="panel-body monospace" style={{ fontSize: '0.875rem' }}>
              <p style={{ marginBottom: '0.5rem' }}>
                Hi! I&apos;m Sienna, a Computer Science and Linguistics student at UCLA.
              </p>
              <p style={{ marginBottom: '0.5rem' }}>
                I&apos;m passionate about software development, elegant design, and the
                intersection between people and technology!
              </p>
              <p>
                When I&apos;m not coding, you can find me learning new languages
                 or drinking iced tea lattes.
              </p>
            </div>
          </div>

          {/* Projects Section */}
          <div className="panel">
            <div className="panel-header">
              <h2 style={{ fontSize: '0.875rem' }}>Projects</h2>
            </div>
            <div className="panel-body" style={{ fontSize: '0.875rem' }}>
              <p className="accent-red" style={{ marginBottom: '0.5rem' }}>Featured Projects:</p>
              
              <div style={{ marginBottom: '0.75rem' }}>
                <a href="/projects" style={{ fontWeight: 'bold' }}>siennacurry.me</a>
                <p style={{ fontSize: '0.75rem', color: '#666' }}>
                  Windows XP-inspired portfolio website showcasing my projects.
                </p>
              </div>
              
              <div style={{ marginBottom: '0.75rem' }}>
                <a href="/projects" style={{ fontWeight: 'bold' }}>Data Analysis of Some Sort</a>
                <p style={{ fontSize: '0.75rem', color: '#666' }}>TBD</p>
              </div>

              <p style={{ marginTop: '0.75rem' }}>
                <Link href="/projects" className="accent-red">[View All Projects]</Link>
              </p>

              {/* Decorative Image */}
              <div 
                className="project-image"
                style={{
                  marginTop: '0.75rem',
                  height: '120px',
                  backgroundImage: "url('https://pbs.twimg.com/media/GFNsGpKbYAAQSUx.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ marginTop: '1.5rem', textAlign: 'center', color: 'white' }}>
        <p style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.8)', fontSize: '0.875rem' }}>
          © 2025 Sienna Curry • Built with Next.js
        </p>
      </footer>
    </main>
  );
}