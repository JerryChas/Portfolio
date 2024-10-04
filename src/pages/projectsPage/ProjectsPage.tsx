import ProjectCard from './components/ProjectCard';
import projects from '../../assets/projects.json';

const ProjectsPage = () => {
  return (
    <div className='flex flex-col gap-4 mx-auto my-6 px-1 container'>
      <h2 className='font-bold text-3xl text-center italic'>School Projects</h2>
      {projects.map((project, index: number) => (
        <ProjectCard data={project} key={index} even={index % 2 === 0} />
      ))}
    </div>
  );
};

export default ProjectsPage;
