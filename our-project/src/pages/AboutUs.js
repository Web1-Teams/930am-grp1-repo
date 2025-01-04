import React from 'react';
import AboutSection from '../components/AboutSection';
import ValuesSection from '../components/ValuesSection';

const AboutUs = () => {
  const aboutContent = [
    "Our journey began in 2024 when we founded the company, and since then, we have proudly become one of Palestine’s leading retailers of home appliances and electronics. Our dedication to customer satisfaction has been at the heart of our growth, as we constantly strive to understand and meet the evolving needs of our valued customers.",
    "We uphold the highest standards of transparency, honesty, and ethical responsibility in all our interactions with customers, partners, and stakeholders.",
    "Our commitment to innovation is demonstrated through strategic partnerships and our focus on incorporating the latest technology. We have secured exclusive distribution rights for global brands like LG, Samsung, Sony, and a testament to our dedication to bringing the best to our customers.",
    "Excellence is our benchmark. We set the highest standards, from product quality to service efficiency, ensuring that we consistently exceed our customers' expectations."
  ];

  const visionContent = [
    "Our vision is to be recognized as the most trusted and customer-centric provider of home appliances and electronics in Palestine. We strive for a future where our commitment to quality, service, and ethical business practices sets the standard for the industry. Through this vision, we aim to drive sustainable growth for our company while positively impacting our community."
  ];

  const missionContent = [
    "Our mission is to deliver high-quality home appliances and electronics to Palestinian households, offering exceptional customer service and after-sales support. We aim to create a shopping experience that prioritizes reliability, integrity, and customer satisfaction above all. At the same time, we foster a culture of continuous innovation and improvement within our organization."
  ];

  const valuesList = ["Customer", "Integrity", "Innovation", "Collaboration", "Excellence", "Community Commitment"];

  return (
    <main className="container mx-auto my-10 px-4 sm:px-6 lg:px-8 bg-blue-100 shadow-lg rounded-lg max-w-md md:max-w-2xl lg:max-w-4xl">
      <AboutSection title="About Our Electronics Company" paragraphs={aboutContent} />
      <AboutSection title="Our Vision" paragraphs={visionContent} />
      <AboutSection title="Our Mission" paragraphs={missionContent} />
      <ValuesSection values={valuesList} />
    </main>
  );
};

export default AboutUs;