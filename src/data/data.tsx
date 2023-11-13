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
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
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
  title: 'Jonathan Nguyen',
  description: 'Senior Full Stack developer with 9 yrs experience',
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
  name: `I'm Jon.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">go-getter</strong> who's all about hustling hard and making things
        happen. I've always been passionate about <strong className="text-stone-100">software engineering</strong>, and
        I've spent the past few years grinding away to build up my skills and experience in that field.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        When I'm not crushing it at work, you can usually find me training{' '}
        <strong className="text-stone-100">Aikido</strong>, plucking my{' '}
        <strong className="text-stone-100">banjo</strong>, or just chilling with my crew.
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
  description: `I am a battle-tested engineer with experience in building bullet-proof SaaS solutions.`,
  aboutItems: [
    {label: 'Location', text: 'Dublin, Ireland', Icon: MapIcon},
    {label: 'Age', text: '32', Icon: CalendarIcon},
    {label: 'Interests', text: 'Motorcycles, Aikido, Banjos', Icon: SparklesIcon},
    {label: 'Study', text: 'SUTD', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Fenergo', Icon: OfficeBuildingIcon},
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
        level: 9,
      },
      {
        name: 'Python',
        level: 7,
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
        level: 7,
      },
      {
        name: 'Flutter',
        level: 9,
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
  {
    title: 'Cocktail Flow',
    description: '',
    url: 'https://apps.apple.com/us/app/cocktail-flow/id486811622',
    image: porfolioImage7,
  },
  {
    title: 'WeCarCare React Native Theme',
    description: '',
    url: 'https://play.google.com/store/apps/details?id=com.wecarcarerntheme',
    image: porfolioImage8,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'July 2015',
    location: 'SUTD (Singapore University of Technology and Design)',
    title: 'Bachelor of Computer Science',
    content: <p></p>,
  },
  {
    date: 'April 2011',
    location: 'VNUHCM - University of Science',
    title: 'Diploma of Computer Systems Technology',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'August 2021 - Present',
    location: 'Fenergo',
    title: 'Senior Full Stack Developer',
    content: (
      <p>
        {/* - Implemented efficient & scalable front-end architectures, resulting in improved page load times and reduced
        bounce rates
        <br />
        - Optimized site performance by implementing industry best practices, resulting in increased user satisfaction &
        retention.
        <br />
        - Adopted new technologies, resulting in 30% increase in development efficiency & 20% improvement in product
        quality
        <br />- Redesigned project architecture by micro-frontend and mid-tier microservices in React.js and Node.js */}
      </p>
    ),
  },
  {
    date: 'September 2015 - July 2021',
    location: 'Capgemini',
    title: 'Full Stack Developer',
    content: (
      <p>
        {/* -Designed and developed 20+ front-end and back-end applications utilizing React.js, Node.js, and TypeScript.
        <br />
        -Developed 10+ new application features and distributed services that support high-scale applications.
        <br />
        -Successfully designed and implemented systems based on N-tier distributed architecture using Java/J2EE
        technologies such as, Core Java, Multithreading, Java Collections, Java I/O, JDBC, Hibernate, Struts, Spring
        Frameworks. */}
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
      name: 'Elon Musk',
      text: `Work like hell. Put in 100 hour weeks every week. If others are putting in 40 hours and you're putting in 100, even if you're doing the same thing, you will achieve in 4 months what it takes them a year.`,
      image:
        'https://thumbnail.imgbin.com/10/8/9/imgbin-elon-musk-tesla-motors-tesla-model-3-spacex-tesla-dJ5CpnLwMCeHCuT7A11U0JV38_t.jpg',
    },
    // {
    //   name: 'Jane Doe',
    //   text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    // },
    // {
    //   name: 'Someone else',
    //   text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    // },
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
      text: 'jdnguyen928@gmail.com',
      href: 'mailto:jdnguyen928@gmail.com',
    },
    {
      type: ContactType.Phone,
      text: '+353 (0)1 443 4747',
    },
    {
      type: ContactType.Location,
      text: 'Dublin, Ireland',
      href: 'https://www.google.com/maps/place/47+Fortfield+Dr,+Terenure,+Dublin+6W,+Co.+Dublin,+D6W+XW14,+Ireland/@53.3014104,-6.302647,17z',
    },
    {
      type: ContactType.LinkedIn,
      text: 'www.linkedin.com/in/jonathan-daniel-nguyen',
      href: 'https://linkedin.com/in/jonathan-daniel-nguyen',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/residentevil0803'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/jonathan-daniel-nguyen'},
];
