import Skill from '../../../components/Skill';
import { ProjectModalProps } from '../types/projectTypes';
import { Globe, X, Code } from 'lucide-react';

const ProjectModal = ({ data, toggleModal, isOpen }: ProjectModalProps) => {
  return (
    // OVERLAY
    <div
      onClick={() => {
        toggleModal();
      }}
      className='top-0 left-0 z-40 fixed flex justify-center items-center backdrop-blur-sm backdrop-brightness-75 px-3 w-full h-screen'
    >
      {/* MODAL-CONTAINER */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`z-50 bg-background shadow-md shadow-slate-800 p-6 rounded-lg w-svw max-w-3xl 
            transform transition-transform duration-300 ease-in-out delay-1000 
            ${isOpen ? 'scale-100' : 'scale-0'}`}
      >
        {/* HEADER */}
        <div className='flex justify-between items-center mb-4'>
          {/* Title */}
          <h2 className='font-bold text-2xl text-accent'>{data.title}</h2>
          {/* Close Button */}
          <button onClick={toggleModal} className='text-text text-xl'>
            <X />
          </button>
        </div>
        {/* BODY */}
        <div className='flex md:flex-row flex-col gap-2 mt-4'>
          {/* Image */}
          <img
            src={data.src}
            alt={data.alt}
            className='mx-auto md:mx-0 rounded-lg w-full max-w-xs'
          />
          {/* DETAILS */}
          <div className='flex flex-col justify-between gap-2 px-2 w-full'>
            {/* Role */}
            <div className='flex justify-end opacity-65 text-sm text-text'>
              {data.role}
            </div>
            {/* Description */}
            <p className='text-center text-text'>{data.description}</p>
            {/* Technologies */}
            <div className='flex gap-1'>
              {data.tools.map((tool, index) => (
                <div key={index} className='rounded-md w-5 overflow-hidden'>
                  <Skill skill={tool} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* FOOTER */}
        <div className='flex justify-around mt-6'>
          <a
            href={data.repoURL}
            target='_blank'
            rel='noopener noreferrer'
            title='Github Repository'
            className='flex items-center gap-2 bg-accent px-4 py-2 rounded-md text-text'
          >
            <Code /> View Code
          </a>
          <a
            href={data.pageURL}
            target='_blank'
            rel='noopener noreferrer'
            title='Visit Project Page'
            className='flex items-center gap-2 bg-accent px-4 py-2 rounded-md text-text'
          >
            <Globe /> Visit Page
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
