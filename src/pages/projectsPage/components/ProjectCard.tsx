import Skill from '../../../components/Skill';
import { ProjectCardProps } from '../types/projectTypes';
import { useState } from 'react';
import ProjectModal from './ProjectModal';

const ProjectCard = ({ data, even }: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && (
        <ProjectModal
          toggleModal={toggleModal}
          isOpen={isModalOpen}
          data={data}
        />
      )}

      <div
        onClick={() => {
          toggleModal();
        }}
        className={`flex flex-row ${
          even && 'flex-row-reverse'
        }  shadow-md shadow-primary hover:shadow-md hover:shadow-accent mx-auto my-6 rounded-lg w-full md:max-w-screen-md h-36 md:h-auto transition-transform duration-300 overflow-hidden ease-in-out hover:scale-105`}
      >
        {/* Picture */}
        <div className='border-b w-36 md:w-60 h-36 md:h-60 aspect-square'>
          <img
            loading='lazy'
            src={data.src}
            alt={data.alt}
            className='w-full h-full object-cover'
          />
        </div>

        {/* Description */}
        <div className='flex flex-col flex-grow justify-between p-4'>
          <h3 className='mb-2 font-bold text-[clamp(.8rem,4vw,1.5rem)] text-accent'>
            {data.title}
          </h3>
          <p className='opacity-60 mb-4 line-clamp-3 text-[clamp(.8rem,2vw,1.2rem)] text-text'>
            {data.description}
          </p>
          {/* Card_footer */}
          <div
            className={`flex ${
              even ? 'flex-row-reverse' : 'flex-row'
            } justify-between gap-2 text-text`}
          >
            {/* Tools */}
            <div className='flex flex-row gap-2 max-w-fit'>
              {data.tools.map((tool, index) => (
                <div key={index} className='rounded-sm w-5 overflow-hidden'>
                  <Skill skill={tool} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
