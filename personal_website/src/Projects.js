import React from 'react';

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of Project 1.',
  },
  {
    title: 'Project 2',
    description: 'A brief description of Project 2.',
  },
];

const Projects = () => {
  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow p-6 rounded-md hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

