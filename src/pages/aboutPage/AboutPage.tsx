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
} from "lucide-react";

import { allSkills } from "../../components/AllSkills";
import Skill from "../../components/Skill";

const courseStatusIcon = (status: string) => {
  switch (status) {
    case "complete":
      return <CheckCircle className="w-6 h-6 mr-2 text-green-500 shrink-0" />;
    case "ongoing":
      return (
        <CircleDot className="w-6 h-6 mr-2 text-accent shrink-0 animate-pulse" />
      );
    case "upcoming":
      return <Circle className="w-6 h-6 mr-2 text-gray-500 shrink-0" />;
    default:
      break;
  }
};
const courses = [
  {
    title: "IT Tech and Operations",
    points: 10,
    startDate: "Sep 4, 2023",
    endDate: "Sep 17, 2023",
    status: "complete",
    description:
      "The course provides a comprehensive introduction to modern IT operations techniques and tools that are relevant in today's digital landscape.",
  },
  {
    title: "Web Development and Web Technology",
    points: 55,
    startDate: "Sep 18, 2023",
    endDate: "Dec 3, 2023",
    status: "complete",
    description:
      'The course "Web Development and Web Technology" offers a foundational overview of web development, focusing on essential technologies like HTML/CSS for structuring and styling, JavaScript for interactivity, backend technologies for server-side programming, and responsive design for multi-device compatibility.',
  },
  {
    title: "Advanced Frontend Development and TypeScript",
    points: 40,
    startDate: "Dec 4, 2023",
    endDate: "Feb 18, 2024",
    status: "complete",
    description:
      'The course "Advanced Frontend Development and TypeScript" delves into sophisticated web development techniques, focusing on TypeScript for enhanced JavaScript programming. It covers advanced concepts in frontend frameworks, state management, and modern web application architecture, equipping students with skills to build complex, scalable, and type-safe web applications.',
  },
  {
    title: "Project Methodology and Agile Methods",
    points: 15,
    startDate: "Jan 8, 2024",
    endDate: "Feb 18, 2024",
    status: "complete",
    description:
      'The course "Project Methodology and Agile Practices" focuses on project management techniques with an emphasis on agile methodologies. It explores frameworks such as Scrum and Kanban, providing students with the skills to manage projects efficiently and adapt to changing requirements in dynamic environments.',
  },
  {
    title: "UX, Usability and Accessibility",
    points: 15,
    startDate: "Feb 19, 2024",
    endDate: "Mar 10, 2024",
    status: "complete",
    description:
      'The course "UX, Usability, and Accessibility" introduces students to the principles of user experience design, focusing on creating intuitive and accessible digital products. It covers user research methods, interface design principles, usability testing techniques, and accessibility guidelines. Additionally, the course incorporates Figma as a key tool for designing and prototyping user-centered experiences, enabling students to create inclusive designs effectively.',
  },
  {
    title: "React",
    points: 45,
    startDate: "Mar 4, 2024",
    endDate: "May 12, 2024",
    status: "complete",
    description:
      'The "React" course offers an in-depth introduction to the React library, covering key concepts like components, state management, and hooks. It also includes advanced techniques for building efficient web applications, with hands-on projects to apply skills in real-world scenarios.',
  },
  {
    title: "Backend Development and APIs",
    points: 60,
    startDate: "May 13, 2024",
    endDate: "Sep 29, 2024",
    status: "complete",
    description:
      "This course deepens students' understanding and ability to develop backends for websites and applications. It enhances comprehension of JavaScript in backend development and explores data storage/database implementation, as well as how to expose data to the frontend through APIs. The course also expands students' knowledge of using TypeScript in backend development. Key tools and technologies covered include Node.js, Express, PostgreSQL, MongoDB, REST, and GraphQL, providing a comprehensive overview of modern backend development practices.",
  },
  {
    title: "AI in Fullstack Development",
    points: 15,
    startDate: "Sep 30, 2024",
    endDate: "Oct 20, 2024",
    status: "complete",
    description:
      "The course provides a comprehensive overview of AI, spanning from fundamental theory to practical application in programming and full stack development. It covers various aspects of AI, including machine learning, neural networks, and different AI models, offering students a thorough understanding of how AI can be integrated into and enhance technical solutions. The course also focuses on the key considerations full stack developers need to address when implementing AI in their projects.",
  },
  {
    title: "Cloud, CI/CD and Work Methodology",
    points: 20,
    startDate: "Oct 21, 2024",
    endDate: "Nov 17, 2024",
    status: "complete",
    description:
      'The course "Cloud, CI/CD, and Work Methodology" provides an overview of cloud computing and the CI/CD (Continuous Integration and Continuous Delivery) methodology. It covers essential concepts of cloud services and deployment strategies while teaching students to implement CI/CD pipelines for efficient software development. The course emphasizes practical applications, enabling students to integrate cloud solutions with CI/CD practices effectively.',
  },
  {
    title: "Vue.js",
    points: 25,
    startDate: "Nov 18, 2024",
    endDate: "Dec 22, 2024",
    status: "ongoing",
    description:
      'The course "Vue.js" provides students with the skills to develop applications using the Vue.js JavaScript framework. It covers essential concepts such as component creation, state management, and reactivity, enabling students to build dynamic user interfaces effectively. The course emphasizes practical application, ensuring students can implement their knowledge in real-world projects.',
  },
  {
    title: "Internship (LIA)",
    points: 110,
    startDate: "Dec 23, 2024",
    endDate: "May 25, 2025",
    status: "upcoming",
    description:
      "This course provides students with practical, job-preparatory skills through hands-on application of their knowledge in a professional setting. It aims to deepen students' understanding of the industry by engaging them in real-world projects. Upon completion, students will have practiced and developed the competencies gained throughout their education, specifically preparing them to work as JavaScript full stack developers. This immersive experience bridges the gap between theoretical knowledge and practical application in the field.",
  },
  {
    title: "Thesis Project",
    points: 20,
    startDate: "May 26, 2025",
    endDate: "Jun 22, 2025",
    status: "upcoming",
    description:
      'The "Examensarbete" (Degree Project) course allows students to showcase their skills in JavaScript full stack development by undertaking a comprehensive project assignment. This course involves planning, implementation, and delivery of a project, typically for an external company or organization. Students enhance their research abilities by exploring new technologies relevant to their project goals. Ultimately, the degree project serves as a bridge between academic learning and professional practice, preparing students for their future careers as full stack developers.',
  },
];

const totalPoints = courses.reduce((sum, course) => sum + course.points, 0);
const completedPoints = courses
  .filter((course) => course.status === "complete")
  .reduce((sum, course) => sum + course.points, 0);

const AboutPage = () => {
  return (
    <div className="max-w-4xl p-6 mx-auto bg-background text-text">
      {/* <div style={{ width: '100%', height: '500px' }}>
        <iframe
          src='/cv.pdf'
          width='100%'
          height='100%'
          title='CV - Jerry Olsson'
        ></iframe>
      </div> */}

      <header className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-bold text-accent">Jerry Olsson</h1>
        <p className="text-xl text-secondary">Software Developer Student</p>
      </header>

      <main>
        {/* ABOUT ME */}
        <section className="p-6 mb-6 rounded-lg shadow-md bg-primary">
          <h2 className="flex items-center mb-4 text-2xl font-semibold text-accent">
            <User className="mr-2 text-accent" /> About Me
          </h2>
          <p className="text-text">
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

          <div className="flex justify-end mt-2">
            <a
              className="italic animate-pulse md:hover:scale-105 md:hover:animate-none"
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check out my CV
            </a>
          </div>
        </section>

        {/* SKILLS */}
        <section className="p-6 mb-6 rounded-lg shadow-md bg-primary">
          <h2 className="flex items-center mb-4 text-2xl font-semibold text-accent">
            <Code className="mr-2 text-accent" /> Skills
          </h2>
          <ul className="grid grid-cols-2 gap-4">
            {allSkills.map((skill, index) => (
              <li
                key={index}
                className="flex p-2 text-sm rounded bg-background text-text"
              >
                <div className="flex justify-center w-5 mx-2 shrink-0">
                  <Skill skill={skill} />
                </div>
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* EDUCATION */}
        <section className="p-6 mb-6 rounded-lg shadow-md bg-primary">
          <h2 className="flex items-center mb-4 text-2xl font-semibold text-accent">
            <GraduationCap className="mr-2 text-accent" /> Education
          </h2>
          <ul className="space-y-4">
            <li>
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold text-text">
                    Fullstack Developer Program
                  </h3>
                  <p className="text-secondary">Chas Academy, Ongoing</p>
                </div>
                <div className="">
                  <p className="text-md text-text">
                    Completed: {completedPoints}/{totalPoints}
                  </p>
                </div>
              </div>
              <ul className="mt-4">
                {courses.map((course, index) => (
                  <li key={index} className="flex mb-2 group">
                    {/* Status Icon */}
                    <div>{courseStatusIcon(course.status)}</div>
                    {/* Course details */}
                    <div className="flex-1 group-hover:brightness-150 ">
                      <span className="font-medium text-text">
                        {course.title}
                      </span>
                      <p className="text-sm text-secondary ">
                        {course.startDate} - {course.endDate}
                      </p>
                    </div>
                    <span className="ml-auto text-secondary brightness-125 group-hover:brightness-200">
                      {course.points} p
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </section>
      </main>

      <footer className="mt-8 text-center">
        <h2 className="mb-4 text-2xl font-semibold text-accent">
          Get in Touch
        </h2>
        <div className="flex justify-center space-x-4">
          {/* Email */}
          <a
            href="mailto:jerryroyolsson@gmail.com"
            className="transition-colors duration-200 text-text hover:text-red-500"
          >
            <Mail size={24} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/JerryChas/"
            className="transition-colors duration-200 text-text hover:text-gray-700"
          >
            <Code2 size={24} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jerry-olsson-0b1a4228b/"
            className="transition-colors duration-200 text-text hover:text-blue-600"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
