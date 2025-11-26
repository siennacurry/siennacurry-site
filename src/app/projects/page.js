import Link from "next/link";

export default function Projects() {
  // You can replace this with your actual projects
const projects = [
  {
    title: "siennacurry.me",
    description: "A detailed description of what this project does, the technologies used, and what you learned from building it.",
    technologies: ["React", "Next.js", "TailwindCSS, Vercel, Figma"],
    link: "https://github.com/siennacurry/siennacurry-site",
    image: "https://i.imgur.com/MGwhB28.png",
    imageWidth: "40%"
  },
  {
    title: "Upcoming Data Analysis Project", 
    description: "Come back later for more!",
    technologies: ["TBD"],
    link: "https://github.com/siennacurry",
    image: "https://via.placeholder.com/400x200/3f8cf3/ffffff?text=Project+2",
    imageWidth: "1000px"
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
                <div className="md:w-1/3 flex-shrink-0">
<img 
  src={project.image}
  alt={`${project.title} screenshot`}
  className="project-image"
  style={{
    width: project.imageWidth || '100%',
    height: 'auto',
    display: 'block',
    margin: '0 auto'
  }}
/>
                </div>
                
                {/* Project Details */}
                <div className="flex-1">
                  <p className="mb-3">{project.description}</p>
                  
                  <div className="mb-3">
                    <span className="accent-red">Technologies: </span>
                    {project.technologies.join(", ")}
                  </div>
                  
                      <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="accent-red"
                      >
                    [View on GitHub →]
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
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
