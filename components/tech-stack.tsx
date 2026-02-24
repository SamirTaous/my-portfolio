'use client'

export default function TechStack() {
  const techCategories = [
    {
      category: 'Frontend',
      techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn/ui'],
    },
    {
      category: 'Backend',
      techs: ['Spring Boot', 'Java', 'Python', 'Flask', 'Node.js'],
    },
    {
      category: 'Databases',
      techs: ['PostgreSQL', 'MongoDB', 'Oracle', 'Firebase'],
    },
    {
      category: 'AI & ML',
      techs: ['Gemini API', 'LLMs', 'TensorFlow', 'Scikit-learn'],
    },
    {
      category: 'Mobile & Games',
      techs: ['Unity', 'C#', 'React Native'],
    },
    {
      category: 'DevOps & Tools',
      techs: ['Docker', 'Git', 'REST APIs', 'Microservices', 'AWS'],
    },
  ]

  return (
    <section id="tech-stack" className="py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-6 mb-24">
          <h2 className="font-display font-bold text-5xl sm:text-6xl text-foreground text-balance">Tech Stack</h2>
          <p className="font-body text-xl text-muted-foreground leading-relaxed">
            Tools and technologies I use to build modern, scalable solutions.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((group, idx) => (
            <div
              key={idx}
              className="p-7 rounded-xl border border-border bg-card hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <h3 className="font-display font-bold text-cyan-400 mb-6 text-lg">{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.techs.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground text-sm font-body font-medium rounded-lg border border-border hover:border-cyan-500/40 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
