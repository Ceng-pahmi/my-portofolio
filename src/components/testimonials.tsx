import React from 'react'

interface Testimonial {
  quote: string
  author: string
  company: string
  imageUrl: string
}

const TestimonialCard: React.FC<Testimonial> = ({ quote, author, company, imageUrl }) => (
  <div className="bg-grey rounded-lg shadow-md p-6">
    <p className="text-gray-700 italic mb-4">"{quote}"</p>
    <div className="flex items-center">
      <img src={imageUrl} alt={author} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-gray-600 text-sm">{company}</p>
      </div>
    </div>
  </div>
)

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "John's expertise in full-stack development significantly improved our project's performance and user experience.",
      author: 'Sarah Johnson',
      company: 'Tech Innovators Inc.',
      imageUrl: '/placeholder.svg?height=100&width=100',
    },
    {
      quote: 'Working with John was a pleasure. His attention to detail and problem-solving skills are outstanding.',
      author: 'Michael Chen',
      company: 'StartUp Dynamics',
      imageUrl: '/placeholder.svg?height=100&width=100',
    },
    {
      quote: 'John delivered our e-commerce platform on time and exceeded our expectations in terms of functionality.',
      author: 'Emily Rodriguez',
      company: 'WebSolutions Co.',
      imageUrl: '/placeholder.svg?height=100&width=100',
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

