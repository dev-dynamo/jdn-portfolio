import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Cole Cancellieri',
  description: 'Senior Full Stack developer with 8 yrs experience',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Cole Cancellieri.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Highly skilled and innovative <strong className="text-stone-100">software development professional</strong> with
        7 years of hands-on experience in web application development. Focused and efficient learner with practical
        expertise in mobile apps and automated testing.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>, plucking my{' '}
        <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a full stack developer. Proficiened in web development`,
  aboutItems: [
    {label: 'Location', text: 'Wake Forest, North Carolina', Icon: MapIcon},
    {label: 'Age', text: '30', Icon: CalendarIcon},
    {label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon},
    {label: 'Study', text: 'University of North Carolina At Chapel Hill', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'BookedBy', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Casper',
    description: '',
    url: 'https://casper-new.netlify.app/',
    image: porfolioImage1,
  },
  {
    title: 'Real Thread',
    description: '',
    url: 'https://realthread-new.netlify.app/',
    image: porfolioImage2,
  },
  {
    title: 'Sail Me',
    description: '',
    url: 'https://sailme.com/',
    image: porfolioImage3,
  },
  {
    title: 'Vitamins Mart',
    description: '',
    url: 'https://www.vitamart.ca/',
    image: porfolioImage4,
  },
  {
    title: 'Klingel',
    description: '',
    url: 'https://www.klingel.de/',
    image: porfolioImage5,
  },
  {
    title: 'QVC',
    description: '',
    url: 'https://www.qvc.de/',
    image: porfolioImage6,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'May 2015',
    location: 'University of North Carolina at Chapel Hill',
    title: 'Bachelor of Computer Science',
    content: <p>3.65 GPA</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'August 2020 - Present',
    location: 'BookedBy',
    title: 'Senior Full Stack Developer',
    content: (
      <p>
        -Developed dynamic and interactive websites that ensured high traffic, page views, and user experience,
        resulting in 40% increase in sales revenue.
        <br />
        -Managed server deployment to AWS ECS, EC2, and lambda functions for microservices.
        <br />
        -Oversaw the development and maintenance of new products, technical documentation and workflows.
        <br />
        -Designed, built and automated data flows to save 10+ hours of tedious work per week.
      </p>
    ),
  },
  {
    date: 'November 2018 - May 2020',
    location: 'FaceTouchUp',
    title: 'Full Stack Developer',
    content: (
      <p>
        -Designed and developed 20+ front-end and back-end applications utilizing React.js, Node.js, and TypeScript.
        <br />
        -Developed 10+ new application features and distributed services that support high-scale applications.
        <br />
        -Successfully designed and implemented systems based on N-tier distributed architecture using Java/J2EE
        technologies such as, Core Java, Multithreading, Java Collections, Java I/O, JDBC, Hibernate, Struts, Spring
        Frameworks.
      </p>
    ),
  },
  {
    date: 'June 2015 - September 2018',
    location: 'Soft Circles',
    title: 'Web Developer',
    content: (
      <p>
        -Validated customer interface requirements and assessed impact of needs on available systems.
        <br /> -Worked with UX/UI design teams to improve existing application and increase conversion rates by 20%.
        <br /> -Migrated an AngularJS codebase into React.
        <br /> -Followed Test Driven Development(TDD) using chai and mocha for unit testing, Enzyme for component-based
        testing and cypress for end to end testing.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to send me message.',
  items: [
    {
      type: ContactType.Email,
      text: 'colecancellieri0715@gmail.com',
      href: 'mailto:colecancellieri0715@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Wake Forest, North Carolina',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Github,
      text: 'WanderingPaladin',
      href: 'https://github.com/WanderingPaladin',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/WanderingPaladin'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
];
