import projects from '../data/projects.json';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>My GitHub Pages Projects</h1>
        <p>A showcase of my web development projects and experiments</p>
      </header>
      
      <main className="project-list-container">
        <ul className="project-list">
          {projects.map(project => (
            <li key={project.id} className="project-item">
              <a href={project.path} className="project-link">
                {project.title}
              </a>
              <p className="project-desc">{project.description}</p>
            </li>
          ))}
        </ul>
      </main>
      
      <footer className="homepage-footer">
        <p>Built with React and deployed via GitHub Actions</p>
      </footer>
    </div>
  );
};

export default HomePage;