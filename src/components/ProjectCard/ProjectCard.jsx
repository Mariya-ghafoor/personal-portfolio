/* eslint-disable react/prop-types */
import styles from "./ProjectCard.module.scss";

function ProjectCard({ project }) {
  return (
    <div className={styles.project__container}>
      <div>
        <img className={styles.project__img} src={project.image} />
      </div>
      <div>
        <h3>{project.title}</h3>
        <p className={styles.project__desc}>{project.desc}</p>
        <span>
          <a href={project.ghLink} target="_blank" rel="noreferrer">
            <i className={`${styles.project__icon} fa-brands fa-github`}></i>
          </a>{" "}
          <a href={project.liveLink} target="_blank" rel="noreferrer">
            <i className={`${styles.project__icon} fa-solid fa-link`}></i>
          </a>
        </span>
      </div>
    </div>
  );
}

export default ProjectCard;
