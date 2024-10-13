import {
  User,
  Code,
  GraduationCap,
  Mail,
  Code2,
  Linkedin,
  CheckCircle,
  Circle,
  CircleDot,
} from 'lucide-react';

import { allSkills } from '../../components/AllSkills';
import Skill from '../../components/Skill';

const courseStatusIcon = (status: string) => {
  switch (status) {
    case 'complete':
      return <CheckCircle className='w-6 h-6 mr-2 text-green-500 shrink-0' />;
    case 'ongoing':
      return (
        <CircleDot className='w-6 h-6 mr-2 text-accent shrink-0 animate-pulse' />
      );
    case 'upcoming':
      return <Circle className='w-6 h-6 mr-2 text-gray-500 shrink-0' />;
    default:
      break;
  }
};
const courses = [
  {
    title: 'IT Tech and Operations',
    points: 10,
    startDate: 'Sep 4, 2023',
    endDate: 'Sep 17, 2023',
    status: 'complete',
  },
  {
    title: 'Web Development and Web Technology',
    points: 55,
    startDate: 'Sep 18, 2023',
    endDate: 'Dec 3, 2023',
    status: 'complete',
  },
  {
    title: 'Advanced Frontend Development and TypeScript',
    points: 40,
    startDate: 'Dec 4, 2023',
    endDate: 'Feb 18, 2024',
    status: 'complete',
  },
  {
    title: 'Project Methodology and Agile Methods',
    points: 15,
    startDate: 'Jan 8, 2024',
    endDate: 'Feb 18, 2024',
    status: 'complete',
  },
  {
    title: 'UX, Usability and Accessibility',
    points: 15,
    startDate: 'Feb 19, 2024',
    endDate: 'Mar 10, 2024',
    status: 'complete',
  },
  {
    title: 'React',
    points: 45,
    startDate: 'Mar 4, 2024',
    endDate: 'May 12, 2024',
    status: 'complete',
  },
  {
    title: 'Backend Development and APIs',
    points: 60,
    startDate: 'May 13, 2024',
    endDate: 'Sep 29, 2024',
    status: 'complete',
  },
  {
    title: 'AI in Fullstack Development',
    points: 15,
    startDate: 'Sep 30, 2024',
    endDate: 'Oct 20, 2024',
    status: 'ongoing',
  },
  {
    title: 'Cloud, CI/CD and Work Methodology',
    points: 20,
    startDate: 'Oct 21, 2024',
    endDate: 'Nov 17, 2024',
    status: 'upcoming',
  },
  {
    title: 'Vue.js',
    points: 25,
    startDate: 'Nov 18, 2024',
    endDate: 'Dec 22, 2024',
    status: 'upcoming',
  },
  {
    title: 'Internship (LIA)',
    points: 110,
    startDate: 'Dec 23, 2024',
    endDate: 'May 25, 2025',
    status: 'upcoming',
  },
  {
    title: 'Thesis Project',
    points: 20,
    startDate: 'May 26, 2025',
    endDate: 'Jun 22, 2025',
    status: 'upcoming',
  },
];

const totalPoints = courses.reduce((sum, course) => sum + course.points, 0);
const completedPoints = courses
  .filter((course) => course.status === 'complete')
  .reduce((sum, course) => sum + course.points, 0);

const AboutPage = () => {
  return (
    <div className='max-w-4xl p-6 mx-auto bg-background text-text'>
      <header className='mb-8 text-center'>
        <h1 className='mb-2 text-3xl font-bold text-accent'>Jerry Olsson</h1>
        <p className='text-xl text-secondary'>Software Developer Student</p>
      </header>

      <main>
        {/* ABOUT ME */}
        <section className='p-6 mb-6 rounded-lg shadow-md bg-primary'>
          <h2 className='flex items-center mb-4 text-2xl font-semibold text-accent'>
            <User className='mr-2 text-accent' /> About Me
          </h2>
          <p className='text-text'>
            I'm a creative and problem-solving software developer student from
            Piteå, Sweden, living with my wife and our two children. With a
            background in construction and industry, as well as a few years
            volunteering in Tanzania, I've also always had a deep interest in
            technology and IT. Now, I've taken the step to pursue what I'm truly
            passionate about, developing my skills in the tech world. <br />
            <br /> I consider myself a positive, curious individual who loves
            learning new things and grows with challenges. I'm excited about
            growing further and contributing wherever I can.
          </p>
        </section>

        {/* SKILLS */}
        <section className='p-6 mb-6 rounded-lg shadow-md bg-primary'>
          <h2 className='flex items-center mb-4 text-2xl font-semibold text-accent'>
            <Code className='mr-2 text-accent' /> Skills
          </h2>
          <ul className='grid grid-cols-2 gap-4'>
            {allSkills.map((skill, index) => (
              <li
                key={index}
                className='flex p-2 text-sm rounded bg-background text-text'
              >
                <div className='flex justify-center w-5 mx-2 shrink-0'>
                  <Skill skill={skill} />
                </div>
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* EDUCATION */}
        <section className='p-6 mb-6 rounded-lg shadow-md bg-primary'>
          <h2 className='flex items-center mb-4 text-2xl font-semibold text-accent'>
            <GraduationCap className='mr-2 text-accent' /> Education
          </h2>
          <ul className='space-y-4'>
            <li>
              <div className='flex justify-between'>
                <div>
                  <h3 className='font-semibold text-text'>
                    Fullstack Developer Program
                  </h3>
                  <p className='text-secondary'>Chas Academy, Ongoing</p>
                </div>
                <div className=''>
                  <p className='text-md text-text'>
                    Completed: {completedPoints}/{totalPoints}
                  </p>
                </div>
              </div>
              <ul className='mt-4'>
                {courses.map((course, index) => (
                  <li key={index} className='flex mb-2 group'>
                    {/* Status Icon */}
                    <div>{courseStatusIcon(course.status)}</div>
                    {/* Course details */}
                    <div className='flex-1 group-hover:brightness-150 '>
                      <span className='font-medium text-text'>
                        {course.title}
                      </span>
                      <p className='text-sm text-secondary '>
                        {course.startDate} - {course.endDate}
                      </p>
                    </div>
                    <span className='ml-auto text-secondary brightness-125 group-hover:brightness-200'>
                      {course.points} p
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </section>
      </main>

      <footer className='mt-8 text-center'>
        <h2 className='mb-4 text-2xl font-semibold text-accent'>
          Get in Touch
        </h2>
        <div className='flex justify-center space-x-4'>
          <a href='mailto:jerryroyolsson@gmail.com' className='text-text'>
            <Mail size={24} />
          </a>
          <a href='https://github.com/JerryChas/' className='text-text'>
            <Code2 size={24} />
          </a>
          <a
            href='https://www.linkedin.com/in/jerry-olsson-0b1a4228b/'
            className=' text-text'
          >
            <Linkedin size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
