import { Code, TvMinimalPlay } from 'lucide-react';
import Skill from '../../../components/Skill';

interface ProjectData {
  src: string;
  alt: string;
  title: string;
  description: string;
  repoURL: string;
  pageURL: string;
  tools: string[];
  category: string;
  status: string;
}

interface ProjectCardProps {
  data: ProjectData;
  even: boolean;
}

const ProjectCard = ({ data, even }: ProjectCardProps) => {
  return (
    <div className='flex flex-row even:flex-row-reverse shadow-gray-800 shadow-lg mx-auto my-6 rounded-lg w-full md:max-w-screen-md h-36 md:h-auto overflow-hidden'>
      {/* Picture */}
      <div className='border-b w-36 md:w-60 h-36 md:h-60 aspect-square'>
        <img
          src={data.src}
          alt={data.alt}
          className='w-full h-full object-cover'
        />
      </div>

      {/* Description */}
      <div className='flex flex-col flex-grow justify-between p-4'>
        <h3 className='mb-2 font-bold text-[clamp(.8rem,4vw,1.5rem)]'>
          {data.title}
        </h3>
        <p className='opacity-60 mb-4 line-clamp-3 text- text-[clamp(.8rem,2vw,1.2rem)] text-text'>
          {data.description}
        </p>
        {/* Card_footer */}
        <div
          className={`flex ${
            even ? 'flex-row-reverse' : 'flex-row'
          } justify-between gap-2 text-text`}
        >
          {/* Links */}
          <div className='flex gap-4'>
            <a
              href={data.repoURL}
              target='_blank'
              rel='noopener noreferrer'
              title='Github Repository'
            >
              <Code size={20} />
            </a>
            <a
              href={data.pageURL}
              target='_blank'
              rel='noopener noreferrer'
              title='Visit Project Page'
            >
              <TvMinimalPlay size={20} />
            </a>
          </div>

          {/* Tools */}
          <div className='flex flex-row gap-2 max-w-fit'>
            {data.tools.map((tool) => (
              <div className='rounded-sm w-5 overflow-hidden'>
                <Skill key={tool} skill={tool} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
