import type { Project } from "../../types/Project";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-white/10 bg-carbon/40">
      <img
        src={project.image}
        alt={project.title}
        className="h-52 w-full object-cover"
      />
      <div className="space-y-4 p-5">
        <div>
          <span className="text-sm text-amber">{project.category}</span>
          <h2 className="mt-2 text-xl font-semibold">{project.title}</h2>
          <p className="mt-2 text-sm text-warm-white/70"></p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md bg-white/5 px-3 py-1 text-sx text-warm-white/80"
            >
              {technology}
            </span>
          ))}
        </div>
        <div className="flex gap-4 border-t border-white/10 pt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-amber"
            >
              <SiGithub size={16} />
              GitHub
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-amber"
            >
              <ExternalLink size={16} />
              Élő demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
