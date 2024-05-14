import { ParsedProject } from '../../../interfaces';

const projects: ParsedProject[] = [
  {
    id: 7,
    title: 'Student City',
    introduction: 'A school project where we could pick something to design and make',
    status: 1,
    description: 'This project was for one of my subjects called Information Architecture. That means we had to make a design that adhered to a couple of principles for good hierarchy, filtering and sorting information. I designed and prototyped a total of 26 screens and elements for this project using the information I learned during the classes.',
    images: [''],
    learned: `I learned which elements can be used to structure which data and/or visual information to make for a better overall experience for the user.`,
    links: { github: '#', live: '#' },
    skills: ['Figma', 'Prototyping', 'Information Architecture', 'Human Computer Interaction'],
    categories: ['design', 'prototype', 'school', 'subject'],
    team: 'Individual'
  },
  {
    id: 6,
    title: 'Passion project (Re:note)',
    introduction: 'A school project where we could pick something to design and make',
    status: 1,
    description: 'In this project I worked with 3 other students who all had similair passions, in this case: music. Together we had 6 weeks the time to pick something physical with an added value (like sustainability), make it and build a fake brand around it. We chose to make a Midi Keyboard with the brandname: Re:note, we then spent the first 2 weeks planning and seperating the work between us four. I chose to build the website for the project and help out with the physical prototype where I could.',
    images: [''],
    learned: `Since I worked on the website I mostly polished my coding skills and design skills. During the project we got the idea of getting a model to show what our keyboard would look like and animating it like one of those Apple showcase websites. <br><br> This is usually done by animating images since thats a lot faster than the way we did it, but since we would only show it on my pc which is fast enough we chose to do it using Three.js for the model and GSAP to animate which I both didn't have a lot of experience with so I learned a lot from. <br><br> On the design side I had a challenge on my hands at first since I needed to cram a lot of info in there while keeping it uncluttered and conveying as much info visibly at once. I solved this by just splitting the page into two parts, one with the model and one with the information that you can scroll to. People seemed to like this, but most didn't know that they could scroll down so I put an indication and tested it again but some still missed it so I learned once again that you can NEVER make it too clear for users what to do.`,
    links: { github: 'https://github.com/vincpinas/CMD-passie-project', live: 'https://midifree.netlify.app/' },
    skills: ['TypeScript', 'SCSS', 'GSAP', 'Three.js'],
    categories: ['design', 'prototype', 'school', 'project'],
    team: 'Collaboration'
  },
  {
    id: 1,
    title: 'Manga.ly',
    introduction: 'Simple manga reading/sharing website for casuals and manga addicted.',
    status: 1,
    description: '',
    images: [''],
    learned: '',
    links: { github: '', live: '#' },
    skills: ['React', 'PHP'],
    categories: ['development', 'webapp', 'school'],
    team: 'Individual'
  },
  {
    id: 2,
    title: 'TS Chat',
    introduction: 'A web chat app to chat around with your friends',
    status: 1,
    description: 'In this project I made use of the lightweight Socket.io with React.js to make a simple discord like chat app website.',
    images: [''],
    learned: 'I learned how to work with simple backend JS in Node and setup a HTTP Server, I also learned how emit and receive events in Socket.io. I feel like I also bolstered my React knowledge',
    links: { github: 'https://github.com/vincpinas/TSChat', live: '#' },
    skills: ['Node', 'React', 'Socket.io', 'TypeScript', 'Express'],
    categories: ['development', 'chatapp', 'personal'],
    team: 'Individual'
  },
  {
    id: 3,
    title: 'Stedelijk Events',
    introduction: 'A event promotion site for Stedelijk Museum in Amsterdam',
    status: 1,
    description: 'This school project started out by choosing a team to work with and then research the client as a group, after a 2 week period of researching we started with development in Wordpress',
    images: [''],
    learned: 'In this project I learned the basics of working with wordpress and I learned how to design a website mobile first in CSS for making the site responsive.',
    links: { github: 'https://github.com/vincpinas/Stedelijk-Museum-BO', live: '#' },
    skills: ['PHP', 'SCSS', 'WordPress'],
    categories: ['development', 'prototype', 'school', 'work'],
    team: 'Collaboration'
  },
  {
    id: 4,
    title: 'Transformers',
    introduction: 'A safe community for young adults with mental health problems.',
    status: 1,
    images: [''],
    description: 'This is the first ever project I made for a real client, this is also the first mid-sized project I made with Laravel. The idea behind this project was to create a platform for young adults to reach out to each other and be able to give out advice, both anonymously and with a name.',
    learned: 'In this project I learned alot about Laravel. How to easily setup a login system with Breeze, how to play around with the Auth object, how to setup a nice view with Blade and the Eloquent basics like making a post through user input.',
    links: { github: 'https://github.com/vincpinas/transformers.Community/', live: 'https://vincent.student-sd.site/' },
    skills: ['Laravel', 'Blade', 'SQL', 'JavaScript'],
    categories: ['development', 'working prototype', 'online community', 'school'],
    team: 'Individual',
  },
  {
    id: 5,
    title: 'Kennishub',
    introduction: '',
    status: 1,
    description: 'In this project I teamed up with two other interns at my internship to create a working prototype for a online platform where students, teacher and experts in the field can freely share their knowledge.',
    images: [''],
    learned: 'In this project I learned how to work with professional level react and redux during my internship at UncInc. Further more I learned how to work with tickets and in a SCRUM environment.',
    links: { github: '#', live: '#' },
    skills: ['React', 'SCSS', 'Redux'],
    categories: ['development', 'working prototype', 'school'],
    team: 'Collaboration'
  },
]

export default projects;