import styles from './ProjectsStyles.module.css';
import hipsster from '../../assets/sign.png';
import ProjectCard from '../../common/ProjectCard';
import webwal from '../../assets/webwal.svg';
import ticimg from '../../assets/ticimg.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={webwal}
          link="https://www.webwallet.tech/"
          h3="Web Wallet"
          p="Digital Wallet Application"
        />
        <ProjectCard
          src={ticimg}
          link="https://ticketron.me/"
          h3="Ticketron"
          p="Query Management System"
        />
        <ProjectCard
          src={hipsster}
          link="https://job-portal-webapp.onrender.com/"
          h3="JobPortal"
          p="Job Application Platform"
        />
        
      </div>
    </section>
  );
}

export default Projects;
