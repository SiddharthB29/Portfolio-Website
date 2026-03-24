import styles from './ProjectsStyles.module.css';
import hipsster from '../../assets/sign.png';
import ProjectCard from '../../common/ProjectCard';
import webwal from '../../assets/gtimage.png';
import ticimg from '../../assets/ticimg.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={webwal}
          link="https://github.com/SiddharthB29/Anaaj-Mitra"
          h3="Anaaj Mitra"
          p="AI Integrated Platform"
        />
        {/* <ProjectCard
          src={ticimg}
          link="https://ticketron.me/"
          h3="Ticketron"
          p="Query Management System"
        /> */}
        {/* <ProjectCard
          src={hipsster}
          link="https://job-portal-webapp.onrender.com/"
          h3="JobPortal"
          p="Job Application Platform"
        /> */}
        
      </div>
    </section>
  );
}

export default Projects;