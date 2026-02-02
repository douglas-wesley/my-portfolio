import { ActionButton } from './ActionButton'

interface ProjectCardProps {
    title: string
    description: string
    onViewProject?: () => void
}

const ProjectCard = ({ title, description, onViewProject }: ProjectCardProps) => {
    return (
        <article className="project-card">
            <div className="window-header">
                <span className="dot" />
                <span className="dot" />
            </div>
            <div className="project-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="project-footer">
                    <ActionButton label="View Project" variant="ghost" onClick={onViewProject} />
                </div>
            </div>
        </article>
    )
}

export default ProjectCard
