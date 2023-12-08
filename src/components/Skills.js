import React from 'react';
import { skills } from '../data';

const Skills = () => {
  return (
    <section className='bg-tertiary py-12' id="skills">
      <div className='container mx-auto'>
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-skills relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
            Skills
          </h2>
          <p className="subtitle">
            You can see my skills over here
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {skills.map((skill, index) => (
            <div key={index} className='p-4 bg-white rounded shadow-md'>
              {/* Set a fixed size for the image container */}
              <div style={{ width: '64px', height: '64px' }}>
                <img className='w-full h-full mb-4' src={skill.image} alt={skill.name} />
              </div>
              <div className='relative pt-1'>
                <div className='flex mb-2 items-center justify-between'>
                  <div>
                    <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200'>
                      {skill.name}
                    </span>
                  </div>
                  <div className='text-right'>
                    <span className='text-xs font-semibold inline-block text-teal-600'>
                      {skill.percent}%
                    </span>
                  </div>
                </div>
                <div className='flex items-center'>
                  <div className='w-full'>
                    <div className='h-2 bg-teal-200 rounded-full'>
                      <div
                        style={{ width: `${skill.percent}%` }}
                        className='h-full bg-teal-500 rounded-full'
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
