import React from 'react';

const AboutSection = ({ title, paragraphs }) => (
  <section className="mt-10">
    <h2 className="text-2xl font-bold mb-4 text-blue-600">{title}</h2>
    {paragraphs.map((paragraph, index) => (
      <p key={index} className="mb-6">{paragraph}</p>
    ))}
  </section>
);

export default AboutSection;