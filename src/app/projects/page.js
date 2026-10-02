import Link from "next/link";

export default function Projects() {
const projects = [
  {
    title: "Cuddles & Coo Website Rebuild",
    description: "A full rebuild of the website for Cuddles & Coo, a childcare nonprofit serving 500+ low-income mothers and families, through Develop for Good. As technical product manager, I led a team of 6 volunteer engineers, interviewed donors, families, and staff, and narrowed the feature list from 24 to 9 to focus on donations and intake.",
    technologies: ["Product Management", "User Research", "Figma", "Jira", "Wix"],
    link: "https://www.cuddlesandcoo.org/",
    linkLabel: "Visit Live Site",
    image: "/images/cuddle-coo-project-image.webp",
  },
  {
    title: "Hotel Loyalty Fraud Detection",
    description: "An in-progress machine learning project for Wyndham Hotels & Resorts, the world's largest hotel franchisor, as part of the Break Through Tech AI/ML Fellowship with Cornell Tech. I'm building an XGBoost classifier to flag members who book rooms with no intent to stay, just to collect loyalty points. The model uses signals like no-shows, late cancellations, account age, and reused contact information.",
    technologies: ["Python", "pandas", "scikit-learn", "XGBoost"],
    linkLabel: "Link TBD",
    image: "/images/wyndham-project-image.webp",
  },
  {
    title: "siennacurry.me",
    description: "A personal portfolio website with a retro Y2K/Windows XP-inspired aesthetic. Designed in Figma and built from scratch using React and Next.js, featuring custom CSS styling to recreate the nostalgic look of early 2000s social media profiles. The site showcases my projects, skills, and contact information with a responsive two-column layout. Deployed on Vercel with a custom domain.",
    technologies: ["React", "Next.js", "TailwindCSS", "Vercel"],
    link: "https://github.com/siennacurry/siennacurry-site",
    image: "/images/project1.webp",
  },
];

  return (
    <main className="max-w-4xl mx-auto">

      {/* Navigation */}
      <div className="panel mb-5">
        <div className="panel-header flex items-center justify-between">
          <h1 className="text-lg">Projects</h1>
          <Link href="/" className="nav-link text-sm">
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="flex flex-col gap-5">
        {projects.map((project, index) => (
          <div key={index} className="panel">
            <div className="panel-header">
              <h2>{project.title}</h2>
            </div>
            <div className="panel-body">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Project Image */}
                {project.image && (
                  <div className="md:w-1/3 flex-shrink-0">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="project-image"
                      style={{
                        width: '100%',
                        maxWidth: '240px',
                        height: 'auto',
                        display: 'block',
                        margin: '0 auto'
                      }}
                    />
                  </div>
                )}

                {/* Project Details */}
                <div className="flex-1">
                  <p className="mb-3">{project.description}</p>
                  
                  <div className="mb-3">
                    <span className="accent-red">Technologies: </span>
                    {project.technologies.join(", ")}
                  </div>

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="accent-red"
                    >
                      [{project.linkLabel || "View on GitHub"} →]
                    </a>
                  ) : project.linkLabel && (
                    <span style={{ color: '#666' }}>[{project.linkLabel}]</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
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
