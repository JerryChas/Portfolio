import Skill from './Skill'; // Importera din Skill-komponent

export const allSkills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Node',
  'Express',
  'PostgreSQL',
  'MongoDB',
  'Prisma',
  'Git',
  'Tailwind',
];
const AllSkills = () => {
  return (
    <div className='flex justify-center gap-2 md:gap-4'>
      {allSkills.map((skill) => (
        <div
          key={skill}
          className='flex w-[clamp(1rem,4vw,2rem)] md:hover:scale-125 transition-all'
        >
          <Skill skill={skill} />
        </div>
      ))}
    </div>
  );
};

export default AllSkills;
