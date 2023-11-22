import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./ProjectList.module.scss";

function ProjectList() {
  const projects = [
    {
      id: 1,
      title: "Full Stack App",
      image: "src/assets/EmployeeCreatorApp.png",
      desc: "A full stack app that allows the user to perform CRUD operations on a MySQL database",
      techStack: "Frontend: React + Typescript. Backend: Spring Boot + MySQL",
      ghLink: "https://github.com/Mariya-ghafoor/employee-creator-frontend",
      liveLink: "https://github.com/Mariya-ghafoor/employee-creator-frontend",
    },
    {
      id: 2,
      title: "E-Commerce Website",
      image: "src/assets/ecommerce-website.png",
      desc: "An online shopping website where users can not only view products of different variances but also ‘buy’ products stored on a remote database",
      techStack: "Frontend: React, Database: Firestore",
      ghLink: "https://github.com/Mariya-ghafoor/e-commerce-website",
      liveLink: "https://e-commerce-website786.netlify.app/",
    },
    {
      id: 3,
      title: "Minesweeper",
      image: "src/assets/minesweeper.png",
      desc: "The classic game of Minesweeper with the ability to customise the size of the mine and includes cascading affect when no mines around",
      techStack: "Java",
      ghLink: "https://github.com/Mariya-ghafoor/minesweeper-game",
      liveLink: "https://replit.com/@mariyaaghafoor/Minesweeper-Game",
    },
    {
      id: 4,
      title: "Snake Game",
      image: "src/assets/snake-game.png",
      desc: "This classic Snake game does not only trace the path of the snake but also keeps tab of the score.",
      techStack: "Python",
      ghLink: "https://github.com/Mariya-ghafoor/SnakeGame/tree/master",
      liveLink: "https://replit.com/@mariyaaghafoor/SnakeGame",
    },
    {
      id: 5,
      title: "Books Search Engine",
      image: "src/assets/books-search-engine.png",
      desc: "A search engine that queries Google books API, displays the result and provides further information when user clicks on a book",
      techStack: "React js",
      ghLink: "https://github.com/Mariya-ghafoor/books-search-engine",
      liveLink: "https://mariya-ghafoor.github.io/books-search-engine/",
    },
    {
      id: 5,
      title: "Morse Code Translator",
      image: "src/assets/morse-translator.png",
      desc: "An app that automatically detects the language and translate to either Morse code or English",
      techStack: "HTML, CSS, Javascript",
      ghLink: "https://github.com/Mariya-ghafoor/morse-translator",
      liveLink: "https://mariya-ghafoor.github.io/morse-translator/",
    },
  ];
  return (
    <div className={styles.projectList__container}>
      {projects &&
        projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
    </div>
  );
}

export default ProjectList;
