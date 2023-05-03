import React from 'react';

const Home = () => {
  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8">Welcome to My Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <a
          href="/projects"
          className="bg-white shadow p-6 rounded-md hover:shadow-xl transition-shadow duration-300"
        >
          <h3 className="text-2xl font-bold mb-4">Projects</h3>
          <p>A list of my completed projects.</p>
        </a>
        <a
          href="/cv"
          className="bg-white shadow p-6 rounded-md hover:shadow-xl transition-shadow duration-300"
        >
          <h3 className="text-2xl font-bold mb-4">CV</h3>
          <p>A summary of my education and work experience.</p>
        </a>
        <a
          href="/links"
          className="bg-white shadow p-6 rounded-md hover:shadow-xl transition-shadow duration-300"
        >
          <h3 className="text-2xl font-bold mb-4">Links</h3>
          <p>Links to my social media profiles and other relevant websites.</p>
        </a>
      </div>
    </section>
  );
};

export default Home;

