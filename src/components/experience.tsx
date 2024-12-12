import React from 'react'

interface Job {
  title: string
  company: string
  period: string
  responsibilities: string[]
}

const ExperienceItem: React.FC<Job> = ({ title, company, period, responsibilities }) => (
  <div className="mb-8">
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-gray-100 mb-2">{company} | {period}</p>
    <ul className="list-disc list-inside">
      {responsibilities.map((responsibility, index) => (
        <li key={index} className="text-gray-400">{responsibility}</li>
      ))}
    </ul>
  </div>
)

const Experience: React.FC = () => {
  const jobs: Job[] = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'Tech Innovators Inc.',
      period: '2020 - Present',
      responsibilities: [
        'Lead a team of 5 developers in creating scalable web applications',
        'Implemented microservices architecture, improving system efficiency by 40%',
        'Mentored junior developers and conducted code reviews',
      ],
    },
    {
      title: 'Full-Stack Developer',
      company: 'WebSolutions Co.',
      period: '2018 - 2020',
      responsibilities: [
        'Developed and maintained multiple client websites using React and Node.js',
        'Integrated third-party APIs and payment gateways',
        'Optimized database queries, reducing load times by 30%',
      ],
    },
    {
      title: 'Junior Web Developer',
      company: 'StartUp Dynamics',
      period: '2016 - 2018',
      responsibilities: [
        'Assisted in the development of a social media management tool',
        'Worked on both front-end and back-end tasks using JavaScript and Python',
        'Participated in daily stand-ups and sprint planning meetings',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
        <div className="max-w-3xl mx-auto">
          {jobs.map((job) => (
            <ExperienceItem key={job.title} {...job} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

