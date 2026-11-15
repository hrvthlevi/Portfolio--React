import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

function ProjectList() {
  if (projects.length === 0) {
    return (
      <p className="py-12 text-center text-warm-white/60">
        Jelenleg még nincsenek feltöltött projektek.
      </p>
    );
  }
  return(
    <div>
        {projects.map((project) =>(
            <ProjectCard key={project.id} project={project}/>
        ))}
    </div>
  )
}

export default ProjectList
