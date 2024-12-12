import React from 'react'

interface Project {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
}

const ProjectCard: React.FC<Project> = ({ title, description, technologies, imageUrl }) => (
  <div className="bg-slate-700 rounded-lg shadow-md overflow-hidden">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-b-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
)

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with real-time inventory management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      imageUrl: '/ecomerce.jpeg?height=200&width=300',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      technologies: ['Vue.js', 'Firebase', 'Vuex'],
      imageUrl: '/task.jpeg?height=200&width=300',
    },
    {
      title: 'Social Media Dashboard',
      description: 'An analytics dashboard for social media managers with data visualization.',
      technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      imageUrl: '/social media.jpeg?height=200&width=300',
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-grey">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

