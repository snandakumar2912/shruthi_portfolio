// Education.js
import React from 'react';
import './Education.css'; // Import the CSS file for your styles

const Education = () => {
  return (
    <section id="education" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title">
            Education
          </h2>
        </div>
        <div className="education-details mb-8">
          <h3 className="text-2xl font-semibold text-primary">Master of Science in Computer Science</h3>
          <p className="text-lg text-secondary">Saint Louis University, Pursuing</p>
        </div>
        <div className="education-details mb-8">
          <h3 className="text-2xl font-semibold text-primary">Bachelor of Engineering in Computer Science</h3>
          <p className="text-lg text-secondary">Visvesvaraya Technological University, 2018-2022</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
