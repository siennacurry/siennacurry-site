import Link from "next/link";
import BubblesOverlay from "./BubblesOverlay";

export default function Home() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
      {/* Bubbles overlay - added after page load, fades out via CSS */}
      <BubblesOverlay />

      {/* Banner Image */}
      <div className="banner" style={{ marginBottom: '1rem' }}></div>

      {/* Two Column Layout */}
      <div className="two-column-grid">
        
        {/* Left Column */}
        <div className="home-column">
          
          {/* Profile Section */}
          <div className="panel">
            <div className="panel-header">
              <h1 style={{ fontSize: '1rem' }}>Welcome!</h1>
            </div>
            <div className="panel-body">
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {/* Profile Picture with CD effect */}
                <div className="profile-pic-container" style={{ flexShrink: 0, alignSelf: 'center' }}>
                  {/* Replace this with your actual profile image */}
                  <img 
                    src="/images/pixelated-earth-planet-clouds.webp" 
                    alt="Sienna's profile picture"
                    className="profile-pic"
                    width={163}
                    height={163}
                  />
                </div>
                
                {/* Bio/Tagline */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <p style={{ fontWeight: 'bold', fontSize: '0.875rem' }}>Sienna Curry</p>
                  <p style={{ fontSize: '0.75rem', color: '#666' }}>CS + Linguistics @ UCLA</p>
                  <p style={{ fontSize: '0.75rem', color: '#666' }}>Prev. PM Intern @ U.S. Bank</p>
                {/* MSN Buddy Icon */}
                  <img 
                    src="/images/blue-duo-spinning.webp" 
                    alt="MSN icon"
                    className="msn-icon"
                    width={50}
                    height={50}
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
                <a href="https://linkedin.com/in/siennacurry" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                {" | "}
                <a href="https://github.com/siennacurry" target="_blank" rel="noopener noreferrer">
                  Github
                </a>
                {/*
                {" | "}
                <a href="/assets/resume-swe-2028.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
                */}
              </p>
            </div>
          </div>

          {/* Last Seen At Section - moved below About Me on mobile (see layout.js) */}
          <div className="panel last-seen-panel">
            <div className="panel-header">
              <h2 style={{ fontSize: '0.875rem' }}>Last Seen At</h2>
            </div>
            <div className="panel-body" style={{ fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <img
                  src="/images/us-bank-logo.webp"
                  alt="U.S. Bank logo"
                  width={96}
                  height={54}
                  style={{ width: '96px', height: 'auto', borderRadius: '4px', flexShrink: 0 }}
                />
                <div>
                  <p style={{ fontWeight: 'bold' }}>Product Management Intern</p>
                  <p style={{ fontSize: '0.75rem', color: '#666' }}>
                    <a href="https://www.usbank.com/about-us-bank.html" target="_blank" rel="noopener noreferrer">
                      U.S. Bank
                    </a>
                    {" | Summer 2026"}
                  </p>
                </div>
              </div>
            </div>
          </div>

        {/* Skills Section - moved to the end on mobile (see layout.js) */}
        <div className="panel skills-panel">
          <div className="panel-header">
            <h2 style={{ fontSize: '0.875rem' }}>Skills</h2>
          </div>
          <div className="panel-body-beige" style={{ fontSize: '0.875rem' }}>
            <div className="skill-category">Product</div>
            <p className="skill-item" style={{ fontSize: '0.75rem' }}>PRDs, Roadmapping, User Research, A/B Testing, Jira, Figma</p>
            
            <div className="skill-category">Languages</div>
            <p className="skill-item" style={{ fontSize: '0.75rem' }}>Python, C++, JavaScript, SQL, HTML/CSS</p>
            
            <div className="skill-category">Frameworks</div>
            <p className="skill-item" style={{ fontSize: '0.75rem' }}>React, Next.js, Node.js, GraphQL, pandas, scikit-learn</p>
            
            <div className="skill-category">Data & ML</div>
            <p style={{ fontSize: '0.75rem' }}>XGBoost, Tableau, Google Analytics, Excel, PostgreSQL</p>
          </div>
        </div>
      </div>

        {/* Right Column */}
        <div className="home-column">
          
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
              I build products at the intersection of people, language, and AI
               — from LLM features for bankers to machine learning models for fraud detection.
              </p>
              <p>
                When I&apos;m not coding, you can find me learning new languages or
                logging movies on Letterboxd.
              </p>
            </div>
          </div>

          {/* Projects Section */}
          <div className="panel projects-panel">
            <div className="panel-header">
              <h2 style={{ fontSize: '0.875rem' }}>Projects</h2>
            </div>
            <div className="panel-body" style={{ fontSize: '0.875rem' }}>
              <p className="accent-red" style={{ marginBottom: '0.5rem' }}>Featured Projects:</p>
              
              <div style={{ marginBottom: '0.75rem' }}>
                <Link href="/projects" style={{ fontWeight: 'bold' }}>Cuddles &amp; Coo Website Rebuild</Link>
                <p style={{ fontSize: '0.75rem', color: '#666' }}>
                  Nonprofit website rebuild for low-income mothers and families.
                </p>
              </div>

              <div style={{ marginBottom: '0.75rem' }}>
                <Link href="/projects" style={{ fontWeight: 'bold' }}>Hotel Loyalty Fraud Detection</Link>
                <p style={{ fontSize: '0.75rem', color: '#666' }}>
                  Machine learning model to catch loyalty points fraud.
                </p>
              </div>

              <div style={{ marginBottom: '0.75rem' }}>
                <Link href="/projects" style={{ fontWeight: 'bold' }}>siennacurry.me</Link>
                <p style={{ fontSize: '0.75rem', color: '#666' }}>
                  Windows XP-inspired portfolio website showcasing my projects.
                </p>
              </div>

                <p style={{ marginTop: '0.75rem' }}>
                  <Link href="/projects" style={{ fontWeight: 'bold' }}>
                  [View All Projects]
                  </Link>
                </p>

              {/* Decorative Image */}
              <div 
                className="project-image"
                style={{
                  marginTop: '0.75rem',
                  height: '120px',
                  backgroundImage: "url('/images/aero-fish.webp')",
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
          © {new Date().getFullYear()} Sienna Curry
        </p>
      </footer>
    </main>
  );
}