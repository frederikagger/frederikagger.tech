import { Skill } from "../components/sections/Skills";

export const skills: Skill[] = [
  {
    name: 'JavaScript (ES6+)',
    link: 'https://www.javascript.com/',
    color: '#F1D71A',
    icon: 'javascript.svg',
    description:
      'JavaScript is my primary programming language. I write modern ES6+ syntax and I have a\
      strong foundation in JavaScript and I love JS with all of its quirks and weird parts.'
  },
  {
    name: 'TypeScript', color: '#3178c6', icon: '', description: 'I usually choose TypeScript over JavaScript. I think TypeScript is great at letting developers\
   express intent through code rather than comments' },
  {
    name: 'React',
    link: 'https://reactjs.org/',
    color: '#61dafb',
    icon: 'react.svg',
    description: 'I work with React at my current job. I have worked with other JavaScript libraries\
    and frameworks before, but React takes the prize for me. React has great TypeScript support, the React community is huge and its\
    developed and maintained by a very skilled team at Facebook.'
  },
  {
    name: 'Next',
    link: 'https://nextjs.org/',
    color: 'black',
    icon: 'next.svg',
    description: 'Next is an amazing framework that builds on top of React. Next is build for scale and it offers a great DX (developer experience).\
    If speed is essential I would choose Next over Create React App.'
  },
  {
    name: 'Vue',
    link: 'https://vuejs.org/',
    color: '#42b983',
    icon: 'vue.png',
    description: 'I have worked on a couple of Vue projects and I think Vue is great for smaller projects.'
  },
  { name: 'Git', color: '#f14e32', description: 'I use Git and Github for version control. Git is absolutely essential for any developer to master.' },
  { name: 'CSS', color: '#264de4', description: 'CSS is very hard to master. I have decent skills in CSS and I have used preprocessors like SCSS and PostCSS.' },
  { name: 'TailwindCSS', color: '#06B6D4', description: 'I love TailwindCSS for its rappid development of custom designs.' }
]
