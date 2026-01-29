import Link from 'next/link';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-gradient-to-br from-white/5 to-black/80 border border-white/10 rounded-2xl p-6 shadow-lg">
      <h3 className="text-2xl font-bold text-red-400 font-[Cinzel] mb-2">
        {project.title}
        {project.githubUrl && (
          <Link 
            href={project.githubUrl} 
            className="ml-2 inline-flex items-center text-red-400 hover:text-red-300 transition-colors text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Ver en GitHub</span>
          </Link>
        )}
      </h3>
      
      <p className="text-white/80 mb-3">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {project.technologies.map((tech) => (
          <span 
            key={tech}
            className={`px-3 py-1 text-sm rounded-full border ${project.technologyColors[tech]?.bg} ${project.technologyColors[tech]?.text} ${project.technologyColors[tech]?.border}`}
          >
            {tech}
          </span>
        ))}
      </div>
      
      {project.liveUrl && (
        <Link 
          href={project.liveUrl} 
          className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Visitar página</span>
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </Link>
      )}
    </div>
  );
}
